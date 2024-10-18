#!/bin/bash

ROOT_PATH=$HOME/playground/pinion-gen

function Gen {
    if [ "$1" = "l" ]; then
        find $ROOT_PATH -name "gen.tpl.ts"
    else
        genFile=`find $ROOT_PATH -name "gen.tpl.ts"| grep $1`
        echo $genFile
        #node $HOME/playground/pinion/packages/pinion/bin/pinion.js $genFile
        npx pinion $genFile
    fi
}