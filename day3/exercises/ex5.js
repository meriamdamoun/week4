class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  }