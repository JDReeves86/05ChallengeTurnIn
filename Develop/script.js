const currentDateTime = $('#currentDay');
currentDateTime.text(moment());
const calendarBody = $('.container');

// const myModal = $('.modal');

// let calendarText = $('#task');


const numbers = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]


let taskArray = []
let taskObject = {}


let calendarBlock;
let tCell;


const timeRefresh = setInterval(function(){
    currentDateTime.text(moment());
}, 1000)


const renderTimeBlocks = function() {
    for (let i = 0; i < numbers.length; i++) {
        const rowDiv = $('<div>');
        rowDiv.addClass('row');
        calendarBody.append(rowDiv);

        const timeBlock = $('<div>');
        timeBlock.addClass('hour')
        timeBlock.text(numbers[i])
        rowDiv.append(timeBlock);

        const hourlyText = $('<textarea>');
        hourlyText.addClass('time-block');
        hourlyText.attr('data-hour', numbers[i])
        rowDiv.append(hourlyText);

        const saveBtn = $('<button>');
        saveBtn.addClass('saveBtn');
        saveBtn.attr('data-hour', numbers[i])
        saveBtn.text('Save!')
        rowDiv.append(saveBtn);
    };
};


const populateCalendar = function() {
    console.log(taskArray)
    for (let i = 0; i < taskArray.length; i++) {
        $('.time-block').each(function() {
            if ($(this).attr('data-hour') === taskArray[i].hour) {
                $(this).text(taskArray[i].task)
            }
        })
    }
}


const changeColors = function() {
    $('.time-block').each(function() {
        if ($(this).attr('data-hour') < moment().format('HH')){
            $(this).addClass('past')
        }
        else if ($(this).attr('data-hour') === moment().format('HH')) {
            $(this).addClass('present')
        }
        else if ($(this).attr('data-hour') > moment().format('HH')) {
            $(this).addClass('future')
        }
    })
}


const storeCalendarTasks = function() {
    localStorage.setItem('calendar', JSON.stringify(taskArray))
}


const init = function() {
    let storedCalendarTasks = JSON.parse(localStorage.getItem('calendar'))
    if (storedCalendarTasks !== null) {
        taskArray = storedCalendarTasks
    }
    renderTimeBlocks()
    populateCalendar()
    changeColors()
}

init()

let timeBody = $('.time-block')
let saveButton = $('.saveBtn');

// calendarBody.click(function(event){
//     let targetCell = $(event.target);
//     targetCell.on('click', myModal.modal('show'));
//     tCell = targetCell
// })


saveButton.on('click', function(event) {
    console.log('something')
    let clicked = $(event.target)
    $('.time-block').each(function(i) {
        if ($(this).attr('data-hour') == clicked.attr('data-hour')) {
            taskObject.task = $(this).val()
            taskObject.hour = $(this).attr('data-hour')
            taskArray.push(taskObject)
            taskObject = {}
            console.log(taskArray)
            storeCalendarTasks()
        }
    })
});
