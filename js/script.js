const profileLinks = [
  { label: "GitHub", url: "https://github.com/tsanta-rajaofeno" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/tsanta-nisi" },
];

let currentLanguage = "en";

const translations = {
  en: {
    pageTitle: "Tsanta Nisi | Student Developer",
    description:
      "The portfolio of Tsanta Nisi, a first-year undergraduate student at ENI Fianarantsoa, Madagascar.",
    navLabel: "Main navigation",
    homeLabel: "Tsanta Nisi, home",
    aboutNav: "About",
    skillsNav: "Skills",
    projectsNav: "Projects",
    cvNav: "Download CV",
    contactNav: "Get in touch",
    languageLabel: "FR",
    languageAria: "Passer en français",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    themeTitle: "Switch theme",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    backTopAria: "Back to top",
    skip: "Skip to content",
    heroEyebrow: "First-year undergraduate · ENI Fianarantsoa",
    heroTitle:
      "Hi, I’m <span class=\"name-highlight\">Tsanta Nisi.</span><br>Curious by nature.<br><span class=\"heading-muted\">Building for the web.</span>",
    heroIntro:
      "I’m a student developer learning by making useful, thoughtful web experiences. This is where I share what I’m exploring and the projects I’m proud to build.",
    projectsCta: "Explore my projects <span aria-hidden=\"true\">↓</span>",
    aboutCta: "A little about me <span aria-hidden=\"true\">↗</span>",
    location: "Based in Fianarantsoa, Madagascar",
    profileAlt: "Portrait of Tsanta Nisi",
    profileCaption: "STUDENT DEVELOPER",
    learning: "Always learning",
    openIdeas: "Open to new ideas",
    toolkit: "MY TOOLKIT",
    introLabel: "Introduction",
    stripPractice: "Learning through practice",
    stripProjects: "One project at a time",
    stripLocation: "Fianarantsoa, Madagascar",
    aboutEyebrow: "01 — A LITTLE ABOUT ME",
    aboutTitle:
      "Every project is<br><span class=\"heading-muted\">a new lesson.</span>",
    aboutLead:
      "I’m RAJAOFENO Tsanta Nisi, and I go by Tsanta Nisi professionally. I’m currently a first-year undergraduate student at ENI Fianarantsoa, where I’m building a strong foundation in web development.",
    aboutCopy:
      "I enjoy turning ideas into interfaces and figuring out how the pieces fit together. From a first residence showcase page to a full-stack hospital patient-management project, every step has helped me grow—and there’s plenty more to learn.",
    factProjects: "Projects completed<br>and counting",
    factStudent: "Curious student<br>developer",
    factDiscover: "Things left<br>to discover",
    skillsEyebrow: "02 — THE TOOLKIT",
    skillsTitle:
      "Tools I’m learning<br><span class=\"heading-muted\">to build with.</span>",
    skillsAside:
      "A growing set of tools for creating interactive, well-structured web experiences.",
    skillStructure: "Structure",
    skillPresentation: "Presentation",
    skillInteraction: "Interaction",
    skillResponsive: "Responsive UI",
    skillDom: "DOM tools",
    skillCharts: "Data charts",
    skillsNote: "Always adding something new to the toolkit.",
    projectsEyebrow: "03 — SELECTED WORK",
    projectsTitle:
      "Small steps.<br><span class=\"heading-muted\">Real projects.</span>",
    projectsAside:
      "Each project is a snapshot of what I’ve learned so far—and a reason to keep going.",
    filterLabel: "Filter projects",
    filterAll: "All work <span>03</span>",
    filterApplications: "Applications",
    filterWebsites: "Websites",
    projectIndex: "PROJECT",
    latest: "MOST RECENT",
    tagsLabel: "Technologies and focus",
    contactEyebrow: "04 — WHAT’S NEXT?",
    contactTitle: "Let’s make<br><span>something useful.</span>",
    contactCopy:
      "I’m at the beginning of my journey and excited to learn, collaborate, and take on new challenges.",
    profileLinksLabel: "Social profiles",
    email: "Send me an email",
    cv: "Download my CV",
    footer: "Designed and built with care by Tsanta Nisi.",
    backToTop: "Back to top <span aria-hidden=\"true\">↑</span>",
  },
  fr: {
    pageTitle: "Tsanta Nisi | Développeur web étudiant",
    description:
      "Le portfolio de Tsanta Nisi, étudiant en première année à l’ENI Fianarantsoa, Madagascar.",
    navLabel: "Navigation principale",
    homeLabel: "Tsanta Nisi, accueil",
    aboutNav: "À propos",
    skillsNav: "Compétences",
    projectsNav: "Projets",
    cvNav: "Télécharger mon CV",
    contactNav: "Me contacter",
    languageLabel: "EN",
    languageAria: "Switch to English",
    themeToDark: "Passer au thème sombre",
    themeToLight: "Passer au thème clair",
    themeTitle: "Changer de thème",
    menuOpen: "Ouvrir le menu de navigation",
    menuClose: "Fermer le menu de navigation",
    backTopAria: "Retour en haut",
    skip: "Aller au contenu",
    heroEyebrow: "Étudiant en première année · ENI Fianarantsoa",
    heroTitle:
      "Bonjour, moi c’est <span class=\"name-highlight\">Tsanta Nisi.</span><br>Curieux de nature.<br><span class=\"heading-muted\">Je crée pour le web.</span>",
    heroIntro:
      "Je suis étudiant en développement web et j’apprends en créant des expériences web utiles et soignées. Je partage ici mes découvertes et les projets dont je suis fier.",
    projectsCta: "Découvrir mes projets <span aria-hidden=\"true\">↓</span>",
    aboutCta: "En savoir un peu plus <span aria-hidden=\"true\">↗</span>",
    location: "Basé à Fianarantsoa, Madagascar",
    profileAlt: "Portrait de Tsanta Nisi",
    profileCaption: "ÉTUDIANT EN DÉVELOPPEMENT WEB",
    learning: "Toujours en apprentissage",
    openIdeas: "Ouvert aux nouvelles idées",
    toolkit: "MES OUTILS",
    introLabel: "Présentation",
    stripPractice: "Apprendre en pratiquant",
    stripProjects: "Un projet à la fois",
    stripLocation: "Fianarantsoa, Madagascar",
    aboutEyebrow: "01 — À PROPOS",
    aboutTitle:
      "Chaque projet est<br><span class=\"heading-muted\">une nouvelle leçon.</span>",
    aboutLead:
      "Je m’appelle RAJAOFENO Tsanta Nisi et j’utilise Tsanta Nisi dans un cadre professionnel. Je suis actuellement étudiant en première année à l’ENI Fianarantsoa, où je construis de solides bases en développement web.",
    aboutCopy:
      "J’aime transformer des idées en interfaces et comprendre comment chaque élément s’articule. De mon premier site vitrine pour une résidence à un projet full-stack de gestion des patients d’un hôpital, chaque étape m’a fait progresser — et il me reste encore beaucoup à apprendre.",
    factProjects: "Projets réalisés<br>et à venir",
    factStudent: "Étudiant curieux<br>en développement",
    factDiscover: "Encore tant<br>à découvrir",
    skillsEyebrow: "02 — MES OUTILS",
    skillsTitle:
      "Les outils que j’apprends<br><span class=\"heading-muted\">à maîtriser.</span>",
    skillsAside:
      "Des outils en constante évolution pour créer des expériences web interactives et bien structurées.",
    skillStructure: "Structure",
    skillPresentation: "Présentation",
    skillInteraction: "Interactivité",
    skillResponsive: "Interface responsive",
    skillDom: "Outils DOM",
    skillCharts: "Graphiques de données",
    skillsNote: "J’enrichis constamment ma boîte à outils.",
    projectsEyebrow: "03 — QUELQUES PROJETS",
    projectsTitle:
      "Des premiers pas.<br><span class=\"heading-muted\">Des projets concrets.</span>",
    projectsAside:
      "Chaque projet reflète ce que j’ai appris jusqu’ici et me donne envie d’aller plus loin.",
    filterLabel: "Filtrer les projets",
    filterAll: "Tous les projets <span>03</span>",
    filterApplications: "Applications",
    filterWebsites: "Sites web",
    projectIndex: "PROJET",
    latest: "LE PLUS RÉCENT",
    tagsLabel: "Technologies et domaines",
    contactEyebrow: "04 — ET ENSUITE ?",
    contactTitle: "Créons<br><span>quelque chose d’utile.</span>",
    contactCopy:
      "Au début de mon parcours, j’ai hâte d’apprendre, de collaborer et de relever de nouveaux défis.",
    profileLinksLabel: "Réseaux professionnels",
    email: "M’envoyer un e-mail",
    cv: "Télécharger mon CV",
    footer: "Conçu et réalisé avec soin par Tsanta Nisi.",
    backToTop: "Retour en haut <span aria-hidden=\"true\">↑</span>",
  },
};

const projects = [
  {
    number: "01",
    title: "Hospital Patient Management",
    titleFr: "Gestion des patients d’un hôpital",
    category: "Application",
    categoryFr: "Application",
    type: "application",
    summary:
      "A full-stack patient-management project for a hospital, with a focus on assigning a bed to each patient.",
    summaryFr:
      "Un projet full-stack de gestion des patients d’un hôpital, centré sur l’attribution d’un lit à chaque patient.",
    tags: ["Full-stack", "Patient workflow", "Latest project"],
    tagsFr: ["Full-stack", "Parcours patient", "Projet le plus récent"],
    visual: "visual-patient",
    symbol: "+",
  },
  {
    number: "02",
    title: "DHTML Interactive Demonstration",
    titleFr: "Démonstration interactive en DHTML",
    category: "Interactive application",
    categoryFr: "Application interactive",
    type: "application",
    summary:
      "An interactive HTML, CSS, and JavaScript demonstration featuring Cramer’s method, a data table, and a bar chart.",
    summaryFr:
      "Une démonstration interactive en HTML, CSS et JavaScript présentant la méthode de Cramer, un tableau de données et un graphique à barres.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery UI", "Chart.js"],
    tagsFr: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery UI", "Chart.js"],
    visual: "visual-math",
    symbol: "∑",
  },
  {
    number: "03",
    title: "Residence Showcase",
    titleFr: "Site vitrine d’une résidence",
    category: "Website",
    categoryFr: "Site web",
    type: "web",
    summary:
      "My first project: a simple showcase website for a residence, built with HTML and CSS.",
    summaryFr:
      "Mon premier projet : un site vitrine simple pour une résidence, réalisé en HTML et CSS.",
    tags: ["HTML", "CSS", "First project"],
    tagsFr: ["HTML", "CSS", "Premier projet"],
    visual: "visual-residence",
    symbol: "⌂",
  },
];

function applyLanguage(language) {
  currentLanguage = language === "fr" ? "fr" : "en";
  const text = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = text.pageTitle;
  document.querySelector('meta[name="description"]').content = text.description;

  const content = [
    [".skip-link", text.skip],
    [".navbar", null, { "aria-label": text.navLabel }],
    [".navbar-brand", null, { "aria-label": text.homeLabel }],
    [".theme-toggle", null, { title: text.themeTitle }],
    [".menu-toggle", null, { "aria-label": $(".menu-toggle").attr("aria-expanded") === "true" ? text.menuClose : text.menuOpen }],
    [".footer-brand", null, { "aria-label": text.backTopAria }],
    [".nav-link[href='#about']", text.aboutNav],
    [".nav-link[href='#skills']", text.skillsNav],
    [".nav-link[href='#projects']", text.projectsNav],
    [".nav-cv", text.cvNav + ' <span aria-hidden="true">↓</span>'],
    [".nav-contact", text.contactNav + ' <span aria-hidden="true">↗</span>'],
    ["#language-toggle", text.languageLabel, { "aria-label": text.languageAria }],
    [".hero-copy .eyebrow", '<span class="status-dot"></span> ' + text.heroEyebrow],
    [".hero-copy h1", text.heroTitle],
    [".hero-intro", text.heroIntro],
    [".hero-cta .button", text.projectsCta],
    [".hero-cta .text-link", text.aboutCta],
    [".hero-meta", '<span class="meta-line"></span><span>' + text.location + "</span>", { "aria-label": text.location }],
    [".profile-photo", null, { alt: text.profileAlt }],
    [".caption-label", text.profileCaption],
    [".note-top", '<span class="note-spark" aria-hidden="true">✳</span> ' + text.learning],
    [".note-bottom", '<span class="note-dot" aria-hidden="true"></span> ' + text.openIdeas],
    [".stack-label", text.toolkit],
    [".intro-strip", null, { "aria-label": text.introLabel }],
    [".intro-strip-inner > span:nth-of-type(1)", text.stripPractice],
    [".intro-strip-inner > span:nth-of-type(3)", text.stripProjects],
    [".intro-strip-inner > span:nth-of-type(5)", text.stripLocation],
    ["#about .eyebrow", text.aboutEyebrow],
    ["#about h2", text.aboutTitle],
    [".about-lead", text.aboutLead],
    [".body-copy", text.aboutCopy],
    [".fact-item:nth-child(1) span:last-child", text.factProjects],
    [".fact-item:nth-child(2) span:last-child", text.factStudent],
    [".fact-item:nth-child(3) span:last-child", text.factDiscover],
    ["#skills .eyebrow", text.skillsEyebrow],
    ["#skills h2", text.skillsTitle],
    ["#skills .section-aside", text.skillsAside],
    ["#skills .skill-item:nth-child(1) small", text.skillStructure],
    ["#skills .skill-item:nth-child(2) small", text.skillPresentation],
    ["#skills .skill-item:nth-child(3) small", text.skillInteraction],
    ["#skills .skill-item:nth-child(4) small", text.skillResponsive],
    ["#skills .skill-item:nth-child(5) small", text.skillDom],
    ["#skills .skill-item:nth-child(6) small", text.skillCharts],
    ["#skills .skills-note", '<span aria-hidden="true">✳</span> ' + text.skillsNote],
    ["#projects .eyebrow", text.projectsEyebrow],
    ["#projects h2", text.projectsTitle],
    ["#projects .section-aside", text.projectsAside],
    [".project-filters", null, { "aria-label": text.filterLabel }],
    ['.filter-button[data-filter="all"]', text.filterAll.replace("03", String(projects.length))],
    ['.filter-button[data-filter="application"]', text.filterApplications],
    ['.filter-button[data-filter="web"]', text.filterWebsites],
    ["#contact .eyebrow", text.contactEyebrow],
    ["#contact h2", text.contactTitle],
    [".contact-copy", text.contactCopy],
    ["#profile-links", null, { "aria-label": text.profileLinksLabel }],
    ["[data-contact-email]", text.email],
    ["[data-contact-cv]", text.cv],
    [".footer-inner p", text.footer],
    [".back-to-top", text.backToTop],
  ];

  content.forEach(function (item) {
    const element = document.querySelector(item[0]);
    if (!element) return;
    if (item[1] !== null) element.innerHTML = item[1];
    if (item[2]) {
      Object.keys(item[2]).forEach(function (attribute) {
        element.setAttribute(attribute, item[2][attribute]);
      });
    }
  });

  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("primary-navigation");
  themeToggle.setAttribute(
    "aria-label",
    document.body.getAttribute("data-theme") === "dark"
      ? text.themeToLight
      : text.themeToDark,
  );
  menuToggle.setAttribute(
    "aria-label",
    navigation.classList.contains("is-open") ? text.menuClose : text.menuOpen,
  );
  $("#language-toggle").attr("lang", currentLanguage === "fr" ? "en" : "fr");
  renderProjects($(".filter-button.is-active").data("filter") || "all");
  localStorage.setItem("portfolio-language", currentLanguage);
}

function renderProfileLinks() {
  const profileContainer = document.getElementById("profile-links");

  profileLinks.forEach(function (profile) {
    const hasUrl = profile.url.trim() !== "";
    const link = document.createElement(hasUrl ? "a" : "span");
    link.className = "profile-link-placeholder";

    if (hasUrl) {
      link.href = profile.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    const label = document.createElement("span");
    label.textContent = profile.label;
    link.append(label);

    if (!hasUrl) {
      const hint = document.createElement("small");
      hint.textContent = "add your profile URL";
      link.append(hint);
    }

    profileContainer.append(link);
  });
}

function renderProjects(filter) {
  const projectGrid = document.getElementById("project-grid");
  const isFrench = currentLanguage === "fr";
  const visibleProjects = projects.filter(function (project) {
    return filter === "all" || project.type === filter;
  });

  projectGrid.replaceChildren();

  visibleProjects.forEach(function (project) {
    const column = document.createElement("div");
    column.className = "col-md-6 col-lg-4";

    const card = document.createElement("article");
    card.className = "project-card";

    const visual = document.createElement("div");
    visual.className = "project-visual " + project.visual;
    visual.setAttribute("aria-hidden", "true");

    const index = document.createElement("span");
    index.className = "project-index";
    index.textContent = (isFrench ? translations.fr.projectIndex : translations.en.projectIndex) + " " + project.number;

    const symbol = document.createElement("span");
    symbol.className = "visual-symbol";
    symbol.textContent = project.symbol;

    visual.append(index, symbol);

    if (project.number === "01") {
      const badge = document.createElement("span");
      badge.className = "project-badge";
      badge.textContent = isFrench ? translations.fr.latest : translations.en.latest;
      visual.append(badge);
    }

    const content = document.createElement("div");
    content.className = "project-content";

    const category = document.createElement("p");
    category.className = "project-category";
    category.textContent = isFrench ? project.categoryFr : project.category;

    const title = document.createElement("h3");
    title.textContent = isFrench ? project.titleFr : project.title;

    const summary = document.createElement("p");
    summary.textContent = isFrench ? project.summaryFr : project.summary;

    const tags = document.createElement("div");
    tags.className = "project-tags";
    tags.setAttribute("aria-label", isFrench ? translations.fr.tagsLabel : translations.en.tagsLabel);
    (isFrench ? project.tagsFr : project.tags).forEach(function (tagText) {
      const tag = document.createElement("span");
      tag.className = "project-tag";
      tag.textContent = tagText;
      tags.append(tag);
    });

    content.append(category, title, summary, tags);
    card.append(visual, content);
    column.append(card);
    projectGrid.append(column);
  });
}

$(function () {
  const $body = $("body");
  const $themeToggle = $("#theme-toggle");
  const $themeIcon = $(".theme-icon");
  const $menuToggle = $(".menu-toggle");
  const $navigation = $("#primary-navigation");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const savedLanguage = localStorage.getItem("portfolio-language");

  function setTheme(theme) {
    const isDark = theme === "dark";
    $body.attr("data-theme", isDark ? "dark" : "light");
    $themeIcon.text(isDark ? "☀" : "☾");
    $themeToggle.attr(
      "aria-label",
      isDark ? translations[currentLanguage].themeToLight : translations[currentLanguage].themeToDark,
    );
    $("meta[name='theme-color']").attr(
      "content",
      isDark ? "#101c22" : "#f5fbfd",
    );
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }

  applyLanguage(savedLanguage === "fr" ? "fr" : "en");
  setTheme(savedTheme === "dark" ? "dark" : "light");
  renderProfileLinks();
  renderProjects("all");

  $("#language-toggle").on("click", function () {
    applyLanguage(currentLanguage === "en" ? "fr" : "en");
  });

  $themeToggle.on("click", function () {
    setTheme($body.attr("data-theme") === "dark" ? "light" : "dark");
  });

  $menuToggle.on("click", function () {
    const isOpen = !$navigation.hasClass("is-open");
    $navigation.toggleClass("is-open", isOpen);
    $menuToggle.attr("aria-expanded", String(isOpen));
    $menuToggle.attr(
      "aria-label",
      isOpen ? translations[currentLanguage].menuClose : translations[currentLanguage].menuOpen,
    );
  });

  $(".nav-link").on("click", function () {
    $navigation.removeClass("is-open");
    $menuToggle
      .attr("aria-expanded", "false")
      .attr("aria-label", translations[currentLanguage].menuOpen);
  });

  $(".project-filters").on("click", ".filter-button", function () {
    const $button = $(this);
    $(".filter-button").removeClass("is-active").attr("aria-pressed", "false");
    $button.addClass("is-active").attr("aria-pressed", "true");
    renderProjects($button.data("filter"));
  });
});
