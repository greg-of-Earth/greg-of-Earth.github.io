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


    $(document).ready(function() {
        $('#contactForm').on('submit', function(event) {
            event.preventDefault(); 

            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize(),
                dataType: "json",
                success: function(response) {
                    alert("Thank you for your message. I will be in touch with you soon. Have a great day!");
                    $('#contactForm')[0].reset();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('There was a problem sending your message. Please try again.');
                    $('#contactForm')[0].reset();
                }
            });
        });
    });
   

    const csunFront = document.getElementById("csunFront");
    const csunBack = document.getElementById("csunBack");
    const edFigLeft = document.getElementById("edFigLeft");

    const lamcFront = document.getElementById("lamcFront");
    const lamcBack = document.getElementById("lamcBack");
    const edFigRight = document.getElementById("edFigRight");

    edFigLeft.addEventListener("click", function(e){hideFrontCards(e,csunFront, csunBack)});
    edFigRight.addEventListener("click", function(e){hideFrontCards(e,lamcFront, lamcBack)});



    function hideFrontCards(e, front, back) {
        e.preventDefault();
        if(front.style.display !== 'none') {
            front.style.display = 'none';
            back.style.display = 'grid';
        }else if(back.style.display !== 'none') {
            back.style.display = 'none';
            front.style.display = 'block';
        }
    }

     
});