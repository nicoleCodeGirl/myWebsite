//SKILLS SECTION
let skills = ["WordPress", "Elementor", "JavaScript", "HTML", "CSS", "Nodejs", "MongoDB"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (i= 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
