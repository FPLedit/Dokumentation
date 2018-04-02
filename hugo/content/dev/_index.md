---
date: 2017-07-02T18:29:37+02:00
title: Erweiterungen entwickeln
weight: 60
#needshighlight: true
nooffline: true
---

Diese Seite bietet einen kurzen Überblick über die Entwicklung von Erweiterungen für FPLedit.

{{< note title="Zielgruppe" >}}
Zur Entwicklung von Erweiterung sind erste Programmierkenntnisse erforderlich. Wenn Sie Ideen oder Anregungen haben und nicht gleich eine eigene Erweiterung entwickeln wollen, können Sie sich auch gerne per Mail (Adresse siehe Impressum) bei mir melden.

Die hier beschriebenen Konzepte werden für den gewöhlichen Gebrauch von FPLedit nicht benötigt!
{{< /note >}}


> **Achtung**: Diese Anleitung ist zur Zeit auf dem Stand von FPLedit Version 1.5.3. Möglicherweise ist sie nicht 100%ig aktuell. In zukünftigen Versionen werden möglicherweise die Programmschnittstellen geändert. In der [Änderungshistorie](changelog/) finden sich weitere Hinweise.

FPLedit basiert auf .NET und ist in der Programmiersprache C# geschrieben, daher ist dies auch die am besten für die Erweiterungsentwicklung geeignete Sprache. Zur Entwicklung mit C# ist die kostenlose Entwicklungsumgebung [Visual Studio Community](https://www.visualstudio.com/de/) von Microsoft gut geeignet, aber auch Alternativen sind verwendbar.

Alle Erweiterungen müssen einen Verweis auf die Assembly `FPLedit.Shared.dll` enthalten. Alle im Folgenden verwendeten Typen stammen aus dieser Assembly.

Der Code aus diesen Beispielen findet sich auf GitHub: [FPLedit-TestPlugin](https://github.com/ManuelHu/FPLedit-TestPlugin). Der dort verwendete Code darf gerne als Basis für eigene Erweiterungen verwendet werden.

## Vorlagen
Zum Entwickeln von Vorlagen gibt es sein Version 2.0 eine eigene [Unterseite](templates/).

## Dateiformat
Bevor es hier an die Entwicklung einer eigenen Erweiterung geht, möchte ich hier kurz das von FPLedit verwendete Dateiformat bzw. seine Repräsentation als Objektmodell beschreiben. Jedes Objekt ist einem entsprechenden XML-Element zugeordnet. Daher haben alle von `Entity` erbenden Klassen `Attributes` (=> XML-Attribute) und `Children` (=> XML-Kindelemente).

![Diagramm des Dateiformats](fileformat.png)

## Hauptklasse definieren
Die Hauptklasse eines Plugins, in der Regel heißt diese `Plugin`, muss zwingend die Schnittstelle `FPLedit.Shared.IPlugin` implementieren. Damit muss auch zwingend eine Methode `Init` vorhanden sein. Weiterhin muss die Klasse auch ein Attribut in der Form `[Plugin("name", "minVer")]` aufweisen, damit die Erweiterung von FPLedit erkannt wird. `minVer` ist dabei die minimale Version von FPLedit, mit der das Plugin kompatibel ist. Ein einfaches Plugin sieht dann so aus:

```csharp
using FPLedit.Shared;

namespace TestPlugin
{
    [Plugin("TestPlugin", "2.0.0", Author = "Autorenname")]
    public class Plugin : IPlugin
    {
        public void Init(IInfo info)
        {
            // Code zur Initialisierung der Erweiterung
        }
    }
}
```

Die Autorenangabe kann auch weggelassen werden: `[Plugin("TestPlugin")]`.

## Das `IInfo`-Objekt
Das an die `Init`-Methode des Plugins übergebene `IInfo`-Objekt enthält alle Funktionen, mit denen FPLedit angepasst werden kann. Einige dieser Möglichkeiten werden im Folgenden beschrieben:

### Exporter
Exporter waren ursprünglich das zentrale erweiterbarre Feature von FPLedit. Ein Exporter erzeugt Dateien eines beliebigen Dateityps aus den vorhandenen Fahrplandaten. Exporter implementieren immer die Schnittstelle `IExport`. Der `Filter` gibt an, welcher Dateityp vom Exportr unterstützt wird; er sollte im Format `Beschreibung (*.Endung)|*.Endung` sein.

```csharp
using FPLedit.Shared;
using System.IO;

namespace TestPlugin
{
    public class TestExport : IExport
    {
        public string Filter => "Fahrplanname als Textdatei (*.txt)|*.txt";

        public bool Export(Timetable tt, string filename, IInfo info)
        {
            var content = tt.TTName;
            File.WriteAllText(filename, content);
            return true; // Gibt an, ob der Exportvorgang erfolgreich war.
        }
    }
}
```

Damit der Exporter auch verwendet werden kann, muss er in der `Init`-Methode registriert werden:

```csharp
info.Register<IExport>(new TestExport());
```

### Importer
Änhlich wie bei den Exportern wird auch bei den Importern verfahren. Hier muss die Schnittstelle `IImport`

```csharp
using FPLedit.Shared;
using System.IO;

namespace TestPlugin
{
    public class TestImport : IImport
    {
        public string Filter => "Fahrplanname als Textdatei (*.txt)|*.txt";

        public Timetable Import(string filename, ILog logger)
        {
            var tt = new Timetable();
            tt.TTName = File.ReadAllText(filename);
            return tt;
        }
    }
}
```

Und natürlich muss auch ein Importer registriert werden:
```csharp
info.Register<IImport>(new TestImport());
```

### Menüs & Dateihandhabung
Das User Interface von FPLedit ist mit der .NET-Technologie Windows Forms entwickelt. Zum Hinzufügen von Menüs muss daher auch diese Technologie verwendet werden. Eine Referenz auf das Hauptmenü ist `info.Menu`.

Untermenüs können einfach wie auch unter Winforms angelegt werden. Auch wenn die Manipulation des gesamten Menüs möglich ist, sollten Erweiterungen nur eigene Menüs hinzufügen:

```csharp
var item = new ToolStripMenuItem("Test");
info.Menu.Items.Add(item);

// Einen Untereintrag hinzufügen:
var subItem = item.DropDownItems.Add("Bla");
// Standardmäßig deaktivieren, optional:
subItem.Enabled = false;
```

Der Zustand der aktuellen Datei ist über die Eigenschaft `info.FileState` abrufbar. Über einige Felder wird der aktuelle Dateizustand beschrieben:

* `FileState.Opened`: Datei geöffnet oder neu angelegt,
* `FileState.Saved`: Datei im aktuellen Datenstand gespeichert,
* `FileState.FileName`: Falls vorhanden, Dateiname der aktuellen Datei,
* `FileState.LineCreated`: Die Datei enthält mindestens zwei Bahnhöfe,
* `FileState.TrainsCreated`: Die Datei enthält mindestens einen Zug.

Das Event `FileStateChanged` wird immer dann aufgerufen, wenn sich der Zustand der Datei ändert. Darüber können beispielsweise Menüelemente an den Zustand der Datei gekoppelt werden:

```csharp
info.FileStateChanged += (s, e) => {
    // Nur aktivieren, wenn Datei geöffnet
    subItem.Enabled = e.FileState.Opened;
};
```

Der Zustand des `FileState`-Objekts darf nicht verändert werden! Erweiterungen können aber anweisen, dass die aktuelle Datei als verändert markiert wird. Dies führt dann ohne ein darauf folgendes Speichern zum Anzeigen einer Meldung beim Schließen des Programms. Vor der Aktion muss aber bereits angewiesen werden, dass die Daten zum späteren eventullen Rückgängig-machen zwischengespeichert werden.

```csharp
info.StageUndoStep(Timetable);

// Hier den Fahrplan verändern, z.B.
Timetable.TTName = "Test123";

// Aktuelle Datei als geändert markieren
info.SetUnsaved();
```

Oft wird es für Erweiterungen benötigt, dass direkt die Daten des Fahrplans bearbeitet werden müssen. Damit dabei auch das Rückgängig-Machen von Änderungen (z.B. über einen Abbrechen-Button) funktioniert, können die Daten zuvor gesichert und bei Bedarf der alte Zustand wiederhergestellt werden.

```csharp
// VOR der Veränderung
info.BackupTimetable();

// Hier können die Daten im info.Timetable verändert werden

bool ok = ... // Hier Nutzerinteraktion
if (ok)
    info.ClearBackup();
else
    info.RestoreTimetable();
```

### Dialoge
> *Diese Funktion ist neu in Version 1.5.0, die Dokumentation muss an dieser Stelle noch ergänzt werden*

### Log-Ausgaben
Das `IInfo`-Objekt enthält ein Attribut `Logger`. Darüber können Meldungen in das Textfenster des Hauptprogramms ausgegeben werden:

```csharp
info.Logger.Info("Das ist nur eine Meldung");
info.Logger.Warning("Die Warnmeldung ist auf Windows-Systemen gelb");
info.Logger.Error("Fehlermeldungen sind rot");
```

Möglicherweise werden diese Daten nicht nur im Hauptfenster angezeigt, sondern auch in eine Log-Datei im Temp-Verzeichnis geschrieben.

### Einstellungen
Die Anwendugnseinstellungen werden wie in anderen .NET-Programmen auch, in der `App.config`-Datei gespeichert. Einzelne Erweiterungen müssen sich aber nicht um die dahinter stehenden Details kümmern, sondern können die Abstraktion `info.Settings` verwenden.

```csharp
// Wert ermitteln:
bool a = info.Settings.Get<bool>("test-bool", false);
// Wert setzen:
info.Settings.Set("test-bool", true);
// Werte ändern sich nicht, sondern müssen neu abgefragt werden:
bool b = info.Settings.Get<bool>("test-bool", false);
info.Logger.Info("a == b: " + (a == b));
// Sie lassen sich auch wieder entfernen:
info.Settings.Remove("test-bool");
```

### Spezielle Dateifunktionen
Neben dem oben beschriebenen Ermittelen des Dateizustands gibt es auch noch die Möglichkeit diesen zu verändern.

```csharp
// Öffnet den "Datei öffnen"-Dialog:
info.Open();
// Speichert die Datei normal (d.h. bei bekanntem Pfad ohne Dialog):
info.Save(false);
// Öffnet zwingend den "Speichern unter"-Dialog:
info.Save(true);
// Lädt die Datei am aktuellen Speicherort neu
// z.B. nach Änderungen durch externe Programme verwendbar:
info.Reload();
```

Über die Funktion `GetTemp` können Dateinamen temporärer Dateien generiert werden:
```csharp
// Gibt den absoluten Pfad der Datei %TEMP%\fpledit\abc.xyz zurück:
var fn = info.GetTemp("abc.xyz");
```
