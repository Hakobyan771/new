document.addEventListener("DOMContentLoaded", function() {
    const rectangles = document.querySelectorAll(".rectangle");
  
    rectangles.forEach((rectangle, index) => {
      const formattedIndex = (index + 1).toString().padStart(2, "0");
      rectangle.textContent = `${formattedIndex} ${rectangle.textContent}`;
    });
  });