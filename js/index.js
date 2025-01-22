function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

// All skills section
const skills = [
    "Internal Comms",
    "Intranet",
    "Events",
    "Newsletters",
    "CSR",
    "Culture",
    "DEI",
    "HR Brand",
    "Communities",
    "Content Administration",
    "Media Relations",
    "Employee Engagement",
    "Cross-functional Collaboration",
    "Administrative Management",
    "Events",
    "Data Analytics",
    "Video and Photo Editing",
    "Figma",
    "Digital Content",
    "Copywriting",
    "Document Workflow",
    "Microsoft Office",
    "SharePoint Administration",
    "Asana",
    "Jira",
    "Trello",
    "ERP Systems",
    "Marketing"
  ];
  
  // container for all skills
  const skillsList = document.getElementById("skills-list");
  
  // Function to render skills based on screen width
  function renderSkills() {
    const screenWidth = window.innerWidth;
  
    // Clear the list to avoid duplicate entries
    skillsList.innerHTML = '';
  
    // Determine how many skills to display
    const skillsToDisplay = screenWidth > 1024 ? skills : skills.slice(0, 7);
  
    // Render the determined number of skills
    skillsToDisplay.forEach(skill => {
      const listItem = document.createElement("li"); // Create Li element
      listItem.textContent = skill; // Add text from array
      skillsList.appendChild(listItem); // Insert into ul
    });
  }
  
  // Initial render
  renderSkills();
  
  // Re-render skills on window resize
  window.addEventListener("resize", renderSkills);