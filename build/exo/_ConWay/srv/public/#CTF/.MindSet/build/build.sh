hudTensor="╔╗╚╝═║╠╣╦╩╬" 

if [ -f ~/.zsh_config/startUP.sh ]; then  
    source ~/.zsh_config/startUP.sh
fi

mkdir src srv data models &&
cd src/ &&
mkdir html css scss js json inc md img svg drawio &&
touch readme.md &&
cd ../ &&
npm init -y &&
node ./wow.js &&
./menu.sh