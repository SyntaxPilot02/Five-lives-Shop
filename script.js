
const pages = {
  home: `
    <h1>Willkommen bei Five Lives Fashion</h1>
    <p>Entdecke die neuesten Styles in unserer exklusiven Kollektion. Unsere Mission ist es, hochwertige T-Shirts und Girl Tops anzubieten, die nicht nur gut aussehen, sondern sich auch perfekt anfühlen.</p>
    <p>Ob du auf der Suche nach einem bequemen Oversized Shirt, einem sportlichen Crop-Top oder einem lässigen Streetwear-Look bist – bei uns findest du das Richtige. Unsere Designs sind inspiriert von aktuellen Trends und urbaner Mode.</p>
  `,
  shop: `
    <h1>Unsere Kollektion</h1>
    <p>✔️ Klassische T-Shirts aus 100% Bio-Baumwolle – weich, atmungsaktiv und perfekt für den Alltag.<br />
    ✔️ Girl Tops in verschiedenen Styles: von verspielten Rüschen-Tops bis hin zu schlichten Tanktops für warme Tage.<br />
    ✔️ Limitierte Editionen mit einzigartigen Prints – nur solange der Vorrat reicht!</p>
    <p>Jedes Kleidungsstück wird sorgfältig verarbeitet und auf Qualität geprüft. Wir legen großen Wert auf Nachhaltigkeit, daher stammen unsere Stoffe aus verantwortungsvoller Produktion.</p>
    <p>Jetzt shoppen und dein neues Lieblingsshirt entdecken!</p>
  `,
  contact: `
    <h1>Kontakt & Kundenservice</h1>
    <p>Hast du Fragen zu unseren Produkten, deiner Bestellung oder willst du einfach Feedback geben? Unser Team ist für dich da!</p>
    <p>📧 E-Mail: support@fiveliveshoodies.com<br />
    📞 Telefon: +49 123 456789<br />
    📍 Adresse: Musterstraße 12, 10115 Berlin</p>
    <p>Oder folge uns auf Instagram @fivelives_fashion für News und Angebote!</p>
  `
};


function loadPage(page) {
  const content = document.getElementById('content');
  if (!content) return;
  content.classList.remove('fade');

  setTimeout(() => {
    content.innerHTML = pages[page] || pages.home;
    content.classList.add('fade');
  }, 100);
}


document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      loadPage(page);
    });
  });

  
  loadPage('home');
});
