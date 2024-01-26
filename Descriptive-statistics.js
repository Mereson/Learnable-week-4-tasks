"use strict"
const prompt = require("prompt-sync")()

// Instantiate Class
class DescriptiveStatistics {
  constructor(data, Length) {
    this.data = data
    this.Length = Length
  }
  //   Methods
  // Display Descriptive statistics selection menu
  displayDsMenu() {
    console.log("\nWelcome to the Descriptive Statistics Select Menu")
    console.log("What do you want to solve")
    console.log("\nMeasures of Central Tendency: Mean, Median, Mode")
    console.log("or")
    console.log(
      "Measures of Dispersion: Range, Standard Deviation, Quartile Deviation, Absolute Deviation, Variance\n"
    )
    this.chooseOption()
  }
  //   Choose Option method
  chooseOption() {
    console.log("\nChoose the option you want")
    console.log("A) Measures of Central Tendency")
    console.log("B) Measures of Dispersion")

    let option = prompt("Option: ")
    option = option.toUpperCase()
    switch (option) {
      case "A":
        console.log("\nYou've opened Measures of Central Tendency (MCT) menu")
        this.openMCT()
        break
      case "B":
        console.log("\nYou've opened Measures of Dispersion (MOD) menu")
        break

      default:
        console.log("\nYou didn't choose a proper option")
        this.chooseOption()
        break
    }
  }
  // Menus
  // Open Measures of Central Tendency (MCT) Menu
  openMCT() {
    console.log("\nChoose the option you want")
    console.log("A) Mean")
    console.log("B) Median")
    console.log("C) Mode")

    let mctOption = prompt("\nOption: ")
    mctOption = mctOption.toUpperCase()
    switch (mctOption) {
      case "A":
        console.log("\nYou Selected Mean")
        this.meanOption()
        break
      case "B":
        console.log("\nYou Selected Median")
        break
      case "C":
        console.log("\nYou Selected Mode")
        break
      default:
        console.log("Invalid Option!!")
        this.openMCT()
    }
  }
  // Open Measures of Dispersion (MOD) menu
  openMOD() {
    console.log("\nChoose the option you want")
    console.log("A) Range")
    console.log("B) Variance")
    console.log("C) Standard Deviation")
    console.log("D) Quartile Deviation")
    console.log("E) Absolute Deviation")

    let modOption = prompt("\nOption: ")
    modOption = modOption.toUpperCase()
    switch (modOption) {
      case "A":
        console.log("\nYou Selected Range")
        break
      case "B":
        console.log("\nYou Selected Variance")
        break
      case "C":
        console.log("\nYou Selected Standard Deviation")
        break
      case "D":
        console.log("\nYou Selected Quartile Deviation")
        break
      case "E":
        console.log("\nYou Selected Absolute Deviation")
        break
      default:
        console.log("Invalid Option!!")
        this.openMOD()
    }
  }

  // Options

  // Measures of Central Tendency Options
  // Mean
  meanOption() {}
  // Median
  medianOption() {}
  // Mode
  modeOption() {}

  // Measures of Dispersion Options
  // Range
  rangeOption() {}
  //   Variance
  varianceOption() {}
  //   Standard Deviation
  standardDeviationOption() {}
  //   Quartile Deviation
  quartileDeviationOption() {}
  //   Absolute Deviation
  absoluteDeviationOption() {}

// Closing Prompt
  calculatorClosePrompt() {}
}

console.log("\nYou are using the Descriptive Statistics Calculator")
function mainProgram() {
  let lengthOfArray = prompt("Input the number of items in your dataset: ")
  let dataSet = []
  console.log("Input the values in the dataset: ")
  for (let i = 0; i < lengthOfArray; i++) {
    let data = prompt(`value ${i + 1}: `)
    data = Number(data)
    dataSet.push(data)
  }
  const calculateDs = new DescriptiveStatistics(dataSet, lengthOfArray)
  calculateDs.displayDsMenu()
}
mainProgram()
