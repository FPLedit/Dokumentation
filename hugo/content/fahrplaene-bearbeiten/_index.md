---
date: 2016-10-05T18:29:37+02:00
title: Fahrpläne bearbeiten
weight: 10
---

FPLedit unterstützt zwei unterschiedliche, miteinander aber nur beschränkt kompatible Fahrplantypen. Diese sind jeweils für unterschiedliche Bereiche geeignet:

* **Lineare Fahrpläne** sind für einfache Modelleisenbahnanlagen mit nur einer unverzweigten Strecke geeignet. Sie haben eine bessere Kompatibilität mit *jTrainGraph* als Netzwerk-Fahrpläne.
* **Netzwerk-Fahrpläne** sind beispielsweise für Modultreffen oder Modelleisenbahnanlagen mit einem verzweigten Streckennetz geeignet. Lineare Fahrpläne können diese Situationen nicht darstellen. Die Kompatibilität mit jTrainGraph ist nicht so gut, vieles kann nur noch in FPLedit bearbeitet werden.

Im Menüpunkt `Datei > Neu` kann ausgewählt werden, ob ein linearer oder ein Netzwerk-Fahrplan angelegt werden soll. Ein späteres Wechseln auf einen anderen Typ ist nur bedingt möglich. Daher stellt sich bei jedem neuen Fahrplan die Frage, welcher Typ gewählt werden soll.

**Hinweis**: Alle mit einer FPLedit Version kleiner 2.0.0 oder mit jTrainGraph erstellten Fahrplandateien sind lineare Fahrpläne!

Das Bearbeiten von linearen und Netzwerk-Fahrplänen unterscheidet sich teilweise grundlegend, daher ist den beiden Typen jeweils eine eigene Unterseite gewidmet:

* [Netzwerk-Fahrpläne](network/)
* [Lineare Fahrpläne](linear/)

## Konvertieren von Fahrplänen

Mit `Datei > Konvertieren` (<kbd>Strg</kbd>+<kbd>K</kbd>) kann unter bestimmten Umständen der Fahrplantyp geändert werden. Ein linearer Fahrplan kann immer in einen Netzwerk-Fahrplan umgewandelt werden. In der Gegenrichtung ist dies nur möglich, wenn im Netzwerk nur eine Strecke angelegt wurde.
