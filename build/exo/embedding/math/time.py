import time

# Chaînes de caractères pour représenter l'animation de chargement et les pourcentages
loading_chars = "██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
percentages = range(0, 101, 1)

# Fonction pour générer l'animation de chargement
def run_loading():
    for percentage in percentages:
        # Calculer le nombre de caractères pleins en fonction du pourcentage
        filled_chars = int(percentage / 10)
        loading_string = loading_chars[:filled_chars] + " " * (10 - filled_chars)
        print("\rLoading: {}% {}".format(percentage, loading_string), end="")
        time.sleep(0.1)

# Exécuter l'animation de chargement
run_loading()
