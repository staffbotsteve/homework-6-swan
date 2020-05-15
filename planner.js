console.log('moment()', moment().format("MMMM Do YYYY"))
$("#dateHeading").text(moment().format("MMMM Do YYYY"))

$(document).ready(function() { 
    curHour = moment().hour()

    //here is where i want to get all values from localStorage
    //and set the text value for each input.text
    $("#input1").val(localStorage.getItem("input1"));
    $("#input2").val(localStorage.getItem("input2"));
    $("#input3").val(localStorage.getItem("input3"));
    $("#input4").val(localStorage.getItem("input4"));
    $("#input5").val(localStorage.getItem("input5"));
    $("#input6").val(localStorage.getItem("input6"));
    $("#input7").val(localStorage.getItem("input7"));
    $("#input8").val(localStorage.getItem("input8"));
    $("#input9").val(localStorage.getItem("input9"));
    $("#input10").val(localStorage.getItem("input10"));
    $("#input11").val(localStorage.getItem("input11"));
    $("#input12").val(localStorage.getItem("input12"));
    $("#input13").val(localStorage.getItem("input13"));
    $("#input14").val(localStorage.getItem("input14"));
    $("#input15").val(localStorage.getItem("input15"));
    $("#input16").val(localStorage.getItem("input16"));
    $("#input17").val(localStorage.getItem("input17"));
    $("#input18").val(localStorage.getItem("input18"));
    $("#input19").val(localStorage.getItem("input19"));
    $("#input20").val(localStorage.getItem("input20"));
    $("#input21").val(localStorage.getItem("input21"));
    $("#input22").val(localStorage.getItem("input22"));
    $("#input23").val(localStorage.getItem("input23"));
    $("#input24").val(localStorage.getItem("input24"));


    // inputs = document.querySelectorAll('.eventInput');
    // inputs.forEach(input => {
    //     // console.log('input', input)
    //     input.value=localStorage.getItem(input1)
    // });

    
    for (let index = 1; index < (curHour); index++) {
        row = document.getElementById(index).parentElement.parentElement
        // console.log(row)
        row.setAttribute('style', 'background-color: red; color: white')
        // children = row.childNodes
        // console.log('children', children)
        // var inputEl = document.querySelectorAll('')

        // var inputEl = $(this).parents('tr').find(".eventInput")
        // inputText = $(this).parents('tr').find(".eventInput").val()
        // inputLabel = $(this).parents('tr').find(".eventInput").attr("id")
            };

    row = document.getElementById(curHour).parentElement.parentElement
    row.setAttribute('style', 'background-color: green; color: white')

    for (let index = curHour+1; index < 25; index++) {
        row = document.getElementById(index).parentElement.parentElement
        row.setAttribute('style', 'background-color: blue; color: white')
    };
});

$(".btn").on("click", function(e){
    e.preventWindowDefaul
    col2 = this.parentElement
    row = col2.parentElement

    var getRowTest = document.getElementById("1")
    var getRowTestParent = getRowTest.parentElement.parentElement
    var getRowTestParentParent = getRowTestParent.parentElement
    whichRow = this.id
    console.log(whichRow)
    curHour = moment().hour();

    for (let index = 1; index < (curHour); index++) {
        row = document.getElementById(index).parentElement.parentElement
        // console.log(row)
        row.setAttribute('style', 'background-color: red; color: white')
    };

    //here is where i want to set the value of the input.text
    //of the parent row of the button

    row = document.getElementById(curHour).parentElement.parentElement
    row.setAttribute('style', 'background-color: green; color: white')
    var inputEl = $(this).parents('tr').find(".eventInput")
    inputText = $(this).parents('tr').find(".eventInput").val()
    inputLabel = $(this).parents('tr').find(".eventInput").attr("id")
    console.log('inputText', inputText)
    console.log('inputLabel', inputLabel)
    console.log('inputEl', inputEl)
    console.log('inputEl val', inputEl.value)

    localStorage.setItem(inputLabel, inputText);
    inputEl.textContent = inputText;
  


    // var inputValue = inputEl.val() ;
    // localStorage.setItem("input" + inputEl.GetAttribute("id"), inputValue)

    for (let index = curHour+1; index < 25; index++) {
        row = document.getElementById(index).parentElement.parentElement
        // console.log(row)

    };
});
