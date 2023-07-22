head="\e["
tail="m"

dropAllEffects="\e[0m"

printPotAllTheEffects(){
  for ((i = 0 ; i < 200 ; i++)); do
  echo
  echo "This is a new test case. i=$i, full style is $head$i$tail"
    echo -e "$head$i$tail HELLO! !@#$% $dropAllEffects"
  done
}


####INTERESTING COMBINATIONS

dropAllEffects="\e[0m"

#TEXT EFFECTS
boldTE="\e[1m"
dimTE="\e[2m"
italicTE="\e[3m"
underlinedTE="\e[4m"
underlined2linesTE="\e[21m"
upperlinedTE="\e[53m"
flashingTE="\e[5m"
invertedBackgroundTE="\e[7m"
hiddenTE="\e[8m"
strikethroughTE="\e[9m"

#TEXT COLORS DARK
blackTCD="\e[30m"
redTCD="\e[31m"
greenTCD="\e[32m"
yellowTCD="\e[33m"
blueTCD="\e[34m"
magentaTCD="\e[35m"
cyanTCD="\e[36m"
grayTCD-almostWhite="\e[37m"

#TEXT COLORS LIGHT
blackTCLT="\e[90m"
redTCLT="\e[91m"
greenTCLT="\e[92m"
yellowTCLT="\e[93m"
blueTCLT="\e[94m"
magentaTCLT="\e[95m"
cyanTCLT="\e[96m"
grayTCLT-almostWhite="\e[97m"

#BACKGROUND COLORS DARK
blackBGD="\e[40m"
redBGD="\e[41m"
greenBGD="\e[42m"
yellowBGD="\e[43m"
blueBGD="\e[44m"
magentaBGD="\e[45m"
cyanBGD="\e[46m"
grayBGD-almostWhite="\e[47m"

#BACKGROUND COLORS LIGHT
blackBGLT="\e[100m"
redBGLT="\e[101m"
greenBGLT="\e[102m"
yellowBGLT="\e[103m"
blueBGLT="\e[104m"
magentaBGLT="\e[105m"
cyanBGLT="\e[106m"
grayBGLT-almostWhite="\e[107m"
