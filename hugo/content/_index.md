---
date: 2016-03-08T21:07:13+01:00
title: Start
type: index
weight: 1
---

FPLedit ist ein Programm zum Erstellen von Fahrplänen. Dies ist vorallem für betriebsorientierte Modellbahner interessant, die auf ihrer Anlage einen vorbildgetreun Betrieb durchführen wollen und dafür ans Original angelehnte Fahrplanunterlagen verwenden wollen. Die Vorlagen dafür werden in der Regel bei der DB bzw. DR gesucht.

## Features
- [Erstellen und Bearbeiten](/fahrplaene-bearbeiten/) von Strecken und Fahrplänen.

- Generieren von unterschiedlichen Fahrplantypen, z.B. Buchfahrplänen oder Aushangfahrplänen (z.Zt. in Entwicklung) und anschließender Export in verschiedene Dateiformate (z.B. Buchfahrplan als HTML).

- Möglichkeit der Erweiterung durch Extensions, geschrieben in C#. *Dokumentation dazu folgt*

- Benutzt das Dateiformat des bekannten Bildfahrplanprogramms [jTrainGraph](http://kinzigtalbahn.bplaced.net/homepage/programme.html). Dateien die mit einer jTrainGraph-Programmversion größer oder gleich 2.02 erstellt worden sind, können mit FPLedit geöffnet werden (und anschließend auch wieder mit jTrainGraph). Das Generieren von Bildfahrplänen ist somit möglich.

## Systemvoraussetzungen
FPledit läuft auf allen Systemen, auf denen entweder Microsoft .NET 4.0 (vorinstalliert ab Windows Vista) oder ein aktuelles [Mono](http://www.mono-project.com/) installiert ist. Damit sollte dieses Programm auf Windows, Linux und macOS (ungetestet) laufen. Auf den nicht-Windows-Systemen sieht aber die Benutzeroberfläche arg gewöhnungsbedürftig aus.

{{% beta %}}
