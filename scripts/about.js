/* ==========================================================
                ABOUT.JS
                PART 1
========================================================== */

/* ==========================================================
                ABOUT TAB SWITCHING
========================================================== */

const tabs = document.querySelectorAll(".tab");

const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.section;

        tabs.forEach(item => {

            item.classList.remove("active");

        });

        tab.classList.add("active");

        tabContents.forEach(content => {

            content.classList.remove("active");

            if (content.id === target) {

                content.classList.add("active");

            }

        });

    });

});

/* ==========================================================
                DEFAULT TAB
========================================================== */

if (tabs.length > 0) {

    tabs[0].click();

}

/* ==========================================================
                ACTIVE TAB ANIMATION
========================================================== */

tabs.forEach(tab => {

    tab.addEventListener("mouseenter", () => {

        tab.style.transform = "translateY(-3px)";

    });

    tab.addEventListener("mouseleave", () => {

        tab.style.transform = "translateY(0px)";

    });

});

/* ==========================================================
                END OF PART 1
========================================================== */

/* ==========================================================
                ABOUT.JS
                PART 2
                DYNAMIC SERVICES
========================================================== */

const services = [

    {

        icon: "bi bi-code-slash",

        title: "Web Development",

        description:
            "Responsive, fast and modern websites built using HTML, CSS, JavaScript, Bootstrap, ASP.NET and modern frameworks."

    },

    {

        icon: "bi bi-phone",

        title: "Mobile App Development",

        description:
            "Cross-platform Android applications using React Native with clean UI and high performance."

    },

    {

        icon: "bi bi-database",

        title: "Backend Development",

        description:
            "REST APIs using Python, FastAPI, Flask and SQL databases with secure authentication."

    },

    {

        icon: "bi bi-cloud",

        title: "Cloud Solutions",

        description:
            "Deploy applications using cloud platforms with scalable architecture and modern DevOps practices."

    },

    {

        icon: "bi bi-bar-chart",

        title: "Database Design",

        description:
            "Design optimized MySQL and PostgreSQL databases with efficient queries and relationships."

    },

    {

        icon: "bi bi-cpu",

        title: "AI & Python",

        description:
            "Python automation, machine learning basics and AI-powered applications for real-world problems."

    }

];

/* ==========================================================
                SERVICE RENDER FUNCTION
========================================================== */

const serviceContainer = document.querySelector(".service-list");

if (serviceContainer) {

    services.forEach((service, index) => {

        serviceContainer.innerHTML += `

        <div class="service-card" data-aos="zoom-in" data-aos-delay="${index * 100}">

            <div class="service-icon">

                <i class="${service.icon}"></i>

            </div>

            <h3>

                ${service.title}

            </h3>

            <p>

                ${service.description}

            </p>

            <a href="#contact" class="btn btn-outline-info">

                Hire Me

            </a>

        </div>

        `;

    });

}

/* ==========================================================
                SERVICE CARD HOVER EFFECT
========================================================== */

document.addEventListener("mouseover", function(e){

    const card = e.target.closest(".service-card");

    if(card){

        card.style.transform = "translateY(-10px)";

    }

});

document.addEventListener("mouseout", function(e){

    const card = e.target.closest(".service-card");

    if(card){

        card.style.transform = "translateY(0px)";

    }

});

/* ==========================================================
                END OF ABOUT.JS PART 2
========================================================== */

/* ==========================================================
                ABOUT.JS
                PART 3
                DYNAMIC SKILLS
========================================================== */

const skills = [

    {
        name: "HTML5",
        level: 95
    },

    {
        name: "CSS3",
        level: 92
    },

    {
        name: "JavaScript",
        level: 90
    },

    {
        name: "Bootstrap",
        level: 90
    },

    {
        name: "Python",
        level: 95
    },

    {
        name: "FastAPI",
        level: 88
    },

    {
        name: "React Native",
        level: 85
    },

    {
        name: "ASP.NET",
        level: 82
    },

    {
        name: "SQL",
        level: 90
    }

];
/* ==========================================================
                SKILL RENDER
========================================================== */

const skillsContainer = document.querySelector(".skills-grid");

if (skillsContainer) {

    skills.forEach((skill, index) => {

        skillsContainer.innerHTML += `

        <div
            class="skill-card"
            data-aos="fade-up"
            data-aos-delay="${index * 80}">

            <div class="skill-header">

                <h5>

                    ${skill.name}

                </h5>

                <span>

                    ${skill.level}%

                </span>

            </div>

            <div class="skill-progress">

                <div
                    class="skill-progress-bar"
                    data-width="${skill.level}"
                    style="width:0%">

                </div>

            </div>

        </div>

        `;

    });

}

/* ==========================================================
                SKILL BAR ANIMATION
========================================================== */

const progressBars = document.querySelectorAll(".skill-progress-bar");

const progressObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const width = bar.dataset.width;

                bar.style.width = width + "%";

                progressObserver.unobserve(bar);

            }

        });

    },

    {

        threshold:0.4

    }

);

progressBars.forEach(bar => {

    progressObserver.observe(bar);

});

/* ==========================================================
                END OF ABOUT.JS PART 3
========================================================== */
/* ==========================================================
                EXPERIENCE DATA
========================================================== */

const experiences = [

    {

        year:"2025 - Present",

        role:"Full Stack Developer",

        company:"Personal & Academic Projects",

        description:
        "Developing full-stack web and mobile applications using HTML, CSS, JavaScript, Bootstrap, Python, FastAPI, ASP.NET and React Native."

    },

    {

        year:"2024 - 2025",

        role:"Python Developer",

        company:"Self Learning",

        description:
        "Built automation tools, database projects, REST APIs and desktop applications while strengthening backend development skills."

    },

    {

        year:"2023 - 2024",

        role:"Programming Learner",

        company:"Computer Science",

        description:
        "Focused on programming fundamentals, data structures, algorithms and object-oriented programming."

    }

];

/* ==========================================================
                EDUCATION DATA
========================================================== */

const education = [

    {

        year:"2022 - Completed",

        degree:"Higher Secondary",

        college:"Gopal Krishna Gokhale College, Kolhapur",

        description:
        "Completed higher secondary education with Mathematics and Computer Science."

    },

    {

        year:"2025 - Completed",

        degree:"Under Graduate in - BSC(Computer Science)",

        college:"The New College, Kolhapur",

        description:
        "Studying software developement, databases, operating systems, networking and modern application development."

    },


    {

        year:"2026 - 2027 -Pursuing",

        degree:"Post Graduate - MCA(Computer Application)",

        college:"Sanjay Ghodawat University, Kolhapur",

        description:
        "Completed under graduate education with specialization in Computer Science and Software Development."

    }

];

/* ==========================================================
                EXPERIENCE RENDER
========================================================== */

const experienceContainer =
document.querySelector(".experience-list");

if(experienceContainer){

    experienceContainer.innerHTML="";

    experiences.forEach((item,index)=>{

        experienceContainer.innerHTML+=`

        <div
        class="experience-box"
        data-aos="fade-up"
        data-aos-delay="${index*120}">

            <h4>${item.year}</h4>

            <h3>${item.role}</h3>

            <div class="company-name">

                <span></span>

                <p>${item.company}</p>

            </div>

            <p>

                ${item.description}

            </p>

        </div>

        `;

    });

}

/* ==========================================================
                EDUCATION RENDER
========================================================== */

const educationContainer = document.querySelector(".education-list");

if (educationContainer) {

    educationContainer.innerHTML = "";

    education.forEach((item, index) => {

        educationContainer.innerHTML += `

        <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 150}">

            <div class="education-card">

                <span class="education-year">

                    ${item.year}

                </span>

                <h3>

                    ${item.degree}

                </h3>

                <h5>

                    ${item.college}

                </h5>

                <p>

                    ${item.description}

                </p>

            </div>

        </div>

        `;

    });

}

/* ==========================================================
                SMALL FADE EFFECT
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    document.body.classList.add("loaded");

});

/* ==========================================================
                END OF ABOUT.JS
========================================================== */