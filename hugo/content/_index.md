---
date: 2016-03-08T21:07:13+01:00
title: Startseite
type: index
weight: 1
offline-weight: 100
offline_title: "Was ist FPLedit?"
---

FPLedit ist ein freies Programm zum Erstellen von Fahrplänen. Dies ist vor allem für **betriebsorientierte Modellbahner** interessant, die auf ihrer Anlage einen vorbildgetreuen Betrieb durchführen wollen und dafür **ans Original angelehnte Fahrplanunterlagen** verwenden wollen. Die Vorlagen dafür werden in der Regel bei der DB bzw. DR gesucht. FPLedit ist dabei aber nicht so komplex (und teuer) wie andere, professionelle Fahrplansoftware für "echte" Verkehrsbetriebe.

Der Fahrplan ist die Grundlage für den Bahnbetrieb und muss vor der fahrt für jeden Zug erstellt werden. Auch auf Modelleisenbahnanlagen kann der Betriebsspaß damit oftmals vergrößert werden - egal ob alleine oder mit anderen Mitstreitern!

## Features
- [Erstellen und Bearbeiten](/fahrplaene-bearbeiten/) von Fahrplänen bestehend aus einer einzelnen Strecke oder einem Streckennetz und den darauf verkehrenden Zügen.

- Generieren von unterschiedlichen Fahrplantypen, z.B. **Buchfahrplänen** oder **Aushangfahrplänen** und anschließender Export in von FPLedit unabhängige Dateiformate (HTML).

- Kompatibilität mit dem bekannten Bildfahrplanprogramm [jTrainGraph](https://jtraingraph.de/). Dateien, die mit einer aktuellen jTrainGraph-Programmversion erstellt worden sind, können mit FPLedit geöffnet werden (und anschließend auch wieder mit jTrainGraph). Das Generieren von **Bildfahrplänen** ist somit möglich. (**ACHTUNG**: Seit Version 2.0.0 ist dies auf lineare Fahrpläne beschränkt)

- Weiterentwicklung: FPLedit wird weiterentwickelt und wird in Zukunft noch einige Features und andere Fahrplanformate erhalten.

- Die Ausgabe kann mit eigenen [Vorlagen](/dev/templates) an die Bedürfnisse angepasst werden.

- Unterstützung **mehrerer Betriebssystem**: Windows und Linux mit Hilfe von Mono

{{< warning title="jTrainGraph 3.3" >}}
FPLedit ist aktuell nicht mit jTrainGraph 3.3 kompatibel. Erst die nächste Version 2.3.0 wird mit jTrainGraph 3.3 kompatibel sein!
{{< /warning >}}

## Fahrplan-Ausgabeformate

Der Fahrplan ist die Grundlage für den Bahnbetrieb und muss vor der fahrt für jeden Zug erstellt werden. Bei den deutschen Eisenbahnen waren und sind zu diesem Zweck verschiedene Fahrplan-Formate im Einsatz, die an unterschiedliche Benutzergruppen gerichtet sind. Diese Seite soll als Entscheidungshilfe dienen, welcher Fahrplantyp zum Einsatz kommen soll.

{{< include_mod "/include-index-web" "/include-index-tex" >}}

Das Dateiformat von FPLedit und jTrainGraph ist vollständig kompatibel. Somit können alle drei Formate aus der gleichen Datei generiert werden. Ob das Anlegen der Daten mit jTrainGraph oder FPLedit erfolgt, ist dabei egal. Die erweiterte Konfiguration der Ausgabe ist aber nur mit dem entsprechenden Programm möglich. **Netzwerk-Fahrpläne** können nur noch mit FPLedit erstellt werden.

## Systemvoraussetzungen
FPLedit läuft auf allen Systemen, auf denen entweder Microsoft .NET ab Version 4.6.1 (installierbar ab Windows 7 SP1) oder ein aktuelles [Mono](http://www.mono-project.com/) installiert ist. Damit sollte dieses Programm auf **Windows und [Linux](/download/install-linux/)** (experimentell auch unter [macOS](/download/install-macos/)) laufen.

## Danke!
Vielen Dank an alle, die dieses Programm verwenden: Ohne euch wäre die Arbeit hier nutzlos. Und auch ein noch größeres Dankeschön an alle Betatester, die bei der Behebung von Fehlern und dem Testen von neuen Funktionen helfen und Ideen für neue Funktionen beisteuern! Natürlich auch ein Danke an Moritz Scherzinger von jTrainGraph für die gute Kooperation beim gemeinsam verwendeten Dateiformat!

{{% beta %}}
