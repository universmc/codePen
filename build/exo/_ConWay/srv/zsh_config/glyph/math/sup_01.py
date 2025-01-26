from qiskit import QuantumCircuit, Aer, execute
import hashlib

# Importer les résultats de hachage de hashing_0.py et hashing_1.py
hash_0 = "047b51613b278188e36425f5c55c54d0f"  # Remplacer par le hash obtenu à partir de hashing_0.py
hash_1 = "83d18fc51fd1f2c1c7fd109d06caa168"  # Remplacer par le hash obtenu à partir de hashing_1.py

# Convertir les hashes en valeurs binaires
bin_hash_0 = bin(int(hash_0, 16))[2:].zfill(128)
bin_hash_1 = bin(int(hash_1, 16))[2:].zfill(128)

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
