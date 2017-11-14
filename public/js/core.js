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

    $scope.toDay = function(date){
        return moment(date).format('MM/DD');
    };

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
        let date = document.getElementById('date');

        if (date.value.length === 0){
            date.value = moment(new Date).add(1, 'days').format('MM-DD-YYYY');
        } else {
            date.value;
        }
        if (foodName.value.length > 0 &&  foodPrice.value.length > 0){
            $scope.formData={
                'name' : foodName.value,
                'price' : foodPrice.value,
                'date' : moment(date.value, ['MM-DD-YYYY', 'YYYY-MM-DD']),
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
            date.value = '';
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
$(document).ready(function(){
    $('#datepicker').datepicker({
        container: $('#datepicker'),
        autoclose: true
    });
});