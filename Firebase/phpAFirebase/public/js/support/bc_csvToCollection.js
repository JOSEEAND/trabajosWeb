var db = firebase.firestore();
const txtCSV = document.querySelector("#txtCSV");
const btnLoad = document.querySelector("#btnLoad");
const csvTable = document.querySelector("#csvTable");

btnLoad.addEventListener("click", function () {
  lecturaCSV(txtCSV.files[0]).then(() => {
    txtCSV.value = "";
  });
});

async function lecturaCSV(archivo) {
  const nomarch = archivo.name.split(".")[0];
  const lector = new FileReader();
  lector.readAsText(archivo);

  return new Promise((resolve) => {
    lector.onload = (event) => {
      const data = event.target.result.split("\n");
      const etiquetas = data[0].split("");

      // Limpiar la tabla antes de agregar nuevos datos
      csvTable.innerHTML = "";

      // Crear encabezados de tabla
      const headerRow = document.createElement("tr");
      etiquetas.forEach((etiqueta) => {
        const th = document.createElement("th");
        th.textContent = etiqueta;
        headerRow.appendChild(th);
      });
      csvTable.appendChild(headerRow);

      // Agregar datos a la tabla
      for (let index = 1; index < data.length; index++) {
        const valores = data[index].split(";");
        const row = document.createElement("tr");

        valores.forEach((valor) => {
          const td = document.createElement("td");
          td.textContent = valor;
          row.appendChild(td);
        });

        csvTable.appendChild(row);
      }

      // Resolver la promesa después de construir la tabla
      resolve();
    };
  });
}
