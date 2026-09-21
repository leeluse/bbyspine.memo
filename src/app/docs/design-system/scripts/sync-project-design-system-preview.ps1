$ErrorActionPreference = "Stop"

$repoRoot = Split-Path $PSScriptRoot -Parent
$designSystemDir = Join-Path $repoRoot "design-system"
$registryPath = Join-Path $designSystemDir "components.js"
$previewPath = Join-Path $designSystemDir "design-system-steward-preview.html"
$shellPath = Join-Path $repoRoot ".agents\skills\design-system-steward\assets\design-system-steward-preview.html"
$utf8 = [System.Text.UTF8Encoding]::new($false)

$registry = [System.IO.File]::ReadAllText($registryPath, [System.Text.Encoding]::UTF8)
if ($registry -match '</script') {
  throw "components.js contains a closing script tag and cannot be embedded safely."
}

if (Test-Path $previewPath) {
  $preview = [System.IO.File]::ReadAllText($previewPath, [System.Text.Encoding]::UTF8)
  $pattern = '(?s)/\* BEGIN: embedded components\.js \*/.*?/\* END: embedded components\.js \*/'
  if (-not [regex]::IsMatch($preview, $pattern)) {
    throw "Existing preview does not contain registry synchronization markers."
  }
  $replacement = "/* BEGIN: embedded components.js */`n$registry`n/* END: embedded components.js */"
  $preview = [regex]::Replace($preview, $pattern, $replacement, 1)
} else {
  $shell = [System.IO.File]::ReadAllText($shellPath, [System.Text.Encoding]::UTF8)
  $registryHeader = $shell.LastIndexOf("/* ============================================================")
  if ($registryHeader -lt 0) {
    throw "Could not locate the bundled registry inside the preview shell."
  }
  $shellPrefix = $shell.Substring(0, $registryHeader)
  $preview = "$shellPrefix/* BEGIN: embedded components.js */`n$registry`n/* END: embedded components.js */`n  </script>`n</body>`n</html>`n"
  $preview = $preview.Replace("Design System Steward", "bbyspine.memo Design System")
}

[System.IO.File]::WriteAllText($previewPath, $preview, $utf8)
Write-Output "Synchronized project design-system preview."
