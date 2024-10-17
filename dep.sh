#!/bin/bash


function Gen {
    if [ "$1" = "l" ]; then
        find "$HOME/playgroud/pinion-gen" -name "gen.tpl.ts"
    else
        genFile=`find "$HOME/playgroud/pinion-gen" -name "gen.tpl.ts"| grep $1`
        echo $genFile
        node $HOME/playgroud/pinion/packages/pinion/bin/pinion.js $genFile
    fi
}