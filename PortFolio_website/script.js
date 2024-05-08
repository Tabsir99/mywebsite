
const copybtn = document.querySelector("#copy");
const showAll = document.querySelector("#show-all");
const projects = document.getElementsByClassName("project-box");


//-----------//

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

const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#close");
const modalContent = document.querySelectorAll(".modal-content code");
const sourcebtn = document.querySelector("#source");

sourcebtn.addEventListener("click", () => {
  modal.style.display = "block";

  modalContent[0].innerHTML = `
  &lt;!DOCTYPE html&gt;
  &lt;html lang=&quot;en&quot;&gt;
  
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;PortFolio&lt;/title&gt;
    &lt;meta name=&quot;description&quot;
      content=&quot;Tabsir&apos;s portfolio website showcasing web development projects and contact information.&quot; /&gt;
    &lt;meta name=&quot;keywords&quot; content=&quot;Tabsir, portfolio, web developer, projects, contact&quot; /&gt;
    &lt;meta name=&quot;author&quot; content=&quot;Tabsir&quot; /&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css&quot; /&gt;
    &lt;link rel=&quot;canonical&quot; href=&quot;https://www.portfolio-tabsir.vercel.app&quot; /&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;source.css&quot; /&gt;
  
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;

  
  &lt;body&gt;
    &lt;header id=&quot;welcome-section&quot;&gt;
      &lt;nav id=&quot;navbar&quot;&gt;
        &lt;i class=&quot;fas fa-moon fa-sun&quot; id=&quot;dark-mode&quot;&gt;&lt;/i&gt;
  
        &lt;ul&gt;
          &lt;li&gt;&lt;a href=&quot;#about-me&quot;&gt;About Me&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#projects&quot;&gt;My Work&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#contact-me&quot;&gt;Contact Me&lt;/a&gt;&lt;/li&gt;
          &lt;div id=&quot;indicator&quot;&gt;&lt;/div&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
      &lt;h1&gt;Hello, I am Tabsir&lt;/h1&gt;
      &lt;p&gt;a web developer&lt;/p&gt;
    &lt;/header&gt;
  
    &lt;main id=&quot;container&quot;&gt;
      &lt;section id=&quot;about-me&quot; class=&quot;scroll&quot;&gt;
        &lt;h2&gt;About Me&lt;/h2&gt;
        &lt;article&gt;

          &lt;p&gt;
          Creativity, talent, or gift — I may not know where I stand, but my
          passion for continuous learning is unwavering. Dedication is not
          just a word for me; it&#39;s a practice that I embed in everything I
          do.&lt;br /&gt;&lt;br /&gt;
        
          &quot;My goals keep me focused and resilient, driving me forward through
          any challenge.&quot; &lt;br /&gt;&lt;br /&gt;
        
          &quot;I trust in the value of hard work&quot;— not the kind that&#39;s blind, but
          the kind that&#39;s strategic and purposeful. &quot;I strive to approach
          tasks with a strategic mindset.&quot; It&#39;s the lens through which I view
          tasks, trying to ensure that every effort counts.&lt;br /&gt;&lt;br /&gt;
        
          I treat time with utmost respect, for it is invaluable, aiming to
          add value to my moments and to those I meet along the way.&lt;br /&gt;&lt;br /&gt;
        
          Thank you for taking the time to visit my website and reading this.
          I tried to keep it brief. &lt;br /&gt;
          While brevity is a virtue, conveying the essence of who I am is
          paramount.&lt;br /&gt;&lt;br /&gt;
        
          Please feel free to explore my projects and works below.&lt;br /&gt;&lt;br /&gt;
        
          I hope to work together with you.
        &lt;/p&gt;
        &lt;/article&gt;
        &lt;/section&gt;
        
        &lt;section class=&quot;scroll&quot; id=&quot;projects&quot;&gt;
        &lt;header id=&quot;project-header&quot;&gt;
        &lt;h2&gt;These are some of my projects&lt;/h2&gt;
        &lt;p&gt;
          (You can view the source code on
          &lt;a href=&quot;#contact-me&quot; id=&quot;git&quot;&gt;Github&lt;/a&gt;)
        &lt;/p&gt;
        &lt;/header&gt;
        
        &lt;div id=&quot;my-work&quot;&gt;
        &lt;a class=&quot;project-box&quot; href=&quot;/Projects/tribute_page/index.html&quot;&gt;
          &lt;figure&gt;
            &lt;img src=&quot;/Projects/images/tribute_page.png&quot; alt=&quot;&quot; /&gt;
            &lt;figcaption class=&quot;project-tile&quot;&gt;
              &lt;span class=&quot;hidden&quot;&gt;
                &lt;&lt;/span&gt; Tribute Page
                  &lt;span class=&quot;hidden&quot;&gt; /&gt; &lt;/span&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
        &lt;/a&gt;
        
        &lt;a class=&quot;project-box&quot; href=&quot;/Projects/product_landing/landing.html&quot;&gt;
          &lt;figure&gt;
            &lt;img src=&quot;/Projects/images/product_landing.png&quot; alt=&quot;&quot; /&gt;
            &lt;figcaption&gt;
              &lt;span class=&quot;hidden&quot;&gt;
                &lt;&lt;/span&gt;Product Landing page&lt;span class=&quot;hidden&quot;&gt;
                    /&gt;&lt;/span&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
        &lt;/a&gt;
        
        &lt;a class=&quot;project-box&quot; href=&quot;/Projects/Survey_form/index.html&quot;&gt;
          &lt;figure&gt;
            &lt;img src=&quot;/Projects/images/surveyform.png&quot; alt=&quot;&quot; /&gt;
            &lt;figcaption&gt;
              &lt;span class=&quot;hidden&quot;&gt;
                &lt;&lt;/span&gt;Survey Form&lt;span class=&quot;hidden&quot;&gt;
                    /&gt;&lt;/span&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
        &lt;/a&gt;
        &lt;/div&gt;
        
        &lt;button type=&quot;button&quot; id=&quot;show-all&quot;&gt;SHOW ALL&lt;/button&gt;
        &lt;div id=&quot;btn-con&quot;&gt;
        View Current Page&#39;s source code:
        &lt;button type=&quot;button&quot; id=&quot;source&quot;&gt;
          &lt;i class=&quot;fas fa-file-code icon&quot;&gt;&lt;/i&gt; VIEW Code
        &lt;/button&gt;
        &lt;/div&gt;
        &lt;/section&gt;
        &lt;/main&gt;
        
        &lt;!-- MODAL --&gt;
        
        &lt;div id=&quot;myModal&quot; class=&quot;modal&quot;&gt;
        &lt;!-- Modal content --&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
        &lt;div class=&quot;section&quot;&gt;
        &lt;h2 class=&quot;section-title&quot;&gt;HTML&lt;/h2&gt;
        
        &lt;pre&gt;&lt;code class=&quot;html&quot;&gt;
          
          &lt;/code&gt;&lt;/pre&gt;
        &lt;/div&gt;
        
        &lt;div class=&quot;section&quot;&gt;
        &lt;h2 class=&quot;section-title&quot;&gt;CSS&lt;/h2&gt;
        
        &lt;pre&gt;&lt;code class=&quot;css&quot;&gt;
          
          &lt;/code&gt;&lt;/pre&gt;
        &lt;/div&gt;
        
        &lt;div class=&quot;section&quot;&gt;
        &lt;h2 class=&quot;section-title&quot;&gt;JavaScript&lt;/h2&gt;
        
        &lt;pre&gt;&lt;code class=&quot;javascript&quot;&gt;
          
          &lt;/code&gt;&lt;/pre&gt;
        &lt;/div&gt;
        
        &lt;span id=&quot;close&quot;&gt;&times;&lt;/span&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;!----------------&gt;
        
        &lt;footer id=&quot;contact-me&quot; class=&quot;scroll&quot;&gt;
        &lt;h1 id=&quot;footer-heading&quot;&gt;Let&#39;s work together...&lt;/h1&gt;
        &lt;p&gt;
        &quot;Great things in business are never done by one person. They&#39;re done by
        a team of people.&quot; - Steve Jobs
        &lt;/p&gt;
        
        &lt;ul id=&quot;social-media&quot;&gt;
        &lt;li&gt;
        &lt;a href=&quot;&quot;&gt;&lt;i class=&quot;fab fa-facebook&quot;&gt;&lt;/i&gt;Facebook&lt;/a&gt;
        &lt;/li&gt;
        
        &lt;li&gt;
        &lt;a href=&quot;https://github.com/Tabsir99&quot; target=&quot;_blank&quot;&gt;&lt;i class=&quot;fab fa-github&quot;&gt;&lt;/i&gt;GitHub&lt;/a&gt;
        &lt;/li&gt;
        
        &lt;li id=&quot;profile-link&quot;&gt;
        &lt;a href=&quot;https://www.linkedin.com/in/tabsir-ahammed-9b1a092a1/&quot; target=&quot;_blank&quot;&gt;
          &lt;i class=&quot;fab fa-linkedin&quot;&gt;&lt;/i&gt;LinkedIn&lt;/a&gt;
        &lt;/li&gt;
        
        &lt;li&gt;
        &lt;a href=&quot;https://www.fiverr.com/tabsir99&quot; target=&quot;_blank&quot;&gt;&lt;img src=&quot;fivr.png&quot; width=&quot;37&quot; /&gt;Fiverr&lt;/a&gt;
        &lt;/li&gt;
        
        &lt;li&gt;
        &lt;a href=&quot;https://www.upwork.com/freelancers/~011a2afbbf1c24dbc5&quot; target=&quot;_blank&quot;&gt;&lt;i
            class=&quot;fab fa-upwork&quot;&gt;&lt;/i&gt;Upwork&lt;/a&gt;
        &lt;/li&gt;
        &lt;/ul&gt;
        
        &lt;div id=&quot;email&quot;&gt;
        Email me:
        &lt;a href=&quot;mailto:tabsirconnects@gmail.com&quot; id=&quot;email-address&quot;&gt;tabsirconnects@gmail.com&lt;/a&gt;
        (Click to send) or
        &lt;button id=&quot;copy&quot;&gt;&lt;i class=&quot;fas fa-copy fa-lg&quot;&gt;&lt;/i&gt;&lt;/button&gt;
        &lt;/div&gt;
        
        &lt;div id=&quot;tribute&quot;&gt;
        Special thanks to &lt;b&gt;&lt;a href=&quot;freecodecamp.org&quot;&gt;freeCodeCamp&lt;/a&gt;&lt;/b&gt;, where my journey began.
        
        &lt;p&gt;
        &lt;b&gt;
          &lt;font size=&quot;5&quot;&gt;&copy;&lt;/font&gt;
        &lt;/b&gt; 2024 Tabsir. All rights reserved.
        | Created: May 2024
        &lt;/p&gt;
        &lt;/div&gt;
        &lt;/footer&gt;
        
        &lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;
        &lt;/body&gt;
        
        &lt;/html&gt;
  `;

  modalContent[1].innerHTML = `
  :root {
    --margin-bottom: 0.6rem;
    --navheight: 4rem;
    --footerborder: 3px solid #007bff;
    --fheading-size: 2.5rem;
    --margin-general: 2.8rem;
    --max-width: 900px;
    --grid-max-width: 1200px;
    --grid-gap: 2rem;
  
    --body-background: #f9f9f9;
    --body-color: #333;
    --about-background: #fff;
    --aboutme-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
    --navbar-background: #fff;
    --navlink-color: rgb(59, 88, 88);
    --navlink-highlight: rgba(59, 88, 88, 0.1);
    --icon-color: rgb(0, 0, 0, 0.7);
  
    --figcap-background: #b8e6ba;
  
    --button-background: #007bff;
    --btn-hvoer-color: #007bff;
    --btn-color: #fff;
    --btn-border-color: 2px solid #007bff;
    --btn-hover-border: 2px solid #007bff;
  
    --footer-background: #f9f9f9;
    --footer-color: #333;
    --footer-h-color: #007bff;
    --email-color: #007bff;
    --email-hover-color: #0056b3;
  
    --link-color: inherit;
    --facebook: #2b6eff;
    --github: #333;
    --copy: rgb(36, 36, 28);
  
    --navbar-link-width: 8rem;
  }
  html {
    scroll-behavior: smooth;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    line-height: 1.8;
    text-align: justify;
    color: var(--body-color);
    background-color: var(--body-background);
    padding: 1rem;
  }
  
  #welcome-section {
    text-align: center;
    margin-top: var(--navheight);
  }
  
  h1,
  h2 {
    text-align: center;
    font-weight: bold;
    color: var(--body-color);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  
  h2 {
    margin-bottom: var(--margin-bottom);
  }
  #container {
    padding: 1rem;
  }
  
  #about-me {
    max-width: var(--max-width);
    background-color: var(--about-background);
    padding: 1.3rem 1.3rem var(--margin-bottom);
    border-radius: 0.4rem;
    box-shadow: var(--aboutme-shadow);
    margin: 1rem auto 2rem;
  }
  
  article {
    margin-bottom: 1rem;
  }
  
  #welcome-section p {
    margin-bottom: var(--margin-bottom);
  }
  
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
  /*Navbar sectioin*/
  #navbar {
    position: fixed;
    background: var(--navbar-background);
    inset: 0 0 auto auto;
    width: 100vw;
    height: var(--navheight);
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  
  /*        */
  
  /* Sliding animation part*/
  #indicator {
    position: absolute;
    width: var(--navbar-link-width);
    height: 100%;
    background-color: var(--navlink-highlight);
    opacity: 0;
    z-index: -1;
    transition: transform 0.1s, opacity 0.25s ease-in;
  }
  /*------------*/
  
  #navbar ul {
    width: auto;
    position: relative;
    display: flex;
  }
  
  #navbar li {
    width: var(--navbar-link-width);
  }
  
  /*        */
  
  #navbar a {
    color: var(--navlink-color);
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  
  #dark-mode {
    font-size: 2rem;
    color: var(--icon-color);
    align-self: center;
    justify-self: center;
    margin-right: 1rem;
    cursor: pointer;
  }
  
  /*Navbar section*/
  
  /*Project section*/
  
  #my-work {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(var(--grid-max-width) / 4), 1fr)
    );
    gap: var(--grid-gap);
    width: 100%;
    margin: 0 auto;
    margin-bottom: 3rem;
    max-width: var(--grid-max-width);
    padding: 0.5rem;
  }
  
  #my-work img {
    width: 100%;
    flex-grow: 1;
  }
  
  #my-work figure {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 3px solid rgb(102, 99, 95);
  }
  
  #my-work figcaption {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: var(--figcap-background);
    border-top: 1px solid green;
  }
  
  #show-all {
    display: block;
    margin: 1rem auto;
    padding: 0.6rem 1rem;
    font-size: 1.2rem;
    border: var(--btn-border-color);
    background-color: transparent;
    color: var(--btn-color);
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.1s ease,
      border-color 0.2s ease;
    background-color: var(--button-background);
  }
  
  #source {
    display: block;
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    padding: 0.6rem 1rem;
    transition: background-color 0.3s;
    margin: 1rem auto;
  }
  #source:hover {
    background-color: #367039;
  }
  #source i {
    margin-right: 0.2rem;
  }
  #btn-con {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 2rem;
    line-height: 1;
  }
  #show-all:hover {
    background-color: unset;
    color: var(--btn-hover-color);
    border: var(--btn-hover-border);
  }
  
  .project-box span.hidden {
    opacity: 0;
    transition: opacity 0.2s ease;
    margin: 0 5px;
    font-size: 1.4rem;
    color: lightseagreen;
  }
  
  .project-box:hover span.hidden {
    opacity: 1;
  }
  .project-box {
    cursor: pointer;
  }
  
  #project-header {
    text-align: center;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  #project-header a {
    font-weight: bold;
    color: rgb(20, 176, 20);
  }
  
  /*Project section*/
  
  /*MODAL section*/
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: #605e5e;
    margin: 2rem auto;
    padding: 20px;
    width: 95%;
    border-radius: 8px;
    position: relative;
    padding: 2rem 1rem;
    max-width: 60rem;
    border: 2px solid #00FFFF;
  }
  
  .modal-content code {
    text-wrap: wrap;
  }
  
  #close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: -0.1rem;
    right: 0.3rem;
  }
  
  #close:hover,
  #close:focus {
    color: rgb(251, 248, 248);
    text-decoration: none;
    cursor: pointer;
  }
  
  .section {
    background-color: #1e1d24;
    margin: 10px 0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    display: block;
    border: 2px solid rgb(156, 250, 255);
  }
  
  .section:hover {
    transform: translateY(-5px);
  }
  
  .section-title {
    color: #d9f5c8;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid white;
    padding-bottom: 0.6rem;
  }
  
  /*---------*/
  
  /*Footer*/
  
  footer#contact-me {
    background-color: var(--footer-background);
    color: var(--footer-color);
    text-align: center;
    padding: 2rem 0;
    font-family: "Arial", sans-serif;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    margin: var(--margin-general) 0 1rem;
    width: 100%;
    border-top: var(--footerborder);
  }
  
  #footer-heading {
    font-size: var(--fheading-size);
    color: var(--footer-h-color);
  }
  
  footer#contact-me p {
    margin: 0 2rem 2rem;
    font-size: 1rem;
    font-style: italic;
  }
  
  ul#social-media {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 0.4rem 0;
  }
  
  ul#social-media li {
    transition: transform 0.2s ease;
    margin: 0.4rem 1.6rem;
  }
  
  ul#social-media i {
    margin-right: 4px;
  }
  .fa-facebook {
    color: var(--facebook);
  }
  .fa-github {
    color: var(--github);
  }
  .fa-linkedin {
    color: #0077b5;
  }
  .fa-envelope {
    color: #ad3b31;
  }
  .fa-upwork {
    color: #408e42;
  }
  
  ul#social-media li:hover {
    transform: translateY(5px) scale(1.1);
  }
  
  ul#social-media a {
    color: var(--link-color);
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #tribute {
    margin-top: var(--margin-general);
    font-size: 1rem;
  }
  
  #tribute a {
    color: #007bff;
    text-decoration: none;
  }
  
  #tribute a:hover {
    text-decoration: underline;
  }
  
  #footer-contact-form {
    margin-top: var(--margin-general);
  }
  
  #email {
    font-size: 1.4rem;
    margin: 2rem 0;
  }
  
  #email a {
    display: block;
    transition: transform 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    border-radius: 4px;
    color: var(--email-color);
    text-decoration: none;
    width: max-content;
    margin: 0 auto;
    padding: 0 0.4rem;
  }
  
  #email a:hover {
    transform: scale(1.1);
    color: var(--email-hover-color);
    text-decoration: underline;
  }
  #copy {
    background-color: unset;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--copy);
  }
  
  /*Footer*/
  
  .scroll {
    scroll-margin-top: var(--navheight);
  }
  
  @media screen and (max-width: 30rem) {
    :root {
      --navheight: 3.5rem;
      --fheading-size: 2.1rem;
      --grid-gap: 1rem;
      --navbar-link-width: 6.7rem;
    }
    #navbar a {
      font-size: 0.8rem;
    }
    #navbar {
      justify-content: center;
    }
    #my-work h2 {
      font-size: 1.3rem;
    }
    #container {
      padding: 0;
    }
  }
  @media screen and (max-width: 24rem) {
    :root {
      --fheading-size: 1.8rem;
      --footerborder: none;
    }
    ul#social-media {
      flex-direction: column;
    }
    #navbar {
      flex-direction: row-reverse;
    }
    #navbar a {
      font-size: 0.95rem;
    }
    #dark-mode {
      margin: 0 0.4rem;
    }
    #navbar a {
      font-size: 0.8rem;
    }
  }
  
  `

  modalContent[2].innerHTML = `
const root = document.documentElement;
const darkMode = document.querySelector("#dark-mode");
const copybtn = document.querySelector("#copy");
const showAll = document.querySelector("#show-all");
const projects = document.getElementsByClassName("project-box");

const darkProperties = {
  "--navbar-background": "rgba(49,49,50,1)",
  "--navlink-color": "#ffffff",
  "--navlink-highlight": "rgb(30,35,30)",
  "--icon-color": "rgb(250, 250, 197)",
  "--body-color": "#EAEAEA",
  "--body-background": "#282828",
  "--about-background": "#2b2b2d",
  "--figcap-background": "#bbc",
  "--aboutme-shadow": "0 4px 4px rgba(235, 235, 235, 0.1)",
  "--button-background": "#333",
  "--btn-color": "#ffffff",
  "--btn-hover-color": "#555",
  "--btn-border-color": "2px solid #ffffff",
  "--btn-hover-border": "2px solid #aaa",
  "--footer-background": "#1f1f1f",
  "--footer-color": "#ffffff",
  "--link-color": "#bbbbbb",
  "--email-color": "#4b8bf5",
  "--email-hover-color": "#82b1ff",
  "--github": "#bbb",
  "--copy": "#ccc",
  "--footerborder": "4px solid #505050",
  "--footer-h-color": "#4b8bd5",
};

//Theme Changing functonality

const darkTheme = () => {
  for (const property in darkProperties) {
    root.style.setProperty(property, darkProperties[property]);
  }
};

const lightTheme = () => {
  for (const property in darkProperties) {
    root.style.removeProperty(property);
  }
};

//Save preference

const changeTheme = () => {
  darkMode.classList.toggle("fa-moon");
  darkMode.classList.toggle("dark");
  let isDark = darkMode.classList.contains("dark");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    darkTheme();
  } else {
    localStorage.setItem("theme", "light");
    lightTheme();
  }
};
//-----------//

darkMode.addEventListener("click", changeTheme);

window.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    darkTheme();
    darkMode.classList.toggle("fa-moon");
    darkMode.classList.toggle("dark");
  }
  if (theme === "light") {
    lightTheme();
  }
});

//-----------//

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

const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#close");
const modalContent = document.querySelectorAll(".modal-content code");
const sourcebtn = document.querySelector("#source");

sourcebtn.addEventListener("click", () => {
  modal.style.display = "block";

  modalContent[0].innerHTML = '(all the codes for html)'

  modalContent[1].innerHTML = '(all the code for css)'

  modalContent[2].innerHTML = '(all the code for javascript)'

  hljs.highlightAll();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


let loadedProjects = 3;
const increment = 3;
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
        inidcator.style.transform = \`translateX(calc(var(--navbar-link-width) * \${index}))\`;

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
  `

  hljs.highlightAll();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



let loadedProjects = 3;
const increment = 3;

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
