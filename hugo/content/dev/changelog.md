---
date: 2016-03-08T21:07:13+01:00
title: API-Changelog
nooffline: true
---

In der Programmierschnittselle ergeben sich in der Versionen immer wieder Änderungen.

### Version 2.1.0
* Viele neue APIs und Hilfsklassen:
    * `FPLedit.Shared.UI`: neue Controls und DataBinding-Hilfsklassen
        * `FontCollection`
        * `DropDownBind`, `ExtBind`
        * `Validators.TimeValidator`
        * `RoutesDropDown`
        * `FForm`/`FDialog` mit globalen Init-Hooks
    * `FPLedit.Shared.Rendering`: Abstraktionsschicht über einige häufige Aufgaben in `Eto.Drawing` und `System.Drawing`
        * `MFont`, `MColor`
        * `ColorCollection`, `ColorFormatter`
        * `FontCollection`
        * `RenderBtn`: Vereinfachte Schaltflächen für reine `Eto.Drawing`-Kontexte
* Neue Erweiterungsschnittstellen:
    * `ITimetableCheck`: Checks werden bei jeder Statusänderung aufgerufen und werden in einer eigenen Benutzerschnittselle angezeigt.
    * `ITimetableInitAction`: Wird nach dem Laden eines Fahrplans aufgerufen.
    * `ITimetableTypeChangeAction`: Ermöglicht Reaktionen auf das Umwandeln von Netzwerk- in lineare Fahrpläne und umgekehrt.
* Anpassung an jTrainGraph 3.1 und sonstige Dateiformatsänderungen:
    * **`ArrDeps`** werden nun als Entity gehandhabt. Bestehender Code muss angepasst werden
    * Neue Entities: `Track`, `ShuntMove`
    * Neue `ObservableChildrenCollection` und `RouteValueCollection`
    * Fahrttage sind nun eine eigene `Days`-Struktur. Der `DaysHelper` wurde entfernt
    * Neue `PathData` für einfachere Auswertung von Netzwerk-Fahrplänen
* Weitere Änderungen (auszugsweise):
    * `IInfo.BackupTimetable()` gibt ein Handle zurück, dass an `IInfo.RestoreTimetable(object handle)` übergeben werden muss.


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
