$ErrorActionPreference = "Stop"

$registryPath = Join-Path (Split-Path $PSScriptRoot -Parent) "design-system\components.js"
$utf8 = [System.Text.UTF8Encoding]::new($false)
$registry = [System.IO.File]::ReadAllText($registryPath, [System.Text.Encoding]::UTF8)
$iframeHtml = '<iframe class="exact-source-frame" src="./bbyspine_memo_acrylic_shelf_detailed.html" title="bbyspine.memo original prototype"></iframe>'

foreach ($workspaceId in @("ws-bookshelf", "ws-reader")) {
  $start = $registry.IndexOf("id: `"$workspaceId`"")
  if ($start -lt 0) { throw "Workspace $workspaceId was not found." }
  $end = $registry.IndexOf("`n});", $start)
  if ($end -lt 0) { throw "Workspace $workspaceId block is incomplete." }
  $segment = $registry.Substring($start, $end - $start)
  $replacement = 'html: `' + $iframeHtml + '`'
  $segment = [regex]::Replace($segment, '(?s)html: `.*?`', $replacement)
  $registry = $registry.Substring(0, $start) + $segment + $registry.Substring($end)
}

if ($registry -notmatch 'exact-source-frame') { throw "Exact source iframe was not registered." }
[System.IO.File]::WriteAllText($registryPath, $registry, $utf8)
Write-Output "Registered the exact source prototype for both workspaces."
