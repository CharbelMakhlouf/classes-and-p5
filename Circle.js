class Circle extends Shape {
    constructor(x, y, radius, color) {
      super(x, y, color);
      this.radius = radius;
    }
  
    draw() {
      super.draw();
      circle(this.x, this.y, this.radius * 2);  
    }
  }
  
  