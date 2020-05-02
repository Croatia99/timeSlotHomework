function dayPull(){

    var dateDisplay = moment().format("MMM Do YY");
    $(".hDate").text(dateDisplay);
}

dayPull();
var stored = localStorage.getItem("planInfo");
var allPlans= JSON.parse(stored) || {}
var timeNow = (moment().hour());

for(i=9; i<19; i+=1){
    $(".container").append(`<div id ="${i}" class="row time-block">
    <div class="col-sm-2">${i}:00</div>
    <textarea class="col-sm-8 planInfo">${allPlans[i] || ""}</textarea>
    <button data-time=${i} class ="saveBtn col-sm-2">Save</button>
  </div>`)
    var thisRow = $("#"+i);
    if(i<timeNow){
        thisRow.addClass("past")
    }
    else if(i>timeNow){
        thisRow.addClass("future")
    }
    else if(i===timeNow){
        thisRow.addClass("present")
    }    
}

$(".saveBtn").click(function() {

    var time = $(this).attr("data-time");
      var  message = $(this).siblings('textarea').val()

    allPlans[time] = message;
    localStorage.setItem("planInfo", JSON.stringify(allPlans));
  })
