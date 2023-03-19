export default function drawEllipse(x0, y0, a, b, p5) {
    let x = 0;
    let y = b;
    let aSquared = a * a;
    let bSquared = b * b;
    let twoASquared = 2 * aSquared;
    let twoBSquared = 2 * bSquared;
    let decisionOver4 = bSquared - aSquared * b + 0.25 * aSquared;
  
    while (bSquared * x <= aSquared * y) {
      p5.point(x + x0, y + y0);
      p5.point(-x + x0, y + y0);
      p5.point(x + x0, -y + y0);
      p5.point(-x + x0, -y + y0);
  
      x++;
      if (decisionOver4 >= 0) {
        y--;
        decisionOver4 += -twoASquared * y + twoBSquared;
      }
      decisionOver4 += bSquared * (2 * x + 1);
    }
  
    decisionOver4 = bSquared * (x * x + x) + aSquared * (y * y - y) - aSquared * bSquared;
  
    while (y >= 0) {
      p5.point(x + x0, y + y0);
      p5.point(-x + x0, y + y0);
      p5.point(x + x0, -y + y0);
      p5.point(-x + x0, -y + y0);
  
      y--;
      if (decisionOver4 <= 0) {
        x++;
        decisionOver4 += twoBSquared * x + aSquared - twoASquared * y;
      }
      decisionOver4 += aSquared * (-2 * y + 1);
    }
  }