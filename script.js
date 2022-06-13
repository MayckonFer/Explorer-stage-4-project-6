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

const patientsNames = []

for (let patient of patients) {
    patientsNames.push(patient.name)
}

alert(`Paciente ${patients[0].name} possui o IMC de ${patients[0].weight / ((patients[0].height / 100) ** 2)}`)