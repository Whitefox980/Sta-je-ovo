import os
from dotenv import load_dotenv
from transformers import pipeline

# Učitaj token iz .env fajla
load_dotenv()
HF_TOKEN = os.getenv("HF_TOKEN")

def analyze_sentiment(text):
    """
    Analizira sentiment teksta koristeći Hugging Face model
    """
    try:
        # Proveri da li postoji token
        if not HF_TOKEN:
            raise ValueError("Hugging Face token nije pronađen u .env fajlu!")
        
        classifier = pipeline(
            "sentiment-analysis",
            model="distilbert-base-uncased-finetuned-sst-2-english",
            use_auth_token=HF_TOKEN
        )
        result = classifier(text)
        return {
            "sentiment": result[0]["label"],
            "confidence": result[0]["score"]
        }
    except Exception as e:
        print(f"Greška pri analizi sentimenta: {str(e)}")
        return None

# Primer korišćenja
if __name__ == "__main__":
    test_text = "Ova aplikacija je fantastična!"
    analysis = analyze_sentiment(test_text)
    print(analysis)-
