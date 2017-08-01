---
date: 2017-01-17T18:29:37+02:00
title: CSS-Hilfe
weight: 35
---

Über CSS können die Buchfahrpläne angepasst werden. CSS wird in der Regel für die Webentwicklung zum Gestalten von Websites verwendet. Da die Buchfahrpläne als HTML-Dateien exportiert werden, kommt CSS zum Einsatz. Auf [selfhtml](https://wiki.selfhtml.org/wiki/CSS) gibt es eine gute Anleitung zu CSS.

## Beispiele
### Den Zug mit der Nummer RB 12801 ausblenden
```css
/* Die Zugnummer wird klein und mit Bindestrichen statt der Leerezichen geschrieben. */
#train-rb-12801 {
	display: none;
}
```

## CSS ausprobieren
Um CSS direkt auf den Buchfahrplan anwzuwenden, aktivieren Sie die Option `CSS-Test-Konsole bei Vorschau aktivieren` unter `Buchfahrplan > Buchfahrplaneinstellungen`. Damit wird im Vorschaumodus (`Buchfahrplan > Anzeigen`) rechts oben ein Textfeld eingeblendet, in das eigener CSS-Code eingegeben werden kann. Mit einem Click auf den darunterliegenden Button wird das CSS direkt auf den gerade im Browser geöffneten exportierten Buchfahrplan temporär angewendet. Dabei wird der Code aber nicht in der Fahrplandatei gespeichert, sondern muss erst wieder in den Buchfahrplaneinstellungsdialog zurückkopiert werden!

Wenn Sie weitere Fragen für eine spezielle Problemlösung haben, können Sie mich gerne kontaktieren (info[at]manuelhu.de).

{{% beta %}}