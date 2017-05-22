---
date: 2016-03-08T21:07:13+01:00
title: Download
weight: 5
---

**FPledit ist ein Projekt, das primär auf (Modell-)Eisenbahnfreunde abzielt. Die Fahrpläne sind nicht nach den Betriebsrichtlinien irgendeiner Bahngesellschaft gestaltet und sind für den Betriebsdienst nicht geeignet!**

FPledit darf für den nicht-kommerziellen Gebrauch (dies schließt die Veröffentlichung damit erstellter Fahrpläne auf privaten Websites ausdrücklich ein) kostenlos heruntergeladen und verwendet werden. Die Weitergabe oder Bereitstellung des Programms über eine öffentliche Plattform oder gegen Entgelt ist nur nach vorheriger Zustimmung des Programmautors gestattet. Verweisen Sie bitte stattdessen auf die offizielle Website des Programms.   
Eine kommerzielle Nutzung des Programms bedarf meiner vorherigen Zustimmung.

Der Autor dieses Programms haftet nicht für Schäden an Soft- oder Hardware oder Vermögensschäden, die durch das Benutzen des Programms entstehen, es sei denn diese beruhen auf einem grob fahrlässigen oder vorsätzlichen Handeln des Autors, seiner Erfüllungsgehilfen oder seiner gesetzlichen Vertreter. Für  Schäden an der Gesundheit, dem Körper oder dem Leben des Nutzers haftet der Autor uneingeschränkt. Ebenso haftet er für die Verletzung von Pflichten, die zur Erreichung des Vertragszwecks von besonderer Bedeutung sind (Kardinalspflichten).

**Datenschutz:** Bei der programminternen Überprüfung auf Aktualisierungen (`Hilfe > Info` oder automatisch beim Programmstart) wird die IP-Adresse des anfragenden Computers an den Server übermittelt. Diese wird anonymisiert in Log-Dateien gespeichert.

Mit dem Download akzeptieren Sie die oben genannten Bedingungen:
[Download starten (aktuelle Version 1.2.0)](/files/fpledit-1.2.0.zip) / [Hinweise zur Installation](/einfuehrung/#installation)

## Changelog

### 1.2.0 (vom 22.5.2017; [Download](/files/fpledit-1.2.0.zip))
* Automatische Überprüfung auf neue Programmversionen beim Programmstart
* Buchfahrplan: Schriftart anpassen & mit CSS gestalten
* Geschwindigkeitswechel auf der freien Strecke möglich
* Zuletzt verwendete Dateien merken
* Kommentare der Züge bearbeiten
* Strecke aus anderer Fahrplandatei bzw. Streckendatei laden
* Ermöglichen der Verknüpfung von fpl-Dateien mit FPLedit, so dass diese mit einem Doppelklick geöffnet werden.

### 1.1.1 (vom 28.2.2017)
* Fehlermeldung beim Öffnen, wenn mehr Fahrtzeiten als Stationen angegeben sind. Löst ein evetuell auftretendes Missverständnis.

### 1.1.0 (vom 23.1.2017)
* Neues, mit jTrainGraph (**Version >= 2.02**) vollständig kompatibles Dateiformat
* Entfernen des Bildfahrplan-Moduls, bitte jTrainGraph benutzen!
* Starter für jTrainGraph, dadurch kann jTrainGraph direkt aus dem Programm heraus gestartet werden (jTrainGraph >= 2.02)
* Das alte BFPL-Format kann nur noch über `Datei > Importieren` geöffnet werden, `Öffnen` öffnet nur noch das neue Dateiformat
* Exportieren nur noch über `Datei > Exportieren`, `Speichern (unter)` öffnet nur noch das neue Dateiformat
* Auswahl aus vorhandenen Triebfahrzeugen

### 1.0.3 (vom 11.12.2016)
* Fehler behoben, bei dem Bildfahrpläne im falschen Dateiformat exportiert wurden (jetzt PNG statt BMP)
* Fehler behoben, bei dem die Stationen im Buchfahrplan falsch herum sortiert wurden
* Fehler behoben, bei dem auf der Mono-Plattform nicht alle Züge im Bildfahrplan gezeichnet wurden
* Neuer technischer Unterbau für das Buchfahrplanmodul (optimierter HTML-Code)

### 1.0.2 (vom 4.12.2016)
* Fehler behoben, bei dem manche jTrainGraph-Fahrpläne nicht importiert werden
* Beim Updaten springen in den Bearbeitungsdialogen die Listen nicht mehr so viel

### 1.0.1 (vom 2.12.2016)
* Farben werden jetzt intern hexadezimal gespeichert (#RRGGGBB)
* Verwaltung von Erweiterungen (siehe `Hilfe > Erweiterungen`)
* Neuer Info-Dialog

### 1.0.0 (unveröffentlicht)
* Initiale Version (Editoren, Bildfahrpläne und Buchfahrpläne)