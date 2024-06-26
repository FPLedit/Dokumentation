---
title: Kursbuchfahrpläne
weight: 50
---

Mit dem Kursbuch-/Tabellenfahrplanmodul können Fahrpläne generiert werden, die alle Züge einer Strecke in einer Fahrplantabelle zusammenfassen. Dies ist ein anderes für Reisende vorgesehenes Fahrplanformat, das alle Züge einer Strecke übersichtlich zusammenfasst.

Um den Kursbuch/Tabellenfahrplan als Vorschau anzuzeigen, verwenden Sie `Vorschau > Kursbuch`. Es wird für jede im Netzwerkfahrplan angelegte Strecke eine eigne Kursbuchtabelle ausgegeben.

Dieser Kursbuchfahrplan ist zwar schon recht nah am Vorbild, es fehlt aber trotzdem noch einiges bzw. das Format ist stark vereinfacht:

<!-- TODO: new image -->
![Beispiel-Kursbuchfahrplan](kfpl.png)

## Anpassen des Tabellenfahrplans
Unter `Bearbeiten > Fahrplandarstellung` im Reiter `Kursbuch` kann das Aussehen des Tabellenfahrplans beeinflusst werden. Die Auswahlmöglichkeit einer Vorlage erlaubt es, die Darstellung des Tabellenfahrplans schnell an verschiedene Gegebenheiten anzupassen.

Die Schriftart, die für die Fahrplan-Darstellung verwendet wird, kann aus allen auf dem System installierten Schriftarten ausgewählt werden. Danaben können noch besondere Werte wie z.B. `serif`, `sans-serif` verwendet werden.

Bei den Kursbüchern der deutschen Eisenbahnen war und ist es oft üblich, dass jede Strecke eine individuelle Kursbuchstreckennummer erhält. In diesem Dialog lässt sich daher für jede der im Fahrplan angelegten Strecken eine Kursbuchstreckennummer angeben, die in der Ausgabe angezeigt werden.

Weiterführend kann die Plandarstellung mit CSS (= Cascading Style Sheets) angepasst werden, da er ja im HTML-Format exportiert wird. Mit CSS können nahezu alle Aspekte der Plandarstellung geändert werden. Zur Aktivierung und Verwendung von CSS gibt es auf [dieser Unterseite](/dev/css/) aber eine ausführlichere Anleitung.

![Anpassung der Kursbuch-Darstellung](kfpl-darstellung.png)

Unter `Bearbeiten > Filterregeln` können Regeln angelegt werden, nach denen vor der Ausgabe die Züge und Bahnhöfe gefiltert werden. Damit könnten z.B. alle Güterzüge und Anschlussstellen aus dem Kursbuchfahrplan ausgeblendet werden.

## Tabellenfahrpläne exportieren und drucken
{{< include "/include-export" >}}

{{% beta %}}
