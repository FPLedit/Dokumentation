---
date: 2016-10-05T18:29:37+02:00
title: Bildfahrpläne mit jTrainGraph
weight: 20
---

Das alte Bildfahrplanmodul wurde in Version 1.1.0 aus FPLedit entfernt, ein direktes Erstellen von Bildfahrplänen ist daher nicht mehr möglich. Bitte nutzen Sie stattdessen [jTrainGraph](https://jtraingraph.de/), dessen Dateiformat seit FPLedit v1.1.0 kompatibel mit FPLedit ist. jTrainGraph bietet mehr Einstellungsmöglichkeiten als FPLedit und ist ebenso wie FPLedit auf mehreren Plattformen lauffähig. Dazu benötigt es aber ein auf dem System installiertes Java.

**WICHTIG**: [jTrainGraph](https://jtraingraph.de/) muss in in einer kompatiblen Version auf dem PC vorhanden (d.h. installiert) sein, andere Versionen sind nicht kompatibel! FPLedit stellt dabei nur den Starter zur Verfügung, jTrainGraph ist ein eigenständiges Programm. Informationen zur Kompatibilität finden Sie am Ende dieser Seite.

**Hinweis**: Bevor diese Funktion genutzt werden kann, muss sie zuerst [konfiguriert](#konfiguration) werden.

{{< warning title="FPLedit 2.x und die Kompatibilität mit jTrainGraph" >}}
Die Kompatibilität von Netzwerk-Fahrplänen mit **jTrainGraph** ist nicht so gut wie bei FPLedit 1.5.4: Die Fahrplandateien nutzen zwar noch das gleiche, aber funktional stark erweiterte Dateiformat, welches dadurch von jTrainGraph derzeit nicht gelesen werden kann. Der jTrainGraph-Starter ist natürlich weiterhin vorhanden und erlaubt auch bei dem neuen Format das Erstellen von Bildfahrplänen und das Anpassen der zugehörigen Einstellungen. Das Ändern des Fahrplans in jTrainGraph selbst ist aber nicht mehr möglich.
{{< /warning >}}

## Lineare Fahrpläne

Um jTrainGraph direkt aus FPLedit zu starten, benutzen Sie `jTrainGraph > jTrainGraph starten`. Dies speichert automatisch die aktuelle Datei und öffnet diese dann in jTrainGraph. Um die dort geänderten Daten wieder zurückzuübernehmen speichern Sie die Datei in jTrainGraph und schließen anschließend das Fenster. Die geänderten Daten werden wieder geladen.

**Achtung:** Die Datei wird am aktuellen Speicherort gespeichert, dabei werden alle Änderungen in die Datei geschrieben und können nicht mehr durch Schließen von FPLedit verworfen werden!

## Netzwerk-Fahrpläne

Um jTrainGraph direkt aus FPLedit zu starten, benutzen Sie `jTrainGraph > jTrainGraph starten (aktuelle Route)`. Diese Aktion ist **streckengebunden**. Dies speichert die aktuell ausgewählte Route in eine temporäre Datei und öffnet dann jTrainGraph. Um die dort geänderten Daten wieder zurückzuübernehmen speichern Sie die Datei in jTrainGraph und schließen anschließend das jTrainGraph-Fenster. Die Änderungen an den Bildfahrplaneinstellungen werden wieder geladen.

**Achtung**: Es werden nur Änderungen an der Bildfahrplandarstellung übernommen, alle anderen Änderungen (z.B. Bahnhöfe oder Züge einfügen) werden verworfen!

## Konfiguration
Die Einstellungen befinden sich unter `jTrainGraph > Einstellungen`. Der java-Pfad ist der Pfad zur Programmdatei von Java. Unter Windows sollte dieser normalerweise `javaw.exe` (bzw. `java` unter Linux) lauten. In manchen Fällen muss aber auch der absolute Pfad angegeben werden. Es kann auch der `Erkennen`-Button genutzt werden, um auf Windows automatisch den Java-Pfad herauszufinden.

Der Pfad zur jTrainGraph-Datei lautet bei Installation im gleichen Verzeichnis `jTrainGraph_311.jar` (301 durch die jeweils aktuelle Version ersetzen). Ebenfalls muss der Pfad hier angepasst werden, wenn die Installation nicht im gleichen Verzeichnis erfolgt ist.

Weiter muss ausgewählt werden, welche Version von jTrainGraph verwendet wird. Dabei ist nur ausschlaggebend, ob Version 2 (ältere Installationen, vor April 2018) oder 3 (neue Installationen) verwendet wird.

In den neuesten Versionen bietet jTrainGraph eine exe-Version an. Bei der Konfiguration muss gleich verfahren werden, sowohl der java-Pfad als auch der Pfad zur jTrainGraph-(exe)-Datei muss angegeben werden.

Wenn die Konfiguration nicht korrekt erfolgt ist, warnt das Programm sowohl beim Speichern der Einstellungen als auch beim Versuch, jTrainGraph über das Menü zu starten.

![Einstellungen](einstellungen.png)

## Kompatibilitätsmatrix
| FPLedit Version | ist kompatibel mit | jTrainGraph Versionen       |
|-----------------|--------------------|-----------------------------|
| < 1.5.4         | &rarr;             | 2.02, 2.03                  |
| 1.5.4           | &rarr;             | 2.02, 2.03, 3.03            |
| 2.0.0           | &rarr;             | 2.02, 2.03, 3.03            |
| 2.1.x, 2.2.x    | &rarr;             | 2.02, 2.03, 3.03, 3.11      |

{{% beta %}}