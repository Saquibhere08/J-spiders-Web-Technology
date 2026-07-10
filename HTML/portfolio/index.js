document.addEventListener('DOMContentLoaded', () => {
    
    // --- Live System Telemetry Engine (Unique Feature) ---
    const updateSystemTelemetry = () => {
        const dbConn = document.getElementById('telemetry-db');
        const bufferHit = document.getElementById('telemetry-buffer');
        const latency = document.getElementById('telemetry-latency');
        const liveTimestamp = document.getElementById('live-timestamp');

        // Loop real-world variable fluctuations within secure margins
        dbConn.textContent = `${Math.floor(Math.random() * (6 - 2) + 2)}/50`;
        bufferHit.textContent = `${(Math.random() * (99.9 - 99.1) + 99.1).toFixed(2)}%`;
        latency.textContent = `${Math.floor(Math.random() * (18 - 8) + 8)}ms`;

        // Native ISO Timestamp String format
        const now = new Date();
        liveTimestamp.textContent = `SYS_TIME: ${now.toISOString().replace('T', ' ').substring(0, 19)}`;
    };
    setInterval(updateSystemTelemetry, 2500);
    updateSystemTelemetry();

    // --- Interactive Database Shell Console Parser (Unique Feature) ---
    const queryInput = document.getElementById('terminal-query-input');
    const outputBody = document.getElementById('terminal-body-output');

    const dataset = {
        skills: `+-----------------------+---------------------------------------------+\n| CATEGORY              | TECHNOLOGIES                                |\n+-----------------------+---------------------------------------------+\n| Core Languages        | Java, SQL, Python, C/C++, JavaScript        |\n| Frameworks & Web      | HTML, CSS, Laravel                          |\n| Environments & Tools  | AWS, GitHub, Postman, Git, VS Code          |\n| Databases             | MySQL, PostgreSQL, Oracle SQL, MongoDB      |\n| Architecture Framework| OOP, MVC, API, Cloud Computing, Neural Net  |\n+-----------------------+---------------------------------------------+`,
        experience: `+------------------+----------------------------------+-------------+\n| POSITION         | ORGANIZATION                     | TIMELINE    |\n+------------------+----------------------------------+-------------+\n| Web Dev Intern   | Assam Electronics Dev Corp Ltd   | 2024 - 2025 |\n+------------------+----------------------------------+-------------+\n* Operational Metric: Built responsive applications, optimized downloads, & structural UI.`,
        projects: `+-----------------------------------+-------------------+---------------------------------------------------------+\n| PROJECT SCHEMATIC                 | DOMAIN INTERFACE  | OPERATIONAL HIGHLIGHT                                   |\n+-----------------------------------+-------------------+---------------------------------------------------------+\n| House Price Prediction System     | Python, ML        | Scikit-learn modeling, feature engineering & tuning.   |\n| Serverless File Sharing System    | AWS Infrastructure| Lambda, S3, API Gateway integration via Postman verification. |\n| Healthcare Grievance System       | Full-Stack Web    | Real-time infrastructure updates via Pusher engine.    |\n+-----------------------------------+-------------------+---------------------------------------------------------+`
    };

    queryInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const commandRaw = queryInput.value.trim();
            const commandClean = commandRaw.toLowerCase();
            
            if (!commandRaw) return;

            // Generate echo trace inside terminal history
            const echoLine = document.createElement('div');
            echoLine.className = 'command-echo';
            echoLine.textContent = `saquib_db=> ${commandRaw}`;
            outputBody.appendChild(echoLine);

            const resultPre = document.createElement('pre');

            // Command Processing Hub Router
            if (commandClean === 'help') {
                resultPre.textContent = `Available Shell Operations:\n  help                          Display current functional directory mapping.\n  clear                         Flush records from connection buffer.\n  select * from skills;         Fetch structured programming language records.\n  select * from experience;     Fetch authenticated industry logs.\n  select * from projects;       Fetch software implementation blueprints.`;
            } else if (commandClean === 'clear') {
                outputBody.innerHTML = '';
                queryInput.value = '';
                return;
            } else if (commandClean === 'select * from skills;' || commandClean === 'select * from skills') {
                resultPre.textContent = dataset.skills;
            } else if (commandClean === 'select * from experience;' || commandClean === 'select * from experience') {
                resultPre.textContent = dataset.experience;
            } else if (commandClean === 'select * from projects;' || commandClean === 'select * from projects') {
                resultPre.textContent = dataset.projects;
            } else {
                resultPre.textContent = `ERROR: relation "${commandRaw}" does not exist.\nType 'help' to review authorized query statements.`;
                resultPre.style.color = '#ef4444';
            }

            outputBody.appendChild(resultPre);
            queryInput.value = '';
            outputBody.scrollTop = outputBody.scrollHeight; // Lock scrolling down on evaluation execution
        }
    });

    // --- Responsive Mobile Navigation Logic ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    const toggleMobileMenu = () => {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMobileMenu);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) toggleMobileMenu();
        });
    });

    // --- Active Component Scroll Tracking (IntersectionObserver) ---
    const sections = document.querySelectorAll('.console-section');
    
    const sectionObserverOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "-10% 0px -40% 0px"
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const currentId = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // --- Testimonials Carousel Engine ---
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.btn-right');
    const prevButton = document.querySelector('.btn-left');
    const dotsNav = document.querySelector('.carousel-dots');
    const dots = Array.from(dotsNav.children);

    let currentSlideIndex = 0;

    const updateSlidePositions = (targetIndex) => {
        slides.forEach((slide, index) => {
            if (index === targetIndex) {
                slide.classList.add('current-slide');
            } else {
                slide.classList.remove('current-slide');
            }
        });

        dots.forEach((dot, index) => {
            if (index === targetIndex) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
        currentSlideIndex = targetIndex;
    };

    nextButton.addEventListener('click', () => {
        let nextIndex = currentSlideIndex + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        updateSlidePositions(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        let prevIndex = currentSlideIndex - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        updateSlidePositions(prevIndex);
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;
        const targetIndex = dots.indexOf(targetDot);
        updateSlidePositions(targetIndex);
    });

    setInterval(() => {
        let nextIndex = currentSlideIndex + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        updateSlidePositions(nextIndex);
    }, 8000);
});