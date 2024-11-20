let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showNextImage() {
  images[currentIndex].classList.remove('fade-in');
  images[currentIndex].style.display = 'none';

  currentIndex = (currentIndex + 1) % totalImages;

  images[currentIndex].style.display = 'block';
  setTimeout(() => images[currentIndex].classList.add('fade-in'), 50); 
}

setInterval(showNextImage, 3000);

const productIds = ['1', '2', '3', '4'];
productIds.forEach(id => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(product => {
      document.getElementById(`product${id}`).innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width:100%; height:auto;">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;
    });
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownLink = dropdown.querySelector('a');
  const dropdownContent = dropdown.querySelector('.dropdown-content');
  
  dropdownLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('click', (e) => {
  dropdowns.forEach(dropdown => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    if (!dropdown.contains(e.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});
