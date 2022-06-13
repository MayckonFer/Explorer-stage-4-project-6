/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
        name: "Leko",
        age: 42,
        height: 170,
        weight: 80,
    },
    {
        name: "Amorin",
        age: 55,
        height: 160,
        weight: 90,
    },
    {
        name: "Mayckon",
        age: 22,
        height: 180,
        weight: 70,
    }
]

function IMC(weight, height) {
    return weight / ((height / 100) ** 2).toFixed(2)
}

function printPatinetIMC(patient) {
    return `
        Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
    `
}

for (let patient of patients) {
    let IMCmessage = printPatinetIMC(patient)
    alert(IMCmessage)
}