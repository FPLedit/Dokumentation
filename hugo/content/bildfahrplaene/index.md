---
date: 2016-10-05T18:29:37+02:00
title: Bildfahrpläne
weight: 20
---


Das Bildfahrplanmodul wurde in Version 1.1.0 aus FPLedit entfernt. Bitte nutzen Sie stattdessen [jTrainGraph](http://kinzigtalbahn.bplaced.net/homepage/programme.html), dessen Dateiformat mittlerweile kompatibel mit FPLedit ist. jTrainGraph bietet mehr Einstellungsmöglichkeiten als FPledit und ist ebenso wie FPLedit auf mehreren Plattformen lauffähig. Dazu beötigt es aber ein auf dem System installiertes Java.

**WICHTIG**: jTrainGraph muss in der Version 2.02 oder höher vorhanden sein, ältere Versionen sind nicht kompatibel!

Um jTrainGraph direkt aus FPLedit zu starten, benutzen Sie `jTrainGraph > jTrainGraph starten`. Dies speichert automatisch die aktuelle Datei und öffnet diese dann in jTrainGraph. Um die dort geänderten Daten wieder zurückzuübernehmen speichern Sie die Datei in jTrainGraph und schließen anschließend das Fenster. Die geänderten Daten werden wieder geladen.

**WICHTIG**: Bevor diese Funktion genutzt werden kann, muss sie zuerst konfiguriert werden.

## Konfiguration
 Die Einstellungen befinden sich unter `jTrainGraph > Einstellungen`. Der java-Pfad ist der Pfad zur Programmdatei von Java. Unter Windows sollte dieser normalerweise `javaw.exe` (bzw. `java` unter Linux) lauten. In manchen Fällen muss aber auch der absolute Pfad angegeben werden. Der Pfad zur jTrainGraph-Datei lautet bei Installation im gleichen Verzeichnis `jTrainGraph_202.jar` (202 durch die jeweils aktuelle Version ersetzen). Ebenfalls muss der Pfad hier angepasst werden, wenn die Installation nicht im gleichen Verzeichnis erfolgt ist.

 Wenn die Konfiguration nicht korrekt erfolgt ist, warnt das Programm sowohl beim Speichern der Einstellungen als auch beim Versuch, jTrainGraph über das Menü zu starten.

{{< note title="Hinweis" >}}
Dieses Programm befindet sich unter aktiver Entwicklung und ist in einer Art beta-Phase. Daher können Fehler bei der Benutzung des Programms auftreten. Sie sollten daher ab und zu Sicherheitskopien der Fahrplan-Dateien anlegen, um Datenverlust vorzubeugen.
{{< /note >}}
