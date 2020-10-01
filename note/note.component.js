'use strict';
app.directive('note',function()
	{
		return{
			restrict : 'E',
			scope : {
				note : '=',
				index : '='
			},
			templateUrl : 'note/note.template.html',
			controller : 'childController',
			replace : true
		}
	});