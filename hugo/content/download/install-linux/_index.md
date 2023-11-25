---
title: FPLedit auf Linux
nooffline: true
---

FPLedit ist seit Version 2.0.0 recht gut mit Linux kompatibel und wird auch aktiv getestet. Dabei wird auf die .NET-Laufzeitumgebung und die Gtk3-Plattform aufgebaut. Seit Version 2.2.0 ist Linux sogar das Hauptsystem auf dem FPLedit entwickelt wird!

## Abhängigkeiten installieren (.NET 6)
Für die Installation der .NET 6-Runtime auf Linux-Distributionen siehe die [ofizielle Seite von Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime?initial-os=linux). Eine Installation ist damit auf den meisten Linux-Distributionen (Ubuntu, Fedora, Debian, openSUSE) in einer halbwegs aktuellen Version möglich. Es wird auf allen Plattformen in der Regel nur das Paket `dotnet-runtime-6.0` benötigt.

{{< warning title="Ausschließliche Unterstützung von .NET 6" >}}
.NET 6 wird nach der Installation bei den meisten Distributionen über den Paketmanager aktuell gehalten und sollte insgesamt stabiler als das alte Mono-Framework sein. Andere .NET-Versionen werden daher prinzipbedingt nicht unterstützt, auch keine aktuelleren (z.B. das 2022 erschienene .NET 7.0). Dafür muss jeweils eine neue FPLedit-Version veröffentlicht werden.

FPLedit ab Version 2.4.0 ist **ausdrücklich nicht mehr mit Mono kompatibel**!
{{< /warning >}}

## Installation
Grundsätzlich reicht auch auf Linux das reine Entpacken des ZIP-Ordners. Das Programm kann mit dem Befehl `./FPLedit` im Programmverzeichnis gestartet werden.

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
