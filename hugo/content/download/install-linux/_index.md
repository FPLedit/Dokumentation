---
date: 2016-03-08T21:07:13+01:00
title: FPLedit auf Linux
nooffline: true
---

FPLedit ist seit Version 2.0.0 recht gut mit Linux kompatibel und wird auch aktiv getestet. Dabei wird auf die Mono-Laufzeitumgebung und die Gtk3-Plattform aufgebaut. Seit Version 2.2.0 ist Linux (bis 2.2.3 unter Ubuntu, später unter Fedora 😀) sogar das Hauptsystem auf dem FPLedit entwickelt wird!

## Abhängigkeiten installieren
Für die Installation der Mono-Laufzeitumgebung auf Linux-Distributionen siehe die [ofizielle Seite des Mono-Projekts](http://www.mono-project.com/download/stable/#download-lin).

{{< warning title="Unterstützte Mono-Versionen / .NET Core" >}}
Regelmäßig wird FPLedit nur mit der jeweils aktuellen Mono-Version getestet, die in den Repositories des Projekts verfügbar sind. Pakete in den Repositories der einzelnen Linux-Distributionen sind ggf. *sehr* viel älter und enthalten möglicherweise Fehler.

Bei älteren Versionen ist es ggf. nötig die Datei `lib/Eto.Wpf.dll` aus dem entpackten Programmverzeichnis zu löschen. Dies ist nötig, wenn FPLedit gar nicht startet.

FPLedit ist aktuell explizit nicht mit .NET Core kompatibel. In Zukunft werde ich ggf. eine FPledit-Variante für .NET Core anbieten.
{{< /warning >}}

Wenn Mono nur für FPLedit verwendet werden soll, genügt derzeit die Installation der folgenden Pakete (unter Ubuntu/anderen Debian-basierten Distros):

```nohighlight
mono-runtime mono-devel
```

Möglicherweise können in Zukunft weitere Abhängigkeiten hinzukommen.

## Installation
Grundsätzlich reicht auch auf Linux das reine Entpacken des ZIP-Ordners. Die Datei `lib/Eto.Wpf.dll` im Programmverzeichnis kann und sollte auch gelöscht werden, da diese nur auf Windows benötigt wird und ggf. in bestimmten Situationen für Probleme sorgen kann. Um einen möglichst reibungslosen Betrieb von FPLedit unter Linux zu ermöglichen, ist vom FPLedit Team ein Shell-Skript entwickelt worden, das hier heruntergeladen werden kann: [/fpledit.sh](/files/fpledit.sh).

{{< include "/download/install-optional-general.md" >}}

{{< include "/download/update-general.md" >}}

## Andere Bedienung: Fahrplaneditoren
Unter Linux ist die Bedienung der Fahrplaneditoren (sowohl für lineare als auch für Netzwerkfahrpläne) anders als unter Windows. Felder müssen erst per Doppelklick zur Eingabe geöffnet werden. Ein einfacher Klick neben das Feld oder {{< kbd "Enter" >}} schließt das Eingabefeld wieder und die Eingabe wird übernommen.

![Editorfenster (hier lineare Strecke) unter Linux](editor-linux.png)

![Eingabemodus des Editors unter Linux](editor-eingabe.png)

Zusätzlich stehen aber weitere Tastaturkürzel zur Verfügung:

* {{< kbd "Pos1" >}} wählt das erste Feld aus
* {{< kbd "Enter" >}} beendet den Eingabemodus
* {{< kbd "Tab" >}} wechselt ein Feld nach rechts
* {{< kbd "Strg+Tab" >}} wechselt ein Feld nach links

Wenn Felder nur über die Tastatur ausgewählt werden, dann funktionieren bei der Eingabe nur die Buchstaben, Ziffern, Punktzeichen und die Löschtaste (also vor allem keine Pfeiltaste um innerhalb eines Feldes zu navigieren)!
