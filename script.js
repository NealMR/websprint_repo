document.addEventListener("DOMContentLoaded", () => {
    console.log("Neon Pixel Trials Initialized.");

    // --- Enter Screen / Game Start ---
    const enterScreen = document.getElementById("enter-screen");
    const uiLayer = document.getElementById("ui-layer");
    const btnStart = document.getElementById("btn-start");
    let hasStarted = false;

    const startGame = () => {
        if (hasStarted) return;
        hasStarted = true;

        if (enterScreen) {
            enterScreen.style.opacity = "0";
            setTimeout(() => {
                enterScreen.style.visibility = "hidden";
            }, 1000);
        }

        if (uiLayer) {
            uiLayer.style.display = "block";
            setTimeout(() => {
                uiLayer.style.opacity = "1";
            }, 50); // small delay to allow display flex to apply before transitioning opacity
        }
    };

    // Listen for Start Button click
    if (btnStart) {
        btnStart.addEventListener("click", startGame);
    }

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll(".scroll-anim").forEach(el => {
        observer.observe(el);
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }

            const targetId = this.getAttribute("href");
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // offset for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Dynamic Leaderboard ---
    const leaderboardData = [
        { rank: 1, id: "NEON_V1PER", score: 9999, status: "ALIVE" },
        { rank: 2, id: "GLITCH_K1NG", score: 8540, status: "ALIVE" },
        { rank: 3, id: "CYBER_GHOST", score: 8120, status: "ALIVE" },
        { rank: 4, id: "VOID_RUNNER", score: 7650, status: "ELIMINATED" },
        { rank: 5, id: "PIXEL_DUST", score: 7100, status: "ELIMINATED" },
        { rank: 6, id: "ZERO_DAY", score: 6800, status: "ALIVE" },
        { rank: 7, id: "SYNTH_WAVE", score: 6400, status: "ALIVE" },
        { rank: 8, id: "DEAD_BYTE", score: 5900, status: "ELIMINATED" },
        { rank: 9, id: "XOR_CRASH", score: 5500, status: "ELIMINATED" },
        { rank: 10, id: "NULL_PTR", score: 5200, status: "ELIMINATED" },
    ];

    const tbody = document.getElementById("leaderboard-body");

    function renderLeaderboard() {
        if (!tbody) return;
        tbody.innerHTML = '';
        leaderboardData.forEach(player => {
            const tr = document.createElement("tr");

            // Rank Styling
            let rankClass = "";
            if (player.rank === 1) rankClass = "rank-1";
            else if (player.rank === 2) rankClass = "rank-2";
            else if (player.rank === 3) rankClass = "rank-3";

            // Status Styling
            const statusClass = player.status === "ALIVE" ? "status-alive" : "status-eliminated";

            tr.innerHTML = `
                <td class="${rankClass}">#${player.rank}</td>
                <td>${player.id}</td>
                <td>${player.score}</td>
                <td class="${statusClass}">${player.status}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    renderLeaderboard();

    // Simulate Live Score Updates
    setInterval(() => {
        // Find a random alive player and increase their score
        const alivePlayers = leaderboardData.filter(p => p.status === "ALIVE");
        if (alivePlayers.length > 0) {
            const randomPlayer = alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
            randomPlayer.score += Math.floor(Math.random() * 50) + 10;

            // Re-sort data
            leaderboardData.sort((a, b) => b.score - a.score);
            // Re-assign ranks
            leaderboardData.forEach((p, index) => p.rank = index + 1);

            renderLeaderboard();
        }
    }, 5000);

    // --- Form Validation ---
    const form = document.getElementById("registration-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;

            // Elements
            const username = document.getElementById("username");
            const email = document.getElementById("email");
            const age = document.getElementById("age");
            const terms = document.getElementById("terms");

            // Error Msgs
            const userError = document.getElementById("username-error");
            const emailError = document.getElementById("email-error");
            const ageError = document.getElementById("age-error");
            const termsError = document.getElementById("terms-error");

            // Reset errors
            [username, email, age].forEach(el => el.classList.remove("invalid"));
            [userError, emailError, ageError, termsError].forEach(el => el.textContent = "");

            // Validate Username
            if (username.value.trim().length < 3) {
                userError.textContent = "ID must be at least 3 chars.";
                username.classList.add("invalid");
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                emailError.textContent = "Invalid comms channel format.";
                email.classList.add("invalid");
                isValid = false;
            }

            // Validate Age
            if (!age.value || parseInt(age.value) < 18) {
                ageError.textContent = "Must be 18+ to enter trials.";
                age.classList.add("invalid");
                isValid = false;
            } else if (parseInt(age.value) > 99) {
                ageError.textContent = "Invalid age parameter.";
                age.classList.add("invalid");
                isValid = false;
            }

            // Validate Terms
            if (!terms.checked) {
                termsError.textContent = "You MUST accept the risks.";
                isValid = false;
            }

            if (isValid) {
                // Hide form, show success
                const inputs = form.querySelectorAll(".form-group");
                inputs.forEach(el => el.style.display = "none");
                form.querySelector(".submit-btn").style.display = "none";

                document.getElementById("form-success").classList.remove("hidden");

                // Optional: reset form entirely
                // form.reset();
            }
        });
    }

});
