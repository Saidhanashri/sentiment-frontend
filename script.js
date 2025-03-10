console.log("This is my final version of the script");
const API_URL = "http://127.0.0.1:8000/analyze"; 

async function analyzeSentiment() {
    const textInput = document.getElementById("text-input").value;

    try {
        const response = await fetch("http://127.0.0.1:8000/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: "I love this product" }),
        });

        const result = await response.json();
        document.getElementById("result").innerText = `Sentiment: ${result.sentiment}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error: Could not connect to the backend.";
        console.error("Error:", error);
    }
}

# JavaScript API Request

console.log("Script loaded!");
function analyzeSentiment() {
    let inputElement = document.getElementById("input-text");

    if (!inputElement) {
        console.error("Error: Input field not found.");
        alert("Error: Input field is missing.");
        return;
    }

    let text = inputElement.value.trim(); 

    if (!text) {
        console.error("Error: No text provided.");
        alert("Please enter some text before analyzing sentiment.");
        return;
    }

    // Proceed with API call to your backend
    fetch("http://127.0.0.1:8000/analyze", {
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
