---
date: 2016-10-05T18:29:37+02:00
title: Dateiformat
---

FPledit benutzt ein eigenes, erweiterbares Dateiformat. Das Format wird BFPL abgekürzt (Binärer Fahrplan). Dateien werden aber nicht direkt binär geschrieben, sondern mit dem `BinaryWriter` des .NET-Frameworks. Daher müssen BFPL-Dateien auch immer mit dem entsprechenden `BinaryReader` gelesen werden! Die Grundstruktur, wie die Daten gespeichert werden, ist in dem folgenden Klassenmodell zu erkennen. Alle drei Hauptentitäten (Timetable, Station, Train) können Metadaten halten:

{{< figure src="datamodel.png" title="Klassenmodell des FPLedit-Dateiformats" >}}

Die BFPL-Datei beginnt mit einem `Timetable`-Block. Dieser beginnt mit einem `string`, der die Dateifomatversion angibt. Diese ist aktuell (v1.0.3) `BFPL/1.1`. Eine höhere Version gibt an, dass nicht abwärtskompatible Änderungen am Format vorgenommen wurden. Anschließend folgt ein weiterer `string`, der den Namen des Fahrplans (nicht den Dateiname) enthält. Danach folgt ein `Meta`-Block, der unten beschrieben wird.   
Darauf folgt die Anzahl der Bahnhöfe (`int`). So oft, wie durch die Anzahl vorgegeben, folgt anschließend ein `Station`-Block. Dieser beginnt mit einer eindeutigen ID des Bahnhofs (`int`). Diese wird aber nur in einem späteren Schritt zur Zuweisung bei den Zügen benötigt und wird im endgültigen Datenmodell nicht gespeichert. Darauf folgen der Name des Bahnhofs (`string`) und die Position (Kilometerangabe) des Bahnhofs (`float=single`). Danach folgt erneut ein `Meta`-Block pro Zug.   
Am Ende folgen die Züge. Wieder wird zuerst die Anzahl als `int` angegeben, danach folgen so viele `Train`-Blöcke. Dieser beginnt mit dem Namen (`string`) und dem Triebfahrzeug (ebenfalls `string`). Darauf folgt die Richtung des Zuges (`bool`). Danach kommt die Streckenbezeichnung (`string`) und die Verkehrstage des Zugs als 7 Zeichen langer `string` (Beispiele: `"1111100"` -> Mo-Fr, `"0000010"` -> Sa). Anschließend folgt wieder ein `Meta`-Block pro Zug. Dann folgt die Anzahl an Ankunftszeiten (`int`) und so oft die eindeutige ID eines Bahnhofes (`int`) und die dazugehörige Ankunftszeit als formatierter Zeit-`string`. Ein zweiter solcher Block für die Abfahrtszeiten folgt darauf.

## Meta-Blöcke
Am Anfang eines Metablocks steht die Anzahl der vorhandenen Metadaten (`int`). Danach folgen so oft, wie durch die Anzahl vorgegeben ein Schlüssel (`string`) und der dazugehörige Wert (`string`), ähnlich einem assoziativen Array.

## Pseudocode
```
# Variablenname				: Datentyp
MAGIC						: string
TT_NAME						: string
TT_META						: meta

STATION_COUNT				: int
for STATION_COUNT {						# Einfache Schleife
	STA_UNIQ_ID				: int
	STA_NAME				: string
	STA_POS					: float
	STA_META				: meta
}

TRAIN_COUNT					: int
for TRAIN_COUNT {
	TRA_NAME				: string
	TRA_TFZ					: string
	TRA_DIRECTION			: bool
	TRA_LINE				: string
	TRA_DAYS				: string
	TRA_META				: meta
	TRA_ARR_COUNT			: int
	for TRA_ARR_COUNT {
		STA_ID				: int
		TRA_ARR				: string
	}
	TRA_DEP_COUNT			: int
	for TRA_DEP_COUNT {
		STA_ID				: int
		TRA_DEP				: string
	}
}

typedef meta {
	META_COUNT				: int
	for META_COUNT {
		META_KEY			: string
		META_VALUE			: string
	}
}
```
