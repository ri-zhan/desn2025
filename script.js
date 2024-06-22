


const sheetId = "178HyfRAVkV7qU42iXvBgZs23w3pPGNN6842-YdP6RJU";
const sheetGid = "0";
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&tq&gid=${sheetGid}`;

fetch(url)
  .then(response => response.text())
  .then(data => {
    // Parse the JSON data
    const json = JSON.parse(data.substring(47, data.length - 2));

    // Access the data rows
    const rows = json.table.rows;

    const nameElement = document.createElement("p");
    nameElement.textContent = "Name: " + data.name;

    // Do something with the data
    rows.forEach((row, i) => {
      // console.log(row.c[0].v, row.c[1].v, row.c[2].v);
      // Output: name, link, discipline


      //for each row, create a new div called "person container"
      //then, const elements (name, link, area)
      //then, append those elemtns into person-container[1]
      //move on to the next row
      //loop until end

      const bigContainer = document.getElementById("bigContainer")
      // document.createElement("div").setAttribute("id", "container+[i]+");
      var container = document.createElement('div');
      container.id = "container" + [i];
      container.className = "container";
      // container.innerHTML = container[i];
      bigContainer.appendChild(container);
      
//         const dataDisplay = document.getElementById("dataDisplay");
      
      
      // var container = document.getElementById("container+[i]+");
      // container.appendChild(container[i]);

      const nameElement = document.createElement("p");
      nameElement.textContent = row.c[0].v;
      const linkElement = document.createElement("p");
      linkElement.innerHTML = `<a href="${row.c[1].v}" target=”_blank”>${row.c[1].v}</a>`;
      // linkElement.textContent = row.c[1].v
      // element. innerHTML = `<a href="${url}">${text}</a>`;
      const areaElement = document.createElement("p");
      areaElement.textContent = row.c[2].v;

      container.appendChild(nameElement);
      container.appendChild(linkElement);
      container.appendChild(areaElement);

    });
  })
  .catch(error => console.error(error));


// document.addEventListener("DOMContentLoaded", function () {
// fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         const dataDisplay = document.getElementById("dataDisplay");

//         // Create HTML elements to display the JSON data
//         const nameElement = document.createElement("p");
//         nameElement.textContent = "Name: " + data.name;

//         const ageElement = document.createElement("p");
//         ageElement.textContent = "Age: " + data.age;

//         const cityElement = document.createElement("p");
//         cityElement.textContent = "City: " + data.city;

//         // Append the elements to the "dataDisplay" div
//         dataDisplay.appendChild(nameElement);
//         dataDisplay.appendChild(ageElement);
//         dataDisplay.appendChild(cityElement);
//     })
//     .catch(error => console.error("Error fetching JSON data:", error));
// });
