import time
import os

chiffres_ascii_art = {
    '0': [
        '██████╗',
        '██╔══██╗',
        '██║  ██║',
        '██║  ██║',
        '██████╔╝',
        '╚═════╝ '
    ],
    '1': [
        '██╗',
        '██║',
        '██║',
        '██║',
        '██║',
        '╚═╝ '
    ],
    '2': [
        ' ██████╗',
        '╚════██╗',
        ' █████╔╝',
        '██╔═══╝',
        '███████╗',
        '╚══════╝ '
    ],
    '3': [
        '██████╗',
        '╚════██╗',
        '██████╔╝',
        '╚═══███╗',
        '██████╔╝',
        '╚════╝ '
    ],
    '4': [
        '██╗  ██╗',
        '██║  ██║',
        '███████║',
        '╚════██║',
        '     ██║',
        '     ╚═╝'
    ],
    '5': [
        '███████╗',
        '██╔════╝',
        '███████╗',
        '╚════██║',
        '███████║',
        '╚══════╝ '
    ],
    '6': [
        '██████╗ ',
        '██╔═══╝ ',
        '███████╗',
        '██╔══██║',
        '╚█████╔╝',
        '╚═════╝ '
    ],
    '7': [
        ' ██████═╗',
        ' ╚═══██╔╝',
        '    ██╔╝ ',
        '   ██╔╝  ',
        '  ██╔╝   ',
        '  ╚═╝    '
    ],
    '8': [
        '██████╗',
        '██╔══██╗',
        '███████║',
        '██╔══██║',
        '╚██████║',
        '╚══════╝ '
    ],

    '9':[
        '██████╗ ',
        '██╔══██╗',
        '███████╝',
        '  ╚══██╗',
        '  █████║',
        '  ╚════╝'
    ],
}

def afficher_chiffre_ascii(chiffre_ascii):
    for ligne in chiffres_ascii_art[str(chiffre_ascii)]:  # Convertir en chaîne de caractères
        print(ligne)


def afficher_compteur_ascii():
    for i in range(60):
        clear_console()
        print(f'Temps restant : {i:02d} secondes')
        chiffre_ascii = i  # Utiliser la valeur de i comme chiffre ASCII
        afficher_chiffre_ascii(chiffre_ascii)
        time.sleep(1)
def clear_console():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

afficher_compteur_ascii()