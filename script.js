function calculatePay() {
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    const hoursWorked = parseFloat(document.getElementById("hoursWorked").value);
    
    let regularHours = 0;
    let overtimeHours = 0;
    let doubleTimeHours = 0;
    
    if (hoursWorked <= 8) {
        regularHours = hoursWorked;
    } else if (hoursWorked <= 12) {
        regularHours = 8;
        overtimeHours = hoursWorked - 8;
    } else {
        regularHours = 8;
        overtimeHours = 4;
        doubleTimeHours = hoursWorked - 12;
    }
    
    const regularPay = regularHours * hourlyRate;
    const overtimePay = overtimeHours * hourlyRate * 1.5;
    const doubleTimePay = doubleTimeHours * hourlyRate * 2;
    const totalPay = regularPay + overtimePay + doubleTimePay;
    
    document.getElementById("regularPay").innerText = `Regular Pay (1x): $${regularPay.toFixed(2)}`;
    document.getElementById("overtimePay").innerText = `Overtime Pay (1.5x): $${overtimePay.toFixed(2)}`;
    document.getElementById("doubleTimePay").innerText = `Double Time Pay (2x): $${doubleTimePay.toFixed(2)}`;
    document.getElementById("totalPay").innerText = `Total Pay: $${totalPay.toFixed(2)}`;
}

function resetForm() {
    // Clear the result section
    document.getElementById("regularPay").innerText = '';
    document.getElementById("overtimePay").innerText = '';
    document.getElementById("doubleTimePay").innerText = '';
    document.getElementById("totalPay").innerText = '';
}