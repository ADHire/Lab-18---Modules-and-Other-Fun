var app = angular.module('myModule');

app.factory('myService', function(){
  var storedAnimal = "your stuff here";
  var storedWhat = '';

  return {
    save: function(animal, what) {
      storedAnimal = animal;
      storedWhat = what;
    },
    get: function(){
      return {
        animal: storedAnimal,
        what: storedWhat
      };
    }
  };
});