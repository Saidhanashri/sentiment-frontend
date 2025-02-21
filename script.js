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
    let inputElement = document.getElementById("input-text");

    if (!inputElement) {
        console.error("Error: Input field not found.");
        alert("Error: Input field is missing.");
        return;
    }

    let text = inputElement.value.trim(); // Trim to remove extra spaces

    if (!text) {
        console.error("Error: No text provided.");
        alert("Please enter some text before analyzing sentiment.");
        return;
    }

    // Proceed with API call to your backend
    fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "Sentiment: " + data.sentiment;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Error: Could not connect to the backend.";
    });
}
