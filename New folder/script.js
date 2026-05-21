document.addEventListener("DOMContentLoaded", () => {

    // ==========================================================================
    // 1. APPLICATION VIEWPORT CONTROL & LIGHT/DARK INTERFACE ENGINE
    // ==========================================================================
    const themeToggleBtn = document.getElementById("theme-btn");
    let interfaceIsDarkState = true;

    themeToggleBtn.addEventListener("click", () => {
        interfaceIsDarkState = !interfaceIsDarkState;
        document.body.classList.toggle("light-mode", !interfaceIsDarkState);
        themeToggleBtn.textContent = interfaceIsDarkState ? "🌙" : "☀️";
    });

    // RESPONSIVE PHONE OVERLAY MENU CONTROLLER
    const mobileMenuTrigger = document.getElementById("menu-btn");
    const navigationLinksBox = document.getElementById("nav-links");

    mobileMenuTrigger.addEventListener("click", () => {
        navigationLinksBox.classList.toggle("open-menu-state");
    });

    document.querySelectorAll(".nav-links a").forEach(linkItem => {
        linkItem.addEventListener("click", () => {
            navigationLinksBox.classList.remove("open-menu-state");
        });
    });

    // SCROLL SCRUBBER ANCHOR TRIGGER ACTIVE WINDOW DETECTOR
    const backToTopAnchorButton = document.getElementById("back-to-top-anchor");
    window.addEventListener("scroll", () => {
        backToTopAnchorButton.classList.toggle("visible-state", window.scrollY > 450);
    });

    // ==========================================================================
    // 2. DASHBOARD HOME STATISTICAL ANIMATION COUNTERS ENGINE
    // ==========================================================================
    function processStatisticalIncrementCounter(htmlElementTarget, absoluteLimitValue) {
        let dynamicStartingInteger = 0;
        const processingSpeedMatrix = Math.ceil(absoluteLimitValue / 60);
        
        const runtimeIntervalLoop = setInterval(() => {
            dynamicStartingInteger = Math.min(dynamicStartingInteger + processingSpeedMatrix, absoluteLimitValue);
            htmlElementTarget.textContent = dynamicStartingInteger + (htmlElementTarget.dataset.append || "");
            if (dynamicStartingInteger >= absoluteLimitValue) {
                clearInterval(runtimeIntervalLoop);
            }
        }, 20);
    }

    // INITIALIZE MONITOR INTERSECTION SCROLL DELAY ACTION OVERRIDE
    setTimeout(() => {
        processStatisticalIncrementCounter(document.getElementById("count-modules"), 5);
        
        const technicalTargetElement = document.getElementById("count-protocols");
        technicalTargetElement.dataset.append = "+";
        processStatisticalIncrementCounter(technicalTargetElement, 35);
        
        processStatisticalIncrementCounter(document.getElementById("count-questions"), 10);
    }, 400);

    // INTERSECTION INTERACTION DETECTOR FOR GRAPHICS ANIMATED FADES
    const scrollingRevealNodes = document.querySelectorAll(".reveal");
    const architecturalIntersectionObserver = new IntersectionObserver(detectedEntries => {
        detectedEntries.forEach(entryNode => {
            if (entryNode.isIntersecting) {
                entryNode.target.classList.add("visible");
                architecturalIntersectionObserver.unobserve(entryNode.target);
            }
        });
    }, { threshold: 0.1 });
    scrollingRevealNodes.forEach(targetRevealNode => architecturalIntersectionObserver.observe(targetRevealNode));

    // ==========================================================================
    // 3. PROGRAMMATIC INJECTION ENGINE FOR INTERACTIVE OSI MODEL
    // ==========================================================================
    const layerArchitecturePayload = [
        { level: 7, title: "Application Layer", color: "#ef4444", standardTech: "HTTP, HTTPS, FTP, DNS, SMTP", functionalDefinition: "Acts as the direct interface tier exposing network services directly to end-user software assets.", implementationScenario: "Web browser engines dispatch systematic secure HTTPS network socket queries to map remote datasets." },
        { level: 6, title: "Presentation Layer", color: "#f59e0b", standardTech: "SSL, TLS, ASCII, JPEG, Unicode", functionalDefinition: "Manages data formatting syntax translation, native byte encryption routines, and systemic data compression matrices.", implementationScenario: "The connection endpoint forces a TLS cryptographic wrapper to mask parameter inputs prior to routing." },
        { level: 5, title: "Session Layer", color: "#eab308", standardTech: "NetBIOS, RPC, SOCKS, SIP", functionalDefinition: "Coordinates runtime handshake session establishment, token tracking controls, and synchronization point recovery lines.", implementationScenario: "An enterprise VoIP stream cluster establishes persistent media channel connections for the duration of a voice session." },
        { level: 4, title: "Transport Layer", color: "#10b981", standardTech: "TCP, UDP, SCTP", functionalDefinition: "Manages reliable end-to-end flow control packet segmentation, message sequencing verification checkpoints, and window size adjustment boundaries.", implementationScenario: "A local client connection runs TCP byte handshakes to track missing chunks of an active file download payload." },
        { level: 3, title: "Network Layer", color: "#06b6d4", standardTech: "IPv4, IPv6, ICMP, OSPF, BGP", functionalDefinition: "Processes logical machine path mapping addressing logic and inter-network routing lookup paths.", implementationScenario: "Core backbone routers parse incoming destination IP tags to forward traffic across autonomous systems." },
        { level: 2, title: "Data Link Layer", color: "#6366f1", standardTech: "Ethernet (802.3), Wi-Fi (802.11), ARP, MAC", functionalDefinition: "Provides reliable physical layer frame transmission across adjacent hardware components on a shared wire link.", implementationScenario: "An intelligent layer-2 network switch maps destination MAC identities to deliver isolated hardware frames." },
        { level: 1, title: "Physical Layer", color: "#7c3aed", standardTech: "Cat6 Twisted-Pair, DSL, Fiber Optic Core, Hubs", functionalDefinition: "Propagates unstructured electrical voltage currents, optical light frequencies, or radio frequency pulses across raw physical media conduits.", implementationScenario: "A local workstation interface transforms data bitstreams into light pulses over high-speed fiber channels." }
    ];

    const osiInjectionDomTarget = document.getElementById("osi-stack-injection");
    
    layerArchitecturePayload.forEach(layerMetadata => {
        const structuralLayerNodeElement = document.createElement("div");
        structuralLayerNodeElement.className = "osi-layer-node";
        structuralLayerNodeElement.innerHTML = `
            <div class="osi-layer-trigger-header">
                <div class="layer-node-index" style="background: ${layerMetadata.color}">${layerMetadata.level}</div>
                <div class="layer-node-label">Layer ${layerMetadata.level} — ${layerMetadata.title}</div>
                <div class="layer-node-protocols-capsule">${layerMetadata.standardTech.split(',')[0]}</div>
                <div class="layer-node-chevron">▼</div>
            </div>
            <div class="osi-layer-hidden-body">
                <p><strong>Operational Role:</strong> ${layerMetadata.functionalDefinition}</p>
                <p style="margin-top: 0.5rem"><strong>Tracked Protocol Matrix:</strong> ${layerMetadata.standardTech}</p>
                <p style="margin-top: 0.5rem"><strong>Production Context Model:</strong> ${layerMetadata.implementationScenario}</p>
            </div>
        `;

        structuralLayerNodeElement.querySelector(".osi-layer-trigger-header").addEventListener("click", () => {
            structuralLayerNodeElement.classList.toggle("expanded-state");
        });

        osiInjectionDomTarget.appendChild(structuralLayerNodeElement);
    });

    // ==========================================================================
    // 4. CENTRAL BOARD EXAMINATION CENTRAL PROCESSING ENGINE (10 QUANTIFIABLE QUESTIONS)
    // ==========================================================================
    const boardExaminationSyllabusDatabase = [
        {
            query: "Which transmission directionality configuration establishes a single permanently dedicated channel direction where one node exclusively transmits and the other exclusively receives?",
            choices: ["Half-Duplex Topology", "Simplex Architecture", "Full-Duplex Configuration", "Asynchronous Time Division Multiplexing"],
            solutionIndex: 1,
            rationale: "Simplex setups are strictly unidirectional. One device acts exclusively as a sender, while the other functions solely as a receiver."
        },
        {
            query: "What specific parameter error detection system employs a long polynomial division matrix calculation against data segments to isolate burst errors?",
            choices: ["Vertical Redundancy Checksum", "Cyclic Redundancy Check (CRC)", "One's Complement Byte Checksum", "Simple Block Parity Verification"],
            solutionIndex: 1,
            rationale: "CRC uses polynomial long division to generate highly reliable remainder verification bits that detect transmission burst errors."
        },
        {
            query: "Identify the reference tier within the ISO OSI 7-Layer paradigm explicitly accountable for physical network path logic lookup maps, routing configurations, and logical IP address translations:",
            choices: ["Data Link Tier (Layer 2)", "Transport Pipeline (Layer 4)", "Network Architecture (Layer 3)", "Session Synchronization Core (Layer 5)"],
            solutionIndex: 2,
            rationale: "Layer 3 (Network Layer) manages logical addressing (IP mapping) and packet routing across multiple networks."
        },
        {
            query: "Which protocol specification can be classified as a connectionless transport standard engineered to execute raw high-speed transfers without tracking sequencing packet acknowledgments?",
            choices: ["Transmission Control Protocol (TCP)", "Hypertext Transfer Protocol (HTTP)", "User Datagram Protocol (UDP)", "Border Gateway Routing Protocol (BGP)"],
            solutionIndex: 2,
            rationale: "UDP is connectionless and does not require arrival verification handshakes, providing a fast data stream optimized for real-time media."
        },
        {
            query: "What cryptographic security framework leverages a single shared unified private keyspace matrix to handle both target plaintext encryption and matching ciphertext decryption operations?",
            choices: ["Asymmetric Infrastructure", "Symmetric Cryptographic Cipher Layer", "Public Key Infrastructure (PKI) Arrays", "Elliptic Curve Diffie-Hellman Key Exchange"],
            solutionIndex: 1,
            rationale: "Symmetric key systems execute high-speed operations using a single shared secret key for encryption and decryption."
        },
        {
            query: "In asymmetric key infrastructure deployments, if Node A intents to dispatch an unreadable, secure database record to Node B, which key resource must Node A run to encrypt the packet data?",
            choices: ["The Private Key of Node A", "The Public Key of Node A", "The Public Key of Node B", "The Master Authority Root Certifying Key"],
            solutionIndex: 2,
            rationale: "To ensure confidential data transfers in asymmetric systems, records are encrypted using the receiver's public key, meaning only the receiver's private key can decrypt them."
        },
        {
            query: "Which security dimension of the core architectural CIA Triad relies on security mechanisms like hashing algorithms (SHA-256) to ensure packets are not altered or tampered with during transmission?",
            choices: ["Confidentiality Frameworks", "Infrastructure Availability Matrix", "System Integrity Controls", "Biometric Non-Repudiation Validation"],
            solutionIndex: 2,
            rationale: "Integrity validation patterns use cryptographic hashes to verify that data files have not been modified or tampered with in transit."
        },
        {
            query: "What network topology links every internal computing terminal asset to an intelligent centralized layer-2 processing switch via point-to-point drop cables?",
            choices: ["Linear Common Bus Layout", "Star Topology Mesh", "Ring Pipeline Setup", "Hierarchical Decentralized Tree Structure"],
            solutionIndex: 1,
            rationale: "Star networks route all connection drops directly to an intermediate distribution switch, which handles packet delivery."
        },
        {
            query: "What historical telecommunication contribution established Morse Code as the world's primary functional standardized digital character encoding framework?",
            choices: ["The Acoustic Telephone Loop", "The Mechanical Printing Press Grid", "The Electric Telegraph Circuit", "The Early Transatlantic Wireless Spark Gap Array"],
            solutionIndex: 2,
            rationale: "The electric telegraph used short and long current pulses (dots and dashes) to encode text information across long copper distances."
        },
        {
            query: "Which physical guided media deployment uses total internal reflection of light pulses through high-purity silica glass to support extremely high data transfer rates?",
            choices: ["Shielded Twisted Pair Cables (STP)", "Coaxial Broadband Lines (RG-6)", "Fiber Optic Transmission Mediums", "Unguided Atmospheric Microwave Links"],
            solutionIndex: 2,
            rationale: "Fiber-optic cables process data signals as high-speed light pulses within protected glass cores, avoiding electromagnetic interference."
        }
    ];

    let evaluatingCurrentQuestionIndex = 0;
    let verifiedAcademicAccumulatedScore = 0;

    const testingDomContainerBox = document.getElementById("dynamic-exam-cards-container");
    const gradingDashboardConsole = document.getElementById("exam-score-dashboard");

    window.initializeExaminationMatrixEngine = function() {
        testingDomContainerBox.innerHTML = "";
        gradingDashboardConsole.classList.remove("active-evaluation-target");
        
        boardExaminationSyllabusDatabase.forEach((questionObject, questIndex) => {
            const cardNodeWrapper = document.createElement("div");
            cardNodeWrapper.className = `examination-card-node ${questIndex === 0 ? 'active-evaluation-target' : ''}`;
            cardNodeWrapper.id = `exam-node-id-${questIndex}`;

            let choicesBlockTemplateHTML = "";
            questionObject.choices.forEach((choiceString, optionIndex) => {
                choicesBlockTemplateHTML += `
                    <button class="eval-option-row-btn" onclick="validateUserChoiceSelection(this, ${questIndex}, ${optionIndex})">
                        ${choiceString}
                    </button>
                `;
            });

            cardNodeWrapper.innerHTML = `
                <div class="eval-node-title">Question 0${questIndex + 1}: ${questionObject.query}</div>
                <div class="eval-node-options-container">${choicesBlockTemplateHTML}</div>
                <div class="eval-node-feedback-block" id="feedback-eval-block-${questIndex}"></div>
                <div class="eval-node-footer-controls">
                    <div class="eval-node-progress-metric">Syllabus Evaluation Section: Question ${questIndex + 1} of ${boardExaminationSyllabusDatabase.length}</div>
                    <button class="btn btn-outline" id="forward-link-btn-${questIndex}" onclick="shiftToNextEvaluationNode(${questIndex})" style="display: none; font-size: 0.85rem; padding: 0.5rem 1.25rem;">
                        ${questIndex < boardExaminationSyllabusDatabase.length - 1 ? 'Forward Next Stage →' : 'Lock Records & Compute Marks'}
                    </button>
                </div>
            `;
            testingDomContainerBox.appendChild(cardNodeWrapper);
        });
    };

    window.validateUserChoiceSelection = function(clickedButtonElement, globalQuestIndex, userSelectedChoiceIndex) {
        const optionButtonsCollection = clickedButtonElement.parentElement.querySelectorAll(".eval-option-row-btn");
        optionButtonsCollection.forEach(buttonNode => buttonNode.disabled = true);

        const absoluteCorrectAnswerIndex = boardExaminationSyllabusDatabase[globalQuestIndex].solutionIndex;
        const feedbackBlockTarget = document.getElementById(`feedback-eval-block-${globalQuestIndex}`);

        if (userSelectedChoiceIndex === absoluteCorrectAnswerIndex) {
            clickedButtonElement.classList.add("validated-correct-target");
            verifiedAcademicAccumulatedScore++;
            feedbackBlockTarget.innerHTML = `<span style="color: var(--accent3)">✓ Validation Confirmed. Correct. ${boardExaminationSyllabusDatabase[globalQuestIndex].rationale}</span>`;
        } else {
            clickedButtonElement.classList.add("validated-faulty-target");
            optionButtonsCollection[absoluteCorrectAnswerIndex].classList.add("validated-correct-target");
            feedbackBlockTarget.innerHTML = `<span style="color: var(--red)">✗ Validation Exception. Faulty Selection. ${boardExaminationSyllabusDatabase[globalQuestIndex].rationale}</span>`;
        }

        document.getElementById(`forward-link-btn-${globalQuestIndex}`).style.display = "inline-block";
    };

    window.shiftToNextEvaluationNode = function(activeFinishedQuestIndex) {
        document.getElementById(`exam-node-id-${activeFinishedQuestIndex}`).classList.remove("active-evaluation-target");
        const chronologicalNextIndex = activeFinishedQuestIndex + 1;

        if (chronologicalNextIndex < boardExaminationSyllabusDatabase.length) {
            document.getElementById(`exam-node-id-${chronologicalNextIndex}`).classList.add("active-evaluation-target");
        } else {
            gradingDashboardConsole.classList.add("active-evaluation-target");
            document.getElementById("score-text-target").textContent = `${verifiedAcademicAccumulatedScore} / ${boardExaminationSyllabusDatabase.length}`;
            
            // SYSTEM ANALYSIS CRITIQUE INTERPRETATION MATRIX
            let performanceCritiqueMessage = "";
            if (verifiedAcademicAccumulatedScore === 10) performanceCritiqueMessage = "Exceptional performance. Perfect score achieved. Clear mastery of cryptographic and data communication concepts. 🏆";
            else if (verifiedAcademicAccumulatedScore >= 8) performanceCritiqueMessage = "Strong analytical grasp confirmed. Solid foundation in network architectures and security models. 🌟";
            else if (verifiedAcademicAccumulatedScore >= 5) performanceCritiqueMessage = "Passing metrics verified. Review layer configurations and key deployment profiles to expand core competencies. 🎯";
            else performanceCritiqueMessage = "Syllabus re-evaluation recommended. Re-read the module materials and retake the test. 💪";
            
            document.getElementById("score-analysis-critique").textContent = performanceCritiqueMessage;
        }
    };

    window.resetExaminationEngine = function() {
        verifiedAcademicAccumulatedScore = 0;
        initializeExaminationMatrixEngine();
    };

    // RUN MASTER EXAMINATION INITIALIZATION ENGINE POINT
    initializeExaminationMatrixEngine();
});