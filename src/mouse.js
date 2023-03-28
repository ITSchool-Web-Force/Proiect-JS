window.addEventListener('load', (init) => {
    var pointer=document.getElementById('cursor');
    window.addEventListener('mousemove', mouseOver);
        function mouseOver(evt) {
            cursor.style.left = (evt.clientX-32) + 'px';
            cursor.style.top = (evt.clientY-32) + 'px';
        }
})
