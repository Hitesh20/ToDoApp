app.controller("childController",function($scope){

    console.log($scope.note);

	$scope.editNote = (note,id)=>{
		$scope.$parent.editNote(note,id);
	}

	$scope.deleteNote = (id)=>{
		$scope.$parent.deleteNote(id);
	}
});