console.log('moment()', moment().format("MMMM Do YYYY"))
$("#dateHeading").text(moment().format("MMMM Do YYYY"))

$('.eventEntry').click(function(){
    var entry = $(this).text();
    console.log('entry',entry)
    // $(this).html('');
    // $('<input></input>')
    //     .attr({
    //         'type': 'text',
    //         'name': 'fname',
    //         'id': 'txt_fullname',
    //         'size': '30',
    //         'value': name
    //     })
    //     .appendTo('#fullname');
    // $('#txt_fullname').focus();
});


$(".btn").on("click", function(e){
    e.preventWindowDefaul
    col2 = this.parentElement
    row = col2.parentElement

    getRowTest = document.getElementById("9")
    getRowTestParent = getRowTest.parentElement.parentElement
    getRowTestParentParent = getRowTestParent.parentElement

    console.log('getRowTest', getRowTest)
    console.log('getRowTestParent', getRowTestParent)
    console.log('getRowTestParentParent', getRowTestParentParent)

    
    curHour = moment().hour()
    whichRow = this.id
    console.log(whichRow)

    console.log('btn', this.parentElement)
    console.log('row', row)
    console.log('col2', col2)
    curHour = moment().hour();
    console.log('curHour', curHour)

    for (let index = 1; index < (curHour); index++) {
        row = document.getElementById(index).parentElement.parentElement
        console.log(row)
        row.setAttribute('style', 'background-color: red; color: white')
    };

    row = document.getElementById(curHour).parentElement.parentElement
    row.setAttribute('style', 'background-color: green; color: white')

    for (let index = curHour+1; index < 25; index++) {
        row = document.getElementById(index).parentElement.parentElement
        console.log(row)
        row.setAttribute('style', 'background-color: blue; color: white')
    };
});
