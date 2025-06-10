
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Five Lives Fashion</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
      background: #fff;
      color: #111;
      transition: background 0.3s, color 0.3s;
    }
    body.dark {
      background: #111;
      color: #eee;
    }
    nav {
      background: #333;
      padding: 1rem;
      display: flex;
      gap: 1rem;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    nav a.active {
      text-decoration: underline;
    }
    .container {
      padding: 2rem;
    }
    .fade {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .spinner {
      display: none;
      margin: 1rem auto;
      width: 40px;
      height: 40px;
      border: 4px solid #ccc;
      border-top: 4px solid #555;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    .spinner.show {
      display: block;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .theme-toggle {
      margin-left: auto;
      background: #eee;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 5px;
    }
    body.dark .theme-toggle {
      background: #444;
      color: #fff;
    }
  </style>
</head>
<body>
  <nav>
    <a href="#" data-page="home" class="active">Home</a>
    <a href="#" data-page="shop">Shop</a>
    <a href="#" data-page="contact">Kontakt</a>
    <button class="theme-toggle">🌗 Theme</button>
  </nav>
  <div class="spinner" id="spinner"></div>
  <div class="container" id="content"></div>

  <script>
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
        <p>📧 E-Mail: support@fiveliveshoodies.com<br />
        📞 Telefon: +49 123 456789<br />
        📍 Adresse: Musterstraße 12, 10115 Berlin</p>
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
          const page = link.getAttribute('data-page');
          loadPage(page);
        });
      });

      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
      });

      loadPage('home');
    });
  </script>
</body>
</html>
