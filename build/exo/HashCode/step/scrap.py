import requests
from bs4 import BeautifulSoup
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

url = "https://huggingface.co/models"

response = requests.get(url)
html_content = response.text

soup = BeautifulSoup(html_content, "lxml")

def extract_text(soup):
    text = ""
    for element in soup.find_all():
        if element.text:
            text += element.text
    return text

text = extract_text(soup)

def clean_text(text):
    text = text.lower().replace(".", "").replace(",", "").replace(";", "")
    return text

cleaned_text = clean_text(text)

with open("readme.txt", "w") as fichier:
    fichier.write(cleaned_text)

print(cleaned_text)