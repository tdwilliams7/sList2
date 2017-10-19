var items = [
  {
    name: 'bread',
    price: 2.99,
    checked: false
  },
  {
    name: 'tomato',
    price: 0.79,
    checked: false
  },
  {
    name: 'beer',
    price: 10.99,
    checked: true
  },

];

let list = document.getElementById('list');

function loadList(arr){
  list.innerHTML = '';
  for (var i = 0; i < arr.length; i++){
    let newItem = document.createElement('div');
    newItem.setAttribute('class', 'row');
    newItem.innerHTML = `<div class='col-xs-4'>` + arr[i].name + `</div>
    <div class='col-xs-4'>`+ '$ ' + arr[i].price + `</div>
    <div class='col-xs-2'><input type='checkbox'></input></div>
    <button onClick=deleteFoodButton(this)><i class='fa fa-trash'></i></button>`;
    list.appendChild(newItem);
  }


}
loadList(items);


function getTotal(arr){
  let total=0;
  for (var i = 0; i < arr.length; i++){
    total += (arr[i].price);
  }
  console.log(total)
  let totalDiv = document.getElementById('total');
  totalDiv.innerHTML = `<h4>`+total.toFixed(2)+`</h4>`;
}
getTotal(items);


function deleteFoodButton(e){
  console.log('delete');
  e.parentNode.remove(e.id)

};

let addFoodButton = document.getElementById('addFoodButton');
let foodAlert = document.getElementById('foodAlert');
let priceAlert = document.getElementById('priceAlert');

addFoodButton.addEventListener('click', function(){
  let foodName = document.getElementById('foodName');
  let foodPrice = document.getElementById('foodPrice');
  if (foodName.value.length > 0 && foodPrice.value.length > 0){
    var newItemObj = {
    name: foodName.value,
    price: (parseFloat(foodPrice.value)),
    completed: false
  }
  items.push(newItemObj);
  console.log(items);
  loadList(items);
  getTotal(items);
  foodName.value = '';
  foodPrice.value= '';
  foodAlert.textContent = '';
  priceAlert.textContent = '';
  } else {
    foodAlert.textContent ='please enter a food';
    priceAlert.textContent = 'Please enter a Price';
  }

})

// function inputNewItem() {
//   let foodName = document.getElementById('foodName').value
//   let foodPrice = document.getElementById('foodPrice').value
//   var newItemObj = {
//     name: foodName,
//     price: (parseFloat(foodPrice)),
//     completed: false
//   }
//   items.push(newItemObj);
//   console.log(items);
//   loadList(items);
//   getTotal(items);
// }
