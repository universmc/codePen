import hashlib

# Convertir le bloc de pixels en une chaîne de caractères
Camera = """
██████████████
██
██  ██████████
██  ██
██  ██████████
██
██████████████
"""

# Calculer le hash MD5 du bloc de pixels
hash_object = hashlib.md5()
hash_object.update(Camera.encode('utf-8'))
hash_value = hash_object.hexdigest()

print("Hash du bloc de Camera de Cam : ", hash_value)
