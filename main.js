const mostrarResultados = (e) => {
  e.preventDefault();
  // alert("Vamos bien"); esto sirve para verificar si esta funcionando
  const data = new FormData(e.target);
  // const nombre = data.get('nombre')
  // console.log(nombre);
  const MisDatos = Object.fromEntries(data.entries());
  MisDatos.complejo = data.getAll('complejo');
  // delete MisDatos.complejo; 

  console.log({ MisDatos });
}

function main () {
  const formulario = document.getElementById('miFormulario')
  formulario.addEventListener('submit', mostrarResultados)
}

main()

// INTENTOS FALLIDOS 
// function main () {
//   const formulario = document.querySelector('form')
  
//   formulario.addEventListener('submit', function (event) {
//     event.preventDefault()
//     const formData = new FormData(formulario);
//     formData.get('nombre');
//     formData.get('temas');
//     formData.get('preferis');
//     console.log(formData)
//   })
// }

// main ();