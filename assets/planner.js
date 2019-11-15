// $(document).ready(function() {
//     $("#mainContainer").clone().appendTo("#mainContainer");
// });


$(document).ready(function () {
  var time = 8;
  // var mainClone = $("#mainContainer");
  for (var i = 0; i < 9; i++) {
    time++
    // mainClone.clone().insertAfter(mainClone);
    var parentDiv = $('<div id="fullRow" class="row align-items-start" style="border:1px solid black;">')

    var timeDiv = $('<div id="time" class="col-2 h-100">');
    timeDiv.append($("<p>").text(time));

    var inputNote = $('<input id="time' + time + '" class="inputField col-8 h-100">');

    var saveDiv = $('<div id="saveButton" class="col-2 h-100">');
    saveDiv.append($('<i id="save' + time + '"class="fas fa-save"></i>'))


    parentDiv.append(timeDiv, inputNote, saveDiv);
    $("#mainContainer").append(parentDiv);
  }

  $(".fa-save").on("click", function () {
    console.log(this)
  })
});

