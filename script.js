
const pages = {
  home: `
    <h1>Willkommen bei Five Lives Fashion</h1>
    <p>Entdecke die neuesten Styles in unserer exklusiven Kollektion...</p>
    <p>Ob du auf der Suche nach einem bequemen Oversized Shirt ...</p>
  `,
  shop: `
    <h1>Unsere Kollektion</h1>
    <p>✔️ Klassische T-Shirts aus 100% Bio-Baumwolle ...</p>
    <p>✔️ Girl Tops in verschiedenen Styles ...</p>
    <p>Jetzt shoppen und dein neues Lieblingsshirt entdecken!</p>
  `,
  contact: `
    <h1>Kontakt & Kundenservice</h1>
    <p>Hast du Fragen zu unseren Produkten ...</p>
    <p>📧 support@fiveliveshoodies.com<br />
       📞 +49 123 456789<br />
       📍 Musterstraße 12, 10115 Berlin</p>
  `
};

function loadPage(page) {
  const content = document.getElementById('content');
  const spinner = document.getElementById('spinner');
  if (!content) return;

  spinner.classList.add('show');
  content.classList.remove('fade');

  setTimeout(() => {
    content.innerHTML = pages[page] || pages.home;
    content.classList.add('fade');
    spinner.classList.remove('show');
  }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a[data-page]');
  const themeToggle = document.querySelector('.theme-toggle');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      loadPage(link.getAttribute('data-page'));
    });
  });

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  loadPage('home');
});

