// display current date and time
let currentDay = $("#currentDay");
let day = dayjs().format("MMMM, DD YYYY");
currentDay.text(day);

let currentTime = $("#currentTime");
function updateTime() {
  let now= dayjs().format("h:m:ss");
  currentTime.text(now);
};
updateTime();
setInterval(updateTime, 1000);

// past present future coloring
let time = parseInt(dayjs().format("H"));
let timeBlocks = $(".time-block");
timeBlocks.each(function () {
    let timeBlock = parseInt($(this).attr("data-time"));
    if  (timeBlock === time) {
        $(this).addClass("present");
    }
    else if (timeBlock < time) {
        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }
});

// create an onclick event for the saveBtn
let saveBtn = $(".saveBtn")
saveBtn.click(function() {
    let description = $(this).siblings(".description").val();

    // let id = $(this).parents(".time-block").data("time");
    
    let id = $(this).parent(".time-block").data("time");
    // let id = $(this).parent().attr("id")

    localStorage.setItem(id , description);
});


function renderPage() {

     for (let i = 1; i < 16; i++) {
        $("#row" +i+" .description").val(localStorage.getItem(i+5))
     }
//    $("#row1 .description").val(localStorage.getItem(6));
};
renderPage()