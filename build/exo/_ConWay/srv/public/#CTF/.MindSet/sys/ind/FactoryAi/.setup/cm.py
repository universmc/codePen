import json

def count_occurrences(fichier_texte, lettre):
    """
    Compte le nombre d'occurrences d'une lettre dans un fichier texte.

    Args:
        fichier_texte (str): Le chemin d'accès au fichier texte.
        lettre (str): La lettre à rechercher.

    Returns:
        int: Le nombre d'occurrences de la lettre.
    """
    with open(fichier_texte, "r") as fichier:
        contenu = fichier.read()
    return contenu.count(lettre)

# Exemple d'utilisation
fichier_texte = "ca.js"

_0 = "0"
_1 = "1"
_2 = "2"
_3 = "3"
_4 = "4"
_5 = "5"
_6 = "6"
_7 = "7"
_8 = "8"
_9 = "9"
_a = "a"
_b = "b"
_c = "c"
_d = "d"
_e = "e"
_f = "f"
_g = "g"
_h = "h"
_i = "i"
_j = "j"
_k = "k"
_l = "l"
_m = "m"
_n = "n"
_o = "o"
_p = "p"
_q = "q"
_r = "r"
_s = "s"
_t = "t"
_u = "u"
_v = "v"
_w = "w"
_x = "x"
_y = "y"
_z = "z"

nbr_occurrences0 = count_occurrences(fichier_texte, _0),
nbr_occurrences1 = count_occurrences(fichier_texte, _1),
nbr_occurrences2 = count_occurrences(fichier_texte, _2),
nbr_occurrences3 = count_occurrences(fichier_texte, _3),
nbr_occurrences4 = count_occurrences(fichier_texte, _4),
nbr_occurrences5 = count_occurrences(fichier_texte, _5),
nbr_occurrences6 = count_occurrences(fichier_texte, _6),
nbr_occurrences7 = count_occurrences(fichier_texte, _7),
nbr_occurrences8 = count_occurrences(fichier_texte, _8),
nbr_occurrences9 = count_occurrences(fichier_texte, _9),
nbr_occurrencesA = count_occurrences(fichier_texte, _a),
nbr_occurrencesB = count_occurrences(fichier_texte, _b),
nbr_occurrencesC = count_occurrences(fichier_texte, _c),
nbr_occurrencesD = count_occurrences(fichier_texte, _d),
nbr_occurrencese = count_occurrences(fichier_texte, _e),
nbr_occurrencesF = count_occurrences(fichier_texte, _f),
nbr_occurrencesG = count_occurrences(fichier_texte, _g),
nbr_occurrencesH = count_occurrences(fichier_texte, _h),
nbr_occurrencesI = count_occurrences(fichier_texte, _i),
nbr_occurrencesJ = count_occurrences(fichier_texte, _j),
nbr_occurrencesK = count_occurrences(fichier_texte, _k),
nbr_occurrencesL = count_occurrences(fichier_texte, _l),
nbr_occurrencesM = count_occurrences(fichier_texte, _m),
nbr_occurrencesN = count_occurrences(fichier_texte, _n),
nbr_occurrencesO = count_occurrences(fichier_texte, _o),
nbr_occurrencesp = count_occurrences(fichier_texte, _p),
nbr_occurrencesQ = count_occurrences(fichier_texte, _q),
nbr_occurrencesR = count_occurrences(fichier_texte, _r),
nbr_occurrencesS = count_occurrences(fichier_texte, _s),
nbr_occurrencesT = count_occurrences(fichier_texte, _t),
nbr_occurrencesU = count_occurrences(fichier_texte, _u),
nbr_occurrencesV = count_occurrences(fichier_texte, _v),
nbr_occurrencesW = count_occurrences(fichier_texte, _w),
nbr_occurrencesX = count_occurrences(fichier_texte, _x),
nbr_occurrencesY = count_occurrences(fichier_texte, _y),
nbr_occurrencesZ = count_occurrences(fichier_texte, _z),



# Créer un dictionnaire de variables
variables = {
    "0": nbr_occurrences0,
    "1": nbr_occurrences1,
    "2": nbr_occurrences2,   
    "3": nbr_occurrences3,  
    "4": nbr_occurrences4,  
    "5": nbr_occurrences5,  
    "6": nbr_occurrences6,  
    "7": nbr_occurrences7,  
    "8": nbr_occurrences8,  
    "9": nbr_occurrences9, 
    "a": nbr_occurrencesA,
    "b": nbr_occurrencesB,
    "c": nbr_occurrencesC,   
    "d": nbr_occurrencesD,  
    "e": nbr_occurrencese,  
    "f": nbr_occurrencesF,  
    "g": nbr_occurrencesG,  
    "h": nbr_occurrencesH,  
    "i": nbr_occurrencesI,  
    "j": nbr_occurrencesJ,  
    "k": nbr_occurrencesK,  
    "l": nbr_occurrencesL,  
    "m": nbr_occurrencesM,  
    "n": nbr_occurrencesN,  
    "o": nbr_occurrencesO,  
    "p": nbr_occurrencesp,  
    "q": nbr_occurrencesQ,  
    "r": nbr_occurrencesR,  
    "s": nbr_occurrencesS,  
    "t": nbr_occurrencesT,  
    "u": nbr_occurrencesU,  
    "v": nbr_occurrencesV,  
    "w": nbr_occurrencesW,  
    "x": nbr_occurrencesX,  
    "y": nbr_occurrencesY,  
    "z": nbr_occurrencesZ   
}
# Enregistrer le dictionnaire dans un fichier JSON
with open("ca.json", "w") as fichier:
    json.dump(variables, fichier)