/* HTML-шаблоны страниц */
const pages = {
  home: `
    <h1>Willkommen bei Five Lives Fashion</h1>
    <p>
      Entdecke die neuesten Styles in unserer exklusiven Kollektion.
      Unsere Mission ist es, hochwertige T-Shirts und Girl Tops anzubieten,
      die nicht nur gut aussehen, sondern sich auch perfekt anfühlen.
    </p>
    <p>
      Ob du auf der Suche nach einem bequemen Oversized Shirt,
      einem sportlichen Crop-Top oder einem lässigen Streetwear-Look bist –
      bei uns findest du das Richtige.
    </p>
  `,
  shop: `
    <h1>Unsere Kollektion</h1>
    <p>
      ✔️ Klassische T-Shirts aus 100 % Bio-Baumwolle – weich, atmungsaktiv und perfekt für den Alltag.<br>
      ✔️ Girl Tops in verschiedenen Styles – von verspielten Rüschen-Tops bis zu schlichten Tanktops.<br>
      ✔️ Limitierte Editionen mit einzigartigen Prints – nur solange der Vorrat reicht!
    </p>
    <p>Unsere Stoffe stammen aus verantwortungsvoller Produktion. Nachhaltigkeit und Stil gehen bei uns Hand in Hand.</p>
  `,
  contact: `
    <h1>Kontakt & Kundenservice</h1>
    <p>Hast du Fragen zu unseren Produkten oder deiner Bestellung? Unser Team ist für dich da!</p>
    <p>
      📧 support@fiveliveshoodies.com<br>
      📞 +49&nbsp;123&nbsp;456789<br>
      📍 Musterstraße&nbsp;12, 10115 Berlin
    </p>
    <p>Folge uns auf Instagram: <a href="https://instagram.com/fivelives_fashion" target="_blank">@fivelives_fashion</a></p>
  `
};

/* Загрузка выбранной страницы с небольшим спиннером */
function loadPage(page){
  const content=document.getElementById('content');
  const spinner=document.getElementById('spinner');
  spinner.classList.add('show');
  content.classList.remove('fade');

  setTimeout(()=>{
    content.innerHTML=pages[page]||pages.home;
    content.classList.add('fade');
    spinner.classList.remove('show');
  },500);
}

/* Инициализация после загрузки DOM */
document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('.nav-link');
  const themeBtn=document.getElementById('themeToggle');

  /* Навигация */
  links.forEach(link=>{
    link.addEventListener('click',e=>{
      e.preventDefault();
      links.forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
      loadPage(link.dataset.page);
    });
  });

  /* Переключение темы + смена иконки */
  function updateIcon(){
    themeBtn.textContent=document.body.classList.contains('dark')?'🌙':'☀️';
  }
  themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    updateIcon();
  });
  /* Установить корректную иконку при первом рендере */
  updateIcon();

  /* Загрузить главную страницу */
  loadPage('home');
});



