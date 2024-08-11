function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (!isNaN(weight) && !isNaN(height)) {
        var bmi = (weight / (height * height)).toFixed(1);
        document.getElementById('bmiValue').innerText = bmi;

        var description = "";
        if (bmi < 18.5) {
            description = "Anda kekurangan berat badan.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            description = "Berat badan Anda normal.";
        } else if (bmi >= 25 && bmi < 29.9) {
            description = "Anda memiliki berat badan berlebih.";
        } else {
            description = "Anda memiliki obesitas.";
        }

        document.getElementById('bmiDescription').innerText = description;
        document.getElementById('resultSection').style.display = "block";
    }
}