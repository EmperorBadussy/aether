Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = Replace(WScript.ScriptFullName, "\Launch.vbs", "")
WshShell.Run "cmd /c npx electron .", 0, False
