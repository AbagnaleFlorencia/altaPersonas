const PORT = 3000

const btnCargarPersonas = document.getElementById('btnCargarPersonas')
if (btnCargarPersonas) {
    btnCargarPersonas.addEventListener('click', () => cargarPersonas())
}

//Este metodo es el que va a consumit la api
const obtenerPersonas = async () => {
    const url = `http://localhost:${PORT}/api/personas`
    const resPersona = await fetch(url)
    const personas = await resPersona.json()
    return personas
}

const cargarPersonas = async () => {
    const personas = await obtenerPersonas()
    const listaPersonas = document.getElementById('listaPersonas')
    if (listaPersonas){
        let cuerpo = ''
        personas.forEach(p => {
            cuerpo += `<tr>
                        <td>${p.nom}</td>
                        <td>${p.apell}</td>
                        <td>${p.edad}</td>
                    </tr>`  
        });
        //listaPersonas.innerHTML = 'lista...'  ESTO SIRVE PARA TESTEAR SI HASTA ACÁ FUNCIONA
        const tabla = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                     ${cuerpo}
                </tbody>
            </table>
    `
    listaPersonas.innerHTML = tabla
    }
}
