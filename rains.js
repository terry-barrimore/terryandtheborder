const rainContainer = document.getElementById('rain-container');
const magicBtn = document.getElementById('magic-btn');

const alphabet = "67";

function triggerAlphabetRain() {
    const totalLetters = 67; // The density of the storm per click

    for (let i = 0; i < totalLetters; i++) {
        // 1. Create the text node element
        const letterSpan = document.createElement('span');
        
        // 2. Extract a random letter out of our alphabet string
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        letterSpan.textContent = randomLetter;
        letterSpan.classList.add('falling-letter');

        // 3. Randomize width position (0 to 100% screen width)
        const randomX = Math.random() * 100;
        letterSpan.style.left = `${randomX}vw`;

        // 4. Randomize drop velocities (1.5 to 4.5 seconds)
        const randomSpeed = Math.random() * 3 + 1.5;
        letterSpan.style.animationDuration = `${randomSpeed}s`;

        // 5. Stagger the drops slightly so they roll down smoothly
        const randomDelay = Math.random() * 0.8;
        letterSpan.style.animationDelay = `${randomDelay}s`;

        // 6. Vary font sizes slightly for an illusion of depth
        const randomSize = Math.random() * 1.5 + 1; // 1rem to 2.5rem
        letterSpan.style.fontSize = `${randomSize}rem`;

        // 7. Inject into our layout container
        rainContainer.appendChild(letterSpan);

        // 8. Auto-clean garbage collection loop to keep CPU performance high
        setTimeout(() => {
            letterSpan.remove();
        }, (randomSpeed + randomDelay) * 1000);
    }
}

magicBtn.addEventListener('click', triggerAlphabetRain);