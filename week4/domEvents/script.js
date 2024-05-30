function insertRow() {
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "New Row cell1";
    cell2.innerHTML = "New Row cell2";
  }

//DomEvents


  //formManipulationExercise
  document.getElementById("form1").addEventListener("submit", function(event){
    alert(event.target.fname.value)});