document.addEventListener("DOMContentLoaded", () => {
    const keySection = document.querySelector(".key-section");
    const predictionSection = document.getElementById("prediction-section");
    const resultElement = document.getElementById("result");
    const predictButton = document.getElementById("predict-button");
    const closePopup = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    // Key check
    document.getElementById("submit-key").addEventListener("click", () => {
        const key = document.getElementById("access-key").value;
        if (key === "ADITYA HACKER") {
            predictionSection.classList.remove("hidden");
            keySection.classList.add("hidden");
        } else {
            alert("Invalid Key");
        }
    });

    // Prediction logic for 3-digit number input
    predictButton.addEventListener("click", () => {
        const periodNumberInput = document.getElementById("period-number").value;
        if (periodNumberInput.length === 3 && !isNaN(periodNumberInput)) {
            const periodNumber = parseInt(periodNumberInput);

            // Simulate server checking by showing "Checking..." message
            resultElement.textContent = "Checking...";
            resultElement.classList.add("visible");

            // Delay for 2 seconds to simulate server processing
            setTimeout(() => {
                const prediction = (periodNumber * 3) % 10;
                const result = prediction >= 5 ? "small" : "big";

                // Show the result after "Checking..."
                resultElement.textContent = `Result: ${result}`;

                // Keep the result visible for 3 seconds
                setTimeout(() => {
                    resultElement.classList.remove("visible");
                }, 3000);
            }, 2000);  // 2-second delay for "server check"
        } else {
            alert("Please enter a valid 3-digit number.");
        }
    });

    // Close popup
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
