var options = document.getElementById('options');
var add_fields = document.getElementById('add_fields');
var remove_fields = document.getElementById('remove_fields');
var i = 2;
var k = 1;

function myFunction() {
    k++;
    var e = document.getElementById("selOpts");
    var userSelection = e.value;
    var row = document.getElementById("display");
    userSelection = row.insertCell(-1);
    userSelection.innerHTML = e.value;
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'options[]');
    newField.setAttribute('class', 'options');
    newField.setAttribute('placeholder', e.value);
    newField.setAttribute('id', 'f' + k);
    options.appendChild(newField);

    i++;

}

var input_tags = options.getElementsByTagName('input');
remove_fields.onclick = function () {

    if (input_tags.length > 2) {
        options.removeChild(input_tags[(input_tags.length) - 1]);
        var row = document.getElementById("display");
        row.deleteCell(-1);
        i--;
    }
}




var btn = document.getElementById("btn");
btn.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var fName = document.getElementById("fName").value;
    var lastName = document.getElementById("lastName").value;
    var val = document.getElementById("f" + k).value;
    if (!fName || !lastName) {
        alert("Συμπληρώστε όλα τα πεδία!");
        return;
    }
    var display = document.getElementById("displays");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    for (let j = 2; j < i; j++) {
        var cell = newRow.insertCell(j);

    }

    cell1.innerHTML = fName;
    cell2.innerHTML = lastName;
    cell.innerHTML = val;



    row++;
}
