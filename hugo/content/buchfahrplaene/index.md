---
date: 2017-01-17T18:29:37+02:00
title: Buchfahrpläne
weight: 30
---

Der ursprüngliche Zweck von FPLedit war die Erstellung von Buchfahrplänen. Die entsprechende Erweiterung muss natürlich aktiviert sein. Zur Zeit wird kein vollständiger Buchfahrplan generiert, an einigen Stellen ist dieser stark vereinfacht. Das Modul wird aber in nächster Zeit noch einige Verbesserungen und Features erhalten.

Um den Buchfahrplan als Vorschau anzuzeigen, verwenden Sie `Buchfahrplan > Anzeigen`. Daneben können über den Menüpunkt `Buchfahrplan > Höchstgeschwindigkeiten ändern` für die einzelenen Bahnhöfe auf der Strecke eine Höchstgeschwindigkeit definieren. Neue Geschwindigkeitswechsel (ohne Bahnhof und Fahrtzeiten) auf der freien Strecke können über die Schaltfläche `Hinzufügen` angelegt werden.

Bei Geschwindigkeitswechseln können alle Eigenschaften bearbeitet werden, bei Bahnhöfen nur die Geschwindigkeit. Die Bahnhöfe können unter `Bearbeiten > Strecke bearbeiten` bearbeitet werden.

In den Namen der Geschwindigkeitswechsel können Sonderzeichen verwendet werden, die in Buchfahrplänen eine besondere Bedeutung haben. Zum Verwenden im Plan bitte Kopieren (<kbd>Strg+C</kbd>) und im Namenstextfeld einfügen (<kbd>Strg+V</kbd>).

| Symbol | Bedeutung                               |
|--------|-----------------------------------------|
| ¥      | Ende des anschließenden Weichenbereichs |
| ▽      | Verkürzter Vorsignalabstand             |
| ┣━╸    | Einfahrt in Stumpfgleis                 |

Dieser Buchfahrplan (generiert mit v1.2.1) ist zwar schon näher am Vorbild, es fehlt aber trotzdem noch einiges bzw. das Format ist stark vereinfacht:

![Quelle der Daten: Buchfahrplanheft 698/3 - Ersatzfahrplan](buchfahrplan.png)

## Anpassen von Buchfahrplänen
Unter `Buchfahrplan > Buchfahrplaneinstellungen` kann das Aussehen des Buchfahrplns beeinflusst werden. Die Schriftart kann aus allen auf dem System installierten Schriftatrten ausgewählt werden. Daneben kann der Plan noch mit CSS (= Cascading Style Sheets) angepasst werden, da er ja im HTML-Format exportiert wird. Zu CSS gibt es auf [dieser Unterseite](css/) aber eine ausführlichere Anleitung.

![Buchfahrplaneinstellungen](einstellungen.png)

## Buchfahrpläne anzeigen und drucken
Buchfahrpläne können mit `Datei > Export` als HTML-Datei exportiert werden. Zum Anzeigen dieser Datei wird ein Webbrowser (z.B. Firefox) benötigt. Zur Ansicht der HTML-Fahrpläne müssen auch die ausgewählten Schriftarten auf dem Computer installiert sein, eine einfache Weitergabe ist deshalb nicht möglich.

Ein direktes Drucken aus FPLedit heraus ist nicht möglich. Aber aus dem Webbrowser heraus können die als HTML exportierten Fahrpläne gedruckt werden. Die Druckaugabe ist für die Papiergröße A5 optimiert (Format der Vorbild-Buchfahrpläne). Die im Browser angegebenen Druckränder werden ignoriert.

Mit einem PDF-Drucker (z.B. PDF24) lassen sich so auch die exportierten Fahrpläne in eine PDF-Datei umwandeln und damit auch ohne Installation der für den Fahrplan ausgewählten Schriften auf anderen Computern ansehen. Auch können viele PDF-Reader zwei A5-Seiten zusammen auf eine A4-Seite drucken, dann hat man die richtige Größe, wenn man die A4-Seite in der Mitte auseinanderschneidet bzw. faltet.

{{% beta %}}
