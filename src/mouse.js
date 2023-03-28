window.addEventListener('load', (init) => {
    var pointer=document.getElementById('cursor');
    window.addEventListener('mousemove', mouseOver);
        function mouseOver(evt) {
            cursor.style.left = (evt.clientX-5) + 'px';
            cursor.style.top = (evt.clientY-5) + 'px';
        }
})
