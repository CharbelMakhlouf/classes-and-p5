class Triangle extends Shape {
    constructor(x1, y1, x2, y2, x3, y3, color) {
      super(0, 0, color);
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
    }
  
    draw() {
      super.draw();
      triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
  
    move(dx, dy) {
      this.x1 = this.x1 + dx;
      this.y1 = this.y1 + dy;
      this.x2 = this.x2 + dx;
      this.y2 = this.y2 + dy;
      this.x3 = this.x3 + dx;
      this.y3 = this.y3 + dy;
    }
  }
  