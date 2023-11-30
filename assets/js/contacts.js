'use strict'
document.getElementById('submit-btn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;

    var mailtoLink = "mailto:recipient@example.com"
                    + "?subject=" + encodeURIComponent('New Student Card Information')
                    + "&body=" + encodeURIComponent('Name: ' + name + '\nContact Number: ' + contact + '\nEducation: ' + education + '\nEmail: ' + email + '\nCourse: ' + course);

    window.location.href = mailtoLink;
});