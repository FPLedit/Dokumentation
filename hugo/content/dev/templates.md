---
date: 2018-02-10T18:29:37+02:00
title: Vorlagen
#needshighlight: true
nooffline: true
---

Eine weitere Möglichkeit der Erweiterung sind eigene Vorlagen. Vorlagen sind Textdateien mit der Endung `.fpltmpl` in einem Format, ähnlich dem T4-Format, was mit Visual Studio ausgeliefert wird. Im Folgenden wird das Format näher beschrieben.

Damit die Vorlage von FPLedit gefunden wird, muss diese im Ordner `templates/` im Programmverzeichnis gespeichert sein. Daneben kann die Vorlagendatei auch in eine eigene Erweiterung einkompilert werden und somit ohne das zusätzliche Kopieren von Vorlagendateien verteilt werden.

## Präambel
Jede Vorlage muss eine Präambel-Zeile beinhalten. Diese enthält den Anzeigenamen der Vorlage und eine Typangabe. Diese kann derzeit `bfpl`, `afpl` oder `kfpl` sein.

```nohighlight
<#@ fpledit-template type="bfpl" name="Test-Buchfahrplan-Template" #>
```

## Verweise auf andere Assemblies
Um beispielsweise auf das Datenmodell oder Funktionen einer Erweiterung zurückgreifen zu könnnen, muss die Vorlage die entsprechenden Assemblies referenzieren. Für die Standarderweiterungen wären es z.B. diese Dateinamen:

* Buchfahrpläne: `FPLedit.Buchfahrplan.dll`
* Aushangfahrpläne: `FPLedit.Aushangfahrplan.dll`
* Kursbuchfahrpläne: `FPLedit.Kursbuch.dll`

Mit der folgenden Zeile wird eine der drei Dateien eingebunden:

```nohighlight
<#@ assembly FPLedit.Buchfahrplan.dll #>
```

Das alleinige Laden der Assemblies reicht aber nicht aus, sondern die Namespaces müssen auch Importiert werden (ähnlich dem C#-using):

```nohighlight
<#@ import FPLedit.Buchfahrplan.Templates #>
<#@ import FPLedit.Buchfahrplan.Model #>
```

## Ausgaben
Aller Text, der in den Textdateien steht und nicht in besonderen Tags steht, wird direkt in die Ausgabedatei geschrieben.

## C#-Code in Vorlagen
C#-Code, der nicht ausgegeben wird, steht zwischen `<#` und `#>`. C# steht in Templates nur in der Sprachversion 5 zur Verfügung, neuere (C#6 oder C#7) Features wie die Definition von Methoden in Methoden oder das Verwenden des Pfeiloperators (`=>`) zur Methodendefinition können daher **nicht** genutzt werden.

```nohighlight
<#
	if (entity != stations.Last() && tt.Type == TimetableType.Network) {
		var sta1 = stations[stations.IndexOf(entity) + 1];
		route = entity.Routes.Where(r => sta1.Routes.Contains(r)).ToArray()[0];
	}
	var pos = entity.Positions.GetPosition(route);
#>
```

Aller C#-Code (mit Ausnahme der Methodendefinition unten) darf nur Code enthalten, der in einer normalen C#-Methode gültig wäre.

C#-Code, dessen Rückgabewert ausgegeben werden soll, steht zwischen `<#=` und `#>`.

```nohighlight
<#= 1 + 2 #>
```

## Methoden definieren
Zur Wiederverwendung von Code können Methoden verwendet werden. Nach `<#@ define` folgt eine normale C#-Methodendefinition. Nach der Methodendefinition muss der Block mit `#>` geschlossen werden.

```nohighlight
<#@ define string X(int y)
{
    return "Test " + y;
} #>
```

## Beispieltemplate
```nohighlight
<#@ fpledit-template type="bfpl" name="Beispielvorlage" #>
<#@ assembly FPLedit.Buchfahrplan.dll #>
<#@ import FPLedit.Buchfahrplan.Templates #>
<#@ import FPLedit.Buchfahrplan.Model #>

<#
string font = "\"Alte DIN 1451 Mittelschrift\"";
string additionalCss = "";
TemplateHelper helper = new TemplateHelper(tt);

BfplAttrs attrs = BfplAttrs.GetAttrs(tt);
if (attrs != null)
{
    if (attrs.Font != "")
        font = attrs.Font;
    additionalCss = attrs.Css ?? "";
}
#>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Beispielvorlage</title>
		<style id="add-css">
			<#= additionalCss #>
		</style>
	</head>
	<body>
		<div>
			<#
			foreach (Train tra in helper.GetTrains()) { #>
				<h1><#= tra.TName #></h1>
				<h2><#= tt.GetLineName(tra) #></h2>
				<ul>
				<#
				var stations = helper.GetStations(tra);
				int route = Timetable.LINEAR_ROUTE_ID;
				foreach (var entity in stations) { #>
					<#
						if (entity != stations.Last() && tt.Type == TimetableType.Network) {
							var sta1 = stations[stations.IndexOf(entity) + 1];
							route = entity.Routes.Where(r => sta1.Routes.Contains(r)).ToArray()[0];
						}
						var pos = entity.Positions.GetPosition(route);
					#>
					<li>
						<#= pos.HasValue ? pos.Value.ToString("0.0") : "" #> &middot;
						<#= entity.SName #> &middot;
						<#
						if (entity.GetType() == typeof(Station)) {
							Station s = (Station)entity;
							var ardp = tra.GetArrDep(s);
							var ar = ardp.Arrival.ToShortTimeString();
							var dp = ardp.Departure.ToShortTimeString();
						#>
						<#= ar != "00:00" ? "ab: " + ar + " &middot; " : "" #>
						<#= dp != "00:00" ? "an: " + dp : "" #>
						<# } #>
					</li>
				<# } #>
				</ul>
			</table>
			<# } #>
		</div>
	</body>
</html>
```
