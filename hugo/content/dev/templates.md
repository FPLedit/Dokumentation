---
date: 2018-02-10T18:29:37+02:00
title: Eigene Vorlagen erstellen
nooffline: true
---

Eine weitere Möglichkeit der Erweiterung sind eigene Vorlagen. Vorlagen sind Textdateien mit der Endung `.fpltmpl` in einem Format, ähnlich dem T4-Format, was mit Visual Studio ausgeliefert wird, aber mit **Javascript** anstelle von C#. Im Folgenden wird das Format näher beschrieben.

Damit die Vorlage von FPLedit gefunden wird, muss diese im Ordner `templates/` im Programmverzeichnis gespeichert sein. Daneben kann die Vorlagendatei auch in eine eigene Erweiterung einkompilert werden und somit ohne das zusätzliche Kopieren von Vorlagendateien verteilt werden.

## Präambel
Jede Vorlage muss eine Präambel-Zeile beinhalten. Diese enthält den Anzeigenamen der Vorlage und eine Typangabe. Diese kann bei den aktuellen Standarderweiterungen `bfpl` (Buchfahrplan), `afpl` (Aushangfahrplan) oder `kfpl` (Tabellenfahrplan) sein. Die `version` muss immer 2 sein, der `name` sollte eine Unterscheidbarkeit zulassen; dieser wird dem Benutzer angezeigt.

```nohighlight
<#@ fpledit_template type="bfpl" version="2" name="Test-Buchfahrplan-Template" #>
```

## Textausgaben
Aller Text, der in den Templatedateien steht und *nicht* in den im Folgenden beschriebenen besonderen Tags steht, wird direkt in die Ausgabedatei geschrieben. Dies ist nützlich für die Struktur des Dokuments.

## Javascript-Code in Vorlagen
JS-Code, der nicht ausgegeben aber bei der Generierung ausgeführt wird, steht zwischen `<#` und `#>`. JavaScript steht hier nur in einer nicht näher definiterten, älteren, Sprachversion (in etwa ES5) zur Verfügung. Die Kompatibilität ist daher im Einzelfall zu prüfen.#

Javascript-Kontrollstrukturen (Bedingungen, Schleifen etc.,m aber auch eigene Funktionen!) können von Textausgaben unterbrochen werden. Der Text wird dann bei jedem Durchlauf dieser Struktur ausgegeben. Beispiel: "X" wird nur ausgegeben, wenn `showX == true` (**ACHTUNG**: Javascript ist hier nicht streng typisiert!)

```nohighlight
<# if (showX) { #>
	X
<# } #>
```

Javascript-Code, dessen Rückgabewert ausgegeben werden soll, steht zwischen `<#=` und `#>`, ohne ein Semikolon am Ende des Tags. Das folgende Besipiel gibt den Wert "3" aus.

```nohighlight
<#= 1 + 2 #>
```

In Code-Blöcken können auch global im Template sichtbare Methoden oder Variablen definiert werden.

## .NET-Objekte verwenden

Grundsätzlich können .NET-Typen in Templates verwendet werden. Eine Vorlage kann aus Sicherheitsgründen keine .NET-Typen verwenden, die nicht explizit freigegeben wurden. Alle im Fahrplan-Objektmodell genutzten Klassen sind aber grundsätzlich verfügbar. Die globale Variable `tt` enthält immer eine Kopie des aktuellen Fahrplans als Objektmodell.

Beim Umgang mit .NET-Objekten müssen aber einige Dinge beachtet werden, da wir mit Javascript arbeiten:

### LINQ

LINQ funktioniert nicht so wie erwartet: Die folgenden JS-Methoden können stattdessen verwendet werden:

Aus dem folgenden C#-Code

```csharp
IEnumerable<X> test = ...; // User code
test.Any(); // (1)
test.Where(x => x.Test); // (2)
test.Count(); // (3)
test.Select(x => x.Test2); // (4)
test.First(x => x.Test); // (5)
test.FirstOrDefault(x => x.Test); // (5)
test.Last(x => x.Test); // (6)
test.LastOrDefault(x => x.Test); // (6)
test.TakeWhile(x => x.Test); // (7)
test.Take(8); // (8)
test.SkipWhile(x => x.Test); // (9)
test.Skip(6); // (10)
test.Reverse(); // (11)
test.IndexOf(xy); // (12, nur möglich wenn test auch List<X> o.ä.)
string.Join(",", test);
```

wird der folgende Javascript Code:

```js
var test = ...; // User code
var test_arr = clr_toArray(test); // Must be called on all generic array-like types that are not an array itself.
test_arr.some(); // (1)
test_arr.filter(x => x.Test); // (2)
test_arr.length; // (3)
test_arr.map(x => x.Test2); // (4)
test_arr.first(x => x.Test); // (5, inkludierter Polyfill)
test_arr.last(x => x.Test); // (5, inkludierter Polyfill)
test.takeWhile(x => x.Test); // (7, inkludierter Polyfill)
test.take(8); // (8, inkludierter Polyfill)
test.skipWhile(x => x.Test); // (9, inkludierter Polyfill)
test.skip(6); // (10, inkludierter Polyfill)
test.reverse(); // (11, inkludierter Polyfill)
test.indexOf(xy); // (12)
test.join(",");
```

Die Fehlermeldung `no matching indexer found` weist darauf hin, dass eine nicht unterstützte LINQ-Methode aufgerufen wird, das Array eiegtnlich gar kein Array ist: `clr_toArray` muss bei allen Array-ähnlichen Typen verwendet werden, die aber kein eigentliches Array sind (z.B. `IList<T>`, `List<T>`, `ICollection<T>` o.ä.).

### Nullable<T>

Nullable-Typen werden besonders behandelt. Sie sind im Javscript entweder gleich `null` oder haben ihren Wert ungleich `null`. `HasValue`/`Value` steht nicht zur Verfügung.

```csharp
// C#:
float? pos = entity.Positions.GetPosition(route);
var pos_print = pos.HasValue ? pos.Value.ToString("0.0") : "";
```

```js
// Javascript:
var pos = entity.Positions.GetPosition(route);
var pos_print = pos != null ? pos.toFixed(1) : "";
```

### Weitere Funktionen

FPLedit stellt einige weitere nützliche Funktionen zur Entwicklung von Templates bereit.

```csharp
// C#:
string.IsNullOrEmpty("test"); // (1)
```

```js
// Javascript:
s_isNullOrEmpty("test"); // (1)


// Weitere ggf. nützliche Methoden:
var o = {};
debug(0); // Textuelle Darstellung auf dem Logger.
debug_print(o); // Textuelle Darstellung auf dem Logger.
clr_typename(tt); // Gibt den .NET-Typnamen zurück. (hier: "Timetable")
clr_typefullname(tt); // Gibt den vollen .NET-Typnamen zurück. (hier: "FPLedit.Shared.Timetable")
```

Zur Vorbeugung von XSS stehen die Funktionen `safe_html`, `safe_css_str` und `safe_css_block` zur Verfügung.

Alle [Polyfills können im Quellcode auf GitHub](https://github.com/FPLedit/FPLedit/blob/develop/FPLedit/Templating/TemplatePolyfills.js) eingesehen werden und stehen auch in eigenen Templates zur Vefügung.

## Template-Type spezifischer Code
Jeder Template-Typ stellt weitere Hilfsklassen bereit, die in Templates verwendet werden können.

## Beispieltemplate
Templates aus den Standarderweiterungen bieten einen guten Überblick zu den Möglichkeiten:

* [Standard-Buchfahrplan](https://github.com/FPLedit/FPLedit/blob/develop/FPLedit.Buchfahrplan/Templates/StdTemplate.fpltmpl)
* [Buchfahrplan Zugleitbetrieb](https://github.com/FPLedit/FPLedit/blob/develop/FPLedit.Buchfahrplan/Templates/ZlbTemplate.fpltmpl)
* [Aushangfahrplan (beide Varianten)](https://github.com/FPLedit/FPLedit/blob/develop/FPLedit.Aushangfahrplan/Templates/AfplCommon.fpltmpl)
* [Tabellenfahrplan/Kursbuch](https://github.com/FPLedit/FPLedit/blob/develop/FPLedit.Kursbuch/Templates/KfplTemplate.fpltmpl)
