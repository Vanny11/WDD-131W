// Menu Toggle
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hide');
});

function handleResize() {
  if (window.innerWidth > 700) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// Modal Image Viewer
const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
  const clickedImg = event.target.closest('img');
  if (!clickedImg) return;

  const src = clickedImg.getAttribute('src');
  const alt = clickedImg.getAttribute('alt');
  const fullImgSrc = src.split('-')[0] + '-full.jpeg';

  modalImg.src = fullImgSrc;
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
