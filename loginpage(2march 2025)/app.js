document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Simple form validation
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm()) {
        // Simulate login - in a real app, this would be an API call
        simulateLogin();
      }
    });
    
    function validateForm() {
      let isValid = true;
      
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        removeError(emailInput);
      }
      
      // Password validation (minimum 6 characters)
      if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
      } else {
        removeError(passwordInput);
      }
      
      return isValid;
    }
    
    function showError(input, message) {
      const formGroup = input.parentElement;
      
      // Remove existing error if any
      removeError(input);
      
      // Create error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.style.color = '#ff3860';
      errorDiv.style.fontSize = '0.85rem';
      errorDiv.style.marginTop = '5px';
      errorDiv.textContent = message;
      
      // Add red border to input
      input.style.borderColor = '#ff3860';
      input.style.boxShadow = '0 0 0 2px rgba(255, 56, 96, 0.25)';
      
      // Add error message to form group
      formGroup.appendChild(errorDiv);
      
      // Shake animation for error
      input.classList.add('shake');
      setTimeout(() => {
        input.classList.remove('shake');
      }, 500);
    }
    
    function removeError(input) {
      const formGroup = input.parentElement;
      const errorDiv = formGroup.querySelector('.error-message');
      
      if (errorDiv) {
        formGroup.removeChild(errorDiv);
      }
      
      input.style.borderColor = '';
      input.style.boxShadow = '';
    }
    
    function simulateLogin() {
      const loginBtn = document.querySelector('.continue-btn');
      const originalText = loginBtn.innerHTML;
      
      // Show loading state
      loginBtn.innerHTML = '<div class="loader"></div>';
      loginBtn.disabled = true;
      
      // Simulate API call delay
      setTimeout(() => {
        // Success animation
        loginBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
        loginBtn.style.backgroundColor = '#4CAF50';
        
        // Reset form after delay
        setTimeout(() => {
          loginBtn.innerHTML = originalText;
          loginBtn.style.backgroundColor = '';
          loginBtn.disabled = false;
          loginForm.reset();
        }, 2000);
      }, 1500);
    }
    
    // Add animation for social buttons
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('clicked');
        
        setTimeout(() => {
          this.classList.remove('clicked');
        }, 300);
      });
    });
    
    // Add floating animation to shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      // Add CSS animation with different delays
      shape.style.animation = `float 6s ease-in-out ${index * 1.5}s infinite`;
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        75% { transform: translateX(-10px); }
      }
      
      .shake {
        animation: shake 0.5s ease-in-out;
      }
      
      .clicked {
        transform: scale(0.95);
      }
      
      .loader {
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s ease-in-out infinite;
        margin: 0 auto;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  });