document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const passwordPopup = document.getElementById('password-popup');
    const messagePopup = document.getElementById('message-popup');
    const closePasswordPopupButton = document.getElementById('close-password-popup');
    const closeMessagePopupButton = document.getElementById('close-message-popup');
    const submitPasswordButton = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password-input');
    const fireworksContainer = document.querySelector('.fireworks-container');

    let currentPageIndex = 0;
    let isFirstClick = true;
    let isPasswordPopupShown = false;

    // Function to flip pages
    function flipPage(event) {
        if (isPasswordPopupShown) {
            return; // Do nothing if the password popup is shown
        }

        if (isFirstClick) {
            showPasswordPopup(); // Show password popup on the first click
            isFirstClick = false;
            return;
        }

        // Flip to the next page
        if (currentPageIndex < 3) {
            pages[currentPageIndex].style.transform = 'rotateY(180deg)';
            currentPageIndex++;
            if (currentPageIndex < pages.length) {
                pages[currentPageIndex].style.transform = 'rotateY(0deg)';
            }
        } else if (currentPageIndex === 3) {
            showMessagePopup(); // Show message popup on the 4th page
        }
    }

    // Function to show password popup with animation
    function showPasswordPopup() {
        passwordPopup.style.display = 'block'; // Show password popup
        isPasswordPopupShown = true; // Disable page flip functionality
    }

    // Function to show message popup with animation
    function showMessagePopup() {
        messagePopup.style.display = 'block'; // Show message popup
    }

    // Function to close password popup
    function closePasswordPopup() {
        passwordPopup.style.display = 'none'; // Hide password popup
        isPasswordPopupShown = false; // Enable page flip functionality
    }

    // Function to close message popup
    function closeMessagePopup() {
        messagePopup.style.display = 'none'; // Hide message popup
    }

    // Function to handle password submission
    function handlePasswordSubmission() {
        const password = passwordInput.value;
        if (password === 'ok-sreekutty') {
            closePasswordPopup();
            pages[currentPageIndex].style.transform = 'rotateY(180deg)';
            currentPageIndex++;
            if (currentPageIndex < pages.length) {
                pages[currentPageIndex].style.transform = 'rotateY(0deg)';
            }
        } else {
            alert('Incorrect password. Please try again.');
        }
    }

    // Event listeners for flipping pages
    pages.forEach(page => {
        page.addEventListener('click', flipPage);
    });

    // Event listener for closing password popup
    closePasswordPopupButton.addEventListener('click', closePasswordPopup);

    // Event listener for closing message popup
    closeMessagePopupButton.addEventListener('click', closeMessagePopup);

    // Event listener for submitting password
    submitPasswordButton.addEventListener('click', handlePasswordSubmission);

    // Background fireworks animation
    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        firework.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration
        fireworksContainer.appendChild(firework);

        // Remove firework from DOM after animation ends
        firework.addEventListener('animationend', function() {
            firework.remove();
        });
    }

    // Generate fireworks periodically
    setInterval(createFirework, 500);
});
