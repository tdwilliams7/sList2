var items = [
  {
    name: 'bread',
    price: 2.99,
    checked: false,

  },
  {
    name: 'tomato',
    price: 0.79,
    checked: false,

  },
  {
    name: 'beer',
    price: 10.99,
    checked: true
  },

];

let list = document.getElementById('list');
let addFoodButton = document.getElementById('addFoodButton');
let foodAlert = document.getElementById('foodAlert');
let priceAlert = document.getElementById('priceAlert');

// function loadList(arr){
//   list.innerHTML = '';
//   for (var i = 0; i < arr.length; i++){
//     let newItem = document.createElement('div');
//     newItem.setAttribute('class', 'row');
//     newItem.innerHTML = `<div class='col-xs-4' id='name'>` + arr[i].name + `</div>
//     <div class='col-xs-4'>`+ '$ ' + arr[i].price.toFixed(2) + `</div>
//     <div class='col-xs-2'><input type='checkbox' onChange=checkedBox(this)></input></div>
//     <div class='col-xs-2'><button onClick=deleteFoodButton(this) id='` + i + `'><i class='fa fa-trash'></i></button></div>`;
//     list.appendChild(newItem);
//   }


//}
//loadList(items);




function deleteFoodButton(e){
  items.splice(e.id, 1);
  loadList(items);
  getTotal(items);
};

function checkedBox(e){
  if (e.checked){
    e.parentNode.parentNode.id = 'comp';
  } else {
    e.parentNode.parentNode.id = '';
  }
}

// addFoodButton.addEventListener('click', function(){
//   let foodName = document.getElementById('foodName');
//   let foodPrice = document.getElementById('foodPrice');
//   if (foodName.value.length > 0 && foodPrice.value.length > 0){
//     var newItemObj = {
//     name: foodName.value,
//     price: (parseFloat(foodPrice.value)),
//     completed: false
//   }
//   items.push(newItemObj);
//   loadList(items);
//   getTotal(items);
//   foodName.value = '';
//   foodPrice.value= '';
//   foodAlert.textContent = '';
//   priceAlert.textContent = '';
//   } else {
//     foodAlert.textContent ='please enter a food';
//     priceAlert.textContent = 'Please enter a Price';
//   }

// })

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
