---
date: 2016-03-08T21:07:13+01:00
title: Installationshinweise
nooffline: true
---

Diese Anleitung beschreibt die Installation von FPLedit auf **Windows**. Für die Installation unter Linux siehe [FPLedit unter Linux](/download/linux/)!

Vor der Installation muss unbedingt die heruntergeladene ZIP-Datei für Windows entsperrt werden. Dazu `Rechtsklick > Eigenschaften` und dort unten den Haken bei `Zulassen` setzen. Anschließend kann man die ZIP-Datei an einen beliebigen Ort entpacken und die Datei `FPLedit.exe` mit einem Doppelklick starten. Dieser Ordner kann auch nachträglich noch verschoben werden.

Informationen zu neuen verfügbaren Versionen erhält man im Programm unter `Hilfe > Info > Auf neue Version prüfen` oder seit Version 1.2.0 durch eine Benachrichtigung beim Programmstart. Diese lässt sich ebenfalls unter `Hilfe > Info` dekativieren.

## Optionale weiterführende Einrichtung

Zur richtigen Darstellung der Buchfahrpläne wird auch noch die systemweit zu installierende Schrift [DIN 1451 Mittelschrift alt](http://www.peter-wiegel.de/alteDin1451.html) von Peter Wiegel benötigt. Die Schriftart der Fahrpläne kann aber auch in eine andere umgeändert werden.
Zum Generieren von Bildfahrplänen wird zusätzlich das Programm [jTrainGraph](https://jtraingraph.de/) benötigt, die Installation kann ins gleiche Verzeichnis erfolgen.

Fahrplandateien (`.fpl`) können mit FPLedit bei Doppelklick geöffnet werden, indem sie per Rechtsmausklick auf die Datei in den `Eigenschaften` auf die Schaltfläche `Ändern` klicken und im anschließenden Dialog die ausführbare Datei von FPLedit (`FPLedit.exe` im Programmverzeichnis) auswählen.

## Update auf neue Version

Zum Update auf eine neue FPLedit-Version reicht es grundsätzlich, die auf dieser Website bereitgestellte ZIP-Datei wie oben beschrieben über die alte Version neu zu entpacken. Dabei gehen aber ggf. programmweite Einstellungen verloren. Die Datei `fpledit.conf` kann aber vor dem Entpacken gesichert werden und anschließend wieder über die Version aus dem Programmpaket kopiert werden. So bleiben alle Einstellungen erhalten.
