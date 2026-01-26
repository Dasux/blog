
function createStars(num = 150) {
  for (let i = 0; i < num; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = star.style.height = (Math.random() * 2 + 1) + 'px';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    document.body.appendChild(stars);
  }
}
createStars(); // Call on load
