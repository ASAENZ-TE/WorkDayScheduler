//Pseudo Code

//GitHub repository with a unique name and a README describing project.
//The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
//Each timeblock contains an input field and save button.
//Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.
//The current day is displayed at the top of the calendar.
//Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

//GIVEN that an employee adds events to a specific hour in a calendar
//WHEN the employee clicks the save button
//THEN events are saved in the timeblock for that hour


$('#currentDay').text(moment().format('LLLL'))

var rn = moment()

$(document).ready(function () {

    hourArr = $('.hour').toArray()
    for (i = 0; i < hourArr.length; i++) {

        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')))
    }
});

for (i = 0; i < 10; i++) {
    var rowBlock = $('<div>').addClass('row')
    var timeBlock = $('<div>').addClass('hour').text(moment('8:00 AM', 'hh:mm A').add(i, 'hours').format('hA')).css('width', '10%')
    timeBlock.attr('data-time', moment('8:00 AM', 'hh:mm A').add(i, 'hours').format('hA'))
    var taskBlock = $('<textarea>').css('width', '80%')
    var saveBtn = $('<button>').addClass('saveBtn').html('<i class="fas fa-save"></i>')

    $('.container').append(rowBlock)
    $(rowBlock).append(timeBlock)
    $(timeBlock).after(taskBlock)
    $(taskBlock).after(saveBtn)

    if (rn.isSame(moment('8:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('present')
    } else if (rn.isBefore(moment('8:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('future')
    } else if (rn.isAfter(moment('8:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('past')
    }
}
// test! is this working?

$('.saveBtn').on('click', function () {

    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
})

// test! is this working?