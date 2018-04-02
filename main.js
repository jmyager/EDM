
// Define firebase database
var database = firebase.database();

//Button for adding Employees
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");

  // Add each employee's data to the database
  database.ref().push({
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
  })
});


// Firebase watcher
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().start);
    console.log(childSnapshot.val().rate);

    $("#employee-table > tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" +
    childSnapshot.val().start + "</td><td>" + "null" + "</td><td>" + childSnapshot.val().rate + "</td><td>" + "null" + "</td></tr>");
})