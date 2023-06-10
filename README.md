# Dokumentation zu FPLedit

## Einrichtung der Umgebung

Die Erzeugung der Dokumentation basiert aktuell auf einer (sehr alten) Version v0.69.2 von [hugo](https://github.com/gohugoio/hugo).
Der Download kann hier erfolgen: [hugo_extended_0.69.2_Linux-64bit.tar.gz](https://github.com/gohugoio/hugo/releases/download/v0.69.2/hugo_extended_0.69.2_Linux-64bit.tar.gz).

Die alte Version von hugo entpacken und in das Verzeichnis `podman/` ablegen, und als `hugo` benennen. Mit der hier enthaltenen Checksummen-Datei kann überprüft werden, ob die richtige Version heruntergeladen wurde (diese Dokumentation benötigt zwingend die `-extended`-Version!)

Anschließend kann das Container-Image gebaut werden: Dieses enthält alle nötigen Tools:
* dotnet als build-Tool (ehemals msbuild)
* pandoc und texlive zur Generierung von PDF-Dokumentationen

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
Hugo Static Site Generator v0.69.2-EC9DCF30/extended linux/amd64 BuildDate: 2020-04-24T07:57:53Z

[cont]$ dotnet build ./offline.proj /p:OutputPath=/work/public
```

Der Befehl `hugo version` dient nur der Kontrolle, ob `hugo` korrekt installiert wurde, und muss nicht jedes Mal ausgeführt werden.

## Ausgabestruktur

Die Dateien `offline-doc.html`, `oflline-idx.html`, `offline-latex.tex` können nach der Generierung aus dem Ausgabeverzeichnis `public/` gelöscht werden.

Die Datei `Dokumentation.pdf` is auch nicht zum Upload in das Webroot gedacht, und kann/soll in das FPLedit-Repo verschoben werden.
