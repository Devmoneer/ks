document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});


// Add this script to app.js or in a script tag in index.html

document.addEventListener('DOMContentLoaded', function() {
    // Capital System
    let capitalAmount = 10000; // Initial capital
    
    // Load capital from localStorage if available
    const savedCapital = localStorage.getItem('capitalAmount');
    if (savedCapital) {
        capitalAmount = parseFloat(savedCapital);
        updateCapitalDisplay();
    }
    
    function updateCapitalDisplay() {
        document.querySelector('.capital-amount').textContent = `$${capitalAmount.toLocaleString()}`;
        localStorage.setItem('capitalAmount', capitalAmount);
    }
    
    // Navigation system for icon clicks
    const items = document.querySelectorAll('.item[data-page]');
    items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            // Show loading screen
            document.getElementById('loading-screen').style.display = 'flex';
            document.getElementById('loading-screen').style.opacity = '1';
            
            
            setTimeout(() => {
                window.location.href = page;
            }, 500);
        });
    });
    
    
    window.updateCapital = function(amount) {
        capitalAmount = amount;
        updateCapitalDisplay();
    };
    
    
    updateCapitalDisplay();
});