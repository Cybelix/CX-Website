/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
// $(function () {
//     $("#team-members").owlCarousel({
//         items: 2,
//         autoplay: true,
//         smartSpeed: 700,
//         loop: true,
//         autoplayHoverPause: true,
//         nav: true,
//         dots: false,
//         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
//         responsive: {
//             // breakpoint from 0 up
//             0: {
//                 items: 1
//             },
//             // breakpoint from 480 up
//             480: {
//                 items: 2
//             }
//         }
//     });
// });

/* =========================================
                Progress Bars
============================================ */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            var $this = $(this);
            var targetWidth = $this.attr("aria-valuenow");
            
            $this.animate({
                width: targetWidth + "%"
            }, {
                duration: 2000,
                step: function (now, fx) {
                    // Check if the current width during animation exceeds 60%
                    if (now > 50) {
                        $this.find("span").fadeIn();  // Show the span
                        $this.find("span").addClass("active")
                    }
                }
            });

            // Ensure span is hidden if initial width is <= 60%
            if (targetWidth <= 50) {
                $this.find("span").hide();

            }

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* =========================================
               Testimonials
============================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* =========================================
              Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/* =========================================
              Clients
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});





/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            
           

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-heading-3").addClass("animated fadeInRight");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});



// mail handling 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    sendEmail(); // Call your sendEmail function
});

function sendEmail() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var mailtoLink = 'mailto:saurabhsaini1394@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(
            'Name: ' + name + '\n'
            + 'Email: ' + email + '\n'
            + 'Phone: ' + phone + '\n'
            + 'Message: ' + message
        );

    window.location.href = mailtoLink;

    toastr["success"]("Message Send Successfully!!", "Success")

}

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }


//   <!-- Team Left Side -->
//   <div class="col-md-6 col-sm-6 wow slideInLeft" data-wow-duration="1s">

//       <div id="team-left">

//           <div class="vertical-heading">
//               <h5>Who We Are</h5>
//               <h2>Meet Our<br><strong>Talented</strong> Team</h2>
//           </div>
//           <p>Our team at Cybelix is a powerhouse of creativity, expertise, and passion. We work together to deliver innovative digital solutions that drive your business forward.
//           </p>

//       </div>

//   </div>

//   <!-- Team Right Side -->
//   <div class="col-md-6 col-sm-6 wow slideInRight" data-wow-duration="1s">

//       <div id="team-members" class="owl-carousel owl-theme">

//           <!-- Member 01 -->
//           <div class="team-member">
//               <img src="img/team/team-1.jpg" alt="team member" class="img-responsive">
//               <div class="team-member-overlay">
//                   <div class="team-member-info text-center">
//                       <h6>Kevin Greer</h6>
//                       <p>Web Designer</p>
//                       <ul class="social-list">
//                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//                           <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
//                       </ul>
//                   </div>
//               </div>

//           </div>
//           <!-- Member 02 -->
//           <div class="team-member">
//               <img src="img/team/team-2.jpg" alt="team member" class="img-responsive">
//               <div class="team-member-overlay">
//                   <div class="team-member-info text-center">
//                       <h6>Christian Cilinis</h6>
//                       <p>Web Developer</p>
//                       <ul class="social-list">
//                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//                           <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
//                       </ul>
//                   </div>
//               </div>

//           </div>
//           <!-- Member 03 -->
//           <div class="team-member">
//               <img src="img/team/team-3.jpg" alt="team member" class="img-responsive">
//               <div class="team-member-overlay">
//                   <div class="team-member-info text-center">
//                       <h6>Andrea Arkov</h6>
//                       <p>Senior Developer</p>
//                       <ul class="social-list">
//                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//                           <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
//                       </ul>
//                   </div>
//               </div>

//           </div>
//           <!-- Member 04 -->
//           <div class="team-member">
//               <img src="img/team/team-4.jpg" alt="team member" class="img-responsive">
//               <div class="team-member-overlay">
//                   <div class="team-member-info text-center">
//                       <h6>Harold Houdini</h6>
//                       <p>Art Director</p>
//                       <ul class="social-list">
//                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//                           <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
//                       </ul>
//                   </div>
//               </div>

//           </div>
//           <!-- Member 05 -->
//           <div class="team-member">
//               <img src="img/team/team-5.jpg" alt="team member" class="img-responsive">
//               <div class="team-member-overlay">
//                   <div class="team-member-info text-center">
//                       <h6>Angela Perry</h6>
//                       <p>Manager</p>
//                       <ul class="social-list">
//                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//                           <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
//                       </ul>
//                   </div>
//               </div>

//           </div>

//           <!-- Member 06 -->
//           <div class="team-member">
//               <img src="img/team/team-6.jpg" alt="team member" class="img-responsive">
//               <div class="team-member-overlay">
//                   <div class="team-member-info text-center">
//                       <h6>Kara Kulis</h6>
//                       <p>Marketing & Sales</p>
//                       <ul class="social-list">
//                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>
//                           <li><a href="#"><i class="fa fa-twitter"></i></a></li>
//                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
//                       </ul>
//                   </div>
//               </div>

//           </div>

//       </div>