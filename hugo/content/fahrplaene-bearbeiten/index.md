---
date: 2016-10-05T18:29:37+02:00
title: Fahrpläne bearbeiten
weight: 10
---

Zu den grundlegenden Features von FPLedit gehört das Erstellen und Bearbeiten der Fahrpläne. Dies gliedert sich in drei Bereiche. Zuerst muss die Strecke erstellt werden, danach können Züge hinzugefügt werden und die Fahrpläne bearbeitet werden.

{{< note title="Beispielfahrplan" >}}
Den in dieser Anleitung erstellten Fahrplan der Strecke Pirmasens Nord - Pirmasens Hbf in der Südpfalz kann man [hier](/files/kbs_672.bfpl) herunterladen.
{{< /note >}}

## Strecke erstellen

Nachdem man mit `Datei > Neu` einen neuen Fahrplan angelegt hat, kann unter dem Menüpunkt `Bearbeiten > Strecke bearbeiten` die Strecke bearbeitet werden.

{{< figure src="streckenfenster.png" title="Strecke bearbeiten und Station bearbeiten" >}}

Durch einen Klick auf `Neue Station` kann man durch Eingabe von Bahnhofsnamen und Streckenkilometer einen neuen Bahnhof anlegen, mit `Station bearbeiten` können nachträglich die Eigenschaften einer Station wieder geändert werden. Mit dem Button `Station löschen` löscht man die selektierte Station wieder.

## Züge anlegen

Wenn eine Strecke angelegt wurde, ist der Menüpunkt `Bearbeiten > Züge bearbeiten` nicht mehr ausgegraut. In diesem Fenster lassen sich die Züge, die auf der Strecke verkehren, bearbeiten.

{{< figure src="zugfenster.png" title="Züge bearbeiten und neuen Zug erstellen" >}}

Die Züge sind nach Fahrtrichtung geordnet, diese kann nachträglich auch nicht mehr geändert werden! Durch einen Klick auf `Neuer Zug` bei der jeweiligen Fahrtrichtung, öffnet sich ein Fenster in dem man Name, Streckenbezeichnung, Triebfahrzeug und Verkehrstage des Zuges auswählen kann. Die Streckenbezeichnung ist dabei schon mit dem Streckennamen vorausgefüllt. Den selben Dialog erreicht man auch mit einem Klick auf `Zug bearbeiten`, damit lassen sich dann nachträglich Züge bearbeiten.

## Fahrplan bearbeiten

Nachdem die Züge angelegt wurden, kann der Fahrplan der einzelnen Züge bearbeitet werden. Dazu öffnet man das Fenster `Bearbeiten > Fahrplan bearbeiten`.

Die Zeitwerte *müssen* im Format `hh:mm` (z.B. 06:16) in die Tabelle eingetragen werden.

{{< figure src="fahrplanfenster.png" title="Fahrplan bearbeiten" >}}

{{< note title="Hinweis" >}}
Dieses Programm befindet sich unter aktiver Entwicklung und ist in einer Art beta-Phase. Daher können Fehler bei der Benutzung des Programms auftreten. Sie sollten daher ab und zu Sicherheitskopien der Fahrplan-Dateien anlegen, um Datenverlust vorzubeugen.
{{< /note >}}
