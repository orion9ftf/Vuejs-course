console.log('Hola!!')

// Promesas:
const miPromesa = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('esta es una pomesa')
      reject('REJECT en miPromesa ahhhhh')
    }, 1000);
  })
}

// Otra manera de escribir la promesa con async y await:
const medirTiempoAsync = async() => {
  try {
    console.log('Inicio del programa')
    //await miPromesa()
    const respuesta = await miPromesa()
    console.log(respuesta)
    console.log('Fin del programa')  
  } catch (error) {
    return 'Error en el catch de medirTiempoAsync'
  }
  // return 'Fiin de medir el tiempo con async'
  //throw 'Error al intentar medir el tiempo: medirTiempoAsync'
}

//medirTiempoAsync()
medirTiempoAsync()
  .then(valor => console.log(valor))
  .catch(err => console.log('error: ', err))

