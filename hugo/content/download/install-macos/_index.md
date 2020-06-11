---
title: "FPLedit auf MacOS"
---

Version 2.2.2 ist erstmals auch mit macOS kompatibel. Vorerst wird dabei das Gtk+3-UI-Toolkit verwendet, das auch für die Linux-Unterstützung verwendet wird. Die macOS-Untersützung ist noch rudimentär und wenig getestet. Mit einer zukünfigen Version wird ggf. die Mac-Unterstützung noch weiter verbessert / nativer gestaltet.

## Abhängigkeiten installieren
1. Für die Installation der Mono-Laufzeitumgebung auf macO-Systemen siehe die [ofizielle Seite des Mono-Projekts](http://www.mono-project.com/download/stable/#download-mac).

2. Weiterehin wird Gtk+3 beötigt: Die Installation erfolgt über Homebrew: `brew install gtk+3`

Möglicherweise können in Zukunft weitere Abhängigkeiten hinzukommen oder Abhhängigkeiten wegfallen.

## Installation

Grundsätzlich reicht auch auf macOS das reine Entpacken des ZIP-Ordners. 

{{< include "/download/install-optional-general.md" >}}

{{< include "/download/update-general.md" >}}


Um FPLedit zu starten muss der folgende Befehl ine einem Terminal ausgeführt werden:

```shell
LD_LIBRARY_PATH="/usr/local/lib:/usr/lib" mono ./FPLedit.exe --log-console
```

Alternativ kann dazu auch das folgende Skript verwendet werden: [/fpledit.command](/files/fpledit.command), das im Programmverzeichnis abgelegt und mit `xattr -c ./fpledit.command` freigegeben werden muss.

![FPLedit unter macOS 10.15 Catalina](fpledit-macos.png)
