import hashlib

# Convertir le bloc de pixel qubit_('β|0>') de pixels en une chaîne de caractères
qubit_0 = """
    █████████████████████████████████
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    █████████████████████████████████
"""

# Convertir la chaîne de caractères en bytes pour le calcul du hash MD5
pixels = qubit_0.encode('utf-8')

# Calculer le hash MD5 du bloc de pixels
hash_object = hashlib.md5()
hash_object.update(pixels)
hash_value = hash_object.hexdigest()

print("Hash du bloc de pixels qubit_('β|0>') : ", hash_value)