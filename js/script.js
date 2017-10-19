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

  for (var i = 0; i < arr.length; i++){
    let newItem = document.createElement('div');
    newItem.setAttribute('class', 'row');
    newItem.innerHTML = `<div class='col-xs-4'>` + arr[i].name + `</div>
    <div class='col-xs-4'>`+ '$ ' + arr[i].price + `</div>
    <div class='col-xs-2'><input type='checkbox'></input></div>
    <button><i class='fa fa-trash' onClick=deleteFoodButton(this)></i></button>`;
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
  totalDiv.innerHTML = `<h4>`+total+`</h4>`;
}
getTotal(items);


function deleteFoodButton(e){
  console.log('delete');
  e.parentNode.parentNode.remove(e.id)

};


function inputNewItem() {
  let foodName = document.getElementById('foodName').value
  let foodPrice = document.getElementById('foodPrice').value
  var newItemObj = {
    name: foodName,
    price: (parseFloat(foodPrice)),
    completed: false
  }
  items.push(newItemObj);
  console.log(items);
  loadList(items);
  getTotal(items);
}
