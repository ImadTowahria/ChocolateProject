let cartCount = 0;

function addToCart(e) {
    cartCount++;
    const cartElement = document.querySelector('.cart-count');
    
    // Animate cart count bump
    cartElement.style.transform = 'scale(1.5) rotate(10deg)';
    setTimeout(() => {
        cartElement.textContent = cartCount;
        cartElement.style.transform = 'scale(1) rotate(0deg)';
    }, 200);

    // Show toast
    showToast();
    
    // Create floating heart effect
    createHeart(e);
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    // Create some confetti for fun!
    createConfetti();
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function createHeart(e) {
    if (!e) return;
    
    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart');
    heart.style.position = 'fixed';
    // If the event came from a mouse click, use client coordinates, else just put it in the middle
    let x = e.clientX || window.innerWidth / 2;
    let y = e.clientY || window.innerHeight / 2;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.color = '#e74c3c';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    heart.style.fontSize = '2rem';
    heart.style.textShadow = '0 0 10px rgba(231, 76, 60, 0.5)';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = `translate(${Math.random() * 100 - 50}px, -150px) scale(1.5) rotate(${Math.random() * 40 - 20}deg)`;
        heart.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

function createConfetti() {
    const colors = ['#8b5a8c', '#d1b3d1', '#5c3a21', '#ffb6c1', '#f1c40f'];
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.bottom = '100px';
        confetti.style.zIndex = '1001';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 100;
        
        confetti.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            confetti.style.transform = `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}
