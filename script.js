var time = new Date().getHours();
var greeting = "Hello ";
var name = "Jonny";

// Your conditional statements here
if (time < 12) {
  greeting = "Good morning ";
} else if (time < 18) {
  greeting = "Good afternoon ";
} else if (time < 22) {
  greeting = "Good evening ";
} else {
  greeting = "Go to bed!";
}

// alert()
alert(greeting + name);
