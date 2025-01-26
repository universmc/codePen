import hashlib
import time

# Chaînes de caractères pour représenter l'animation de chargement, la barre de chargement et les pourcentages
loading_chars = "██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
loading_bar = "[.-.]<"
empty_block = "░"
filled_block = "█"
hash_block = "█"
percentage_format = ".{}%/>"
percentages = range(0, 101, 1)

# Fonction pour générer l'animation de chargement avec chronomètre en millisecondes
def run_loading():
    print("Load start")
    start_time = time.time() * 1000 # Convertir le temps en millisecondes
    for percentage in percentages:
        # Calculer le nombre de caractères pleins en fonction du pourcentage
        filled_chars = int(percentage / 10)
        empty_chars = 10 - filled_chars
        loading_string = empty_block * empty_chars + filled_block * filled_chars
        percentage_string = percentage_format.format(percentage)
        # Ajouter des blocs de hachage pour les qubits superposés
        hash_string = hash_block * filled_chars
        elapsed_time = int(time.time() * 1000 - start_time) # Calculer le temps écoulé en millisecondes
        print("\r{} {} {} {} ({} ms)".format(loading_bar, hash_string, loading_string, percentage_string, elapsed_time), end="")
        time.sleep(0.1)
    print("\nLoad complete")

# Exécuter l'animation de chargement
run_loading()
