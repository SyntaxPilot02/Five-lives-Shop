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
    <p>
      Ab sofort sind ausgewählte T-Shirts und Tops vorbestellbar! Sichere dir jetzt deine Favoriten und sei unter den Ersten, die die neuen Styles tragen.
    </p>
  `,
  shop: `
    <h1>Unsere Kollektion</h1>
    <div class="product-grid">
      <div class="product-card">
        <h3>Bio T-Shirt</h3>
        <p>✔️ Klassische T-Shirts aus 100 % Bio-Baumwolle – weich, atmungsaktiv und perfekt für den Alltag.</p>
        <button class="add-to-cart" data-item="Bio T-Shirt">🛍️ In den Warenkorb</button>
      </div>
      <div class="product-card">
        <h3>Girl Top</h3>
        <p>✔️ Girl Tops in verschiedenen Styles – von verspielten Rüschen-Tops bis zu schlichten Tanktops.</p>
        <button class="add-to-cart" data-item="Girl Top">🛍️ In den Warenkorb</button>
      </div>
      <div class="product-card">
        <h3>Limited Print</h3>
        <p>✔️ Limitierte Editionen mit einzigartigen Prints – nur solange der Vorrat reicht!ㅤㅤㅤㅤㅤㅤㅤㅤ</p>
        <button class="add-to-cart" data-item="Limited Print">🛍️ In den Warenkorb</button>
      </div>
    </div>
    <p>Unsere Stoffe stammen aus verantwortungsvoller Produktion. Nachhaltigkeit und Stil gehen bei uns Hand in Hand. Alle unsere Produkte werden per Handarbeit aufwendig hergestellt.</p>
  `,
  contact: `
    <h1>Kontakt & Kundenservice</h1>
    <p>Hast du Fragen zu unseren Produkten oder deiner Bestellung? Unser Team ist für dich da!</p>
    <p>
      📧 support@fiveliveshoodies.com<br />
      📍 Wolfenbüttel
    </p>
    <p>Folge uns auf Instagram: <a href="https://instagram.com/fivelives_fashion" target="_blank">@fivelives_fashion</a></p>
  `
};

const cart = {};

function updateCartUI() {
  const cartItems = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  cartItems.innerHTML = '';

  const entries = Object.entries(cart);
  if (entries.length === 0) {
    emptyCart.style.display = 'block';
    return;
  }

  emptyCart.style.display = 'none';

  entries.forEach(([item, quantity]) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="cart-item-line">
        <span>${item}</span>
        <div class="cart-controls">
          <button class="qty-btn" data-action="decrease" data-item="${item}">-</button>
          <span>${quantity}</span>
          <button class="qty-btn" data-action="increase" data-item="${item}">+</button>
          <button class="delete-btn" data-item="${item}">🗑️</button>
        </div>
      </div>
    `;
    cartItems.appendChild(li);
  });
}

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
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const themeBtn = document.getElementById('themeToggle');
  const cartToggle = document.getElementById('cartToggle');
  const cartSidebar = document.getElementById('cartSidebar');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      loadPage(link.dataset.page);
    });
  });

  function updateIcon() {
    themeBtn.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateIcon();
  });

  updateIcon();
  loadPage('home');

  cartToggle.addEventListener('click', () => {
    const isOpen = cartSidebar.classList.toggle('open');
    cartToggle.classList.toggle('hidden', isOpen);
  });

  document.addEventListener('click', e => {
    if (e.target.matches('.add-to-cart')) {
      const itemName = e.target.dataset.item;
      cart[itemName] = (cart[itemName] || 0) + 1;
      updateCartUI();
    }

    if (e.target.matches('.qty-btn')) {
      e.stopPropagation();
      const item = e.target.dataset.item;
      const action = e.target.dataset.action;
      if (action === 'increase') {
        cart[item]++;
      } else if (action === 'decrease') {
        cart[item]--;
        if (cart[item] <= 0) delete cart[item];
      }
      updateCartUI();
    }

    if (e.target.matches('.delete-btn')) {
      e.stopPropagation();
      const item = e.target.dataset.item;
      delete cart[item];
      updateCartUI();
    }
  });

  document.addEventListener('click', e => {
    const isClickInsideCart = cartSidebar.contains(e.target);
    const isCartButton = e.target === cartToggle;

    if (
      cartSidebar.classList.contains('open') &&
      !isClickInsideCart &&
      !isCartButton &&
      !e.target.closest('.qty-btn') &&
      !e.target.closest('.delete-btn')
    ) {
      cartSidebar.classList.remove('open');
      cartToggle.classList.remove('hidden');
    }
  });
});



const cartItems = ['Item1', 'Item2', 'Item3']; 

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('confirm-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const name = document.getElementById('name')?.value.trim();
      const surname = document.getElementById('surname')?.value.trim();
      const email = document.getElementById('email')?.value.trim();

      if (!name || !surname || !email) {
        alert('Please fill in all fields.');
        return;
      }

      if (cartItems.length === 0) {
        alert('Cart is empty.');
        return;
      }

      alert(`Order sent to henry.bonse@iserv-gis.de:\n\nName: ${name} ${surname}\nGmail: ${email}\nItems: ${cartItems.join(', ')}`);
    });
  }
});
