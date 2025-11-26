const movimientos = [
    {nombre: "Salario", tipo:"ingreso", valor:3000},
    {nombre: "Comida", tipo:"gasto", valor:200},
    {nombre: "Freelance", tipo:"ingreso", valor:500},
    {nombre: "Transporte", tipo:"gasto", valor:150}   
]


console.log("Nombres:", obtenerNombres(movimientos));
console.log("Valores", obtenerValores(movimientos));
console.log("Total", calcularTotal(obtenerValores(movimientos)));

console.log("Reto Autónomo 1.3");
console.log("Contar por tipo de movimiento", contarPorTipo(movimientos));

console.log("Ingresos", obtenerIngresos(movimientos));
console.log("Gastos", obtenerGastos(movimientos));
console.log("Movimientos minimo", filtrarPorMonto(movimientos, 1000));

console.log("Reto autónomo 2.3")
console.log("Total ingresos", obtenerTotalPorTipo(movimientos, "ingreso"));
console.log("Total gastos", obtenerTotalPorTipo(movimientos, "gasto"));

console.log("Reporte Financiero", generarReporte(movimientos));

console.log("Balance", calcularBalance(movimientos));

console.log("Promedio por tipo", obtenerPromedio(movimientos, "ingreso"))
console.log("Promedio por tipo", obtenerPromedio(movimientos, "gasto"))


console.log("Los gastos superan el limite?:" , validarPresupuesto(movimientos, 340));

console.log("Agrupar movimientos por rangos", categorizarPorMonto(movimientos, 1000, 2000));

