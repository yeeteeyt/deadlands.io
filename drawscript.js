const canvas = document.querySelector('#draw');
// could be 3d, if you want to make a video game
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
draw = function() {stroke(29, 143, 19);
    fill(mouseX, mouseY, 173);
    ellipse(mouseX, mouseY, 100, 100);
};

