document.addEventListener("DOMContentLoaded", function () { 
    const frontendSkillsList = document.getElementById("frontend-skills-list");
    const commSkillsList = document.getElementById("comm-skills-list");
    const toggleCommSkillsButton = document.getElementById("toggleCommSkillsButton");
  
    const frontendSkills = [
        "HTML", "CSS", "JavaScript", "Slack", "VS Code", "Figma", "React", "Git", "Next.js"
    ];
  
    const commSkills = [
        "Internal Comms", "Intranet", "Events", "Newsletters", "CSR", "Culture", "DEI",
        "HR Brand", "Communities", "Content Administration", "Media Relations",
        "Employee Engagement", "Cross-functional Collaboration", "Administrative Management"
    ];
  
    let hiddenSkills = []; // Переменная для скрытых навыков
    let hiddenSkillsElements = []; // Массив для элементов скрытых навыков
  
    function renderSkills() {
        const screenWidth = window.innerWidth;
  
        // Очистка списков перед рендером
        frontendSkillsList.innerHTML = "";
        commSkillsList.innerHTML = "";
  
        // Отображаем все навыки для Frontend
        frontendSkills.forEach(skill => {
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            frontendSkillsList.appendChild(listItem);
        });
  
        // Отображаем все навыки для Corporate Communications
        commSkills.slice(0, 7).forEach(skill => {
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            commSkillsList.appendChild(listItem);
        });
  
        // Когда экран маленький, добавляем скрытые навыки
        if (screenWidth < 1024) {
            // Скрытые навыки
            hiddenSkills = commSkills.slice(7); 
  
            // Добавляем скрытые навыки в DOM, если они еще не добавлены
            hiddenSkills.forEach(skill => {
                const listItem = document.createElement("li");
                listItem.textContent = skill;
                listItem.classList.add("hidden-skill"); // Добавляем класс для скрытия
                listItem.style.display = "none"; // Изначально скрываем
                commSkillsList.appendChild(listItem);
                hiddenSkillsElements.push(listItem); // Добавляем в массив для дальнейшего использования
            });
  
            // Показываем кнопку "more", если есть скрытые навыки
            toggleCommSkillsButton.style.display = hiddenSkills.length > 0 ? "inline-block" : "none";
        } else {
            // Если экран большой, показываем все навыки сразу, скрываем кнопку "more"
            commSkills.slice(7).forEach(skill => {
                const listItem = document.createElement("li");
                listItem.textContent = skill;
                commSkillsList.appendChild(listItem);
            });
  
            // Очищаем массив скрытых навыков и скрываем кнопку "more"
            toggleCommSkillsButton.style.display = "none";
            hiddenSkillsElements = [];
        }
    }
  
    // Обработчик для кнопки "more/less"
    toggleCommSkillsButton.addEventListener("click", function () {
        if (hiddenSkillsElements.length > 0) {
            // Проверяем, скрыты ли навыки
            if (hiddenSkillsElements[0].style.display === "none") {
                hiddenSkillsElements.forEach(skill => skill.style.display = "inline-block");
                toggleCommSkillsButton.textContent = "less";
            } else {
                hiddenSkillsElements.forEach(skill => skill.style.display = "none");
                toggleCommSkillsButton.textContent = "more";
            }
        }
    });
  
    // Начальный рендер навыков
    renderSkills();
  
    // Перерисовка при изменении размера экрана
    window.addEventListener("resize", renderSkills);
  });
  
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