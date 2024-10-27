class Shape {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color || 'black';
    }
  
    draw() {
      fill(this.color);
    }
  
    move(dx, dy) {
      this.x = this.x + dx;
      this.y = this.y + dy;
    }
  }
  