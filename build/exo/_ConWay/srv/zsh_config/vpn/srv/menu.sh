menu() {
    echo ""
    echo "   ╔════════════════════════════════════╗    ╔════════════════════════════════════════════════════════════════════════════════════╗";
    echo "   ╠───────────{ ✨ Android  }──────────╣    ║ [📗 📕 📒]                 🔷 Weclom to metaConnect 🔷                     [🔎] [💫] ║";
    echo "   ║                                    ║    ╠────────────────────────────────────────────────────────────────────────────────────╣";
    echo "   ║                      💠            ║    ║                                                                                    ║";
    echo "   ║             ╲┈┈┈┈╱                 ║    ║                                                                                    ║";      
    echo "   ║             ╱▔▔▔▔╲                 ║    ║                                                                                    ║";
    echo "   ║            ┃┈▇┈┈▇┈┃                ║    ║                                                                                    ║";
    echo "   ║          ╭╮┣━━━━━━┫╭╮              ║    ║                                                                                    ║";
    echo "   ║          ┃┃┃┈┈┈┈┈┈┃┃┃              ║    ║                                                                                    ║";
    echo "   ║          ╰╯┃┈┈┈┈┈┈┃╰╯              ║    ║                                                                                    ║";
    echo "   ║            ╰┓┏━━┓┏╯                ║    ║                                                                                    ║";
    echo "   ║             ╰╯  ╰╯                 ║    ║                                                                                    ║";
    echo "   ║    ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈     ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                                    ║";
    echo "   ║ [>] Menu                           ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                                    ║";
    echo "   ║        [x] Call                    ║    ║                                                                                    ║";
    echo "   ║        [ ] Generative AI           ║    ║                                                                                    ║";
    echo "   ║        [ ] MyPrompt                ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                                    ║";
    echo "   ║        [ ] call                    ║    ║                                                                                    ║";
    echo "   ║        [ ] Telegram                ║    ║                                                                                    ║";
    echo "   ║        [ ] Youtube                 ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                                    ║";
    echo "   ║        [X] Map                     ║    ║                                                                                    ║";
    echo "   ║        🔒 Signal                   ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                                    ║";
    echo "   ╠════════════════════════════════════╣    ╠════════════════════════════════════════════════════════════════════════════════════╣";
    echo "   ║ [📱] [📷] [🎹] [🤖] [🗂️] [📊] [💰]  ║    ║ 📡 :<                                                                            🛰 ║";
    echo "   ╚════════════════════════════════════╝    ╚════════════════════════════════════════════════════════════════════════════════════╝"; 
    echo ""

read -p "Entrez votre choix : " commande

case $commande in

        run)
            make run
            ;;
        call)
            make call
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
menu  # Appel de la fonction pour afficher le menu: