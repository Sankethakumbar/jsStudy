function print() {
  console.log(arguments);
}

print("hello", 400, false);
print()


const printArrow = () => {
  console.log(arguments);
};

printArrow("hello", 400, false);


const obj = {
  name: "deeecode",
  age: 200,
  print: function () {
    console.log(this);
  },
};

obj.print();

const objarrow = {
  name: "deeecode",
  age: 200,
  print: function () {
    function print2() {
      console.log(this);
    }

    print2();
  },
};

objarrow.print();//window