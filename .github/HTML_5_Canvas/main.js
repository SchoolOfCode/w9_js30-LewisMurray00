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