//FOOTER
// let today = new Date();
// let thisYear= today.getFullYear();
// let footer = document.querySelector('footer');
// let copyright = document.createElement('p');
// copyright.innerText = `Nicole Bradley ${thisYear}`;
// copyright.id="copyright";
// footer.appendChild(copyright);

//SKILLS SECTION
let skills = ["WordPress", "Elementor", "JavaScript", "HTML", "CSS", "Nodejs", "MongoDB"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (i= 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}



//FETCH API

// fetch('https://api.github.com/users/nicoleCodeGirl/repos')
//   .then((response) => response.json())
//   .then(function(repositories) {
    
//     let projectSection  = document.getElementById("projects");

//     let projectList = projectSection.querySelector("ul");

//     for (let i = 0; i < repositories.length; i++){
//         let project = document.createElement("li");
//         project.innerHTML = `<a href="https://www.github.com/nicolecodegirl/${repositories[i].name}">` + repositories[i].name + '</a>';
//         projectList.appendChild(project);
//         console.log(project.innerText)
    
    
//     }
//             console.log(repositories, "the array that has the list of repositories");

//   } );