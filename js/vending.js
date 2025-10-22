function showNumber(num) {
    let screen = document.getElementById('screen');
    screen.value += num;
  }

  function clearScreen() {
    document.getElementById('screen').value = '';
  }


function buyProduct() {
  let code = document.getElementById('screen').value;
  let product = document.querySelector('.p-' + code); // find the image with class "p-001"

  if (product) {
    alert(`You have selected ${product.alt} paid \$3.00`);
     dispenseProduct(code); 
  } else {
    alert('Invalid product');
  }
  
  clearScreen(); 
  cleardispenser();
}

function dispenseProduct(code) {
    const product = document.querySelector('.p-' + code);
    if (product) {
        const dispenser = document.querySelector('.dispenser div');
         dispenser.innerHTML = '';
          dispenser.appendChild(product);
         

          document.getElementById('buyButton').disabled = true;
      alert("Please pay exactly $3.00 to enable another buying");
          
  } else {
    alert('Product not found');
  }
}

function check(){
    let amount = document.getElementById('amount').value;
    amount = parseFloat(amount);

    if(amount === 3.00){
        alert("You can buy one product now");
        document.getElementById('buyButton').disabled = false;
    }
   
  }


function cleardispenser() {
 setTimeout(() => {
    const dispenser = document.querySelector('.dispenser div');
    dispenser.innerHTML = '';
  }, 3000); // Clear after 3 seconds
}
