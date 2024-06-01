"use strict";

document.addEventListener("DOMContentLoaded", function() {
    //select all sections with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            //prevent instant scroll
            e.preventDefault();

            //get where we want to go 
            const target = document.querySelector(this.getAttribute('href'));
            
            if(target) {
                // calculate how far we are from the top so we can get a smooth scroll
                const offsetTop = target.getBoundingClientRect().top + window.scrollY;

                // scroll to the section 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

        });
    });
});