class Rectangle extends Shape {
    constructor(x, y, width, height, color) {
      super(x, y, color);
      this.width = width;
      this.height = height;
    }
  
    draw() {
      super.draw();
      rect(this.x, this.y, this.width, this.height);
    }
  }
  