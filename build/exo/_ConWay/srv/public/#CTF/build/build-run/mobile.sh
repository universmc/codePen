#!/bin/bash

# Fonction pour générer un nombre aléatoire de 75 chiffres
# Affichage de l'heure et du mode de développement
echo "💻$(date "+%H:%M:%S") /dev mode"
# Définition de la fonction 'menu' pour afficher le menu avec les options:

mobile() {
    echo ""
    echo "   ╔════════════════════════════════════╗ ";
    echo "   ╠[📗 📕 📒]                ───────────╣ ";
    echo "   ║     ┈┈┈┈┈{ ✨ Android  }─┈┈┈       ║ ";
    echo "   ║                                    ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";      
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║ ";
    echo "   ║    ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈     ║ ";
    echo "   ╠════════════════════════════════════╣ ";
    echo "   ║ [📱] [📷] [🎹] [🤖] [🗂️] [📊] [💰] 🛰 ║ ";
    echo "   ╚════════════════════════════════════╝ ═╝"; 
    echo ""

read -p "Entrez votre choix : " commande

case $commande in

        saas)
            make saas
            ;;
        chat)
            make chat
            ;;
        map)
            make map
            ;;
        update)
            make update
            ;;
        1)
            make commande1
            ;;
        2)
            make commande2
            ;;
        3)
            make commande3
            ;;
        chat)
            make chat
            ;;
        5)
            make commande5
            ;;

        6)
            make commande6
            ;;
        7)
            make commande7
            ;;
        8)
            make commande8
            ;;
        9)
            make commande9
            ;;
        10)
            make commande10
            ;;
        a)
            make commandeA
            ;;
        g)
        make commandeg
            ;;
        r)
            clear
            menu
            ;;

        # Règle par défaut en cas d'entrée invalide
        *)
            echo "Entrée invalide"
            ;;
    esac
}
mobile  # Appel de la fonction pour afficher le menu: