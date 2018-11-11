---
date: 2016-03-08T21:07:13+01:00
title: API-Changelog
nooffline: true
---

In der Programmierschnittselle ergeben sich in der Versionen immer wieder Änderungen.

### Version 2.0.0
* **Diese Liste zeigt nur die wichtigsten Änderungen und ist unvollständig!**
* Viele größere Änderungen, auch in der Programmierschnittselle und im Dateiformat.
  * Umbau auf routenbasiertes System an Stelle der alten linearen Strecke (v.a. neue Klasse `Route`)
  * Weitere Möglichkeiten der UI-Erweiterung mit Schnittstellen
  * Bessere Implementierung des `FileState`s
  * Unterscheidung von `TimetableType`s und `TimetableVersion`s
* Erweiterungen müssen i.d.R. neu entwickelt werden oder stark angepasst werden.
* Umbau auf das UI-Framewort Eto. Die mit FPLedit ausgelieferten Eto-Binaries unterscheiden sich von den offiziellen Releases, diese sollten daher nicht verwendet werden!

### 1.5.4
* Neue `Timetable`-Methoden zur Kompatibilität mit jTrainGraph 3: `AddTransition`, `SetTransition`, `GetTransition`, `RemoveTransition`
* Neue Klassen: `Transition`, `PositionCollection`

### Versionen 1.5.1, 1.5.2, 1.5.3
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
