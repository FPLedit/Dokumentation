---
date: 2016-03-08T21:07:13+01:00
title: Download
nooffline: true
---

**FPledit ist ein Projekt, das primär auf (Modell-)Eisenbahnfreunde abzielt. Die Fahrpläne sind nicht nach den Betriebsrichtlinien irgendeiner Bahngesellschaft gestaltet und sind für den Betriebsdienst nicht geeignet!**

FPLedit ist unter der GNU GPL v3-Lizenz lizenziert:

<iframe src="/files/gplv3.html" style="width:100%; border:1px solid black; height:250px;"></iframe>

**Datenschutz bei der Verwendung von FPLedit:** Bei der programminternen Überprüfung auf Aktualisierungen (`Hilfe > Einstellungen > Überprüfung auf neue Versionen` oder automatisch beim Programmstart) wird die IP-Adresse und der verwendete Betriebssystemtyp des anfragenden Computers an den Server übermittelt. Die IP-Adresse wird nur anonymisiert in Log-Dateien gespeichert; ein Rückschluss auf einzelne Benutzer ist daher nicht möglich. Die automatisierte Übermittlung zur Versionsüberprpüfung beim Programmstart geschieht nur nach Einwilligung des Nutzers. Diese Funktion kann jederzeit über das Programm unter `Hilfe > Einstellungen > Überprüfung auf neue Versionen` deaktiviert werden.

Mit dem Download akzeptieren Sie die oben genannten Bedingungen. <span style="color:red;font-weight:bold;">Bitte Lesen Sie auch die verlinkten Installationshinweise (je nach Betriebssystem), da mich in letzter Zeit viele Fragen dazu erreichen.</span>

<style>
table.download-table {
    display: table;
    font-size: 1em;
    margin: 1em;
    box-sizing: border-box;
}
.download-table td, table.download-table th {
    width: 33.3%;
    text-align: center;
}
.download-table .install-notes {
    font-weight: bold;
    color: red;
}
</style>

<table class="download-table">
    <tr>
        <th>Windows</th>
        <th>Linux</th>
        <th>macOS</th>
    </tr>
    <tr>
        <td colspan="3">
            <a href="/files/fpledit-{{< version >}}.zip" class="downloadbtn"><i class="icon icon-download"></i> Aktuelle Version {{< version >}} für Windows, Linux &amp; macOS</a>
        </td>
        <!--<td>
            <a href="/files/fpledit-{{< version >}}.zip" class="downloadbtn"><i class="icon icon-download"></i> Aktuelle Version {{< version >}} für macOS</a>
        </td>-->
    </tr>
    <tr>
        <td><a class="install-notes" href="install-windows/">Hinweise zur Installation</a></td>
        <td><a class="install-notes" href="install-linux/">Hinweise zur Installation</a></td>
        <td><a class="install-notes" href="install-macos/">Hinweise zur Installation</a></td>
    </tr>
    <tr>
        <td colspan="3">
            <a href="https://github.com/FPLedit/FPLedit/releases">Sourcecode auf GitHub (alle Plattformen)</a>
        <td>
    </tr>
</table>

## Changelog

{{< changelog >}}
