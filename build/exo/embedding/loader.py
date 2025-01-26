from qiskit import QuantumCircuit, Aer, execute
import hashlib
import time
import torch

# Charger les blocs de pixels en tant que tensors
bot_pixels = torch.tensor(b"530e71650a856cfee57c4001f24b16a4", dtype=torch.float32)
cam_pixels = torch.tensor(b"1b63adf3a750c997b22e20b4876485bd", dtype=torch.float32)
connector_pixels = torch.tensor(b"3ce3949072eba08fc577a6189c714cdf", dtype=torch.float32)
interface_pixels = torch.tensor(b"712d74170bfe51d534439a4235c49786", dtype=torch.float32)
module_neuronal_pixels = torch.tensor(b"eb600051c7c13023f087e54c7b8590f2", dtype=torch.float32)
playeur_pixels = torch.tensor(b"666527c6917affba53f346ac52f34010", dtype=torch.float32)

# Convertir les hashes en valeurs binaires
bot_pixels = bin(int(hash_0, 16))[2:].zfill(128)
cam_pixels = bin(int(hash_0, 16))[2:].zfill(128)
connector_pixels = bin(int(hash_0, 16))[2:].zfill(128)
interface_pixels = tbin(int(hash_0, 16))[2:].zfill(128)
module_neuronal_pixels = bin(int(hash_0, 16))[2:].zfill(128)
playeur_pixels = bin(int(hash_0, 16))[2:].zfill(128)

# Créer un circuit quantique avec deux qubits
qc = QuantumCircuit(2)

# Appliquer les opérations de superposition en fonction des valeurs binaires des hashes
for i in range(128):
    if bin_hash_0[i] == '1':
        qc.x(0)  # Appliquer une porte X si le bit est 1
    if bin_hash_1[i] == '1':
        qc.x(1)  # Appliquer une porte X si le bit est 1
    qc.h(0)  # Appliquer une porte de Hadamard sur le qubit 0
    qc.h(1)  # Appliquer une porte de Hadamard sur le qubit 1

# Mesurer les qubits pour obtenir le résultat
qc.measure_all()

# Exécuter le circuit quantique sur un simulateur
simulator = Aer.get_backend('aer_simulator')
job = execute(qc, simulator, shots=1)
result = job.result()
counts = result.get_counts(qc)

# Afficher les résultats des mesures
print("Résultats des mesures : ", counts)

# Nombre total d'échantillons
total_shots = sum(counts.values())

# Pourcentage d'avancement
percentage = int(counts.get('11', 0) / total_shots * 100)

# Chaînes de caractères pour représenter l'animation de chargement, la barre de chargement et les pourcentages
loading_chars = "██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
loading_bar = "[.-.]<"
empty_block = "░"
filled_block = "█"
percentage_format = ".{}%/>"
percentages = range(0, 101, 1)

# Calculer la représentation de la barre de progression
loading_length = len(loading_chars)
loading_progress = int(percentage / 100 * loading_length)
loading_bar = loading_bar.replace(".", empty_block * loading_progress, 1).replace("-", filled_block, 1)

# Fonction pour générer l'animation de chargement
def run_loading():
    print("Load start")
    for percentage in percentages:
        # Calculer le nombre de caractères pleins en fonction du pourcentage
        filled_chars = int(percentage / 10)
        empty_chars = 10 - filled_chars
        loading_string = empty_block * empty_chars + filled_block * filled_chars
        percentage_string = percentage_format.format(percentage)
        print("\r{} {} {}".format(loading_bar, loading_string, percentage_string), end="")
        time.sleep(0.1)

# Exécuter l'animation de chargement
run_loading()

# Afficher les résultats
print("Pourcentage d'avancement : {}%".format(percentage))
print("Progression : {}{}".format(loading_bar, percentage_format.format(percentage)))

