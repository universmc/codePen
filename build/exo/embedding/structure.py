import hashlib

# Convertir le bloc de pixels en une chaîne de caractères
pixels = """
      .         .         .         .
     / \       / \       / \       / \
    /   \     /   \     /   \     /   \
   /     \   /     \   /     \   /     \
  /   A   \ /   B   \ /   C   \ /   D   \
 +---------+---------+---------+---------+
 |         |         |         |         |
 |         |         |         |         |
 |    E    |    F    |    G    |    H    |
 |         |         |         |         |
 |         |         |         |         |
 +---------+---------+---------+---------+
  \       / \       / \       / \       /
   \     /   \     /   \     /   \     /
    \   /     \   /     \   /     \   /
     \ /   I   \ /   J   \ /   K   \ /
      +---------+---------+---------+
      |         |         |         |
      |         |         |         |
      |    L    |    M    |    N    |
      |         |         |         |
      |         |         |         |
      +---------+---------+---------+
       \       / \       / \       /
        \     /   \     /   \     /
         \   /     \   /     \   /
          \ /   O   \ /   P   \ /
           +---------+---------+
            \       / \       /
             \     /   \     /
              \   /     \   /
               \ /   Q   \ /
                +---------+
                 \       /
                  \     /
                   \   /
                    \¢/
                     °
"""

# Calculer le hash MD5 du bloc de pixels
hash_object = hashlib.md5()
hash_object.update(pixels.encode('utf-8'))
hash_value = hash_object.hexdigest()

print("Hash du bloc de pixels du Playeur : ", hash_value)