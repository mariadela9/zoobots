window.Zoobots = {
  contactEmail: "zoobots.co@gmail.com"
};

(function ($) {
  (function main() {
    _initContactForm();
    _initSliders();
    Zoobots.onProductClick = handleProductClick;
    Zoobots.onNavigationClick = handleNavigationClick;
  })();

  /*
   * PUBLIC API
   */

  function handleProductClick(event) {
    var element = $(event.currentTarget),
      productName = element.data('product-name');

    ga('send', 'event', {
      eventCategory: 'Product Interest',
      eventAction: 'click',
      eventLabel: productName
    });
  }

  function handleNavigationClick(event, elementId) {
    event.preventDefault();

    return $('html, body').animate({
      scrollTop: $("#" + elementId).offset().top
    }, 300);
  }

  /*
   * PRIVATE API
   */

  function _initSliders() {
    $('.application-steps').slick({
      dots: true
    });

    $('.testimonial-slider').slick({
      autoPlay: true,
      autoplaySpeed: 2000,
      infinite: true,
      dots: true
    });
  }

  function _initContactForm() {
    var contactForm = $('#contact-form');

    contactForm.on('submit', function (event) {
      var name = $('#contact-form-name').val(),
        email = $('#contact-form-email').val(),
        emailSubject = "Zoobots - Toy Availability Request",
        emailBody = "Hello, Zoobots. Please keep me updated on your toy availibity.";

      emailBody += '\n\n\n Sincerely, \n\n' + name;

      if (email) {
        emailBody += '\n' + email;
      }

      // encode new characters for email formatting
      emailBody = encodeURIComponent(emailBody);

      window.open('mailto:' + Zoobots.contactEmail + '?subject=' + emailSubject + '&body=' + emailBody);

      // prevent the form from submitting until we have an actual email
      // sender on the back end
      return event.preventDefault();
    });
  }
})(jQuery);