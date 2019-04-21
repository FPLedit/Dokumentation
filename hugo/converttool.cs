using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace converttool
{
    class Program
    {
        static Dictionary<string, string> files = new Dictionary<string, string>();

        static void Main(string[] args)
        {
            CollectFiles("./content/");

            var text = File.ReadAllText("./public/offline-idx.html");
            text = Regex.Replace(text, "<img.+?src=[\"'](.+?)[\"'].*?>", (m) =>
            {
                var path = m.Groups[1].Value;
                var fn = Path.GetFileName(m.Groups[1].Value);
				if (!files.ContainsKey(fn))
				{
					Console.WriteLine("[ERROR] File " + fn + " not found!");
					return m.Groups[0].Value;
				}
                return m.Groups[0].Value.Replace(path, ConvertImage(files[fn]));
            }, RegexOptions.IgnoreCase);

            var anchors = Regex.Matches(text, "id=\\\"(\\w+)\\\"").Cast<Match>().Select(m => m.Groups[1].Value).ToArray();

            text = Regex.Replace(text, "<a\\s+(?:[^>]*\\s+)?href=([\"'])(.*?)\\1>(.*?)</a>", (m) =>
            {
                var path = m.Groups[2].Value;
                var new_href = ConvertLink(path, anchors);
                if (new_href != null)
                    return m.Groups[0].Value.Replace(path, new_href);
                return m.Groups[3].Value;
            }, RegexOptions.IgnoreCase);

            File.WriteAllText("./public/offline-doc.html", text);

			Console.WriteLine("Write successful!");
        }

        static string ConvertImage(string path)
        {
            var bytes = File.ReadAllBytes(path);
            var ext = Path.GetExtension(path).Replace(".", "");
            return "data:image/" + ext + ";base64," + Convert.ToBase64String(bytes);
        }

        static string ConvertLink(string href, string[] anchors)
        {
            if (!href.StartsWith("mailto:") && !href.StartsWith("http") && !href.StartsWith("#") && !href.StartsWith("/files/"))
            {
                href = string.Join("", href.Split('/'));
                return anchors.Contains(href) ? '#' + href : null;
            }
            else if (href.StartsWith("/files/"))
                 return "https://fahrplan.manuelhu.de" + href;
            return href;
        }

        static void CollectFiles(string dir)
        {
            foreach (string d in Directory.GetDirectories(dir))
            {
                foreach (string f in Directory.GetFiles(d, "*.png"))
                    files.Add(Path.GetFileName(f), f);
                CollectFiles(d);
            }
        }
    }
}
