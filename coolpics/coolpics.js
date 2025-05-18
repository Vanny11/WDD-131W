console.log("✅ JavaScript is running");

window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const menu = document.querySelector('nav ul');
  const gallery = document.querySelector('.gallery');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close-viewer');

  // ✅ Safely close modal on load if it's somehow open
  if (typeof modal.close === "function" && modal.hasAttribute("open")) {
    modal.close();
  }

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

  // Gallery click opens modal
  gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    const src = clickedImg.getAttribute('src');
    const alt = clickedImg.getAttribute('alt');
    const newSrc = src.replace('-sm.jpeg', '-full.jpeg');

    console.log("Opening modal with image:", newSrc);

    modalImg.src = newSrc;
    modalImg.alt = alt;
    modal.showModal();
  });

  // Close modal on X click
  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  // Close modal if background is clicked
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
