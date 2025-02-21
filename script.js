const API_URL = "http://127.0.0.1:8000/analyze"; 

async function analyzeSentiment() {
    const textInput = document.getElementById("text-input").value;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: textInput }),
        });

        const result = await response.json();
        document.getElementById("result").innerText = `Sentiment: ${result.sentiment}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error: Could not connect to the backend.";
        console.error("Error:", error);
    }
}

