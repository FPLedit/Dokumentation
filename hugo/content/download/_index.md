---
date: 2016-03-08T21:07:13+01:00
title: Download
nooffline: true
---

**FPledit ist ein Projekt, das primär auf (Modell-)Eisenbahnfreunde abzielt. Die Fahrpläne sind nicht nach den Betriebsrichtlinien irgendeiner Bahngesellschaft gestaltet und sind für den Betriebsdienst nicht geeignet!**

FPLedit ist unter der GNU GPL v3-Lizenz lizenziert:

<iframe src="/files/gplv3.html" style="width:100%; border:1px solid black; height:300px;"></iframe>

**Datenschutz bei der Verwendung von FPLedit:** Bei der programminternen Überprüfung auf Aktualisierungen (`Hilfe > Info` oder automatisch beim Programmstart) wird die IP-Adresse und der verwendete Betriebssystemtyp des anfragenden Computers an den Server übermittelt. Die IP-Adresse wird nur anonymisiert in Log-Dateien gespeichert; ein Rückschluss auf einzelne Benutzer ist daher nicht möglich. Die automatisierte Übermittlung zur Versionsüberprpüfung beim Programmstart geschieht nur nach Einwilligung des Nutzers. Diese Funktion kann jederzeit über das Programm unter `Hilfe > Info` deaktiviert werden.

Mit dem Download akzeptieren Sie die oben genannten Bedingungen. <span style="color:red;font-weight:bold;">Bitte Lesen Sie auch die verlinkten Installationshinweise (je nach Betriebssystem), da mich in letzter Zeit viele Fragen dazu erreichen.</span>

<a href="/files/fpledit-{{< version >}}.zip" class="downloadbtn"><i class="icon icon-download"></i> Download starten (aktuelle Version {{< version >}})</a>
| <span style="color:red;">**Hinweise zur Installation:</span> [Windows](install-windows/), [Linux](install-linux/), [macOS](install-macos/)**
| **Andere Downloads:** [Sourcecode auf GitHub](https://github.com/FPLedit/FPLedit/releases)

## Changelog

### 2.2.3 (vom 11.06.2020)
* Erste Unterstützung von Dateien, die mit jTrainGraph 3.2 erstellt wurden:
* **ACHTUNG:** Noch keine Unterstützung für die neuen, nur in der Pro-Version verfügbaren Funktionen (erweiterte Verknüpfungen, Fahrzeuge und Umläufe).

### 2.2.2 (vom 08.06.2020)
* Erste Unterstützung für [macOS](install-macos/)
* Behebt einen Absturz beim Löschen von Stationen

### 2.2.1 (vom 05.06.2020)
* Behebt mehrere Fehler beim Importieren von Streckendateien
* Behebt einen Fehler beim Anzeigen der Rangierfahrten im Editor: Die Einträge wurden erst nach einem Klick auf eine beliebige Schaltfläche angezeigt.
* Behebt zwei Fehler, mit denen nur Sonntags verkehrende Züge und Folgezüge an den ersten und letzten Stationen im Bildfahrplan nicht gezeichnet wurden.
* Behebt weitere kleine Fehler

### 2.2.0 (vom 11.05.2020)
* Wechsel der Vorlagen zu einer Javascript basierten Template-Definition
    * **Achtung:** Alte Vorlagen sind damit nicht mehr kompatibel!
* Auf Linux-Plattformen wird nun das native Theme besser unterstützt und einige Darstellungsfehler behoben
* Aktualisierung des UI-Frameworks Eto für bessere Kompatibilität
* Unter der Haube: Massive Änderungen an der Codebasis um FPLedit fit für die Zukunft zu machen
* Änderung bei mehreren geöffneten FPLedit-Fenstern: Nur noch die erste Instanz kann Einstellungen ändern, das dient zur Vermeidung von Fehlern.
* **Performance-Verbesserungen** an verschiedenen Stellen:
    * Verbesserung der Ladezeiten von sehr großen Dateien (Referenz: 200.000 Stationen an 2000 Strecken) wurde stark verbessert
    * Performance-Verbesserungen der Rückgängig-Funktion
    * Performance-Verbesserungen bei der dynamischen Bildfahrplanvorschau
* **Behobene Fehler:**
    * Behebt einige Fehler unter Mono, Vorbereitung für .NET Core
    * Behebt einige Fehler mit Überprüfungen
    * Behebt mehrere Fehler im Vorlagen-Mechanismus
    * Behebt mehrere Fehler der Trapeztafel-, Kreuzungs-, und Überholungs-Ausgabe in den Buchfahrplänen
    * Bugfixes bei routenabhängigen Werten die Semikola (`;`) enthalten, und bei Filterregeln mit Pipes (`|`) im Suchwert.

<p></p>
<details><summary><strong>Ältere Verionshinweise</strong></summary>

### 2.1.1 (vom 09.11.2019)
* Behebt mehrere Fehler im Zusammenhang mit dem Editieren von Gleisen an Stationen
* Verbesserung der Multiplattform-Kompatibilität

### 2.1.0 (vom 22.09.2019)
* [Zirkuläre Streckennetze](/fahrplaene-bearbeiten/cycles/) sind nun möglich
* Sortieren von Zügen ist nun möglich
* Anlegen von Umläufen über "Folgezüge" ist nun möglich
* Weitere Vereinheitlichung der Bearbeitungsdialoge und Menüs zwischen linearen Fahrplänen und Netzwerkfahrplänen
* Anzeige der Verkehrstage im Buchfahrplan
* Neue dynamische Bildfahrplanvorschau
* Kompatibilität mit jTrainGraph 3.1: Gleisangaben und Rangierfahrten

#### Behobene Fehler:

* Fehlerbehebungen im Zusammenhang mit der Rückgängig-Funktion
* Korrektur eines Fehlers, der falsche Zug-Ids intern vergeben hat
* Mehrere Fehlerbehebungen in Verbindung mit dem Netzwerk-Modus
* **Achtung:** Möglicherweise ist ein manuelles Nacharbeiten der Fahrplandateien nötig, das Programm gibt dann eine entsprechende Meldung beim Start aus.

#### Sonstige Verbesserungen und Anmerkungen:

* Aktivierung der Template-Sandbox unter Linux
* Performance-Verbesserungen in einigen Bearbeitungsdialogen
* Besserer Umgang mit Fehlermeldungen und Programmabstürzen
* **Achtung:** FPLedit ist nicht mehr mit Windows Vista kompatibel!
* Wechsel der **Lizenz zur GNU GPLv3**
* **Bekanntes Problem**: Bei komplexen Fahrplänen dauert das Zeichnen der dynamischen Bildfahrplan-Vorschau unter Windows einige Zeit.

### 2.0.0 (vom 11.11.2018)
* Unterstützung von Streckennetzen (Netzwerk-Fahrplänen), **nicht direkt kompatibel mit jTrainGraph, siehe [Bildfahrpläne](/bildfahrplaene)**!
* Neues Dateiformat für eigene Vorlagen, nur noch ein Texteditor wird zur Erstellung benötigt
* Das Verschieben von Stationen zwischen andere Stationen erzeugt keine fehlerhaften Dateien mehr
* Neuer Bearbeitungsmodus für Streckennetze
* Kopieren von Zügen (mit Verschiebung um bestimmte Zeit)
* Verbesserungen an den Vorlagen
* Bessere Kompatibilität mit Linux durch die Verwendung von Eto als Grafikframework
* Verschiedene andere Fehlerbehebungen und Verbesserungen
* Kompatibilität mit jTrainGraph ab Version 3.03 endgültig wiederhergestellt
* Speichern der manuell eingestellten Fenstergrößen
* **Achtung:** Die Importfunktion für das alte Bfpl-Binärformat wurde entfernt!
* **Achtung:** FPLedit ist nicht mehr mit Windows XP kompatibel!

Die Kompatibilität von Netzwerk-Fahrplänen mit **jTrainGraph** ist nicht so gut wie bei FPLedit 1.5.4: Die Fahrplandateien nutzen zwar noch das gleiche, aber funktional stark erweiterte Dateiformat, welches dadurch von jTrainGraph derzeit nicht gelesen werden kann. Der jTrainGraph-Starter ist natürlich weiterhin vorhanden und erlaubt auch bei dem neuen Format das Erstellen von Bildfahrplänen und das Anpassen der zugehörigen Einstellungen. Das Ändern des Fahrplans in jTrainGraph selbst ist aber (derzeit) nicht mehr möglich.

### 1.5.4 (vom 14.04.2018)
* Diese Version stellt die Kompatibilität mit jTrainGraph 3.0 wieder her.

### 1.5.3 (vom 02.04.2018)
* Diese Version enthält einen Warnhinweis beim Öffnen von mit jTrainGraph 3.0 erstellten Dateien.

### 1.5.2 (vom 29.10.2017)
* Diese Version behebt ein Problem, bei dem keine Erweiterungen geladen wurden.

### 1.5.1 (vom 05.10.2017)
* Diese Version enthält jetzt auch wirklich das Tabellenfahrplan/Kursbuch-Modul.

### 1.5.0 (vom 30.09.2017)
* Neue, vereinheitlichte Dialoge
* Neuer Fahrplantyp: Tabellenfahrpläne mit allen von Buchfahrplaänen und Aushangfahrplänen her gewohnten Features
* **Achtung:** Die Erweiterung `FPLedit.AStandard.dll` wurde in das Hauptprogramm integriert! Die alte Datei kann problemlos gelöscht werden.
* Rückgängig-Funktion (`Bearbeiten > Rückgängig`)
* Weitere kleine Fehlerbehebungen

### 1.4.0 (vom 19.08.2017)
* Neuer Fahrplantyp: Aushangfahrpläne mit allen von Buchfahrplaänen her gewohnten Features
* **Achtung:** Die Erweiterung `FPLedit.BuchfahrplanExport.dll` wurde durch `FPLedit.Buchfahrplan.dll` ersetzt! Die alte Datei kann problemlos gelöscht werden.
* Dateien können vom Dateiexplorer auf das Hauptfenster gezogen werden
* Listen springen beim Bearbeiten nicht mehr hin und her
* Neustart bei Änderung der aktivierten Erweiterungen
* Viele Verbesserungen unter der Haube
* Erstmalige Veröffentlichung des Sourcecodes

### 1.3.2 (vom 02.07.2017)
* Absturz beim Starten von FPLedit behoben

### 1.3.1 (vom 01.07.2017)
* Fehler beim Öffnen von manchen Fahrplandateien behoben
* Neuer Exporter zum Entfernen aller Spuren von FPLedit aus Fahrplandateien

### 1.3.0 (vom 27.06.2017)
* Auswahlmöglichkeit zwischen unterschiedlichen Vorlagen für Buchfahrpläne
* Neues Template für Buchfahrpläne im Zugleitbetrieb: Automatische Erkennung, ob Züge kreuzen oder überholen
* Trapeztafelfunktion: Für den Zugleitbetrieb-Buchfahrplan kann ausgewählt werden, ob ein Zug vor der Trapeztafel hält.
* Wellenanzeige zur Verdeutlichung der Streckenneigung im Buchfahrplan
* Angabe "Zuglaufmeldung durch"
* Kompatibilität des jTrainGraphStarters mit den jTrainGraph-exe-Dateien
* Zusätzliche Tastaturkürzel in den Dialogen
* Kleine Fehlerbehebungen

### 1.2.1 (vom 23.5.2017)
* Fehler beim Löschen der ersten oder letzten Bahnhöfe behoben

### 1.2.0 (vom 22.5.2017)
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
</details>
