from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Define the input data model
class TextInput(BaseModel):
    text: str

# Root endpoint (GET)
@app.get("/")
async def root():
    return {"greeting": "Hello, World!", "message": "Welcome to FastAPI!"}

# Sentiment analysis endpoint (POST)
@app.post("/analyze")
async def analyze_text(input: TextInput):
    # Dummy sentiment analysis logic
    sentiment = "positive" if "love" in input.text.lower() else "negative"
    return {"text": input.text, "sentiment": sentiment}
