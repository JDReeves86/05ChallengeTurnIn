// Declaring global variables for setting header and generating DOM elements.
const currentDateTime = $('#currentDay');
currentDateTime.text(moment());
const calendarBody = $('.container');

// Array used to generate time blocks upon generating the page.
const numbers = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];

let taskArray = [];
let taskObject = {};

// Refreshes the clock in header every 10 milliseconds, setting to 1000 results in default moment() display showing on page for first second after loading. 
// Smaller intervals means the desired display appears right away. Could be set to 1 millisecond, but seems unnecessary as 10 milliseconds is fast enough that people will only notice a brief flash.
const timeRefresh = setInterval(function(){
    currentDateTime.text(moment().format('dddd MMMM Do YYYY HH:mm:ss'));
}, 10);

// Renders the calendar time blocks. Uses the numbers array to determine how many time blocks are generated. Called upon load by the init() function.
// Allows for easily adjusting users desired parameters of the calendar by mererly adjusting the values in the numbers array.
const renderTimeBlocks = function() {
    for (let i = 0; i < numbers.length; i++) {
        
        // builds the row dive to house the other 3 elements.
        const rowDiv = $('<div>');
        rowDiv.addClass('row col-12');
        calendarBody.append(rowDiv);

        // creates number block on left side of page. 
        const timeBlock = $('<div>');
        timeBlock.addClass('hour col-12 col-md-1 p-2 mt-1 mb-1 h2 font-weight-bold');
        timeBlock.text(numbers[i] + ':00') // built based on 24 hour clock. Can be converted to 12 hour clock if desired, but will need to change this line, eliminate leading 0's and adjusting the moment() format in the changeColors() function.
        rowDiv.append(timeBlock);

        // Generates text areas for users to type into.
        const hourlyText = $('<textarea>');
        hourlyText.addClass('time-block col-12 col-md-10 p-2 mt-1 mb-1 h5 font-weight-normal');
        hourlyText.attr('data-hour', numbers[i]);
        rowDiv.append(hourlyText);

        // Generates save button.
        const saveBtn = $('<button>');
        saveBtn.addClass('saveBtn col-12 col-md-1 p-2 mt-1 mb-1 h4');
        saveBtn.attr('data-hour', numbers[i]);
        saveBtn.text('💾');
        rowDiv.append(saveBtn);
    };
};

// Pulls taskArray and iterates through stored objects and then iterates through DOM for each element in array. 
//Looks for matches of the datasets of the timeblocks and compares to the value stored in the hour key.
const populateCalendar = function() {
    console.log(taskArray);
    for (let i = 0; i < taskArray.length; i++) {
        $('.time-block').each(function() {
            if ($(this).attr('data-hour') === taskArray[i].hour) {
                $(this).text(taskArray[i].task);
            };
        });
    };
};

// Compares the dataset values to the current hour pulled by moment(). Set on a 10 ms timer interval to refresh in real time.
const changeColors = setInterval(
    function() {
    $('.time-block').each(function() {
        if ($(this).attr('data-hour') < moment().format('HH')){
            $(this).addClass('past')
        }
        else if ($(this).attr('data-hour') === moment().format('HH')) {
            $(this).addClass('present')
        }
        else if ($(this).attr('data-hour') > moment().format('HH')) {
            $(this).addClass('future')
        };
    });
}, 10);

// Sets current taskArray to local storage.
const storeCalendarTasks = function() {
    localStorage.setItem('calendar', JSON.stringify(taskArray))
}

// Gets local storage and sets into the taskArray upon being called. Also calls the renderTimeBlocks() & populateCalendar() functions to tighten up script page.
const init = function() {
    let storedCalendarTasks = JSON.parse(localStorage.getItem('calendar'))
    if (storedCalendarTasks !== null) {
        taskArray = storedCalendarTasks
    }
    renderTimeBlocks()
    populateCalendar()
}

//Calls init()
init()

// Sets functionality of the save button. Upon click, iterates through the timeblock elements and compares their dataset value (data-hour) to the dataset value of the button clicked. 
// If a match is found, the text typed into the timeblock is placed into taskObject along with the dataset value. taskObject is then pushed into taskArray and then taskObject is cleared.
// Be sure to clear taskObject after pushing to taskArray. Failure to do so results in taskObject's key/value pairs being overwritten with new values each time a save button is clicked.
// Finally, storeCalendarTasks() is called to set local storage immediately.
$('.saveBtn').on('click', function(event) {
    let clicked = $(event.target);
    $('.time-block').each(function() {
        if ($(this).attr('data-hour') == clicked.attr('data-hour')) {
            taskObject.task = $(this).val();
            taskObject.hour = $(this).attr('data-hour');
            taskArray.push(taskObject);
            taskObject = {};
            console.log(taskArray);
            storeCalendarTasks();
        };
    });
});
