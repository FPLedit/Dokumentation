---
date: 2016-03-08T21:07:13+01:00
title: API-Changelog
nooffline: true
---

In der Programmierschnittselle ergeben sich in der Versionen immer wieder Änderungen.

### Version 2.2.0
* **Diese Liste zeigt nur die wichtigsten Änderungen und ist unvollständig!**
* Viele Refactorings und Umbenennungen erfordern eine Änderung allen Codes, der bisher mit FPLedit interopabel war.
* Es muss JS als Template-Sprache verwendet werden; alte C#-Templates sind nicht mehr kompatibel.
*

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
