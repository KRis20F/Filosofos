window.onload = () => {
    // Crear tarjetas
    crearTarjetas(filosofos)

    // Crear handlers para los botones de control
    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click',crearNuevaTarjeta);

    let buttonSortAZ = document.querySelector('.button-AZ');
    buttonSortAZ.addEventListener('click', ordenarNombreAZ);

    let buttonSortZA = document.querySelector('.button-ZA');
    buttonSortZA.addEventListener('click', ordenarNombreZA);

    let saveCards = document.querySelector('.save-btn');
    saveCards.addEventListener('click', guardarTarjetas);

    let loadCards = document.querySelector('.load-btn');
    loadCards.addEventListener('click', cargarTarjetas);
}

function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);

        let botonEliminar = document.createElement('div');
        botonEliminar.innerHTML = '&#x2716'; // Aspa
        botonEliminar.classList.add('botonEliminar');
        botonEliminar.addEventListener('click', eliminarTarjeta); // Asociamos el evento
        tarjeta.append(botonEliminar);

        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);
        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');
        info.append(filaInfo);

        // Añadimos info del país a filaInfo
        let filaPais = document.createElement('div');
        filaPais.classList.add('info-pais');
        filaInfo.append(filaPais);

        // Añadimos etiqueta del país (IMG)
        let imgPais = document.createElement('img');
        imgPais.src = filosofo.pais.bandera;
        imgPais.alt = `${filosofo.pais.nombre}`;
        filaPais.append(imgPais);
        
        // Añadimos etiqueta del país (SPAN)
        let etiquetaPais = document.createElement('span');
        etiquetaPais.classList.add('pais');
        etiquetaPais.innerHTML = filosofo.pais.nombre;
        filaPais.append(etiquetaPais);
        
        // Añadimos info de la corriente a filaInfo
        let filaCorriente = document.createElement('div');
        filaCorriente.classList.add('info-corriente');
        filaInfo.append(filaCorriente);

        let spanCorriente = document.createElement('span');
        spanCorriente.innerHTML = 'Corriente: ';
        filaCorriente.append(spanCorriente);
        let contentCorriente = document.createElement('span');
        contentCorriente.classList.add('corriente');
        contentCorriente.innerHTML = filosofo.corriente;
        filaCorriente.append(contentCorriente);

        // Añadimos info del arma a filaInfo
        let filaArma = document.createElement('div');
        filaArma.classList.add('info-arma');
        filaInfo.append(filaArma);

        let spanArma = document.createElement('span');
        spanArma.innerHTML = 'Arma: ';
        filaArma.append(spanArma);
        let contentArma = document.createElement('span');
        contentArma.classList.add('arma');
        contentArma.innerHTML = filosofo.arma;
        filaArma.append(contentArma);
        
        
        // Añadimos caja de habilidades
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        info.append(habilidades);

        // Añadimos una a una las habilidades
        for (let infoHabilidad of filosofo.habilidades) {

            // Añadimos una caja de habilidad
            let habilidad = document.createElement('div');
            habilidad.classList.add('skill');
            habilidades.append(habilidad);

            // Añadimos contenido caja de habilidad

            // 1.Icono de habilidad
            let imgHabilidad = document.createElement('img');
            imgHabilidad.src = 'https://via.placeholder.com/16';
            imgHabilidad.alt = `${infoHabilidad.imagen}`;
            habilidad.append(imgHabilidad);

            // 2.Etiqueta de habilidad
            let skillName = document.createElement('span');
            skillName.classList.add('skill-name');
            skillName.innerHTML = infoHabilidad.habilidad;
            habilidad.append(skillName);

            // 2.Barra de habilidad
            let barHabilidad = document.createElement('div');
            barHabilidad.classList.add('skill-bar');
            habilidad.append(barHabilidad);
             // Ajustar según la información obtenida

            let boxBar = document.createElement('div');
            boxBar.classList.add('level')
            boxBar.style.width = `${(infoHabilidad.nivel / 4) * 100}%`;
            barHabilidad.append(boxBar);
            
        }

        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    })
}

function eliminarTarjeta(event) {
    // Eliminar totes les targetes de l'array 'tarjeta'
    event.target.parentElement.remove();

}

function ordenarNombreAZ() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    // Completar codi
    contenedor.innerHTML = '';
    tarjetasOrdenadas.forEach((tarjetas) => { contenedor.append(tarjetas); } );

}

function ordenarNombreZA() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre2.localeCompare(nombre1);
    });

    // / Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    // Completar codi
    contenedor.innerHTML = '';
    tarjetasOrdenadas.forEach((tarjetas) => { contenedor.append(tarjetas); } );
}

const HabilidadesNombre = ["Sabiduria","Oratoria","Lógica","Innovación"]

function crearNuevaTarjeta(event) {
    event.preventDefault();

    let nuevoFilosofo = {
        nombre: document.querySelector('.create-card-form .nombre').value,
    
        imagen: document.querySelector('.create-card-form .foto').value,
        pais: {
                nombre: document.querySelector('.create-card-form .pais').value,
                bandera: document.querySelector('.create-card-form .bandera').value,
        },
        corriente: document.querySelector('.create-card-form .corriente').value,
        arma: document.querySelector('.create-card-form .arma').value,
    
        habilidades:  []
    };

    let HablidadesNuevas = document.querySelectorAll('.create-card-form .skills');

    HablidadesNuevas.forEach((input, index) => {
        nuevoFilosofo.habilidades.push({
            habilidad: HabilidadesNombre[index],
            nivel: input.value,
        });
    });

    crearTarjetas([nuevoFilosofo]);
}

function parsearTarjetas(tarjetas){
    let filosofosParseados = [];
    for (let tarjeta of tarjetas){
        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;
        filosofo.imagen = tarjeta.querySelector('.photo').src;
        filosofo.pais = {};
        // Completar funció
        filosofo.pais.nombre = tarjeta.querySelector('.pais').innerHTML;
        filosofo.pais.bandera = tarjeta.querySelector('.info-pais > img').src;
        filosofo.corriente = tarjeta.querySelector('.corriente').innerHTML;
        filosofo.arma = tarjeta.querySelector('.arma').innerHTML;
        filosofo.habilidades = [];
        let habilidades = tarjeta.querySelectorAll('.skill');
        for (let habilidad of habilidades){
            let habilidadParaGuardar = {};

            // Completar funció
            habilidadParaGuardar.habilidad = habilidad.querySelector('.skill-name').innerHTML;

            let levelParser = habilidad.querySelector('.level').style.width;
            let widthParser = parseInt(levelParser)

            habilidadParaGuardar.nivel = (widthParser * 4) / 100;

            console.log(levelParser);
            console.log(habilidadParaGuardar);
            
            filosofo.habilidades.push(habilidadParaGuardar); 
        }

        filosofosParseados.push(filosofo);
        console.log(filosofo.habilidades);
    }
    return filosofosParseados;
}

function guardarTarjetas(){
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas',JSON.stringify(parsearTarjetas(tarjetas)));
    console.log('Tarjetas guardadas');
}


function cargarTarjetas() {
    let tarjetasGuardadas = localStorage.getItem('tarjetas');
    if(tarjetasGuardadas){
        let tarjetasParseadas = JSON.parse(tarjetasGuardadas);
        crearTarjetas(tarjetasParseadas);
        console.log('cargadas correctamente');
    } else {
        console.log('No hay tajetita localStorage.');
    }
}

const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]