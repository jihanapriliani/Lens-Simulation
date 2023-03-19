export function dda(x1, y1, x2, y2, p5) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    let xIncrement = dx / steps;
    let yIncrement = dy / steps;

    let x = x1;
    let y = y1;

    for(let i = 0; i <= steps; i++) {
        // console.log(`(${Math.round(x)}, ${Math.round(y)})`);
        p5.point(x, y);

        x += xIncrement;
        y += yIncrement;
    }
}


export function ddaInfinite(x1, y1, quadrant, p5) {
    let x = x1;
    let y = y1;
    if(quadrant === 1){
        while(x >= 0 || y >= 0) {
            p5.point(x, y);
            x -= 1;
            y -= 1;
        }
    } else if(quadrant === 2) {
        while(x >= 0 || y >= 0) {
            p5.point(x, y);
            x -= 1;
            y -= 1;
        }
    } else if(quadrant === 3) {
        while(x <= 1000 || y <= 600) {
            p5.point(x, y);
            x -= 1;
            y += 1;
        }  
    } else if(quadrant === 4) {
        while(x <= 1000 || y <= 600) {
            p5.point(x, y);
            x += 1;
            y += 1;
        }  
    }
}

