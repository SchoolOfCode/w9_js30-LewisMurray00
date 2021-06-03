const panel = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open')
}

panel.forEach(panel => panel.addEventListener('click', toggleOpen));