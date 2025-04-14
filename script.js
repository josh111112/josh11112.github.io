document.addEventListener('mousemove', (e) => {
    document.getElementById('x-pos').textContent = e.clientX;
    document.getElementById('y-pos').textContent = e.clientY;
});