from transformers import pipeline

messages = [
    {"role": "user", "content": "Who are you?"},
]
pipe = pipeline("text-generation", model="Groq/Llama-3-Groq-8B-Tool-Use")
pipe(messages)