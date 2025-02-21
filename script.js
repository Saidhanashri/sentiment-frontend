<<<<<<< HEAD
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

=======
# JavaScript API Request
function analyzeSentiment() {
    const userInput = document.getElementById("userInput").value;
    const resultElement = document.getElementById("result");

    fetch("https://fastapi-production-7324.up.railway.app/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: userInput })
    })
    .then(response => response.json())
    .then(data => {
        resultElement.innerHTML = `<strong>Sentiment:</strong> ${data.sentiment}`;
    })
    .catch(error => {
        resultElement.innerHTML = `<strong>Error:</strong> Could not connect to the backend.`;
        console.error("Error:", error);
    });
}
>>>>>>> d7eafcc (Saving local changes before pull)
