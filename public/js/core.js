var grocList = angular.module('grocList', []);

function mainController($scope, $http){
    $scope.formData = {};

    $http.get('/foods')
        .success(function(data){
            $scope.foods = data;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });

    $scope.deleteFood = function(id) {
        $http.delete('/foods/' + id)
            .success(function(data) {
                $scope.foods = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.totalAmount = function(){
        var total = 0;
        angular.forEach($scope.foods, function(food){
            total += food.price;
        });
        return total.toFixed(2);
    };

    $scope.addNew = function(){
        let foodName = document.getElementById('foodName');
        let foodPrice = document.getElementById('foodPrice');


        if (foodName.value.length > 0 &&  foodPrice.value.length > 0){
        $scope.formData={
            'name' : foodName.value,
            'price' : foodPrice.value
        };
        console.log($scope.formData);
        $http.post('/foods', $scope.formData)
            .success(function(data){
                $scope.formData = {};
                $scope.foods = data;
            })
            .error(function(data){
                console.log('error: ' + data);
            });
         foodName.value = '';
         foodPrice.value = '';
         foodAlert.textContent = '';
         priceAlert.textContent = '';
         foodName.focus();
            } else {
        foodAlert.textContent ='please enter a food';
        priceAlert.textContent = 'Please enter a Price';
     }

    };
}
function checkedBox(e){
  if (e.checked){
    e.parentNode.parentNode.id = 'comp';
  } else {
    e.parentNode.parentNode.id = '';
  }
}