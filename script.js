document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Background Music Autoplay Handling ---
    const bgMusic = document.getElementById('bg-music');
    // Set low volume for romantic feel
    bgMusic.volume = 0.3;

    let musicPlayed = false;
    // Autoplay policy requires user interaction first, so we play on first click anywhere
    document.body.addEventListener('click', () => {
        if (!musicPlayed) {
            bgMusic.play().catch(e => console.log("Audio play blocked", e));
            musicPlayed = true;
        }
    });

    // --- 2. Floating Hearts Animation (Background) ---
    const heartsContainer = document.getElementById('hearts-container');
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        // Random horizontal position
        heart.style.left = Math.random() * 100 + 'vw';
        // Random float duration between 3s and 6s
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove after animation completes to avoid DOM clutter
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    // Generate a heart every 300ms
    setInterval(createHeart, 300);

    // --- 3. Typing Effect for Love Letter Section ---
    const loveLetterLines = [
        "Tara vagar badhu adhuru lage che... 🥺",
        "Hu kharekhar badlavis, pratiksha kar... ✨",
        "Bas ek chance api de mari jaan... ❤️"
    ];

    const typingElement = document.getElementById('typing-text');
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentLine = loveLetterLines[lineIndex];
        const currentLineChars = Array.from(currentLine);

        // Decide text based on whether it is typing or deleting
        if (isDeleting) {
            typingElement.textContent = currentLineChars.slice(0, charIndex - 1).join('');
            charIndex--;
        } else {
            typingElement.textContent = currentLineChars.slice(0, charIndex + 1).join('');
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 100;

        // At end of line, pause then start deleting
        if (!isDeleting && charIndex === currentLineChars.length) {
            typeSpeed = 2000; // Pause duration when phrase is complete
            isDeleting = true;
        } 
        // When fully deleted, move to the next phrase
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % loveLetterLines.length;
            typeSpeed = 500; // Pause before typing new line
        }

        // Keep adding blink cursor span
        typingElement.innerHTML += '<span class="cursor"></span>';

        setTimeout(typeWriter, typeSpeed);
    }
    // Delay start
    setTimeout(typeWriter, 1000);

    // --- 4. Interactive "No" Button Logic ---
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    // Make "No" button unclickable / run away
    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('touchstart', moveButton); // For mobile taps

    // Fallback if somehow clicked
    btnNo.addEventListener('click', (e) => {
        e.preventDefault();
        btnNo.textContent = "Arey please No na dabav 😭";
    });

    function moveButton(e) {
        // Change button to fixed position to freely move around the viewport
        btnNo.style.position = 'fixed';
        
        // Calculate max allowed positions
        const maxX = window.innerWidth - btnNo.offsetWidth - 20;
        const maxY = window.innerHeight - btnNo.offsetHeight - 20;
        
        const randomX = Math.max(10, Math.floor(Math.random() * maxX));
        const randomY = Math.max(10, Math.floor(Math.random() * maxY));
        
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
        
        // Playful texts
        const texts = ["Arey please No na dabav 😭", "Mani jaa please 🥺", "Ahhh nahi pakdaunga 🏃", "Yes press kar ne! 💖"];
        btnNo.textContent = texts[Math.floor(Math.random() * texts.length)];
    }

    // --- 5. "Yes" Button Click Celebration ---
    btnYes.addEventListener('click', () => {
        const mainContainer = document.getElementById('main-container');
        const celebrationScreen = document.getElementById('celebration-screen');

        mainContainer.classList.add('hidden'); // Hide main content
        celebrationScreen.classList.remove('hidden'); // Show celebration div
        
        // Small timeout allows display:block to take effect before triggering opacity transition
        setTimeout(() => {
            celebrationScreen.classList.add('show');
        }, 50);

        // Fire festive animations
        createConfetti();
        createExplosion();
    });

    // Generate falling confetti particles
    function createConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', '#ffd166', '#06d6a0'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const size = Math.random() * 10 + 5;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            
            confettiContainer.appendChild(confetti);
        }
    }

    // Heart explosion effect from center
    function createExplosion() {
        for(let i = 0; i < 40; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            // Starting from screen center
            heart.style.left = '50vw';
            heart.style.bottom = '50vh';
            
            // Random direction calculations 
            const angle = Math.random() * Math.PI * 2;
            const velocity = 100 + Math.random() * 250;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity - 150; // Bias towards going upwards slightly
            
            // Setting custom properties for CSS
            heart.style.setProperty('--tx', `${tx}px`);
            heart.style.setProperty('--ty', `${ty}px`);
            
            // Re-apply animation to use 'explode'
            heart.style.animation = 'explode 1.5s ease-out forwards';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 1500);
        }
    }
});
