# Dokumentation zu FPLedit

## Einrichtung der Umgebung

Die Erzeugung der Dokumentation basiert aktuell auf einer alten Version v0.119.0 von [hugo](https://github.com/gohugoio/hugo).
Der Download kann hier erfolgen: [hugo_extended_0.100.2_linux-amd64.tar.gz](https://github.com/gohugoio/hugo/releases/download/v0.119.0/hugo_extended_0.119.0_linux-amd64.tar.gz).

Diese Dokumentation benötigt zwingend die `-extended`-Version!

Dass Container-Image gebaut werden: Dieses enthält alle nötigen Tools:
* dotnet als build-Tool
* pandoc und texlive zur Generierung von PDF-Dokumentationen
* hugo in der richtigen Version

Dazu ausführen:
```shell
[host]$ cd podman
[host]$ podman build --isolation=rootless --net=private -f ./Containerfile -t fpledit-docbuild --userns=container --cap-drop=NET_ADMIN,NET_BIND_SERVICE,SYS_CHROOT,SETPCAP,SETFCAP,SYS_ADMIN,BPF
```


## Dokumentation generieren

Mit dem erzeugten Containerabbild kann nun die Erzeugung der HTML und PDF-Ausgabedateien angestoßen werden:
```
[host]$ podman run -it --rm  --network=none --log-driver=none --userns=keep-id -v "$PWD":/work:ro -v "$PWD/public":/work/public:rw -v "$PWD/resources":/work/resources:rw --security-opt label=type:container_runtime_t localhost/fpledit-docbuild

[cont]$ hugo version
hugo v0.119.0-b84644c008e0dc2c4b67bd69cccf87a41a03937e+extended linux/amd64 BuildDate=2023-09-24T15:20:17Z VendorInfo=gohugoio

[cont]$ dotnet build ./offline.proj /p:OutputPath=/work/public
```

Der Befehl `hugo version` dient nur der Kontrolle, ob `hugo` korrekt installiert wurde, und muss nicht jedes Mal ausgeführt werden.

## Ausgabestruktur

Die Dateien `offline-doc.html`, `oflline-idx.html`, `offline-latex.tex` können nach der Generierung aus dem Ausgabeverzeichnis `public/` gelöscht werden.

Die Datei `Dokumentation.pdf` is auch nicht zum Upload in das Webroot gedacht, und kann/soll in das FPLedit-Repo verschoben werden.
