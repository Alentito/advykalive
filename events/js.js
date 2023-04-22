function toggleMenu() {
    var ham = document.querySelector('.ham');
    var menuPanel = document.getElementById('menu-panel');
    
  
  
    //$(".modal").toggleClass("modal-active");
  
    ham.classList.toggle('active');
   
    menuPanel.style.display = menuPanel.style.display === 'flex' ? 'none' : 'flex';
    
  }