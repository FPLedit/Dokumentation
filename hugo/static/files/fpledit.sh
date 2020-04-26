#!/bin/bash

MONO=`which mono`
FPLEDIT=FPLedit.exe

if [ -z "$MONO" ]; then
	echo "Can't start fpledit. mono is not installed";
fi

$MONO $FPLEDIT --log-console $1 >./fpledit-error.log 2>&1

result="$?"
if [ "$result" -ne 0 ]; then
    echo "FPLedit exited with non-zero status $result"
	echo "See more details in ./fpledit-error.log"
	echo "If you think there's a bug, please email the logfile and a description to info@manuelhu.de!"
fi
