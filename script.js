var options = document.getElementById('options');
var add_fields = document.getElementById('add_fields');
var remove_fields = document.getElementById('remove_fields');

add_fields.onclick = function() {
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','options[]');
  newField.setAttribute('class','options');
  newField.setAttribute('placeholder','Another Field');
  options.appendChild(newField);
}

remove_fields.onclick = function() {
  var input_tags = options.getElementsByTagName('input');
  if(input_tags.length > 2) {
    options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}




var btn = document.getElementById("btn");
btn.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var fName = document.getElementById("fName").value;
    var lastName = document.getElementById("lastName").value;
    //var anField = document.getElementById("anField").value;
    
    if (!fName || !lastName ) {
        alert("Συμπληρώστε όλα τα πεδία!");
        return;
    }
    
var display = document.getElementById("display");
var newRow = display.insertRow(row);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
//var cell3 = newRow.insertCell(2);


cell1.innerHTML = fName;
cell2.innerHTML = lastName;
//cell2.innerHTML = anField;

row++;
}



