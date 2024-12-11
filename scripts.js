function toggleMenu() {
    const menu = document.getElementById('popup-menu')
    const isVisible = menu.style.bottom === '0%';
    menu.style.bottom = isVisible ? '-100%' : '0%';
   
  }


  function cartmenu() {
    const menu = document.getElementById('cart-menu')
    const isVisible = menu.style.bottom === '0%';
    menu.style.bottom = isVisible ? '-100%' : '0%';
  }

  
  
 function ShoppingCenter()
 {
  const htmlFile = "shop.html";
  window.location.href = htmlFile;
 
  const menu = document.getElementById('Shop').onclick= ShoppingCenter;
 }
   
  function home()
  {
   const htmlFile = "index.html";
   window.location.href = htmlFile;
  }
   const menu = document.getElementById('Shop').onclick= home;
   
  