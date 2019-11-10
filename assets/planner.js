// $(document).ready(function() {
//     $("#mainContainer").clone().appendTo("#mainContainer");
// });


$(document).ready(function() {
    var mainClone = $("#mainContainer");
    for (var i = 0; i < 8; i++) {
      mainClone.clone().insertAfter(mainClone);
    }
});

