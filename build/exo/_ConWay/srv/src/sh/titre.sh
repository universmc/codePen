#!/bin/bash

# Fonction pour générer un nombre aléatoire de 75 chiffres
# Affichage de l'heure et du mode de développement
echo "💻$(date "+%H:%M:%S") /dev mode"
titre() {  
    echo "        ╔═══════════════════════════════════════════════════════════╗";
    echo "        ║               _                                           ║";
    echo "        ║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___   ║";
    echo "        ║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|  ║";
    echo "        ║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__   ║";
    echo "        ║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║";
    echo "        ║                                                           ║";
    echo "        ╚═══════════════════════════════════════════════════════════╝";
    echo ""; 
}
titre