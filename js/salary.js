const empleado = {
    bruto: 11500,
    hijos: 2,
    pagas: 14
}

function getRetention(empleado) {
    var retention = 0;

    if (empleado.hijos > 0) retention = 0.02;

    if (empleado.bruto <= 12000) {
        retention = 0; //No se restan los 2 puntos porque la retención ya es cero
    } else if (empleado.bruto <= 24000) {
        retention = 0.08 - retention;
    } else if (empleado.bruto <= 34000) {
        retention = 0.16 - retention;
    } else {
        retention = 0.3 - retention;
    }
    return retention * empleado.bruto;
}

function netAnnualSalary(empleado) {
    return empleado.bruto - getRetention(empleado);
}

function netMonthlySalary(empleado) {
    return netAnnualSalary(empleado) / empleado.pagas;
}

console.log("Neto anual en nómina: ", netAnnualSalary(empleado));
console.log("Neto mensual en nómina: ", netMonthlySalary(empleado));