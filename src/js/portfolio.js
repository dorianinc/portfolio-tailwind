const initializePortfolio = () => {
    const navbar = createNavbar();
    const introSection = createIntroSection();
    const aboutSection = createAboutSection();
    const projectsSection = createProjectsSection();
    const contactSection = createContactMeSection();
  
    const body = document.querySelector(".h-full");
    body.append(
      navbar,
      introSection,
      aboutSection,
      projectsSection,
      contactSection
    );
  };
  
  // Navbar Creation
  const createNavbar = () => {
    const header = document.createElement("header");
    header.className =
      "sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 shadow-md";
  
    const nav = document.createElement("nav");
    nav.className = "flex items-center justify-between w-full mx-auto px-10 my-3";
    nav.setAttribute("aria-label", "Global");
    header.append(nav);
  
    const home = document.createElement("a");
    home.className = "flex-none text-xl font-semibold hover:text-blue-500";
    home.href = "/";
    home.innerText = "dorianmacias.dev";
    nav.append(home);
  
    const linksContainer = document.createElement("div");
    linksContainer.className =
      "flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5";
  
    const pageLinks = [
      { url: "#about-me", text: "About" },
      { url: "#projects", text: "Projects" },
      { url: "#contact-me", text: "Contact" },
      { url: "/apps", text: "The App Counter" },
    ];
  
    pageLinks.forEach((link) => {
      const aTag = document.createElement("a");
  
      if (link.url === "/apps") {
        const divider = document.createElement("span");
  
        divider.id = "divider";
        divider.innerText = "|";
        linksContainer.append(divider);
        aTag.id = "app-counter";
      }
  
      aTag.href = link.url;
      aTag.className = "font-medium text-lg text-gray-950 hover:text-blue-500";
      aTag.innerText = link.text;
      linksContainer.append(aTag);
    });
  
    nav.append(linksContainer);
    return header;
  };
  
  // Intro Section
  const createIntroSection = () => {
    const section = document.createElement("section");
    section.className = "bg-zinc-50 h-screen";
    section.id = "intro";
  
    const sectionInner = document.createElement("div");
    sectionInner.className = "mx-auto w-60-rem px-2 py-32";
    section.append(sectionInner);
  
    const sectionFlex = document.createElement("div");
    sectionFlex.className = "w-full flex justify-between";
    sectionInner.append(sectionFlex);
  
    const sectionIntro = document.createElement("div");
    sectionIntro.className = "w-1/2";
    sectionFlex.append(sectionIntro);
  
    const sectionHeader = document.createElement("h1");
    sectionHeader.className =
      "text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl";
    sectionHeader.innerText = "Full Stack Web Developer 👋🏽";
    sectionIntro.append(sectionHeader);
  
    const sectionSubText = document.createElement("p");
    sectionSubText.className = "mt-6 text-lg leading-8 text-gray-600";
    sectionSubText.innerText =
      "Hi, I'm Dorian Macias. I am passionate about the outdoors, dogs, sleeping and car karaoke.";
    sectionIntro.append(sectionSubText);
  
    const sectionLocation = document.createElement("p");
    sectionLocation.className = "mt-6 mb-3 text-lg leading-8 text-gray-600";
    sectionLocation.innerText = "Milpitas, California. 📍";
    sectionIntro.append(sectionLocation);
  
    const linkList = document.createElement("ul");
    linkList.className = "flex gap-x-3";
    sectionIntro.append(linkList);
  
    const socialLinks = [
      {
        url: "https://www.linkedin.com/in/dorian-macias/",
        class: "fa-brands fa-linkedin fa-xl",
      },
      { url: "https://github.com/dorianinc", class: "fa-brands fa-github fa-xl" },
      {
        url: "https://wellfound.com/u/dorian-macias",
        class: "fa-brands fa-angellist fa-xl",
      },
    ];
  
    socialLinks.forEach((link) => {
      const listItem = document.createElement("li");
      listItem.className = "hover:text-blue-500";
      linkList.append(listItem);
  
      const aTag = document.createElement("a");
      aTag.href = link.url;
      listItem.append(aTag);
  
      const logo = document.createElement("i");
      logo.className = link.class;
      aTag.append(logo);
    });
  
    const profileImgContainer = document.createElement("div");
    profileImgContainer.className = "self-center";
    sectionFlex.append(profileImgContainer);
  
    const profileImg = document.createElement("img");
    profileImg.className = "h-80 w-80 rounded-full";
    profileImg.src = "./assets/images/avatar.jpg";
    profileImg.alt = "profile-pic";
    profileImgContainer.append(profileImg);
  
    const techStackContainer = document.createElement("div");
    techStackContainer.className =
      "flex items-center justify-start gap-x-6 mt-10";
    sectionInner.append(techStackContainer);
  
    const techStackTitle = document.createElement("p");
    techStackTitle.innerText = "Tech Stack |";
    techStackContainer.append(techStackTitle);
  
    const techStacks = [
      { src: "./assets/images/languages/html5.png", alt: "HTML 5", text: "HTML 5" },
      { src: "./assets/images/languages/css3.png", alt: "CSS 3", text: "CSS 3" },
      {
        src: "./assets/images/languages/javascript.png",
        alt: "Javascript",
        text: "Javascript",
      },
      { src: "./assets/images/languages/python.png", alt: "Python", text: "Python" },
      { src: "./assets/images/languages/react.png", alt: "React", text: "React" },
      { src: "./assets/images/languages/node.png", alt: "Node", text: "Node" },
      { src: "./assets/images/languages/flask.png", alt: "Flask", text: "Flask" },
    ];
  
    techStacks.forEach((stack) => {
      const stackContainer = document.createElement("div");
      stackContainer.className = "flex flex-col items-center";
      techStackContainer.append(stackContainer);
  
      const stackImgContainer = document.createElement("div");
      stackImgContainer.className = "h-14 w-14 rounded-full p-3";
      stackImgContainer.style.boxShadow = "0 0 10px rgba(0,0,0,.09)";
      stackContainer.append(stackImgContainer);
  
      const stackImg = document.createElement("img");
      stackImg.className = "h-full w-full";
      stackImg.src = stack.src;
      stackImg.alt = stack.alt;
      stackImgContainer.append(stackImg);
  
      const stackText = document.createElement("p");
      stackText.className = "font-medium text-md text-gray-600";
      stackText.innerText = stack.text;
      stackContainer.append(stackText);
    });
  
    return section;
  };
  
  // About Section
  const createAboutSection = () => {
    const section = document.createElement("section");
    section.className = "h-full px-2 py-24";
    section.id = "about-me";
  
    const sectionInner = document.createElement("div");
    sectionInner.className = "mx-auto 2xl:w-8/12 w-60-rem";
    section.append(sectionInner);
  
    const sectionFlex = document.createElement("div");
    sectionFlex.className = "flex justify-between gap-x-5 w-full";
    sectionInner.append(sectionFlex);
  
    const imgContainer = document.createElement("div");
    imgContainer.className = "self-center";
    sectionFlex.append(imgContainer);
  
    const aboutImg = document.createElement("img");
    aboutImg.className = "h-80 w-96 rounded-lg";
    aboutImg.src = "./assets/images/laptop.jpeg";
    aboutImg.alt = "random-laptop";
    imgContainer.append(aboutImg);
  
    const textContainer = document.createElement("div");
    textContainer.className = "w-9/12";
    sectionFlex.append(textContainer);
  
    const aboutHeader = document.createElement("h2");
    aboutHeader.className = "text-2xl text-blue-500 font-bold tracking-tight";
    aboutHeader.innerText = "About Me";
    textContainer.append(aboutHeader);
  
    const subHeader = document.createElement("h2");
    subHeader.className = "text-xl font-bold tracking-tight";
    subHeader.innerText = "Exploring My Journey: From A to Z";
    textContainer.append(subHeader);
  
    const aboutText = document.createElement("p");
    aboutText.className = "mt-6 text-lg leading-6 text-gray-600";
    aboutText.innerHTML = `My curiosity for computers sparked a lifelong passion for technology that has led me to pursue a career in software engineering. This interest evolved into a deep fascination with web development, particularly in the realm of software engineering. Through both formal education and hands-on projects, I've honed my skills in various technologies and programming languages, from HTML and CSS to JavaScript and Python. My journey is a testament to the power of learning and growth, and I'm excited to continue exploring new challenges and opportunities in the ever-evolving field of technology.`;
    textContainer.append(aboutText);
  
    return section;
  };
  
  // Project Section
  const createProjectsSection = () => {
    const section = document.createElement("section");
    section.id = "projects";
    section.className = "h-full px-2 py-24 bg-zinc-50";
  
    const container = document.createElement("div");
    container.className = "mx-auto w-70-rem";
    section.append(container);
  
    const headerContainer = document.createElement("div");
    headerContainer.className = "w-full";
    container.append(headerContainer);
  
    const headerContent = document.createElement("div");
    headerContent.className = "mb-5";
    headerContainer.append(headerContent);
  
    const mainTitle = document.createElement("h2");
    mainTitle.className = "text-2xl text-blue-500 font-bold tracking-tight";
    mainTitle.innerText = "Projects";
    headerContent.append(mainTitle);
  
    const subTitle = document.createElement("h2");
    subTitle.className = "text-xl font-bold tracking-tight";
    subTitle.innerText = "Each project is made with a fine attention to detail";
    headerContent.append(subTitle);
  
    const projectsGrid = document.createElement("div");
    projectsGrid.className = "grid gap-5";
    container.append(projectsGrid);
  
    const projects = [
      {
        id: "lilypad",
        title: "LilyPad",
        description: `Lilypad is a fullstack single-page AirBnB clone where property owners can post their homes or rooms for travelers to rent. Renters can search for unique accommodations in various locations and leave reviews after their stay.
                         My very first fullstack project, it was super fun! AirBnB has a really clean an simple UI but once I really dug into it, I found out how much went into it which blew me away.`,
        imgSrc: "./assets/images/projects/lilypad.png",
        codeLink: "https://github.com/dorianinc/Lilypad",
        demoLink: "https://lilypad.onrender.com",
      },
      {
        id: "mango-music",
        title: "Mango Music",
        description: `Mango Music is a fullstack single-page Apple Music clone where a user can listen and like songs uploaded by artists and add those songs to a playlist.
                         Most difficult part of this project was the playlist feature which allows user to create playlist with their favorite music. The most rewarding part of this project was definitely being able to work on with such an amazing team individuals!`,
        imgSrc: "./assets/images/projects/mango.png",
        codeLink: "https://github.com/Mango-WorldWide/Mango-Music",
        demoLink: "https://mango-music-4c4k.onrender.com",
      },
      {
        id: "phaunos",
        title: "Phaunos",
        description: `Phaunos is a fullstack single-page AllTrails clone where a user can find hiking trails in their area, add those trails to a list and leave reviews describing their experiences.
                         I built the site all on my own, it was definitely passion project because I love the outdoors. I learned a lot about Redux and Python along the way! As well as how to use the Google Maps and OpenWeather API.`,
        imgSrc: "./assets/images/projects/phaunos.png",
        codeLink: "https://github.com/dorianinc/Phaunos",
        demoLink: "https://phaunos.onrender.com",
      },
    ];
    let counter = 0;
    projects.forEach((project, i) => {
      const projectCard = document.createElement("div");
      projectCard.id = project.id;
      projectCard.className =
        "flex h-30-rem mx-auto border shadow-sm rounded-xl bg-white";
      projectsGrid.append(projectCard);
  
      const imgContainer = document.createElement("div");
      imgContainer.className = "flex justify-center items-center w-8/12";
  
      const img = document.createElement("img");
      img.className = "w-8/12 h-5/6 border shadow-lg rounded-xl";
      img.src = project.imgSrc;
      img.alt = project.title;
      imgContainer.append(img);
  
      const textContainer = document.createElement("div");
      textContainer.className = "w-4/12";
  
      const textContent = document.createElement("div");
      textContent.className = "p-4 h-full sm:p-7";
      textContainer.append(textContent);
      
      if (i % 2 !== 0) {
        projectCard.append(textContainer);
        projectCard.append(imgContainer);
      } else {
        projectCard.append(imgContainer);
        projectCard.append(textContainer);
      }
  
      const projectTitle = document.createElement("h3");
      projectTitle.className = "text-lg font-bold text-gray-800";
      projectTitle.innerText = project.title;
      textContent.append(projectTitle);
  
      const projectDescription = document.createElement("p");
      projectDescription.className = "my-2 text-gray-800 dark:text-gray-400";
      projectDescription.innerHTML = project.description;
      textContent.append(projectDescription);
  
      const linksContainer = document.createElement("ul");
      linksContainer.className = "flex gap-x-3";
      textContent.append(linksContainer);
  
      const codeLink = document.createElement("li");
      const codeAnchor = document.createElement("a");
      codeAnchor.href = project.codeLink;
      codeAnchor.innerHTML = `Code <i class="fa-brands fa-github fa-lg"></i>`;
      codeLink.append(codeAnchor);
      linksContainer.append(codeLink);
  
      const demoLink = document.createElement("li");
      const demoAnchor = document.createElement("a");
      demoAnchor.href = project.demoLink;
      demoAnchor.innerHTML = `Live Demo <i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i>`;
      demoLink.append(demoAnchor);
      linksContainer.append(demoLink);
    });
  
    return section;
  };
  
  const createContactMeSection = () => {
    const section = document.createElement("section");
    section.id = "contact-me";
    section.className = "h-full px-2 py-24";
  
    const container = document.createElement("div");
    container.className = "mx-auto w-75-rem";
    section.append(container);
  
    const headerContainer = document.createElement("div");
    headerContainer.className = "mb-5";
    container.append(headerContainer);
  
    const mainTitle = document.createElement("h2");
    mainTitle.className = "text-2xl text-blue-500 font-bold tracking-tight";
    mainTitle.innerText = "Contact Me";
    headerContainer.append(mainTitle);
  
    const subTitle = document.createElement("h2");
    subTitle.className = "text-xl font-bold tracking-tight";
    subTitle.innerText =
      "I'm always open to connect with fellow tech enthusiasts and explore new opportunities. Please don't hesitate to reach out!";
    headerContainer.append(subTitle);
  
    const form = document.createElement("form");
    form.className = "grid gap-5";
    form.method = "post";
    form.action = "https://formspree.io/f/mvonjrzz";
    container.append(form);
  
    // Name and Email Inputs
    const inputContainer = document.createElement("div");
    inputContainer.className = "flex justify-between";
    form.append(inputContainer);
  
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.id = "name";
    nameInput.placeholder = "Name";
    nameInput.required = true;
    nameInput.className =
      "py-3 px-4 block h-14 w-49-percent border-2 border-gray-200 rounded-md text-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
    inputContainer.append(nameInput);
  
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;
    emailInput.className =
      "py-3 px-4 block h-14 w-49-percent border-2 border-gray-200 rounded-md text-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
    inputContainer.append(emailInput);
  
    // Subject Input
    const subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.name = "subject";
    subjectInput.id = "subject";
    subjectInput.placeholder = "Subject";
    subjectInput.required = true;
    subjectInput.className =
      "py-3 px-4 block h-14 w-full border-2 border-gray-200 rounded-md text-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
    form.append(subjectInput);
  
    // Message Textarea
    const messageTextarea = document.createElement("textarea");
    messageTextarea.name = "message";
    messageTextarea.id = "message";
    messageTextarea.style.resize = "none";
    messageTextarea.placeholder = "Message";
    messageTextarea.required = true;
    messageTextarea.className =
      "py-3 px-4 block h-64 w-full border-2 border-gray-200 rounded-md text-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
    form.append(messageTextarea);
  
    // Buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex gap-x-2";
    form.append(buttonContainer);
  
    const sendButton = document.createElement("button");
    sendButton.type = "submit";
    sendButton.className = "text-white bg-blue-500 p-2 rounded-md";
    sendButton.innerText = "Send Message";
    buttonContainer.append(sendButton);
  
    const resetButton = document.createElement("button");
    resetButton.type = "reset";
    resetButton.className = "bg-gray-300 p-2 rounded-md";
    resetButton.innerText = "Reset Form";
    buttonContainer.append(resetButton);
  
    return section;
  };
  
  export default initializePortfolio;