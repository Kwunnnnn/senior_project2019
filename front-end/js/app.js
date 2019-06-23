let myApp = angular.module('myApp', []);
let address = "http://localhost:3000";

function getBase64(file, onLoadCallback) {
    return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        reader.onload = function() { resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

myApp.controller('showDataController', function ($scope, $http) {
    let i;

    $http.get(address + "/get_all_data", {
    }).then(function successCallback(res) {
        let numData = res.data;
        $scope.dataID = numData;
        let time = $scope.dataID[0].createdAt;
        //$scope.dataID[0] += {date_temp : String(time).split("T")[0]};
        for (i = 0; i < $scope.dataID.length; i++){
            $scope.dataID[i].date_temp = String(time).split("T")[0];
        }

        // console.log($scope.date_temp);

    }, function errorCallback(res) {
        console.log(res.data);
    })
});

myApp.controller('writeDataController', function ($scope, $http) {
    $scope.sendData = function() {
        let dataPlay = {name_test: $scope.name_test, num_person: $scope.num_person};
        console.log(dataPlay);
        $http.post(address + "/write_data", angular.toJson(dataPlay), {
            transformRequest: angular.identity,
        }).then(function successCallback(res) {
            let data = res.data;
            console.log(res);
        },function errorCallback(res) {
            let data = res.data;
            console.log(res);
        });



        //imgBase64
        // let f = document.getElementById('file').files[0];
        // let formData = new FormData();
        // formData.append(file,f);
        // let promise = getBase64(f);
        // promise.then(function(result){
        //     let base = result;
        //      let dataImg = {bg_file: base};
        //      console.log(dataImg);
        //      // $http.post(address + "/upload", angular.toJson({base: base})), {
        //     $http.post(address + "/upload", angular.toJson(dataImg), {
        //         transformRequest: angular.identity,
        //     }).then(function successCallback(res) {
        //             let data = res.data;
        //             // let edit_img = document.getElementById("bg_change");
        //             // edit_img.src = data;
        //             console.log(res);
        //         },function errorCallback(res) {
        //             let data = res.data;
        //             console.log(res);
        //         }
        //     )
        // });
        // console.log(f);
        // console.dir($scope.file);
        };
});

myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            let model = $parse(attrs.fileModel);
            let modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

