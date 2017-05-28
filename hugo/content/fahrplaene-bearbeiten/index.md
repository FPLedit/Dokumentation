---
date: 2016-10-05T18:29:37+02:00
title: Fahrpläne bearbeiten
weight: 10
---

Zu den grundlegenden Funktionen von FPLedit gehört das Erstellen und Bearbeiten der Fahrpläne. Dies gliedert sich in drei Bereiche. Zuerst muss die Strecke erstellt werden, danach können Züge hinzugefügt werden und die Fahrpläne bearbeitet werden. Diese Funktionen setzen die aktivierte Standarderweiterung voraus.

{{< note title="Beispielfahrplan" >}}
Den in dieser Anleitung erstellten Fahrplan der Strecke Pirmasens Nord - Pirmasens Hbf in der Südpfalz kann man [hier](/files/kbs_672.fpl) herunterladen.
{{< /note >}}

## Strecke bearbeiten

Nachdem man mit `Datei > Neu` einen neuen Fahrplan angelegt hat, kann unter dem Menüpunkt `Bearbeiten > Strecke bearbeiten` die Strecke bearbeitet werden. Die Strecke enthält alle Bahnhöfe, sie kann aber nur linear (d.h. ohne Veruweigungen oder Ringschlüsse) sein.

Durch einen Klick auf `Neue Station` (<kbd>Strg</kbd>+<kbd>N</kbd>) kann man durch Eingabe von Bahnhofsnamen und Streckenkilometer einen neuen Bahnhof anlegen, mit `Station bearbeiten` (<kbd>Strg</kbd>+<kbd>B</kbd>) können nachträglich die Eigenschaften einer Station wieder geändert werden. Mit dem Button `Station löschen` (<kbd>Entf</kbd>) löscht man die selektierte Station wieder.

Mit der Schaltfläche `Strecke laden` (<kbd>Strg</kbd>+<kbd>L</kbd>) lässt sich die Strecke aus einem anderen Fahrplan bzw. einer aus jTrainGraph exportierten Streckendatei (`.str`) laden, so lange noch keine eigenen Stationen angelegt wurden.

![Streckenfenster](streckenfenster.png)

Nicht möglich sind Streckennetze (z.B. mit einer abzweigenden Nebenbahn) oder ringförmige Strecken. Für Netze wäre es möglich, mehrere Fahrplandateien der einzelnes Äste anzulegen.

## Züge anlegen

Wenn eine Strecke angelegt wurde, ist der Menüpunkt `Bearbeiten > Züge bearbeiten` nicht mehr ausgegraut. In diesem Fenster lassen sich die Züge, die auf der Strecke verkehren, bearbeiten.

Die Züge sind nach Fahrtrichtung geordnet, diese kann nachträglich auch nicht mehr geändert werden! Durch einen Klick auf `Neuer Zug` (<kbd>Strg</kbd>+<kbd>N</kbd>) bei der jeweiligen Fahrtrichtung, öffnet sich ein Fenster in dem man Name, Streckenbezeichnung, Triebfahrzeug und Verkehrstage des Zuges auswählen kann. Den selben Dialog erreicht man auch mit einem Klick auf `Zug bearbeiten` (<kbd>Strg</kbd>+<kbd>B</kbd>), damit lassen sich dann nachträglich Züge bearbeiten. Das Triebfahrzeug lässt sich dabei aus einer Liste aller in dieser Fahrplandatei verwendeten Triebfahrzeuge auswählen. Züge lassen sich natürlich auch mit dem entsprechenden Button bzw. mit <kbd>Entf</kbd> löschen.

Bei der Bearbeitung der Verkehrstage eines Zuges können die folgenden Tastenkürzel verwendet werden:

* <kbd>Strg</kbd>+<kbd>A</kbd> Alle Tage anwählen
* <kbd>Strg</kbd>+<kbd>W</kbd> Verkehrt nur Werktags (Mo-Sa)
* <kbd>Strg</kbd>+<kbd>Shift</kbd>+<kbd>W</kbd> Verkehrt nur erktags ohne Samstag
* <kbd>Strg</kbd>+<kbd>S</kbd> Verkehrt nur Sonntags
* <kbd>Strg</kbd>+<kbd>0</kbd> Keine Tage anwählen

![Zugfenster](zugfenster.png)

## Fahrplan bearbeiten

Nachdem die Züge angelegt wurden, kann der Fahrplan der einzelnen Züge bearbeitet werden. Dazu öffnet man das Fenster `Bearbeiten > Fahrplan bearbeiten`. Hier können die Fahrtzeiten der Züge bearbeitet werden. Eine Zeile entspricht dabei dem Zug, dessen Name links angezigt wird. Alle Spalten (außer der ersten mit dem Zugnamen), entsprechen einer Ankunfts- bzw. Abfahrtszeit am Bahnhof, der oben in der Kopfzeile angezeigt wird.

**WICHTIG:** Die Zeitwerte *müssen* entweder im Format `hh:mm` (z.B. 06:16) oder im Format `hhmm` (z.B. 1515 für 15:15) in die Tabelle eingetragen werden. Das Programm warnt, wenn falsche Werte eingegeben wurden.

Neu in v1.3.0: Bei Ankünften kann festgelegt werden, ob der Zug vor der Trapeztafel halten muss. Dazu muss die entsprechende Zelle in der Tabelle ausgewählt werden und anschließend mit der Schaltfläche unten links oder mit der Taste <kbd>T</kbd> der Trapeztafelhalt aktiviert werden. Auf dem gleichen Weg wird er auch wieder deaktiviert.

![Fahrplan bearbeiten](fahrplanfenster.png)

{{% beta %}}
