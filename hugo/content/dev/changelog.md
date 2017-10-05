---
date: 2016-03-08T21:07:13+01:00
title: API-Changelog
---

In der Programmierschnittselle ergeben sich in der Versionen immer wieder Änderungen.

### Version 1.5.1
* keine Änderungen

### Version 1.5.0
* Erweiterbarkeit der Benutzeroberfläche:
  * Neue Schnittstellen eingeführt.
* Rückgängig-Funktion:
  * Neue Methode `info.StageUndoStep()`. Diese **muss** vor einer Aktion, die mit `info.SetUnsaved()` abgeschlossen wird, zwingend aufgerufen werden!
  * Neue Methode `info.AddUndoStep()`. Dise wird automatisch mit `info.SetUnsaved()` mit aufgerufen.
  * Neue Methode `info.Undo()`.
* Hinzufügen eines neuen Parameters `minVer` zum `Plugin`-Attribut: `[Plugin("TestPlugin", "1.5.0", Author = "Autorenname")]]`

### Version 1.4.0
* Erste Veröffentlichung der API
