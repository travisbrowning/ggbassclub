// let results = [
//   { name: "Couple1", tournament1: 100, tournament2: 90, tournament3: 85 },
//   { name: "Couple2", tournament1: 75, tournament2: 90, tournament3: 80 },
//   { name: "Couple3", tournament1: 95, tournament2: 95, tournament3: 90 },
// ];

// function generateTableHead(table) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// let table = document.querySelector("table");
// let data = Object.keys(results[0]);

// generateTable(table, results);
// generateTableHead(table, data);

function sum(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) sum += arr[i];
  return sum;
}

function populate(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    document.querySelector(`#${x}${i}`).textContent = arr[i];
  }
  document.querySelector(`#${x}total`).textContent = sum(arr);
}

function sortTableByTotal() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("results");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = parseInt(rows[i].cells[12].innerHTML); // Change cell to totals column (index start at 0!)
      y = parseInt(rows[i + 1].cells[12].innerHTML); // see above

      if (x < y) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

let couple1 = ["Kurt and Courtney", 50, 60, 70, 0, 80, 75, 90, 100, 40, 65, 80];
let couple2 = ["Sid and Nancy", 40, 65, 30, 40, 50, 65, 90, 80, 0, 75, 85];
let couple3 = ["John and Yoko", 60, 80, 75, 20, 85, 35, 80, 0, 45, 65, 80];
let couple4 = ["Bob and Joan", 70, 45, 30, 100, 60, 35, 95, 90, 20, 0, 40];
let couple5 = ["Johnny and June", 85, 85, 85, 40, 0, 0, 80, 60, 65, 70, 80];

populate(couple1, "a");
populate(couple2, "b");
populate(couple3, "c");
populate(couple4, "d");
populate(couple5, "e");
sortTableByTotal();
