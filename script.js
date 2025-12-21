console.log("Paint & Chaos loaded. Prepared for rebellion.");

// Basic interaction example:
// Add a subtle parallax or sticker movement on mouse move later.

document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for future interactivity
    const stickers = document.querySelectorAll('.sticker');

    // Example: Random rotation for stickers on load to make it look organic
    stickers.forEach(sticker => {
        const randomRot = Math.random() * 20 - 10; // -10deg to 10deg
        sticker.style.transform = `rotate(${randomRot}deg)`;
    });
});
