import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import gzip
import pickle

# Charger les données
data = pd.read_csv("data.csv")

# Calculer le chiffre d'affaires, les coûts totaux et le résultat net
data['chiffre_affaires'] = data['quantite'] * data['prix_unitaire']
data['cout_total'] = data['quantite'] * data['cout_variable'] + data['cout_fixe']
data['resultat_net'] = data['chiffre_affaires'] - data['cout_total']

# Préparer les données pour le modèle (exemple : prédire le chiffre d'affaires en fonction de la quantité)
X = data[['quantite']]
y = data['chiffre_affaires']

# Séparer les données en ensemble d'entraînement et de test
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Entraîner le modèle
model = LinearRegression()
model.fit(X_train, y_train)

# Générer les prédictions
y_pred = model.predict(X_test)

# Sérialiser le modèle et le compresser
with gzip.open('model.pkl.gz', 'wb') as f:
    pickle.dump(model, f)

# Compresser les prédictions
np.savez_compressed('predictions.npz', y_pred=y_pred)