---
date: 2016-10-05T18:29:37+02:00
title: Einführung
weight: 3
---

Diese Dokumentation erläutert die ersten Schritte und Grundfunktionen des Programms.

## Installation
Vor der Installation muss unbedingt die heruntergeladene ZIP-Datei für Windows entsperrt werden. Dazu `Rechtsklick > Eigenschaften` und dort unten den Haken bei `Zulassen` setzen. Anschließend kann man die ZIP-Datei an einen beliebigen Ort entpacken und die Datei `FPLedit.exe` mit einem Doppelklick starten. Dieser Ordner kann auch nachträglich noch verschoeben werden.    
Zur richtigen Darstellung der Buchfahrpläne wird auch noch die systemweit zu installierende Schrift [DIN 1451 Mittelschrift alt](http://www.peter-wiegel.de/alteDin1451.html) von Peter Wiegel benötigt. Die Schriftart der Fahrpläne kann aber auch in eine andere umgeändert werden.    
Zum Generieren der Bildfahrpläne wird zusätzlich das Programm [jTrainGraph](http://kinzigtalbahn.bplaced.net/homepage/programme.html) benötigt, die Installation kann ins gleiche Verzeichnis erfolgen.

Das gleiche Verfahren wird auch bei einem Update angewandt. Informationen zur neuesten Version erhält man im Programm unter `Hilfe > Info > Auf neue Version prüfen` oder seit Version 1.2.0 durch eine Benachrichtigung beim Programmstart. Diese lässt sich ebenfalls unter `Hilfe > Info` dekativieren.

Fahrplandateien (`.fpl`) können mit FPLedit bei Doppelklick geöffnet werden, indem sie per Rechtsmausklick auf die Datei in den `Eigenschaften` auf die Schaltfläche `Ändern` klicken und im anschließenden Dialog die ausführbare Datei von FPLedit (`FPLedit.exe`) auswählen.

## Hauptfenster
Nach dem Programmstart erscheint zuerst das Haptfenster. Wenn im Menü nur der Menüpunkt `Datei` angezeigt wird, wurde die ZIP-Datei nicht wie oben beschrieben entblockt. Über die verschiedenen Menüs lassen sich die Dialoge der [Erweiterungen](#erweiterungen) aufrufen. Diese werden in den entsprechenden Kapiteln der Dokumentation näher erläutert. Im unteren Bereich des Hauptfensters werden Meldungen protokolliert, z.B. Fehler beim Öffnen oder Speichern von Dateien:

![Hauptfenster nach einigen Aktionen](hauptfenster.png)

Allgemein bieten (fast) alle Dialoge zwei Schaltflächen an, über die der Dialog geschlossen werde kann. Mit `Abbrechen` werden die Änderungen verworfen und mit `Schließen` oder `OK` werden sie übernommen, so dass sie beim nächsten Speichern in die Datei geschrieben werden können.

## Erweiterungen
Eines der Grundkonzepte von FPLedit ist die Erweiterbarkeit. Erweiterungen fügen Menüs und eigene Dialoge hinzu und stellen zusätzliche Funktionalität bereit. Die Erweiterungen liegen als DLL-Datei im Programmverzeichnis. Nahezu alle Programmfunktionen werden über Erweiterungen bereitgestellt. Mit dem Programm werden schon einige Erweiterungen, die standardmäßig alle aktiviert sind, mitausgeliefert:

* Fahrplan-Editoren (`FPLedit.AStandard.dll`)
* Exporter für Buchfahrpläne (`FPLedit.BuchfahrplanExport.dll`)
* Importer für alte BFPL-Dateien (`FPLedit.BfplImport.dll`)
* Starter für jTrainGraph zur Bildfahrplanerstellung (`FPLedit.jTrainGraphStarter`)
* Die Datei `FPLedit.Shared.dll` ist aber keine Erweiterung sondern Bestandteil des Hauptprogramms!

Erweiterungen können über über das Programm verwaltet werden (`Hilfe > Erweiterungen`). In diesem Dialog können Erweiterungen deaktiviert (`<`) oder aktiviert (`>`) werden. Eigene Erweiterungen können in C# programmiert werden. *Dokumentation dazu folgt*

![Erweiterungsfenster](erweiterungsfenster.png)

## Tastenkombinationen

Einige häufig verwendete Funktionen des Hauptprogramms lassen sich über Tastenkombinationen im Hauptfenster aufrufen:

* <kbd>Strg</kbd>+<kbd>S</kbd>: Datei am aktuellen Ort speichern
* <kbd>Strg</kbd>+<kbd>O</kbd>: Datei öffnen
* <kbd>Strg</kbd>+<kbd>E</kbd>: Aktuelle Datei exportieren

{{% beta %}}
