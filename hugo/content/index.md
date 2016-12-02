---
date: 2016-03-08T21:07:13+01:00
title: FPLedit
type: index
weight: 0
---

Mit dem Programm FPledit kann man Fahrpläne bearbeiten und in verschiedenen Formaten wieder exportieren. Derzeit sind Bild- und Buchfahrpläne möglich.

## Systemvoraussetzungen
FPledit läuft auf allen Systemen auf denen entweder Microsoft .NET (vorinstalliert ab Windows Vista) oder [Mono](http://www.mono-project.com/) installiert ist. Damit sollte dieses Programm auf Windows, Linux und macOS (ungetestet) laufen.

## Installation
Zur Installation einfach die ZIP-Datei an eine beliebige Stelle entpacken und die Datei `FPledit.exe` mit Doppelklick starten. Zur richtigen Darstellung der Buchfahrpläne wird auch noch die systemweit zu installierende Schrift [DIN 1451 Mittelschrift alt](http://www.peter-wiegel.de/alteDin1451.html) benötigt.

## Features
- [Erstellen und Bearbeiten]({{< relref "fahrplaene-bearbeiten/index.md" >}}) von Strecken und Fahrplänen.

- Generieren von unterschiedlichen Fahrplantypen, z.B. Buchfahrplänen oder [Bildfahrplänen]({{< relref "bildfahrplaene/index.md" >}}) und anschließender Export in verschiedene Dateiformate (z.B. Buchfahrplan als HTML oder Bildfahrplan als Grafik).

- Möglichkeit der Erweiterung durch Extensions, geschrieben in C#. *Dokumentation dazu folgt*

- Import von bestehenden [jTrainGraph](http://kinzigtalbahn.bplaced.net/homepage/programme.html)-Fahrplänen. Aber auch Fahrplanbearbeitung in jTrainGraph und generieren der Ausgabedateien mit FPledit ist möglich.

{{< note title="Hinweis" >}}
Dieses Programm befindet sich unter aktiver Entwicklung und ist in einer Art beta-Phase. Daher können Fehler bei der Benutzung des Programms auftreten. Sie sollten daher ab und zu Sicherheitskopien der Fahrplan-Dateien anlegen, um Datenverlust vorzubeugen.
{{< /note >}}
