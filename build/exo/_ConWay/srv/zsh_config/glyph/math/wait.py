import hashlib
import time
from qiskit import QuantumCircuit, Aer, execute

# Chaînes de caractères pour représenter l'animation de chargement, la barre de chargement et les pourcentages
loading_chars = "██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
loading_bar = "[.-.]<"
empty_block = "░"
filled_block = "█"
hash_block = "█"
percentage_format = ".{}%/>"
percentages = range(0, 101, 1)

# Fonction pour générer l'animation de chargement
def run_loading():
    print("Load start")
    for percentage in percentages:
        # Calculer le nombre de caractères pleins en fonction du pourcentage
        filled_chars = int(percentage / 10)
        empty_chars = 10 - filled_chars
        loading_string = empty_block * empty_chars + filled_block * filled_chars
        percentage_string = percentage_format.format(percentage)
        # Ajouter des blocs de hachage pour les qubits superposés
        hash_string = hash_block * filled_chars
        print("\r{} {} {} {}".format(loading_bar, hash_string, loading_string,  percentage_string), end="")
        time.sleep(0.1)
    print("\nLoad complete")

# Exécuter l'animation de chargement
run_loading()
