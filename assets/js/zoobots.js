window.Zoobots = {
  contactEmail: "zoobots.co@gmail.com"
};

(function ($) {
  (function main() {
    _initContactForm();
  })();

  /*
   * PRIVATE API
   */

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