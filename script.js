const canvas = document.getElementById('skylineCanvas');
const ctx = canvas.getContext('2d');
const toggle = document.getElementById('toggle');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let buildings = [];
let isNight = false;

class Building {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = isNight ? 'darkgray' : 'lightgray';
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
    }
}

canvas.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = canvas.height;
    const width = Math.random() * 50 + 50;
    const height = Math.random() * 200 + 100;
    buildings.push(new Building(x, y, width, height));
    drawSkyline();
});

toggle.addEventListener('change', (event) => {
    isNight = event.target.checked;
    document.body.style.backgroundColor = isNight ? '#000000' : '#87CEEB';
    buildings.forEach(building => {
        building.color = isNight ? 'darkgray' : 'lightgray';
    });
    drawSkyline();
});

function drawSkyline() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    buildings.forEach(building => building.draw());
}

drawSkyline();