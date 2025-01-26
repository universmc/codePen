import json

def count_4_letter_strings(fichier_texte):
    """
    Compte les occurrences de toutes les chaînes de caractères de 4 lettres dans un fichier texte et les affiche triées par nombre d'occurrences.

    Args:
        fichier_texte (str): Le chemin d'accès au fichier texte.

    Returns:
        dict: Un dictionnaire contenant le nombre d'occurrences de chaque chaîne de caractères de 4 lettres.
    """
    compteurs = {}
    with open(fichier_texte, "r") as fichier:
        for ligne in fichier:
            for mot in ligne.split():
                if len(mot) == 6:
                    compteurs[mot] = compteurs.get(mot, 0) + 1

    # Tri du dictionnaire par nombre d'occurrences
    compteurs_triés = sorted(compteurs.items(), key=lambda x: x[1], reverse=True)
    return compteurs_triés

# Exemple d'utilisation
fichier_texte = "readme.md"

compteurs_triés = count_4_letter_strings(fichier_texte)

# Afficher le résultat
for mot, nombre in compteurs_triés:
    print(f"- {mot} : {nombre}")

# Enregistrer le dictionnaire dans un fichier Markdown
with open("occurences.md", "w") as fichier:
    for mot, nombre in compteurs_triés:
        fichier.write(f"- {mot} : {nombre}\n")