const welcomeContainer = document.getElementById("welcome-user");
const btnInicio = document.getElementById("btn-inicio");
const btnPlan12 = document.getElementById("curso-plan12");
const inicioSection = document.getElementById("inicio-container");
const plan12Section = document.getElementById("plan12");
const btnNutricion = document.getElementById("btn-nutricion");
const btnOpciones = document.getElementById("btn-opciones");
const nutricionSection = document.getElementById("nutricion-container");
const userInfoForm = document.getElementById("user-info-form");
const btnCerrarAside = document.getElementById("btn-cerrar-aside");
const panelContainer = document.getElementById("panel-container");
const clasesContainer = document.getElementById("clases-container");
const opcionesSection = document.getElementById("opciones-container");
const data = {
  email: localStorage.getItem("user"),
};

fetch("http://localhost:3000/api/homedata", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => {
    welcomeContainer.innerHTML = `${result.nombre}`;
    if (result.altura === null) {
      userInfoForm.style.display = "flex";
    }
  });

btnCerrarAside.addEventListener("click", () => {
  panelContainer.style.display = "none";
});

btnInicio.addEventListener("click", () => {
  inicioSection.style.display = "block";
  clasesContainer.style.display = "none";
  nutricionSection.style.display = "none";
  opcionesSection.style.display = "none";
});

btnNutricion.addEventListener("click", () => {
  nutricionSection.style.display = "block";
  inicioSection.style.display = "none";
  clasesContainer.style.display = "none";
  opcionesSection.style.display = "none";
});

btnOpciones.addEventListener("click", ()=>{
  opcionesSection.style.display= "block"
  cargarDatosOpciones();
  inicioSection.style.display = "none"
  clasesContainer.style.display = "none"
  nutricionSection.style.display = "none"
})

function insertarCursos() {
  fetch("http://localhost:3000/api/cursos", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      const cursosContainer = document.getElementById(
        "cursos-disponibles-container"
      );
      result.forEach((curso) => {
        const id_nivel = curso.id_nivel;
        const id_objetivo = curso.id_objetivo;
        let nivel, objetivo;
        switch (id_nivel) {
          case 1:
            nivel = "Principiante";
            break;
          case 2:
            nivel = "Intermedio";
            break;
          case 3:
            nivel = "Avanzado";
            break;
        }
        switch (id_objetivo) {
          case 1:
            objetivo = "Adelgazar";
            break;
          case 2:
            objetivo = "Ganar Músculo";
            break;
          case 3:
            objetivo = "Estar Saludable";
            break;
          case 4:
            objetivo = "Tonificar";
            break;
        }
        const nuevoCurso = document.createElement("div");
        nuevoCurso.classList = "curso";
        nuevoCurso.innerHTML = `
          <img src="${curso.url_img}" />
          <div class="curso-info">
            <p>${curso.nombre_curso}</p>
              <p>${curso.descripcion_curso}</p>
          </div>
          <div class = "curso-clasificacion">
            <p class = "${nivel}">${nivel}</p>
            <p class = "objetivo">${objetivo}</p>
          </div>
        `;
        nuevoCurso.addEventListener("click", () => mostrarClases(curso));
        cursosContainer.appendChild(nuevoCurso);
      });
    });
}

function mostrarClases(curso) {
  clasesContainer.style.display = "block";
  inicioSection.style.display = "none";

  clasesContainer.innerHTML = `
    <div class="inicio-container-page">
      <img src= "${curso.url_img}"/>
      <p>${curso.nombre_curso}</p>
      <div id="clases-video-container"></div>
    </div>
  `;

  fetch(`http://localhost:3000/api/clases?cursoId=${curso.id_curso}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      const clasesVideoContainer = document.getElementById(
        "clases-video-container"
      );
      result.forEach((clase) => {
        const nuevaClase = document.createElement("div");
        nuevaClase.classList = "clase"
        nuevaClase.innerHTML = `
          <video src="${clase.url_video}"></video>
          <div>
            <p>${clase.nombre_clase}</p>
            <p>${clase.descripcion_clase}</p>
          </div>
        `;
        clasesVideoContainer.appendChild(nuevaClase);
      });
    });
}

let dataUser;
function cargarDatosOpciones(){
  const nombreInput = document.getElementById("nombre-input-opciones")
  const apellidoInput = document.getElementById("apellido-input-opciones")
  const emailInput = document.getElementById("email-input-opciones")
  const passwordInput = document.getElementById("password-input-opciones")
  const pesoInput = document.getElementById("peso-input-opciones")
  const fechaNacInput = document.getElementById("fecha-nacimiento-input-opciones")
  const alturaInput = document.getElementById("altura-input-opciones")
  const nivelInput = document.getElementById("nivel-input-opciones")
  const objetivoInput = document.querySelectorAll("input[name = objetivoOpciones]")
  const user = JSON.parse(localStorage.getItem("me"))
  nombreInput.value = user.nombre
  apellidoInput.value = user.apellido
  emailInput.value = user.email
  passwordInput.value = user.password
  pesoInput.value = user.peso
  fechaNacInput.value = user.fecha_nacimiento.split("T")[0];
  alturaInput.value = user.altura
  nivelInput.value = user.id_nivel
  objetivoInput.forEach((objetivo)=>{
    if(user.id_objetivo == objetivo.value){
      objetivo.checked  = true
    }
  })
}



insertarCursos();
