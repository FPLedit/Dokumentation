---
title: "FPLedit auf MacOS"
nooffline: true
---

Seit FPLedit 2.4.0 ist FPLedit erstmals auch nativ mit macOS kompatibel. Die macOS-Untersützung ist noch rudimentär und wenig bis gar nicht getestet. Getestet wurde bisher nur auf macOS 10.15.

## Download des Paketes
Auf der Download-Seite steht ein separates Programmpaket ausschließlich zur Installation unter macOS bereit.

## Abhängigkeiten installieren:
Es müssen keine besonderen Abhängigkeiten installiert werden, da FPLedit für macOS die .NET 6 Runtime mit paketiert.

### Paket verwendbar machen
Um das Programmpaket verwendbar zu machen, müssen einmalig nach dem Download die folgenden Befehle im Verzeichnis des heruntergeladenen Programmpakets im Terminal ausgeführt werden:

```shell
xattr -c FPLedit.app
chmod +x FPLedit.app/Contents/MacOS/FPLedit
```

Ohne diese Befehle ist das Programm nicht nutzbar, da FPLedit nicht von Apple signiert wurde.

Anschließend kann FPLedit mit einem Doppelklick gestartet werden.

![FPLedit unter macOS 10.15 Catalina](fpledit-macos.png)
