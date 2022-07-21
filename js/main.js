$('document').ready(function () {
  $('main').before('<nav class="navbar navbar-dark"></nav>');
  $('main').after('<footer class="footer mt-auto container d-flex flex-wrap justify-content-between align-items-center py-3 border-top border-secondary"></footer>')

  $('nav').load('static/nav_content.html');
  $('footer').load('static/footer_content.html');
});