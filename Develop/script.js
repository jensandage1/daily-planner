// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.  



$(document).ready()

var saveButton = document.querySelectorAll(".saveBtn");
var timeBlock = document.querySelectorAll("time-block");
var currentTime = dayjs().format('HH');
var hour9 = document.getElementById("hour-9");
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour1 = document.getElementById("hour-13");
var hour2 = document.getElementById("hour-14");
var hour3 = document.getElementById("hour-15");
var hour4 = document.getElementById("hour-16");
var presentTime = document.getElementsByClassName("present");
var futureTime = document.getElementsByClassName("future");
var pastTime = document.getElementsByClassName("past");
var desriptionOfEvent = document.querySelectorAll("description");





  //grab hour-9 from local storage
  //
  //console.log from local storage

  //save hour-9 to hour-9 text area

  $("#hour-9 > .saveBtn").click(()=> {
    //console.log("button clicked")
    let textInput = $("#hour-9 > .description").val();
   // console.log(textInput);
    localStorage.setItem("hour-9", textInput)
  });
  
  $("#hour-10 > .saveBtn").click(()=> {
    let textInput = $("#hour-10 > .description").val();
    localStorage.setItem("hour-10", textInput)
  });

  $("#hour-11 > .saveBtn").click(() => {
    let textInput = $("#hour-11 > .description").val();
    localStorage.setItem("hour-11", textInput)
  });

  $("#hour-12 > .saveBtn").click(() => {
    let textInput = $("#hour-12 > .description").val();
    localStorage.setItem("hour-12" , textInput)
  });

  $("#hour-13 > .saveBtn").click(() => {
    let textInput = $("#hour-1 > .description").val();
    localStorage.setItem("hour-1" , textInput)
  });

  $("#hour-14 > .saveBtn").click(() => {
    let textInput = $("#hour-2 > .description").val();
    localStorage.setItem("hour-2", textInput)
  });

$("#hour-15 > .saveBtn").click(() => {
  let textInput = $("#hour-3 > .description").val();
  localStorage.setItem("hour-3", textInput)
});

$("#hour-15 > .saveBtn").click(() => {
  let textInput = $("#hour-4 > .description").val();
  localStorage.setItem("hour-4", textInput)
});

function pastPresentOrFuture() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    // check if we've moved past this time
    if (blockHour < currentTime) {
      $(this).addClass("past");
    } else if (blockHour === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
pastPresentOrFuture();
  


  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  
