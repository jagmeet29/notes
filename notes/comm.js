// dependencies.js
function loadDependencies() {
  // Load CSS
  const prismCss = document.createElement('link');
  prismCss.rel = 'stylesheet';
  prismCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css';
  document.head.appendChild(prismCss);
  
  // Load polyfill
  const polyfill = document.createElement('script');
  polyfill.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
  document.head.appendChild(polyfill);
  
  // Load MathJax
  const mathJax = document.createElement('script');
  mathJax.id = 'MathJax-script';
  mathJax.async = true;
  mathJax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  document.head.appendChild(mathJax);
  
  // Configure MathJax
  window.MathJax = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
  };
  
  // Load Prism JS
  const prismCore = document.createElement('script');
  prismCore.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js';
  document.head.appendChild(prismCore);
  
  const prismAutoloader = document.createElement('script');
  prismAutoloader.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js';
  document.head.appendChild(prismAutoloader);
  
  // Add your custom CSS for code styling
  const customStyles = document.createElement('style');
  customStyles.textContent = `
    /* Add some additional styling for code blocks */
    pre[class*="language-"] {
      border-radius: 8px;
      margin: 1.5em 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      background: transparent !important; /* Override Prism background */
      border: 1px solid #ddd;
    }
    
    code[class*="language-"] {
      background: transparent !important; /* Override Prism background */
    }
    
    .code-title {
      background: #f5f5f5;
      color: #333;
      padding: 8px 16px;
      font-family: monospace;
      font-size: 0.9em;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      margin-bottom: -8px;
      border: 1px solid #ddd;
      border-bottom: none;
    }
    
    .code-container {
      position: relative;
    }
  `;
  document.head.appendChild(customStyles);
  
  // Add your event handling for answer buttons
  document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to all answer buttons
    const answerButtons = document.querySelectorAll(".ans-button");
    
    answerButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Find the parent div first
        const parentDiv = this.closest(".res-ques");
        
        // Then find the answer content within this parent
        const answerContent = parentDiv.querySelector(".ans-content");
        
        // Toggle its visibility with smooth animation
        if (!answerContent.classList.contains("visible")) {
          // Update button text
          this.textContent = this.textContent.includes("Show") || 
                          this.textContent.includes("Answer") ? 
                          "Hide Answer" : "Hide";
          
          // Show content with animation
          answerContent.classList.add("visible");
          
          // If there's MathJax content, we need to rerender it
          if (typeof MathJax !== 'undefined' && answerContent.querySelector(".MathJax")) {
            setTimeout(() => {
              MathJax.typeset([answerContent]);
            }, 100);
          }
        } else {
          // Update button text
          this.textContent = this.textContent.includes("Hide") ? 
                          (this.textContent.includes("Hide Answer") ? 
                          "Show Answer" : "Answer") : 
                          "Answer";
          
          // Hide content with animation
          answerContent.classList.remove("visible");
        }
      });
    });
    
    // Initialize syntax highlighting via Prism.js
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  });
}

// Execute immediately
loadDependencies();