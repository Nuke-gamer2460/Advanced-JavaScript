const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = document.getElementById('penColor').value;
    ctx.lineWidth = document.getElementById('penWidth').value;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    [lastX, lastY] = [e.offsetX, e.offsetY];
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
}

document.querySelector('.clear').addEventListener('click', () => {
    if (confirm('Do you want to clear the canvas?')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

document.querySelector('.save').addEventListener('click', () => {
    const dataURL = canvas.toDataURL();
    console.log(dataURL);

    const img = new Image();
    img.src = dataURL;
    document.querySelector('.output').appendChild(img);

    const a = document.createElement('a');
    a.href = dataURL;
    a.download = `drawing_${Math.random()}.png`;
    a.click();
});