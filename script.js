document.addEventListener('DOMContentLoaded', function() {
    const secondsDisplay = document.getElementById('seconds');
    const timerProgress = document.querySelector('.timer-progress');
    const joinBtn = document.getElementById('joinBtn');
    
    let timeLeft = 60;
    const circumference = 565.48; // 2 * π * r (r=90)
    const interval = 1000; // 1 second
    
    // Calculate the stroke-dashoffset for the timer circle
    function updateTimer() {
        const offset = circumference - (timeLeft / 60) * circumference;
        timerProgress.style.strokeDashoffset = offset;
        secondsDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            secondsDisplay.textContent = "0";
            joinBtn.textContent = "Time's Up!";
            joinBtn.disabled = true;
            joinBtn.style.background = "linear-gradient(135deg, #8e8e93, #aeaeb2)";
            joinBtn.style.boxShadow = "none";
        }
        
        timeLeft--;
    }
    
    // Start the timer
    const timerInterval = setInterval(updateTimer, interval);
    
    // Button click handler
    joinBtn.addEventListener('click', function() {
        // alert('Redirecting to channel...');
        // In a real implementation, you would redirect to the actual channel
        window.location.href = 'https://t.me/+N9v-mRasDpliNzQ1';
    });
    
    // Add fade in animation to elements
    const elementsToAnimate = document.querySelectorAll('.session-title, .timer-container, .cta-section');
    
    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 300);
    });
});