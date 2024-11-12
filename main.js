  // Get the modal
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  // Get the container element
// Get the container element
// Get the container element
const container = document.querySelector('.container');

// Function to change the navbar background after scrolling
function changeNavbarBackground() {
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
}

// Initial call to ensure navbar is visible on page load
changeNavbarBackground();

// Event listener for scroll event
window.addEventListener('scroll', changeNavbarBackground);


function toggleDropdown(event) {
    event.preventDefault(); // Prevents default link behavior
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Optional: Close dropdown if user clicks outside of it
window.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.getElementById("dropdownContent");

    if (!dropdown.contains(e.target)) {
        dropdownContent.style.display = "none";
    }
});


let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Add the vibration class
    const trolleyIcon = document.querySelector('.trolley-icon');
    trolleyIcon.classList.add('vibrate');
    
    // Remove the vibration class after animation
    setTimeout(() => {
        trolleyIcon.classList.remove('vibrate');
    }, 300);
    showToast();
}

function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 1000);
}

// Function to simulate adding to cart and showing the toast

