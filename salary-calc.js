const salary = Number(prompt("Enter your gross salary: "))
const benefits = Number(prompt("Enter the total amount of benefits you get: "))
const grossSalary = salary + benefits
//calculate the Net Salary
function calcNetSalary(grossSalary) {
    const NHIF = (1.7 * grossSalary) /100  //calc NHIF
    const NSSF = (1.5 * grossSalary) /100  //calc NSSF
    const payee = (16 * grossSalary) / 100  //calc payee
    const totalDeductions = NHIF + NSSF + payee  //deduct NHIF, NSSF and PAYEE
    const netPay = grossSalary - totalDeductions
    return netPay
}

calcNetSalary(grossSalary)