// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBe4Xtfrilx5CMunc1AkuwYuxFySqAssXg",
  authDomain: "shortlist-ca273.firebaseapp.com",
  databaseURL: "https://shortlist-ca273-default-rtdb.firebaseio.com",
  projectId: "shortlist-ca273",
  storageBucket: "shortlist-ca273.appspot.com",
  messagingSenderId: "74331498692",
  appId: "1:74331498692:web:ed5058ccdf739d6e3d0191",
  measurementId: "G-M1WGCKLBJE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref();

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal('name');
  var number = getInputVal('number');
  var college = getInputVal('college');
  var email = getInputVal('email');
  var message = getInputVal('message');

  saveMessage(name, number, college, email, message);
  var form = document.getElementById("contactForm");
  form.reset();
  sendEmail(name, number, college, email, message);
  return clicked();

}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, number, college, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    college: college,
    number: number,
    email: email,
    message: message
  });
}

!(function ($) {

  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled


  // Mobile Navigation

  $('.navbar-nav > a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 0, 'easeInOutExpo');
    return false;
  });
  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    // autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

})(jQuery);
// Sticky Navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('.navbar').addClass('nav-sticky');
  } else {
    $('.navbar').removeClass('nav-sticky');
  }
});


// Smooth scrolling on the navbar links
$(".navbar-nav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 45
    }, 0, 'easeInOutExpo');

    if ($(this).parents('.navbar-nav').length) {
      $('.navbar-nav .active').removeClass('active');
      $(this).closest('a').addClass('active');
    }
  }
});


$('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 20,
  // nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1100: {
      items: 3
    }
  }
})

function clicked() {
  return confirm('Submitted');
}
$('.nav a').click(function (e) {
  e.preventDefault();
  var $scrooll_to_id = $(this.getAttribute('href'));
  $('html').stop(true).animate({
    scrollTop: ($scrooll_to_id.position().top - $('.nav-bar').height())
  });
});

function sendEmail(name, number, college, email, message) {
  Email.send({
    SecureToken: "c3e95a43-c968-478f-ba54-ee661b2152a0",
    To: 'shortlistmail@gmail.com',
    From: 'shortlistmail@gmail.com',
    Subject: `${name} has applied`,
    Body: `Name: ${name} <br/>Number: ${number} <br/>College: ${college} <br/>Email: ${email} <br/>Message: ${message}`
  })
}