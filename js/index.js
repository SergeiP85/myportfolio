код для main: скрытие и раскрытие дополнительного текста more/less

  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenText = document.getElementById("hiddenText");

    toggleButton.addEventListener("click", function () {
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            hiddenText.style.display = "inline";
            toggleButton.textContent = "less"; 
        } else {
            hiddenText.style.display = "none";
            toggleButton.textContent = "more";
        }
    });
});