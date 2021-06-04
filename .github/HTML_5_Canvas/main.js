const canvas = document.querySelector('#draw');

//context needed to be drawn on
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Added for the canvas
ctx.strokeStyle = '#BADA55'
//if a line meets another it becomes rounded off
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return; //Stops the fn when they are not moused down
    console.log(e);
    

    ctx.beginPath();
    //Start from 
    ctx.moveTo(lastX, lastY);
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    [lastX, lastY]=[e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e)=> {
    isDrawing = true;
    [lastX, lastY]=[e.offsetX, e.offsetY];

});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);


