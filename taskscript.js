function getWeekDay(num)
{
    switch(num)
    {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 0:
            return "Sunday";
    }
}
var option_nme = document.getElementById("option-nme");
option_nme.addEventListener
(
    "click", 
    function () 
    {
        var inputdate = document.getElementById('inputDate').value;
        inputdate = new Date(inputdate);
        var nextMonth = inputdate.getMonth()+1;
        var nextYear = inputdate.getFullYear();
        if(nextMonth==12)
        {
            nextMonth = 0;
            nextYear+=1;
        }
        var lastDayOfNextMonth = new Date(nextYear, nextMonth + 1, 1);
        var formattedDate = lastDayOfNextMonth.toISOString().split('T')[0].split('-').reverse().join('-')+', '+getWeekDay(lastDayOfNextMonth.getDay())+" is the next monthend";
        document.getElementById("resultText").innerHTML = formattedDate;
    }
);
var option_nme_wd = document.getElementById("option-nme-wd");
option_nme_wd.addEventListener
(
    'click',
    function()
    {
        var inputdate = document.getElementById('inputDate').value;
        inputdate = new Date(inputdate);
        var nextMonth = inputdate.getMonth()+1;
        var nextYear = inputdate.getFullYear();
        if(nextMonth==12)
        {
            nextMonth = 0;
            nextYear+=1;
        }
        var lastDayOfNextMonth = new Date(nextYear, nextMonth + 1, 0);
        var dayOfWeek = lastDayOfNextMonth.getDay();
        var lastFridayDate = new Date(lastDayOfNextMonth);
        var daystoSubtract = (lastFridayDate.getDay()==5)?0:((dayOfWeek + 2) % 7)
        lastFridayDate.setDate(lastFridayDate.getDate() - daystoSubtract);
        var formattedDate = lastFridayDate.toISOString().split('T')[0].split('-').reverse().join('-')+', '+ getWeekDay(lastFridayDate.getDay())+" is the next month weekend";
        document.getElementById("resultText").innerHTML = formattedDate;
    }
)
var option_nwe = document.getElementById("option-nwe");
option_nwe.addEventListener
(
    "click", 
    function () 
    {
        var date = document.getElementById('inputDate').value;
        var inputdate = document.getElementById('inputDate').value;
        inputdate = new Date(inputdate);
        var dayOfWeek = inputdate.getDay();
        var daysToAdd = (dayOfWeek === 5) ? 7 : (5 - dayOfWeek + 7) % 7;
        inputdate.setDate(inputdate.getDate() + daysToAdd);
        var formattedDate =  inputdate.toISOString().split('T')[0].split('-').reverse().join('-') + ', ' + getWeekDay(inputdate.getDay())+" is the next weekend"
        document.getElementById("resultText").innerHTML =formattedDate;
        
    }
);
var option_nnm = document.getElementById("option-nNM");
option_nnm.addEventListener
(
    "click", 
    function()
    {
        $(document).ready
        (
            (async () => {
                var { value: numberofDays } = await Swal.fire({
                  title: "Number of days",
                  input: "range",
                  icon: "question",
                  inputPlaceholder: "Enter no.of days",
                  inputAttributes: {
                    maxlength: "10",
                    autocapitalize: "off",
                    autocorrect: "off",
                    min: "1",
                    max: "31",
                    step: "1"
                  }
                  
                });
                if (numberofDays) 
                {
                    var inputdate = document.getElementById('inputDate').value;
                    inputdate = new Date(inputdate);
                    var nextMonth = inputdate.getMonth()+1;
                    var nextYear = inputdate.getFullYear();
                    if(nextMonth==12)
                    {
                        nextMonth = 0;
                        nextYear+=1;
                    }
                    var nthDayOfNextMonth = new Date(nextYear, nextMonth , numberofDays,23);
                    
                    if(nthDayOfNextMonth.getMonth()>nextMonth)
                    {
                        nthDayOfNextMonth = new Date(nextYear,nthDayOfNextMonth.getMonth(),numberofDays,23 )
                        console.log(nthDayOfNextMonth);
                        Swal.fire(
                            {
                                title:"Extra days of the month are moved to next month",
                                icon: "info",
                            }
                        );
                    }
                    var formattedDate = nthDayOfNextMonth.toISOString().split('T')[0].split('-').reverse().join('-')+', '+getWeekDay(nthDayOfNextMonth.getDay());
                    document.getElementById("resultText").innerHTML = formattedDate;
                }
              })()
        )
    }
);

var option_nbd = document.getElementById("option-nBD");
option_nbd.addEventListener
(
    'click',
    function()
    {
        (async () => {
            var { value: numberofDays } = await Swal.fire({
              title: "Number of days",
              input: "range",
              icon: "question",
              inputPlaceholder: "Enter no.of days",
              inputAttributes: {
                maxlength: "10",
                autocapitalize: "off",
                autocorrect: "off",
                min: "1",
                max: "31",
                step: "1"
              }
              
            });
            if (numberofDays) 
            {
                var inputdate = document.getElementById('inputDate').value;
                inputdate = new Date(inputdate);
                numberofDays = parseInt(numberofDays);
                while (numberofDays>=0) {
                    inputdate.setDate(inputdate.getDate()+1);
                    var presentDate = inputdate.getDay();
                    if(presentDate>5){
                        console.log(inputdate);
                        continue;
                    }              
                    numberofDays-=1;      
                }
                var formattedDate = inputdate.toISOString().split('T')[0].split('-').reverse().join('-')+', '+getWeekDay(inputdate.getDay());
                document.getElementById("resultText").innerHTML = formattedDate;
            }
        })()
    }
)

var option_nd = document.getElementById("option-nD");
option_nd.addEventListener
(
    'click',
    function()
    {
        (async () => {
            var { value: numberofDays } = await Swal.fire({
              title: "Number of days",
              input: "range",
              icon: "question",
              inputPlaceholder: "Enter no.of days",
              inputAttributes: {
                maxlength: "10",
                autocapitalize: "off",
                autocorrect: "off",
                min: "1",
                max: "31",
                step: "1"
              }
              
            });
            if (numberofDays) 
            {
                var inputdate = document.getElementById('inputDate').value;
                inputdate = new Date(inputdate);
                console.log(inputdate);
                inputdate.setDate(inputdate.getDate()+parseInt(numberofDays));
                console.log(numberofDays);
                console.log(inputdate);
                var formattedDate = inputdate.toISOString().split('T')[0].split('-').reverse().join('-')+', '+getWeekDay(inputdate.getDay());
                document.getElementById("resultText").innerHTML = formattedDate;
            }
          })()
    }
)

var option_nw = document.getElementById("option-nW");
option_nw.addEventListener
(
    'click',
    function()
    {
        (async () => {
            var { value: numberofWeeks } = await Swal.fire({
              title: "Number of weeks",
              input: "range",
              icon: "question",
              inputPlaceholder: "Enter no.of days",
              inputAttributes: {
                maxlength: "10",
                autocapitalize: "off",
                autocorrect: "off",
                min: "1",
                
                step: "1"
              }
              
            });
            if (numberofWeeks) 
            {
                var inputdate = document.getElementById('inputDate').value;
                inputdate = new Date(inputdate);
                console.log(inputdate);
                inputdate.setDate(inputdate.getDate()+ parseInt(numberofWeeks) * 7);
                console.log(numberofWeeks);
                console.log(inputdate);
                var formattedDate = inputdate.toISOString().split('T')[0].split('-').reverse().join('-')+', '+getWeekDay(inputdate.getDay());
                document.getElementById("resultText").innerHTML = formattedDate;
            }
          })()
    }
)


var option_nm = document.getElementById("option-nM");
option_nm.addEventListener
(
    'click',
    function()
    {
        (async () => {
            var { value: numberofMonths } = await Swal.fire({
              title: "Number of Months",
              input: "range",
              icon: "question",
              inputPlaceholder: "Enter no.of days",
              inputAttributes: {
                maxlength: "10",
                autocapitalize: "off",
                autocorrect: "off",
                min: "1",
                
                step: "1"
              }
              
            });
            if (numberofMonths) 
            {
                var inputdate = document.getElementById('inputDate').value;
                inputdate = new Date(inputdate);
                var currentMonth = parseInt(inputdate.getMonth());
                console.log(inputdate);
                inputdate.setMonth(currentMonth+parseInt(numberofMonths));
                console.log(numberofMonths);
                console.log(inputdate);
                var modifiedMonth = parseInt(inputdate.getMonth());
                if(modifiedMonth-currentMonth>numberofMonths)
                {
                    inputdate = new Date(inputdate.getFullYear(),modifiedMonth,1);
                }
                var formattedDate = inputdate.toISOString().split('T')[0].split('-').reverse().join('-')+', '+getWeekDay(inputdate.getDay());
                document.getElementById("resultText").innerHTML = formattedDate;
            }
          })()
    }
)
// var documentation = document.getElementById("documentation");
// documentation.addEventListener
// (
//     'click',
//     function()
//     {
//         window.location.href = './documentation.html';
//     }
// )
