'use strict';

var app = angular.module('notesApplication', ['note']);

app.controller('notesController', ['$scope', function($scope) {

  $scope.note = {
    title: "",
    content: ""
  };

    $scope.tempTitle = "";
    $scope.tempContent = "";
    $scope.tempIndex = -1;

  $scope.allNotes = localStorage.notes ? JSON.parse(localStorage.getItem("notes")) : [];
  // console.log($scope.allNotes);

  $scope.saveNote = function() {
    //   console.log($scope.tempTitle);
    //   console.log($scope.tempContent);
    //   console.log($scope.tempIndex);
    if($scope.$tempIndex != (-1) &&  $scope.tempTitle != "" && $scope.tempContent != "") {
        if($scope.note.title != "" && $scope.note.content != "") {
            $scope.allNotes[$scope.tempIndex] = $scope.note;
            localStorage.setItem("notes", angular.toJson($scope.allNotes));
            $scope.resetNoteVariables();
        } else {
            alert("Can not leave fields blank.");
            $scope.discardNote();
            $scope.resetNoteVariables();
            $scope.resetTempVariables();
        }   
    } else {
        if($scope.note.title != "" && $scope.note.content != "") {
            $scope.resetTempVariables();
            $scope.allNotes.splice(0, 0, $scope.note); 
            localStorage.setItem("notes", angular.toJson($scope.allNotes));  
            $scope.resetNoteVariables();
            $scope.resetTempVariables();
        } else {
            alert("Try filling fields");
        }
    }

    
  }

  

$scope.resetNoteVariables = () => {
    $scope.note = {
        title: "",
        content: ""
    }
  }

  $scope.resetTempVariables = () => {
    $scope.tempTitle = "";
    $scope.tempContent = "";
    $scope.tempIndex = -1;
  }

  $scope.deleteNote = function(id) {
    $scope.allNotes.splice(id,1);
    localStorage.setItem('notes', angular.toJson($scope.allNotes));
    $scope.resetTempVariables();
    $scope.resetNoteVariables();

    }

    $scope.discardNote = function() {
        if($scope.$tempIndex != (-1) &&  $scope.tempTitle != "" && $scope.tempContent != "") { 
            $scope.note.title = $scope.tempTitle;
            $scope.note.content = $scope.tempContent;
        } else {
            $scope.resetTempVariables();
            $scope.resetNoteVariables();
        }
        
    }

    $scope.editNote = function(note, id) {
        $scope.note = note;
        $scope.tempTitle = note.title;
        $scope.tempContent = note.content;
        $scope.tempIndex = id;
    }


}]);

