---
title: GTFS
weight: 100
nooffline: true
---

FPLedit erlaubt das Erstellen von einfachen GTFS-Feeds. Diese Funktion ist nur für "Experten" sinnvoll nutzbar und kann unter `Einstellungen > Erweiterungen` ativiert werden (standardmäßig ist die Funktion deaktiviert).

{{< warning title="Einschränkungen GTFS-Export" >}}
Der GTFS-Export ist aktuell ausdrücklich eine **Testversion** und unterstützt nicht die Anpassung aller Details des exportierten Feeds. Der Export unterstützt aktuell auch nur lineare Fahrplandateien und einen einzigen Betreiber (Agency).

Grundsätzlich gilt der Hinweis auf der Downloadseite; sollten Züge an mehr als einer handvoll Tagen verkehren ist FPLedit vermutlich *nicht* das Programm der Wahl zur Erstellung von GTFS-Feeds. FPLedit hat auch keinen GTFS-Validator und validiert den erstellten Feed nicht vollständig auf Korrektheit.
{{< /warning >}}

Für die Erstellung von gültigen GTFS-Feeds ist die Angabe von weiteren Daten erforderlich, die die "abstrakten" Fahrplandaten von FPLedit auf konkrete Orte, Zeiten und Betreiber bezeiehen.

## Agency- und Streckendaten hinterlegen
Zum Erstellen eines GTFS-Feeds benötigt FPLedit die Defintion einer eine Agency (Betreiber). Dies geschieht unter `GTFS > GTFS-Agencydaten bearbeiten`. Alle Agency- und Strecken-Daten sind Pflichtfelder und müssen ausgefüllt werden, damit ein gültiger GTFS-Feed entstehen kann.

* Name des Betreibers
* Sprachcode als IETF BCP 47 Language Code, z.B. `de` oder `de-DE` (FPLedit validiert diese Angabe nicht)
* Website des Betreibers
* Zeitzone, z.B. `Europe/Berlin` (FPLedit validiert diese Angabe nicht)

Die eine Strecke des linearen Fahrplans benötigt einen Namen und einen Typ:
* Name der einen Strecke
* Type des Beförderungsmittels: Auswahl aus vordefinierten GTFS-Typen

Global können hier auch noch die Verkehrstage aller Züge gesetzt werden, siehe auch den folgenden Abschnitt.

## Zugattribute
Unter `GTFS > GTFS-Zugattribute ändern` können einzelne Einstellungen pro Zug geändert werden:
* **Fahrradmitnahme** und **Rollstuhlmitnahme** kann jeweils ausgewählt werden: Entweder nicht erlaubt (NotAllowed), erlaubt (Allowed) oder undefiniert (NotDefined).
* **Verkehrstage** können als Datumsangaben angegeben werden, :
    * Einzel-Datumsangaben werden im Format `YYYY-MM-TT`, z.B. `2023-12-06`, angegeben,
    * Datumsbereiche im Format `YYYY-MM-TT--YYYY-MM-TT`, also mit zwei Minuszeichen (`--`) zwischen Start- und Enddatum, und
    * mehrere Einträge können mit Kommata (`,`) separiert werden.
    * Leerzeichen sind an keiner Stelle zulässig

## Geodaten
Es wird eine kml-Datei aus dem Verzeichnis der Fahrplandatei gelade. Diese muss den gleichen Dateinamens-Stamm haben, also z.B. `fahrplan2023.fpl` und `fahrplan2023.kml`. FPLedit lädt Geodaten der Stationen aus dieser Datei, wenn diese korrekt benannt sind:
* KML Linien (`<LineString>` im XML), benannt mit dem _exakten_ bei den Streckendaten hinterlegten Streckennamen. Diese wird – falls vorhanden – der GTFS-Strecke als Shape zugewiesen.
* KML Punkte (`<Point>` im XML) für Stationen, benannt mit den exakten Stationsnamen aus der Streckendefinition.

## Export
Wenn alle Daten eingegeben wurden, kann `GTFS > Exportiere GTFS-Feed` aufgerufen werden. Dabei muss ein (bestenfalls leerer) Ordner als Ziel ausgewählt werden. FPLedit packt den GTFS-Feed dabei nicht selbstständig als ZIP-Datei, das muss danach manuell geschehen.

FPLedit hat keinen GTFS-Validator und validiert den erstellten Feed nicht vollständig auf Korrektheit.

{{% beta %}}
