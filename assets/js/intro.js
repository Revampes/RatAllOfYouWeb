// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle active class on the question
        question.classList.toggle('active');
        
        // Get the corresponding answer
        const answer = question.nextElementSibling;
        
        // Toggle active class on the answer
        answer.classList.toggle('active');
        
        // Animate the answer height
        if (answer.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
        } else {
            answer.style.maxHeight = '0';
            answer.style.opacity = '0';
        }
    });
});

// Initialize FAQ answers with maxHeight for smooth animation
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.maxHeight = '0';
    answer.style.opacity = '0';
    answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to installation steps when they come into view
const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            stepObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe all installation steps
document.querySelectorAll('.step').forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    stepObserver.observe(step);
});

// Add hover effects to download button
const downloadButton = document.querySelector('.download-button');
if (downloadButton) {
    downloadButton.addEventListener('mouseenter', () => {
        downloadButton.style.transform = 'translateY(-3px)';
        downloadButton.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
    
    downloadButton.addEventListener('mouseleave', () => {
        downloadButton.style.transform = 'translateY(0)';
        downloadButton.style.boxShadow = 'none';
    });
}

// Add click effect to version info items
const versionInfoItems = document.querySelectorAll('.version-info-item');
versionInfoItems.forEach(item => {
    item.addEventListener('click', () => {
        // You can add additional functionality here if needed
        item.style.transform = 'scale(1.05)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    });
});
