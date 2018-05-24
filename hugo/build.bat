@echo off

echo Running hugo
hugo-2
echo.

echo Running converttool
converttool.exe
echo.

echo Generating PDF
wkhtmltopdf --zoom 1.3 ./public/offline-doc.html ./public/offline-doc.pdf
echo.

echo Build successful
echo Artifacts can be found in ./public/offline-doc.{html,pdf}
