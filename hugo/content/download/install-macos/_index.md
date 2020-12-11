---
title: "FPLedit auf MacOS"
---

Version 2.2.2 ist erstmals auch mit macOS kompatibel. Vorerst wird dabei das Gtk+3-UI-Toolkit verwendet, das auch für die Linux-Unterstützung verwendet wird. Die macOS-Untersützung ist noch rudimentär und wenig getestet. Gestestet wurde bisher nur auf macOS 10.15.

<!--Es stehen zwei Varianten zur Verfügung: Einmal FPLedit nactiv und FPLedit mit Gtk. Erstere ist besser in das Betriebssystem integriert.-_>

<!--
## FPLedit "nativ"

### Download des Paketes
Für diese Variante steht ein eigenes Programmpaket bereit, das auf der Download-Seite als seperates mac-Paket angeboten wird.

### Abhängigkeiten installieren:
Für die Installation der Mono-Laufzeitumgebung auf macOS-Systemen siehe die [ofizielle Seite des Mono-Projekts](http://www.mono-project.com/download/stable/#download-mac).

### Paket verwendbar machen
Um das Programmpaket verwendbar zu machen, müssen einmalig nach dem Download die folgenden Befehle im Ordener des heruntergeladenen Programmpakets im Terminal ausgeführt werden:

```
xattr -c FPLedit.app
chmod +x FPLedit.app/Contents/MacOS/FPLedit
```

Ohne diese Befehle ist das Programm nicht nutzbar, da FPLedit nicht von Apple signiert wurde bzw. ich das Programmpaket auf meinem Linux-PC erstelle.

Anschließend kann FPLedit mit einem Doppelklick gestartet werden.

-->

## FPLedit mit Gtk+

Hierzu wird das normale Linux/Windows-Paket benötigt. Dadurch kann die Installation z.B. von einem USB-Stick aus unter mehreren Betriebssystem genutzt werden.

### Abhängigkeiten installieren
1. Für die Installation der Mono-Laufzeitumgebung auf macOS-Systemen siehe die [ofizielle Seite des Mono-Projekts](http://www.mono-project.com/download/stable/#download-mac).

2. Weiterehin wird Gtk+3 beötigt: Die Installation erfolgt über Homebrew: `brew install gtk+3`

Möglicherweise können in Zukunft weitere Abhängigkeiten hinzukommen oder Abhängigkeiten wegfallen.

### Installation

Grundsätzlich reicht auch auf macOS das reine Entpacken des ZIP-Ordners. 

{{< include "/download/install-optional-general.md" >}}

{{< include "/download/update-general.md" >}}


Um FPLedit zu starten muss der folgende Befehl ine einem Terminal ausgeführt werden:

```shell
LD_LIBRARY_PATH="/usr/local/lib:/usr/lib" mono ./FPLedit.exe --log-console
```

Alternativ kann dazu auch das folgende Skript verwendet werden: [/fpledit.command](/files/fpledit.command), das im Programmverzeichnis abgelegt und mit `xattr -c ./fpledit.command` freigegeben werden muss.

![FPLedit unter macOS 10.15 Catalina](fpledit-macos.png)
