---
date: 2017-07-02T18:29:37+02:00
title: Aushangfahrpläne
weight: 40
---

Seit Version 1.4.0 können Aushangfahrpläne generiert werden. Aushangfahrpläne sind Fahrpläne, die den Reisenden die Abfahrtszeiten am jeweiligen Bahnhof anzeigen. Sie enthalten daher in der Regel nicht so viele Informationen, wie andere betriebsinterne Fahrplanformate.

Der Aushangfahrplan folgt grob einer Vorlage vom Bahnhof Malsch aus der Zeit der DRG. Die Darstellung mit der Standard-Vorlage ist weit nicht so vorbildnah wie bei den anderen Formaten:

![Quelle der Daten: Buchfahrplanheft 721-33 der DR aus dem Jahr 1894/85](afpl.png)

Um den Aushangfahrplan als Vorschau anzuzeigen, verwenden Sie `Vorschau > Aushangfahrplan`. Unter `Bearbeiten > Filterregeln` können Regeln angelegt werden, nach denen vor der Ausgabe die Züge und Bahnhöfe gefiltert werden. Damit könnten z.B. alle Güterzüge und Anschlussstellen aus dem Aushangfahrplan ausgeblendet werden.

![Filterfenster](filterfenster.png)

## Anpassen von Aushangfahrplänen
Unter `Bearbeiten > Fahrplandarstellung` im Reiter `Aushangfahrplan` kann das Aussehen des Aushangfahrplans beeinflusst werden. Die Auswahlmöglichkeit einer Vorlage erlaubt es, die Darstellung des Aushangfahrplans schnell an verschiedene Gegebenheiten anzupassen.

Die Schriftart, die für die Fahrplan-Darstellung verwendet wird, kann aus allen auf dem System installierten Schriftarten ausgewählt werden. Danaben können noch besondere Werte wie z.B. `serif`, `sans-serif` verwendet werden.

Es kann weiterhin ausgewählt werden, ob Gleisangaben im Aushangfahrplan angzeigt werden sollen. Die Gleisangaben werden in der folgenden Reihenfolge ermittelt: Abfahrtsgleis des Zugs > Ankunftsgleis des Zugs > Standardgleis des Bahnhofs in die Richtung des Zuges.

Weiterführend kann die Plandarstellung mit CSS (= Cascading Style Sheets) angepasst werden, da er ja im HTML-Format exportiert wird. Mit CSS können nahezu alle Aspekte der Plandarstellung geändert werden. Zur Aktivierung und Verwendung von CSS gibt es auf [dieser Unterseite](/dev/css/) aber eine ausführlichere Anleitung.

![Aushangfahrplansdarstellung](afpl-darstellung.png)

## Aushangfahrpläne exportieren und drucken
{{< include "/include-export" >}}

{{% beta %}}