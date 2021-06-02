const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    //console.log(this.value)
    const suffix = this.dataset.sizing || '';
    //console.log(suffix)
    
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));