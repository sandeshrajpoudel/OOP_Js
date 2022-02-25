// import React from 'react'

// const practice = () => {
//   return (
//     <div>practice</div>
//   )
// }

// export default practice






/* **************************************************************************** |
   **************************************************************************** |
   **************************************************************************** |

Object-Oriented Programming  => {JavaScript}
- Objects 
- classes
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism



.................................................................................

Create a new object of BOOK in JavaScript with its properties

const book = {
   title: "Bhagwat Geeta",    
   author: " Ved Vyas", 
   language: "Sanskrit" 
   year: "1st Century "
}

We can get the value of the title
 book.title
  ------> console.log(book.title); 

const book = {
   title: "Muna Madam",    
   author: "Laxmi Prasad Devkota",  
   year: "1992"
}
const book1 = {
   title: "Ramayana",    
   author: "Valmiki",  
   year: "5th Century", 
}
we can create many object with same properties 

..................................................................... |

Object constructor
- We can use them with the new keyword. 
- Object constructor is useful when we want to create 
  multiple objects with the same properties and methods.

function Book(_title, _author, _year) { 
   this.title = _title; 
   this.author = _author; 
   this.year = _year;
}

const book3 = new Book ('Ramayana', 'Valmiki', '5th  Century');
---> console.log(book3)


if we want to create more than one book just we call function book with 
new keyword.

const book4 = new Book ('MahaaBharat', 'Veda Vyas', '8th  Century');

.........................................................................................

book3 and book4 create an instance of Book and assigned it to a variable.
To find out whether an object is an instance of another one. We can use 
instanceof.

book1 instanceof Book
> true
...........................................................................................
The Object.create() method creates a new object, using an existing object as
the prototype. 

function Books(_title, _author, _year) { 
   this.title = _title; 
   this.author = _author; 
   this.year = _year;
}
const book5 = Object.create(Books);
book1.author = "Sandy";
book1.title = "JS OOP Concept ";

---> console.log(book5);
   

.............................................................................................

Class

- Class is not an object — it is the blueprint of an object.
- You can define functions using function expressions and declarations.
- We can create the number of objects using the blueprint.



class Student {
   constructor(_name) {
      this.name = _name;
      this.age = 22;
   }
   summary() {
      console.log(`${this.name} is ${this.age} years old`);
   }
}
const Std1 = new Student("Sandy");
---> console.log(Std1.summary);
   > Sandy is 22 years old

//////////////////////////////////////////////////////////////////
we can create a function in JS as:
 
 function to  add two numbers;


 function addition(num1, num2) {

                return num1 + num2;

       }

OR

addition(num1, num2){
    return num1 + num2;

}

///////////////////////////////////////////////////////////////////////////
................................................................................................

Encapsulation

Encapsulation means hiding information or data.  In other words, the private variable
is only visible to the current function and is not accessible to the global scope or 
other functions.

class Hello {
    constructor(a) {
        this.c = "12";
      this.name = a;   
    this.age = 1;                                                        
} 
summary(){
    console.log(this.name);
}

}
const abc = new Hello("sandy");
const ggg = abc.summary()


In the above code the name and the age, c are only visible inside the
scope of the class Hello and the method summary is visible to the caller
 of class. So those variables(age, name, c) are encapsulated inside Hello.
 *
 * Another example
 * 
 
 const Book = function(t, a) {
   let title = t; 
   let author = a; 
   
   return {
      summary : function() { 
        console.log(`${title} written by ${author}.`);
      } 
   }
}
const book1 = new Book('herne katha', 'someone');
book1.summary();
> herne katha written by someone.

here title and author is encapsulated and only available inside Book.



.............................................................................................

Abstraction
 This means implementation hiding. It is a way of hiding the implementation
details and only showing the essential features to the caller. In other words,
it hides irrelevant details and shows only what’s necessary to the outer world.
A lack of abstraction will lead to problems of code maintainability.


const Book = function(getTitle, getAuthor) { 
   // Private variables / properties  
   let title = getTitle; 
   let author = getAuthor;
// Public method 
   this.giveTitle = function() {
      return title;
   }
   
   // Private method
   const summary = function() {
      return `${title} written by ${author}.`
   }
// Public method that has access to private method.
   this.giveSummary = function() {
      return summary()
   } 
}
const book1 = new Book('Muna Madan', 'Laxmi prasad devkota');
book1.giveTitle();
> "Muna Madan"
book1.summary();
> Uncaught TypeError: book1.summary is not a function
book1.giveSummary();
> "Muna Madan written by Laxmi prasad devkota."

...........................................................................................

Inheritance
-----------

JavaScript inheritance is a mechanism allows us to create a new class using the 
existing class. It means the child class can inherits(get) all the properties 
and behaviors of the parent class.
here, Car is parent class and Model is the child class.

 class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show());
The super() method refers to the parent class.


By calling the super() method in the constructor method, 
we call the parent's constructor method and gets access 
to the parent's properties and methods.

Another example,

class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();
In the above example, the Student class inherits all the methods and 
properties of the Person class. Hence, the Student class will now have
 the name property and the greet() method.
............................................................................................

Polymorphism
The ability to call the same method on different objects and have
each of them respond in their own way is called polymorphism.


console.log("a");
class A{
consolefunc(){
return "sandy"
}
}
class B extends A {

consolefunc(){                    
return "sandy1";
}
 


}
let x =new  B()
let r = x.consolefunc();
console.log("this is " + r);

here in this above example,
you can override the methods, as we have created 2 methods of same name in class A and B.
Above, the variable r will hold the value <<sandy1>> and give output as <<This is sandy1>>.

but if you remove the consolefunc() from class B, this will give output  as <<This is sandy>>. 
the class B overrides the method of parent class A.

*/










