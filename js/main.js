//using getElementById here to run a function that with the event e as parameter

// document.getElementById('add').addEventListener('click', (e) => {
//     doCalc(e.target.id);
// })

// document.getElementById('multi').addEventListener('click', function(e){
//     doCalc(e.target.id);
// })

// document.getElementById('devide').addEventListener('click', function(e){
//     doCalc(e.target.id);
// })



// function doCalc(calcType) {
//     let num1 = (document.querySelector('#num1').value == "") ? 1 : +document.querySelector('#num1').value;
//     let num2 = (document.querySelector('#num2').value == "") ? 1 : +document.querySelector('#num2').value;
//     (calcType == 'add') ? doAdd(num1, num2) : (calcType == 'multi') ? doMulti(num1, num2) : doDevide(num1, num2);
    
// }

// function doAdd(num1, num2) {
//     console.log(num1 + num2)
// }

// function doMulti(num1, num2) {
//     console.log(num1 * num2)
// }

// function doDevide(num1, num2) {
//     console.log(num1 / num2)
// }

// document.getElementById('addBtn').addEventListener('click', function(e){
//     const button = document.createElement('button');
//     const buttonText = document.createTextNode(`Number ${Math.floor(Math.random() * 100)}`);
//     button.appendChild(buttonText);
//     const d = document.getElementById('collection');
//     d.appendChild(button);
//     // console.log(e);
// })

let slide = document.getElementById('slider').value;
let sliderVal = document.getElementById('sliderVal');
let d = document.getElementById('collection');


//draw table for the fist time
drawTable(slide);


// function draw table

function drawTable(size) {
    const table = document.createElement('table');
    // table.setAttribute('id', 'myTtable'); alternate way to set id
    table.id ="myTable";
    d.appendChild(table);

    //start of the COLUMN/outer loop
    for (let i = 0; i <= size; i++) {
        const tr = document.createElement('tr');

        //start of the ROW/inner loop
        for (j = 0; j <= size; j++) {
            let td ;
            let tdText;
            // -- here is where we figure shit out
            // set up the appropriate table cell (td or th)
            //top left corner
            if (i == 0 && j == 0) {
                td = document.createElement('th');
                tdText = document.createTextNode(`X`);
            }

            // when i is 0 - only happens once - top of the column
            // we have taken care of when J is zero (above)
            // should be j from 1 - n
            else if(i == 0 && j != 0) {
                td = document.createElement('th');
                tdText = document.createTextNode(`${j}`);
            }

            //
            else if(j == 0 && i != 0) {
                td = document.createElement('th');
                tdText = document.createTextNode(`${i}`);
            }
            else {
                td = document.createElement('td');
                td.id = "cell";
                tdText = document.createTextNode(`${i*j}`);
            }
            
            // append the text to the TD then append the TD to the TR
            td.appendChild(tdText);
            tr.appendChild(td);

        } // end of inner loop
        
        table.appendChild(tr);
        
    } // end of outer loop
}

document.getElementById('slider').addEventListener('input', function(e){
    // d.removeChild(table);
    document.getElementById('myTable').remove();
    drawTable(e.target.value);
    // console.log(e.target.value);
})