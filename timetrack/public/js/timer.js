$(function() {

		var hours = minutes = seconds = 0;
		var timeUpdate;
		var started = Boolean(false);
		var hasTimeElapsed = Boolean(false);
		var itemId = "";
		var taskData = [];

		/*
		taskData {
			"id":"string",
			"title":"string",
			"time":"string"
		}
		*/
	

		function del_item(arr,id) {
	
			// remove the selected task from the array!
			for(var i=0;i<arr.length;i++) {
				// find the item by id.
				if(arr[i].id === id.substring(14)) {
					
					// delete from array
					arr.splice(i,1);
					
					//save array back to localStorage.
					localStorage.setItem("timerList",JSON.stringify(taskData));
					return;
				}
			}
		}

		$(document).ready(function() {
			itemId = makeid();
			
			// get data from localstorage
			taskData = jQuery.parseJSON(localStorage.getItem("timerList"));
			
			// what if there isn't any localStorage data to get?
			if(taskData === null) {
				// console.log('taskData is null');
				taskData = [];
			} else {
				if(taskData.length > 0)
					$('.collection').removeClass('hide');

				// add in all data into the UL element.
				for(var j = 0;j<taskData.length;j++) {
					$('.collection').append("<li id='del_saved_task"+taskData[j].id+"' class='collection-item'><div><strong>"+taskData[j].title+"</strong> ("+taskData[j].time+")<a href='#!' class='secondary-content'><i class='material-icons'>done</i></a></div></li>");
					// delete the item from the UL element.
					$("#del_saved_task"+taskData[j].id).click(function(event) {
						Materialize.toast('Deleting',2000,'rounded');
						var id = $(this).attr('id');
						$("#"+id).remove();
						del_item(taskData,id);
						event.preventDefault();
					});
				}
			}
		});

		$("#start_stop_btn").click(function() {
			if(started === false) {
				Materialize.toast('Timer Started',2000,'rounded');
				$(this).text("STOP!");
				$(this).attr('class','waves-effect waves-light red darken-3 btn');
				started = true;
				updateTime(0,0,0,0);
			} else if(started === true) {
				clearInterval(timeUpdate);
				Materialize.toast('Timer Stopped',2000,'rounded');
				$(this).text("START");
				$(this).attr('class','waves-effect waves-light green btn');
				started = false;
			}
		});

		$("#reset_btn").click(function() {
			Materialize.toast('Timer Resetting',2000,'rounded');
			if(started === true) {
				clearInterval(timeUpdate);
				updateTime(0,0,0,0);
			} else if(started === false) {
				clearInterval(timeUpdate);
				setStopwatch(0,0,0,0);
			}
		});

		$("#save_btn").click(function() {
			// get new ID.
			itemId = makeid();
			Materialize.toast('Saving',2000,'rounded');
			$('.collection').removeClass('hide');
			var taskTitle = $("#task_title").val();
			if(taskTitle === "")
				taskTitle = "Empty Title";
			var time = $('#hours').html()+":"+$('#minutes').html()+":"+$('#seconds').html();
			$('.collection').append("<li id='del_saved_task"+itemId+"' class='collection-item'><div><strong>"+taskTitle+"</strong> ("+time+")<a href='#!' class='secondary-content'><i class='material-icons'>done</i></a></div></li>");

			// DELETE TASK
			$("#del_saved_task"+itemId).click(function(event) {
				Materialize.toast('Deleting',2000,'rounded');
				var id = $(this).attr('id');
				$("#"+id).remove();
				del_item(taskData,"del_saved_task"+itemId);
				event.preventDefault();
			});

			// save some data to localStorage.
			var jstr = jQuery.parseJSON('{"id":"'+itemId+'","title":"'+taskTitle+'","time":"'+time+'"}')
			// TODO: ERROR CHECKING FOR NULL ARRAY
			taskData.push(jstr);
			localStorage.setItem("timerList",JSON.stringify(taskData));

		});

		$("#clear_title").click(function() {
			$("#task_title").val('');
			$("#task_title").blur();
		});		


	// Update time in stopwatch periodically - every 25ms
    function updateTime(prev_hours, prev_minutes, prev_seconds, prev_milliseconds){
        var startTime = new Date();    // fetch current time

        timeUpdate = setInterval(function () {
            var timeElapsed = new Date().getTime() - startTime.getTime();    // calculate the time elapsed in milliseconds

            // calculate hours                
            hours = parseInt(timeElapsed / 1000 / 60 / 60) + prev_hours;

            // calculate minutes
            minutes = parseInt(timeElapsed / 1000 / 60) + prev_minutes;
            if (minutes > 60) minutes %= 60;

            // calculate seconds
            seconds = parseInt(timeElapsed / 1000) + prev_seconds;
            if (seconds > 60) seconds %= 60;

            // calculate milliseconds 
            milliseconds = timeElapsed + prev_milliseconds;
            if (milliseconds > 1000) milliseconds %= 1000;

            // set the stopwatch
            setStopwatch(hours, minutes, seconds, milliseconds);
            if(hasTimeElapsed === false)
            	hasTimeElapsed = true;

        }, 25); // update time in stopwatch after every 25ms
    }

    // pad stopwatch digits with zeros.
    function setStopwatch(hours, minutes, seconds, milliseconds){
        $("#hours").html(prependZero(hours, 2));
        $("#minutes").html(prependZero(minutes, 2));
        $("#seconds").html(prependZero(seconds, 2));
    }
});