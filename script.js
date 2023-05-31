// about us hide/unhide
 
    const readMoreBtn = document.getElementById('read-more-btn');
const hiddenContent = document.getElementById('hidden-content');

readMoreBtn.addEventListener('click', () => {
hiddenContent.classList.toggle('hidden');

if (hiddenContent.classList.contains('hidden')) {
  readMoreBtn.innerText = 'Read More';
} else {
  readMoreBtn.innerText = 'Read Less';
}
});

// <!-- about us hide/unhide -->

// hide unhide



// end of hide unhide

// sent to unsent

const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  sendButton.innerText = 'Sent!';
  sendButton.disabled = true;});

//   end of sent to unsent

// <!-- code for smooth scrolling  -->

  document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.getElementById('logo-link');
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const servicesLink = document.getElementById('services-link');
    const contactLink = document.getElementById('contact-link');
    const getstartedLink = document.getElementById('getstarted-link');
    const learnmoreLink = document.getElementById('learnmore-link');
    const bannerLink = document.getElementById('banner-link');
    const aboutcontactLink = document.getElementById('aboutcontact-link');
    const knowmoreLink = document.getElementById('knowmore-link');

    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const servicesSection = document.getElementById('services');
    const contactSection = document.getElementById('contact');

    function scrollToSection(section) {
      const offsetTop = section.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    logoLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(homeSection);
    });

    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(homeSection);
    });

    aboutLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(aboutSection);
    });

    servicesLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(servicesSection);
    });

    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(contactSection);
    });

    getstartedLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(aboutSection);
    });

    learnmoreLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(servicesSection);
    });

    bannerLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(contactSection);
    });

    aboutcontactLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(contactSection);
    });

    knowmoreLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(contactSection);
    });
  });

  // <!-- end of code for smooth scrolling  -->

