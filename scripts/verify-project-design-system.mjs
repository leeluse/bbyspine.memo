import { readFile } from "node:fs/promises";
import vm from "node:vm";

const registryPath = new URL("../design-system/components.js", import.meta.url);
const previewPath = new URL(
  "../design-system/design-system-steward-preview.html",
  import.meta.url,
);

const registry = await readFile(registryPath, "utf8");
const preview = await readFile(previewPath, "utf8");
const items = [];

vm.runInNewContext(registry, {
  Archive: { add: (item) => items.push(item) },
});

const workspaces = items.filter((item) => item.type === "workspace");
const components = items.filter((item) => item.type !== "workspace");

if (workspaces.length !== 2 || components.length !== 11) {
  throw new Error(
    `Expected 2 workspaces and 11 components, got ${workspaces.length} and ${components.length}.`,
  );
}

for (const workspace of workspaces) {
  if (!workspace.route || !workspace.spec?.size?.frame) {
    throw new Error(`${workspace.id} is missing route or frame metadata.`);
  }

  if (!workspace.uses?.every((id) => components.some((item) => item.id === id))) {
    throw new Error(`${workspace.id} references an unregistered component.`);
  }

  if (!workspace.phases?.every((phase) => phase.id && phase.name && phase.route)) {
    throw new Error(`${workspace.id} contains an invalid phase.`);
  }
}

if (preview.includes('<script src="./components.js"></script>')) {
  throw new Error("Preview still depends on an external registry.");
}

const embedded = preview.match(
  /\/\* BEGIN: embedded components\.js \*\/\r?\n([\s\S]*?)\r?\n\/\* END: embedded components\.js \*\//,
);

if (!embedded || embedded[1] !== registry) {
  throw new Error("Standalone preview registry is missing or out of sync.");
}

console.log(
  `Project design system verified: ${workspaces.length} workspaces, ${components.length} components, standalone preview.`,
);
