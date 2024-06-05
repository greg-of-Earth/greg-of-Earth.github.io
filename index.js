"use strict";

document.addEventListener("DOMContentLoaded", function() {

    //build in-page scroll effect
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

    const csunFront = document.getElementById("csunFront");
    const csunBack = document.getElementById("csunBack");
    const edFigLeft = document.getElementById("edFigLeft");

    const lamcFront = document.getElementById("lamcFront");
    const lamcBack = document.getElementById("lamcBack");
    const edFigRight = document.getElementById("edFigRight");

    edFigLeft.addEventListener("mouseover", function(e){hideFrontCards(e,csunFront, csunBack)});
    edFigLeft.addEventListener("mouseout", function(e){hideBackCards(e,csunFront, csunBack)});
    
    edFigRight.addEventListener("mouseover", function(e){hideFrontCards(e,lamcFront, lamcBack)});
    edFigRight.addEventListener("mouseout", function(e){hideBackCards(e,lamcFront, lamcBack)});

    function hideFrontCards(e, front, back) {
        e.preventDefault();
        if(front.style.display !== 'none') {
            front.style.display = 'none';
            back.style.display = 'grid';
        }
    }

    function hideBackCards(e, front, back) {
        e.preventDefault();
        if(back.style.display !== 'none') {
            back.style.display = 'none';
            front.style.display = 'block';
        }
    }
     
});