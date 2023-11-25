---
title: Upgrade-Hinweise betreffend `libgdiplus` zwischen FPLedit 2.5.1 und 2.6.0
nooffline: true
---

FPLedit kommt ab Verison 2.6.0 auf nicht-Windows-Systemen (Linux oder macOS) ohne eine vorherige Installation von `libgdiplus` aus. Diese Bibliothek wurde vorher für die dynamische Bildfahrplanvorschau genutzt.

## Linux

Für die dynamische Bildfahrplanvorschau wurde bis Version 2.5.1 zusätzlich das Paket `libgdiplus` benötigt, das bei den meisten Linux-Distributionen unter diesem oder einem ähnlichen Namen verfügbar ist und daher nicht mit FPLedit ausgeliefert werden.

Nach einem Update auf Version 2.6.0 kann – sollte dieses Paket nicht für andere Software auf dem Gerät genutzt werden – beides wieder entfernt werden.

## macOS

Für die dynamische Bildfahrplanvorschau wurde bis Version 2.5.1 das [Homebrew](https://brew.sh/)-Paket `mono-libgdiplus` benötigt.

Nach einem Update auf Version 2.6.0 kann – sollten Homebrew und dieses Paket nicht für andere Software auf dem Mac genutzt werden – beides wieder entfernt werden.
