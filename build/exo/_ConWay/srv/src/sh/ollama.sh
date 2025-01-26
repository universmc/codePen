#!/bin/bash
full_response=""
while read -r line; do
# Remove the "data: " prefix from the API response
line="${line#* }"
# Convert the line to JSON
json_line=$(echo $line | tr '_' '"' | tr '}' '},')

    # Check if the line contains the chunk's content
if [[ $json_line == *"content"* ]]; then
# Extract the content and append it to the full_response variable
content=$(echo $json_line | grep -o '"content":"[^"]*' | sed 's/\"content\":\"\(.*\)\",/\1/' | tr -d '"')
        full_response+="$(echo ${content//content:/})"
fi
done <<< $(curl -X POST \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer ${GROQ_API_KEY}" \
        --data '{
                   "messages": [
                     {
                       "role": "system",
                       "content": "nous allons travaillé sur le fichier Makefile à la racine (/) du projet, ok llama3-8b-8192 ?"
                     }
                   ],
                   "model": "llama3-8b-8192",
                   "temperature": 1,
                   "max_tokens": 1024,
                   "stream": true
                 }' \
        https://api.groq.com/openai/v1/chat/completions)

echo "Response: ${full_response//$'\n'/}"
