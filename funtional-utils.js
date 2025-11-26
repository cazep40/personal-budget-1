//funtional-utils.js

function obtenerNombres(movimientos){
    return movimientos.map(mov=> mov.nombre);
}

function obtenerValores(movimientos){
    return movimientos.map(mov => mov.valor);
}

function calcularTotal(valores){
    return valores.reduce((total, valor) => total + valor, 0);
}


//Reto Contar por Tipo de Movimiento
function contarPorTipo(movimientos) {
    return movimientos.reduce((contador, mov) => {
        if (mov.tipo === "ingreso") {
            contador.ingresos++;
        } else if (mov.tipo === "gasto") {
            contador.gastos++;
        }
        return contador;
    }, { ingresos: 0, gastos: 0 });
}

//uso de filter y find

//filtros basicos
function obtenerIngresos(movimientos) {
    return movimientos.filter(mov => mov.tipo === `ingreso`);
}

function obtenerGastos(movimientos){
    return movimientos.filter(mov => mov.tipo === `gasto`);
}

function filtrarPorMonto(movimientos, minimo) {
    return movimientos.filter(mov => mov.valor >= minimo);
}

//busquedas simples

function buscarPorNombre(movimientos, nombre) {
    return movimientos.find(mov => mov.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

function obtenerPrimero(movimientos, tipo) {
    return movimientos.find(mov => mov.tipo === tipo);
}

//Reto: Obtener el total de movimientos por tipo
function obtenerTotalPorTipo(movimientos, tipo) {
    return movimientos
        .filter(mov => mov.tipo === tipo)
        .reduce((total, mov) => total + mov.valor, 0);
}

//Reportes Simples

//Reporte Financiero

function generarReporte(movimientos) {
  const ingresos = obtenerIngresos(movimientos);
  const gastos = obtenerGastos(movimientos);
  
  return {
    totalIngresos: calcularTotal(obtenerValores(ingresos)),
    totalGastos: calcularTotal(obtenerValores(gastos)),
    cantidad: movimientos.length
  };
}

function calcularBalance(movimientos) {
  const reporte = generarReporte(movimientos);
  return reporte.totalIngresos - reporte.totalGastos;
}

function obtenerPromedio(movimientos, tipo) {
  const filtrados = movimientos.filter(mov => mov.tipo === tipo);
  if (filtrados.length === 0) return 0;
  return calcularTotal(obtenerValores(filtrados)) / filtrados.length;
}

//Reto 3.3 Validar totales por gastos e indicar si el movimiento supera un limite indicado.
function validarPresupuesto(movimientos, limite) {
    // Sumar solo los valores cuyo tipo es "gasto"
    const totalGastos = movimientos
        .filter(mov => mov.tipo === "gasto")
        .reduce((total, mov) => total + mov.valor, 0);

    return totalGastos > limite;
}

//Reto 3.3 Basico: Agrupar movimientos en rangos bajo/medio/alto

function categorizarPorMonto(movimientos, nivelBajo, nivelMedio) {
    return movimientos.reduce((categorias, mov) => {
        if (mov.valor < nivelBajo) {
            categorias.bajo.push(mov);
        } else if (mov.valor < nivelMedio) {
            categorias.medio.push(mov);
        } else {
            categorias.alto.push(mov);
        }
        return categorias;
    }, { bajo: [], medio: [], alto: [] });
}


