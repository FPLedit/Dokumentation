---
date: 2016-10-05T18:29:37+02:00
title: Einführung
weight: 3
---

Diese Dokumentation erläutert die ersten Schritte und Grundfunktionen des Programms.

## Hauptfenster
Nach dem Programmstart erscheint zuerst das Haptfenster. Über die verschiedenen Menüs lassen sich die Dialoge der [Erweiterungen](#erweiterungen) aufrufen. Diese werden in den entsprechenden Kapiteln der Dokumentation näher erläutert. Im unteren Bereich des Hauptfensters werden Meldungen protokolliert, z.B. Fehler beim Öffnen oder Speichern von Dateien.

Unter dem Menü ist das Streckennetz-Bearbeitungstool angeordnet. Mit ihm kann das dem Fahrplan zu Grunde liegende Streckennetz erstellt und bearbeitet werden. Zum Bearbeiten des Streckennetzes siehe [Fahrpläne Bearbeiten](/fahrplaene-bearbeiten/).

![Hauptfenster nach einigen Aktionen](hauptfenster.png)

Der Menüpunkt `Bearbeiten > Rückgängig` können fast alle zuletzt angewendete Aktionen rückgängig gemacht werden.

## Erweiterungen
Eines der Grundkonzepte von FPLedit ist die Erweiterbarkeit. Erweiterungen fügen Menüs und eigene Dialoge hinzu und stellen zusätzliche Funktionalität bereit. Die Erweiterungen liegen als DLL-Datei im Programmverzeichnis. Nahezu alle Programmfunktionen werden über Erweiterungen bereitgestellt. Mit dem Programm werden schon einige Erweiterungen, die standardmäßig alle aktiviert sind, mitausgeliefert:

* Aushangfahrplan-Modul (`FPLedit.Aushangfahrplan.dll`)
* Buchfahrplan-Modul (`FPLedit.Buchfahrplan.dll`)
* Modul für Tabellenfahrpläne (`FPLedit.Kursbuch.dll`)
* Starter für jTrainGraph zur Bildfahrplanerstellung (`FPLedit.jTrainGraphStarter.dll`)
* Die Datei `FPLedit.Shared.dll` ist aber keine Erweiterung sondern Bestandteil des Hauptprogramms!

Erweiterungen können über über das Programm verwaltet werden (`Hilfe > Erweiterungen`). In diesem Dialog können Erweiterungen deaktiviert (`<`) oder aktiviert (`>`) werden. [Eigene Erweiterungen](/dev/) können in C# programmiert werden.

![Erweiterungsfenster](erweiterungsfenster.png)

## Vorlagen
Zur Generierung der Fahrplan-Ausgabedateien kommen Vorlagen zum Einsatz. Vorlagen sind Textdateien mit der Endung `.fpltmpl`, die im vorgegebenen Format mit einem Texteditor von jedem Benutzer selbst erstellt werden können. Diese liegen im Ordner `templates/` im Programmverzeichnis.

Die Verwaltung von Vorlagen ist unter `Hilfe > Vorlagen` möglich. Fest eingebaute Vorlagen können nicht bearbeitet oder gelöscht werden, dafür können diese als bearbeitbare Kopie gespeichert werden.

![Vorlagenfenster](vorlagenfenster.png)

## Tastenkombinationen

Einige häufig verwendete Funktionen des Hauptprogramms lassen sich über Tastenkombinationen im Hauptfenster aufrufen:

* <kbd>Strg</kbd>+<kbd>S</kbd>: Datei am aktuellen Ort speichern
* <kbd>Strg</kbd>+<kbd>O</kbd>: Datei öffnen
* <kbd>Strg</kbd>+<kbd>E</kbd>: Aktuelle Datei exportieren
* <kbd>Strg</kbd>+<kbd>Z</kbd>: Die letzte Aktion rückgängig machen

{{% beta %}}
