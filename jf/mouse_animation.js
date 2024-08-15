// Mouse Animations on HOME SCREEN
let mouseFollower1 = document.querySelector('.it-follows');
let allLinks1 = document.querySelectorAll('.link');

window.addEventListener('mousemove', moveFollower);

function moveFollower(e) {
 mouseFollower1.style.top = e.pageY + 'px';
 mouseFollower1.style.left = e.pageX + 'px';
}

allLinks1.forEach(link => {
 link.addEventListener('mouseleave', () => {
  mouseFollower1.classList.remove('mouse-over-link');
  link.classList.remove('hovered-link');
 });
 link.addEventListener('mouseover', () => {
  mouseFollower1.classList.add('mouse-over-link');
  link.classList.add('hovered-link');
 });
});