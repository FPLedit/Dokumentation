#!/bin/bash

FPLEDIT="./FPLedit"

$FPLEDIT --log-console $1 >./fpledit-error.log 2>&1

result="$?"
if [ "$result" -ne 0 ]; then
    echo "FPLedit exited with non-zero status $result"
	echo "See more details in ./fpledit-error.log"
	echo "If you think there's a bug, please email the logfile and a description to the email address found on https://fahrplan.manuelhu.de."
fi
