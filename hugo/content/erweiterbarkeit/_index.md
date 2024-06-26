---
title: Erweiterbarkeit
weight: 3
---

## Erweiterungen
Eines der Grundkonzepte von FPLedit ist die Erweiterbarkeit. Erweiterungen fügen Menüs und eigene Dialoge hinzu und stellen zusätzliche Funktionalität bereit. Die Erweiterungen liegen als DLL-Datei im Programmverzeichnis. Nahezu alle Programmfunktionen werden über Erweiterungen bereitgestellt. Mit dem Programm werden schon einige Erweiterungen, die standardmäßig alle aktiviert sind, mit ausgeliefert:

* Aushangfahrplan-Modul (`FPLedit.Aushangfahrplan.dll`)
* Buchfahrplan-Modul (`FPLedit.Buchfahrplan.dll`)
* Modul für Tabellenfahrpläne (`FPLedit.Kursbuch.dll`)
* Starter für jTrainGraph zur Bildfahrplanerstellung (`FPLedit.jTrainGraphStarter.dll`)
* Dynamische Bildfahrplanvorschau (`FPLedit.Bildfahrplan.dll`)
* GTFS-Export (`FPLedit.GTFS.dll`) – standardmäßig nicht aktiviert!

Erweiterungen können über über das Programm verwaltet werden (`Hilfe > Einstellungen > Erweiterungen`). In diesem Dialog können Erweiterungen deaktiviert (`<`) oder aktiviert (`>`) werden. [Eigene Erweiterungen](/dev/) können in C# programmiert werden.

![Verwaltung der vorhandenen FPLedit-Erweiterungen](erweiterungsfenster.png)

## Vorlagen
Zur Generierung der Fahrplan-Ausgabedateien kommen Vorlagen zum Einsatz. Vorlagen sind Textdateien mit der Endung `.fpltmpl`, die im vorgegebenen Format mit einem Texteditor von jedem Benutzer selbst erstellt werden können. Diese liegen im Ordner `templates/` im Programmverzeichnis.

Die Verwaltung von Vorlagen ist unter `Hilfe > Einstellungen > Vorlagen` möglich. Fest eingebaute Vorlagen können nicht bearbeitet oder gelöscht werden, dafür können diese als bearbeitbare Kopie gespeichert werden.

**Achtung:** Vorlagen sind ausführbarer Programmcode. Möglicherweise können Vorlagen, die nicht mit FPLedit ausgeliefert wurden und beispielsweise von einer anderen Website heruntergeladen werden, ein Sicherheitsrisiko für ihren Computer darstellen.

![Verwaltung der vorhandenen Fahrplan-Vorlagen](vorlagenfenster.png)

## Sprachdateien
Unter `Hilfe > Einstellungen > Sprache` kann die Sprache der Benutzeroberfläche von FPLedit eingestellt werden.

![Auswahl der Sprache der Benutzeroberfläche](sprachfenster.png)

## Dateiformatversionen

Es stehen mehrere Dateiformatversionen sowohl für lineare als auch Netzwerk-Fahrpläne zur Verfügung. Diese können in den Einstellungen augewählt weden und werden bei jedem Programmupdate auf die jeweils aktuelle Version gesetzt. Normalerweise ist die Auswahl der aktuellsten Version die richtige Entscheidung, da damit immer die meisten und neuesten Features bereitstehen. Die Unterstützung älterer Dateiformatversionen wird mit neuen Programmversionen auch immer wieder entfernt.

![Auswahl der Standard-Dateiformatversionen](dateiformatfenster.png)

{{% beta %}}
