//SKILLS SECTION
let skills = ["WordPress", "Elementor", "JavaScript", "HTML", "CSS", "Nodejs", "MongoDB", "React.Js", "MySql"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (i= 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

//DONATE

const donateImg = document.getElementById("donate-img");
const donateBtn = document.getElementById("donate-btn");

donateImg.addEventListener("click", () => {
  window.location.href = "https://www.paypal.me/nicoleluvzpurple";
});

donateBtn.addEventListener("click", () => {
  window.location.href = "https://www.paypal.me/nicoleluvzpurple";
});





