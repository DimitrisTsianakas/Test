var options = document.getElementById('options');
var add_fields = document.getElementById('add_fields');
var remove_fields = document.getElementById('remove_fields');
var i = 2;
 function myFunction() {

  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','options[]');
  newField.setAttribute('class','options');
  newField.setAttribute('placeholder','Another Field');
  newField.setAttribute('id',i);
  options.appendChild(newField);
        

  var row = document.getElementById("display");
  var x = row.insertCell(-1);
  
  x.innerHTML = "New cell";
  i++;
}



remove_fields.onclick = function() {
  var input_tags = options.getElementsByTagName('input');
  if(input_tags.length > 2) {
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

    
   
   
  
    
    if (!fName || !lastName ) {
        alert("Συμπληρώστε όλα τα πεδία!");
        return;
    }
    
var display = document.getElementById("displays");
var newRow = display.insertRow(row);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
for (let j = 2; j<i; j++) {
    var cell = newRow.insertCell(j);
    
    }
cell1.innerHTML = fName;
cell2.innerHTML = lastName;



row++;
}




