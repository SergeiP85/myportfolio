function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

// All skills sectuin
const skills = [
    "Media Relations",
    "Employee Engagement",
    "Cross-functional Collaboration",
    "Administrative Management",
    "Events",
    "Data Analytics",
    "Video&Photo Editing",
    "Figma",
    "Digital Content",
    "Copywriting",
    "Document Workflow",
    "Microsoft Office",
    "SharePoint Administration",
    "Asana",
    "Slack",
    "Trello",
    "ERP Systems",
    'Marketing'
  ];
  
  // container for all skills
  const skillsList = document.getElementById("skills-list");
  
  // list of skills
  skills.forEach(skill => {
    const listItem = document.createElement("li"); // create Li element
    listItem.textContent = skill; // Add text from array
    skillsList.appendChild(listItem); // Insert into ul
  });
  

  