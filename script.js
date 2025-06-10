const pages = {
  home: `
    <h1>Willkommen bei Five Lives Fashion</h1>
    <p>
      Tauche ein in die Welt urbaner Streetwear. Unsere Styles vereinen Komfort und Trendbewusstsein auf einzigartige Weise.
      Five Lives steht für Mode, die mehr ist als Kleidung – sie ist Ausdruck deiner Persönlichkeit.
    </p>
    <p>
      Von lässigen Oversized-Shirts bis hin zu femininen Girl Tops – unsere Kollektion bietet für jeden Look das passende Piece.
      Mit Fokus auf Nachhaltigkeit und faire Produktion setzen wir neue Standards in der Fashion-Welt.
    </p>
    <p>
      Bleib individuell, bleib mutig – mit Five Lives Fashion.
    </p>
  `,
  shop: `
    <h1>Unsere Kollektion</h1>
    <p>
      ✔️ <strong>Bio-T-Shirts</strong>: Klassische Schnitte aus 100% zertifizierter Bio-Baumwolle – weich, langlebig und stylisch.<br />
      ✔️ <strong>Girl Tops</strong>: Bunte Auswahl von Crop-Tops, Tanks und Rüschen-Oberteilen für sonnige Vibes.<br />
      ✔️ <strong>Limited Prints</strong>: Exklusive Designs von Berliner Künstler:innen – limitiert und einzigartig.
    </p>
    <p>
      🧵 Jedes Teil wird mit Liebe zum Detail gefertigt. Unsere Partner achten auf faire Arbeitsbedingungen und ökologische Materialien.
    </p>
    <p>
      👉 Jetzt entdecken und dein nächstes Lieblingsoutfit sichern!
    </p>
  `,
  contact: `
    <h1>Kontakt & Kundenservice</h1>
    <p>
      Du hast Fragen, Anregungen oder möchtest einfach Hallo sagen?
      Unser freundliches Team freut sich über deine Nachricht.
    </p>
    <p>
      📧 E-Mail: <a href="mailto:support@fiveliveshoodies.com">support@fiveliveshoodies.com</a><br />
      📞 Telefon: +49 123 456789<br />
      📍 Adresse: Musterstraße 12, 10115 Berlin
    </p>
    <p>
      Folge uns auf Instagram: <a href="https://instagram.com/fivelives_fashion" target="_blank">@fivelives_fashion</a><br />
      Für News, Giveaways und exklusive Einblicke!
    </p>
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

  loadPa

