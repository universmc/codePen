import hashlib

# Convertir le bloc de pixels en une chaîne de caractères
fib = """
# . ┈ ·· ::: ░░░░░ ▒▒▒▒▒▒ ▓▓▓▓▓▓▓▓▓▓▓▓▓ █████████████████████ :<[Ø]│#
# 1 1 2   3    5     8          13              21                  #
"""

# Calculer le hash MD5 du bloc de pixels
hash_object = hashlib.md5()
hash_object.update(fib.encode('utf-8'))
hash_value = hash_object.hexdigest()

print("Hash du bloc cadre  du Playeur : ", hash_value)
