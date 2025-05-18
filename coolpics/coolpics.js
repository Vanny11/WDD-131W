console.log("CoolPics script loaded.");

window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const menu = document.querySelector('nav ul');

  // Menu toggle
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('hide');
  });

  function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove('hide');
    } else {
      menu.classList.add('hide');
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();

  // Modal viewer
  const gallery = document.querySelector('.gallery');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close-viewer');


  if (modal.open) {
    modal.close();
  }

  gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    const src = clickedImg.getAttribute('src');
    const alt = clickedImg.getAttribute('alt');
    const newSrc = src.replace('-sm.jpeg', '-full.jpeg');

    console.log("Attempting to load:", newSrc);
    modalImg.src = newSrc;
    modalImg.alt = alt;
    modal.showModal();
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
