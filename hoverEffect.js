
const navLinks = document.querySelectorAll('#nav_menu ul li a');


navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.transform = 'scale(1.2)';  
    });
    
    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';  
    });
});
