// js/services/todos.js

angular.module('todoService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Todos', function($http) {
    	
        return {
            
        	get : function() {
                return $http.get('/api/todos');
            },
            
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
        
            remove : function(id) {
                return $http.get('/api/todos/delete/' + id);
            }
        }
        
    });