---
title: Installationshinweise (Windows)
nooffline: true
---

Diese Anleitung beschreibt die Installation von FPLedit auf **Windows**.

## Installation der Abhnhängigkeiten (.NET 6)
Seit FPLedit Version 2.5.0 muss die *.NET 6 Runtime* installiert werden: [Download .NET 6 Runtime](https://dotnet.microsoft.com/download/dotnet/6.0/runtime?initial-os=windows).

Diese Installation muss nur einmalig pro PC erfolgen und sollte anschließend automatisch über Microsoft Update (Option „Updates für andere Microsoft-Produkte installieren“ in Windows Update) aktualisiert werden.

Das für ältere FPLedit-Versionen genutzte .NET 5 wird nun *nicht mehr unterstützt*; ebensowenig das mit Windows zusammen ausgelieferte .NET 4.x; und auch nicht das neuere .NET 7.

## Entpacken von FPLedit

<img src="deblock.png" style="float:left; margin: 10px; max-width:200px;" />

Vor der Installation muss **unbedingt** die heruntergeladene ZIP-Datei für Windows entsperrt werden. Dazu `Rechtsklick > Eigenschaften` und dort unten den Haken bei `Zulassen` setzen (siehe Screenshot links). Anschließend kann man die ZIP-Datei an einen beliebigen Ort entpacken und die Datei `FPLedit.exe` mit einem Doppelklick starten. Dieser Ordner kann auch nachträglich noch verschoben werden.

{{< include "/download/install-optional-general.md" >}}

## Dateitypzuordnung
FPLedit speichert die Fahrplandaten in einem Dateiformat mit der Endung `.fpl`. Um alle solchen Dateien immer mit einem Doppelklick mit FPLedit öffnen zu können, gehen Sie wie folgt vor:
1. Rechtsmausklick auf eine vorhandene `.fpl`-Datei, `Eigenschaften` auswählen.
2. Schaltfläche `Ändern` neben der vorhandenen Dateitypzuordnung auswählen.
3. Im anschließenden Dialog die ausführbare Datei von FPLedit (`FPLedit.exe` im Programmverzeichnis) auswählen

{{< include "/download/update-general.md" >}}

## Unterstützte Plattformen
FPLedit sollte mit .NET 6 wohl noch unter Windows 7 und 8.1 laufen. Das kann sich aber jederzeit ändern, ich habe keine Möglichkeit mehr unter diesen (von Microsoft abgekündigten) Versionen zu testen. Getestet wird aktuell ausschließlich auf Windows 10 (64-bit).
