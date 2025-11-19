const fruits = [];

function addFruit(){
  const moreFruit = prompt("Please enter a fruit:");
  if (fruits) {
    fruits.push(moreFruit);
    alert(`${moreFruit} added to your basket!`);
  } else {
    alert("Please enter a fruit.");
  }
}

function viewBasket(){
  let fruitList = "Your basket contains:\n";
  for (const moreFruit of fruits){
    fruitList += `- ${fruits}\n`
  }
  alert(fruitList);
}