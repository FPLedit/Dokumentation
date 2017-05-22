---
date: 2016-10-05T18:29:37+02:00
title: Bildfahrpläne
weight: 20
---


Das Bildfahrplanmodul wurde in Version 1.1.0 aus FPLedit entfernt, ein direktes Erstellen von Bildfahrplänen ist daher nicht mehr möglich. Bitte nutzen Sie stattdessen [jTrainGraph](http://kinzigtalbahn.bplaced.net/homepage/programme.html), dessen Dateiformat seit FPLedit v1.1.0 kompatibel mit FPLedit ist. jTrainGraph bietet mehr Einstellungsmöglichkeiten als FPledit und ist ebenso wie FPLedit auf mehreren Plattformen lauffähig. Dazu benötigt es aber ein auf dem System installiertes Java.

**WICHTIG**: [jTrainGraph](http://kinzigtalbahn.bplaced.net/homepage/programme.html) muss in der Version 2.02 oder höher auf dem PC vorhanden (d.h. installiert) sein, ältere Versionen sind nicht kompatibel! FPLedit stellt dabei nur den Starter zur Verfügung, jTrainGraph ist ein eigenständiges Programm.

Um jTrainGraph direkt aus FPLedit zu starten, benutzen Sie `jTrainGraph > jTrainGraph starten`. Dies speichert automatisch die aktuelle Datei und öffnet diese dann in jTrainGraph. Um die dort geänderten Daten wieder zurückzuübernehmen speichern Sie die Datei in jTrainGraph und schließen anschließend das Fenster. Die geänderten Daten werden wieder geladen.

**Achtung:** Die Datei wird am aktuellen Speicherort gespeichert, dabei werden alle Änderungen in die Datei geschrieben und können nicht mehr durch Schließen des Programms verworfen werden!

**WICHTIG**: Bevor diese Funktion genutzt werden kann, muss sie zuerst konfiguriert werden.

## Konfiguration
Die Einstellungen befinden sich unter `jTrainGraph > Einstellungen`. Der java-Pfad ist der Pfad zur Programmdatei von Java. Unter Windows sollte dieser normalerweise `javaw.exe` (bzw. `java` unter Linux) lauten. In manchen Fällen muss aber auch der absolute Pfad angegeben werden. Der Pfad zur jTrainGraph-Datei lautet bei Installation im gleichen Verzeichnis `jTrainGraph_203.jar` (203 durch die jeweils aktuelle Version ersetzen). Ebenfalls muss der Pfad hier angepasst werden, wenn die Installation nicht im gleichen Verzeichnis erfolgt ist.

Wenn die Konfiguration nicht korrekt erfolgt ist, warnt das Programm sowohl beim Speichern der Einstellungen als auch beim Versuch, jTrainGraph über das Menü zu starten.

{{% beta %}}
