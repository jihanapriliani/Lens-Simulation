export function dda(x1, y1, x2, y2, p5) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    let xIncrement = dx / steps;
    let yIncrement = dy / steps;

    let x = x1;
    let y = y1;




    for(let i = 0; i <= steps; i++) {
        p5.point(x, y);

        x += xIncrement;
        y += yIncrement;
    }
}

export function getBoundPoint(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    let xIncrement = dx / steps;
    let yIncrement = dy / steps;

    let x = x1;
    let y = y1;


    while(y >= 0 && y <= 600 && x >= 0 && x <= 1000) {
        x += xIncrement;
        y += yIncrement;
    }

    return [x, y];
}

