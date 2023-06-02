//we want the HTML to load before the .js runs. 
$(document).ready(function(){

});

var saveButton = document.querySelectorAll(".saveBtn");
var timeBlock = document.querySelectorAll("time-block");
var currentTime = dayjs().format('HH');
var presentTime = document.getElementsByClassName("present");
var futureTime = document.getElementsByClassName("future");
var pastTime = document.getElementsByClassName("past");
var hourTextArea = document.getElementsByClassName("description");
var dateDiv = document.getElementById("display-date");
var currentDate = dayjs().format("MMM DD YYYY");

function displayDate(){
  dateDiv.textContent = "Todays date is " + currentDate + ".";
}
displayDate();

//pulling items from the storage and displaying them upon loading the page. 
  function displayEventNine() {
    $("#hour-9 > .description").val(localStorage.getItem("hour-9"));
  }
  displayEventNine();

  function displayEventTen(){
    $("#hour-10 > .description").val(localStorage.getItem("hour-10"));
  }
  displayEventTen();

  function displayEventEleven() {
    $("#hour-11 > .description").val(localStorage.getItem("hour-11"));
  }
  displayEventEleven();

  function displayEventTwelve(){
    $("#hour-12 > .description").val(localStorage.getItem("hour-12"));
  }
  displayEventTwelve();

  function displayEventOne() {
  $("#hour-13 > .description").val(localStorage.getItem("hour-1"));
  }
  displayEventOne();

  function displayEventTwo (){
    $("#hour-14 > .description").val(localStorage.getItem("hour-2"));
  }
  displayEventTwo();

  function displayEventThree(){
    $("#hour-15 > .description").val(localStorage.getItem("hour-3"));
  }
  displayEventThree();

  function displayEventFour(){
    $("#hour-16 > .description").val(localStorage.getItem("hour-4"));
  }
  displayEventFour();

//looks in id hour-9 then looks further down for save button. event listner .click on save button works.
  $("#hour-9 > .saveBtn").click(()=> {  
    let textInput = $("#hour-9 > .description").val(); //text input is what user types. goes into hour-9 then down in description. .val is used to Get the current value of the first element in the set of matched elements
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
    let textInput = $("#hour-13 > .description").val();
    localStorage.setItem("hour-1" , textInput)
  });

  $("#hour-14 > .saveBtn").click(() => {
    let textInput = $("#hour-14 > .description").val();
    localStorage.setItem("hour-2", textInput)
  });

$("#hour-15 > .saveBtn").click(() => {
  let textInput = $("#hour-15 > .description").val();
  localStorage.setItem("hour-3", textInput)
});

$("#hour-16> .saveBtn").click(() => {
  let textInput = $("#hour-16 > .description").val();
  localStorage.setItem("hour-4", textInput)
});

function pastPresentOrFuture() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    // check if we've moved past this time
    if (blockHour < currentTime) {
      $(this).addClass("past");//past is greyed out. 
    } else if (blockHour === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");//present is yellow.
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");//future is green. 
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


  
