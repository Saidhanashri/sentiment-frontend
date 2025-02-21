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
