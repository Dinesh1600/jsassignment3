// Class for Smoothie object
class Smoothie {
    constructor(name, fruit, sweetener, milk, toppings) {
        this.name = name;
        this.fruit = fruit;
        this.sweetener = sweetener;
        this.milk = milk;
        this.toppings = toppings;
    }

    getDescription() {
        return `
        <p><b>Smoothie Name:</b> ${this.name}</p>
        <p><b>Fruit:</b> ${this.fruit}</p>
        <p><b>Sweetener:</b> ${this.sweetener}</p>
        <p><b>Milk:</b> ${this.milk}</p>
        <p><b>Toppings:</b> ${this.toppings.join(', ')}</p>
        `;
        
    }
}
//variable to declaring image elements
var SmoothieImage=document.getElementById("smoothieImage");

// Function to handle form submission
function orderSmoothie(event) {

    event.preventDefault();
    var smoothieName = document.getElementById('smoothieName').value;
    var fruit = document.getElementById('fruit').value;
    var sweetener = document.getElementById('sweetener').value;
    var milk = document.getElementById('milk').value;
    var toppings = [];
    var toppingsElements = document.querySelectorAll('input[type="checkbox"]:checked');
    toppingsElements.forEach((element) => {
        toppings.push(element.value);
    });

    const smoothie = new Smoothie(smoothieName, fruit, sweetener, milk, toppings);
    displaySmoothie(smoothie);
}

// Function to display the smoothie description
function displaySmoothie(smoothie) {
    var smoothieOutput = document.getElementById('orderDetails');
    smoothieOutput.innerHTML = smoothie.getDescription();
    var fruit = document.getElementById('fruit').value;
    if(fruit=="blueberry"){
        SmoothieImage.src='blueberry.jpg'
    }else if(fruit=="strawberry") {
        SmoothieImage.src='strawberry.jpeg'
    }else if(fruit=="mango"){
        SmoothieImage.src='mango.jpg'
    }else{
        SmoothieImage.src='banana.jpeg'
    }

}

// Event listener for form submission
const orderButton = document.getElementById('order');
orderButton.addEventListener('click', orderSmoothie);
