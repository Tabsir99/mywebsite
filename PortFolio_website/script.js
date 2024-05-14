const copybtn = document.querySelector("#copy");
const showAll = document.querySelector("#show-all");
const projects = document.getElementsByClassName("project-box");
const fig = document.querySelectorAll('#my-work figure');
const navlinks = document.querySelectorAll('#navbar ul li a')

window.addEventListener('resize',() => {
  if(window.innerWidth < 500){
    navlinks[0].textContent = 'About';
    navlinks[1].textContent = 'Work';
    navlinks[2].textContent = 'Contact';
  }
  else{
    navlinks[0].textContent = 'About Me';
    navlinks[1].textContent = 'My Work';
    navlinks[2].textContent = 'Contact Me';
  }
})
for(let i=0; i < fig.length ; i++){
  if(i%2 === 0){
    fig[i].classList.add('go-right')
  }
  else{
    fig[i].classList.add('go-left')
  }
}

//*/
window.addEventListener('load',() => {

  window.scrollTo(0, 0);

  setTimeout(() => {
    for(let i = 0; i < projects.length; i++){
      slide(i)
    }
  },1000)

  document.querySelector('html').style.scrollBehavior = 'smooth';

  if(window.innerWidth < 500){
    navlinks[0].textContent = 'About';
    navlinks[1].textContent = 'Work';
    navlinks[2].textContent = 'Contact';
  }
})

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

const slide = (i) => {
  const observer = new IntersectionObserver((entries) => {
  
    entries.forEach(entry => {
      if(entry.isIntersecting && (i % 2 === 0)){
        fig[i].classList.remove('go-right');
        
      }
      if(entry.isIntersecting && (i % 2 !== 0)){
        fig[i].classList.remove('go-left')
      }
    })
  },options)
  observer.observe(projects[i])
}
//*/


//Copy functonality with Clipboard API

copybtn.addEventListener("click", () => {
  const copy = document.getElementById("email-address");
  const textToCopy = copy.textContent;

  navigator.clipboard.writeText(textToCopy).then(() => {
    copybtn.textContent = "COPIED!";
    const resetTimeout = setTimeout(() => {
      copybtn.innerHTML = '<i class="fas fa-copy fa-lg"></i>';
    }, 3000);
    copybtn.addEventListener("click", () => {
      clearTimeout(resetTimeout);
    });
  });
});
//----------//


const closeModal = document.querySelector("#close");
const sourcebtn = document.querySelector("#source");



sourcebtn.addEventListener("click", async () => {
  const codeModule = await import('./code.js');
  codeModule.default();
})



let loadedProjects = 2;
const increment = 2;

window.onload = function () {
  loadProjects(loadedProjects);

  if (loadedProjects == projects.length) {
    updateButton();
  }

  showAll.addEventListener("click", function () {
    loadedProjects += increment;

    if(loadedProjects >= projects.length){

    loadedProjects = projects.length;

    updateButton();

    

  }

  loadProjects(loadedProjects);
  });

  function updateButton() {
    showAll.textContent = "All Projects Loaded";
    showAll.disabled = true;
    showAll.style.cursor = "not-allowed";
  }
  function loadProjects(numToLoad) {
    for (let i = 0; i < projects.length; i++) {
      if (i < numToLoad) {
        projects[i].style.display = "block";
      } else {
        projects[i].style.display = "none";
      }
    }

    //Sliding animaton part//
    const li = document.querySelectorAll("#navbar ul li");
    const inidcator = document.getElementById("indicator");

    li.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        inidcator.style.transform = `translateX(calc(var(--navbar-link-width) * ${index}))`;

        setTimeout(() => {
          inidcator.style.opacity = "1";
        }, 30);
      });
    });
    li.forEach((item) => {
      item.addEventListener("mouseleave", () => {
        setTimeout(() => {
          inidcator.style.opacity = "0";
        }, 30);
      });
    });
  }
  //----------//

};