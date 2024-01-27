"use strict"
const prompt = require("prompt-sync")()

// Instantiate Class
class DescriptiveStatistics {
  constructor(data, dataLength) {
    this.data = data
    this.dataLength = dataLength
  }
  //   Methods
  // Display Descriptive statistics selection menu
  displayDsMenu() {
    console.log("\nWelcome to the Descriptive Statistics Select Menu")
    console.log("What do you want to solve")
    console.log("\nMeasures of Central Tendency: Mean, Median, Mode")
    console.log("or")
    console.log(
      "Measures of Dispersion: Range, Standard Deviation, Quartile Deviation, Mean Absolute Deviation, Variance"
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
        this.openMOD()
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
        this.medianOption()
        break
      case "C":
        console.log("\nYou Selected Mode")
        this.modeOption()
        break
      default:
        console.log("\nInvalid Option!!")
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
    console.log("E) Mean Absolute Deviation")

    let modOption = prompt("\nOption: ")
    modOption = modOption.toUpperCase()
    switch (modOption) {
      case "A":
        console.log("\nYou Selected Range")
        this.rangeOption()
        break
      case "B":
        console.log("\nYou Selected Variance")
        this.varianceOption()
        break
      case "C":
        console.log("\nYou Selected Standard Deviation")
        this.standardDeviationOption()
        break
      case "D":
        console.log("\nYou Selected Quartile Deviation")
        this.quartileDeviationOption()
        break
      case "E":
        console.log("\nYou Selected Mean Absolute Deviation")
        this.meanAbsoluteDeviationOption()
        break
      default:
        console.log("Invalid Option!!")
        this.openMOD()
    }
  }

  // Options
  // Measures of Central Tendency Options:

  // Mean
  meanOption() {
    let sum = 0
    let mean = 0
    let value = ""
    for (let i = 0; i < this.data.length; i++) {
      sum = sum + this.data[i]
      value = value + `${this.data[i]}, `
    }
    mean = sum / this.data.length
    console.log(`You solved for the mean of ${value} Your result is ${mean}`)
    this.calculatorClosePrompt()
  }

  // Median
  medianOption() {
    let median
    let value = ""
    // data sort attribute
    const sortedDataset = this.data.slice().sort((a, b) => a - b)
    // Find the middle of the array
    const arrayMiddle = Math.floor(sortedDataset.length / 2)
    for (let i = 0; i < this.data.length; i++) {
      value = value + `${this.data[i]}, `
    }
    // Check if the dataSet is odd or even
    if (sortedDataset.length % 2 === 0) {
      // For even number, find the mean of the middle value
      median = (sortedDataset[arrayMiddle - 1] + sortedDataset[arrayMiddle]) / 2
      console.log(
        `You solved for the median of ${value} Your result is ${median}`
      )
    } else {
      // Foe odd number, display the middle value
      median = sortedDataset[arrayMiddle]
      console.log(
        `You solved for the median of ${value} Your result is ${median}`
      )
    }
    this.calculatorClosePrompt()
  }

  // Mode
  modeOption() {
    const frequencyCounter = {}

    for (let i = 0; i < this.data.length; i++) {
      const values = this.data[i]
      if (
        frequencyCounter[values] === undefined ||
        frequencyCounter[values] === null
      ) {
        frequencyCounter[values] = 0
      } else {
        frequencyCounter[values] = frequencyCounter[values] + 1
      }
    }

    let mode = []
    let maxFrequency = 0

    for (const values in frequencyCounter) {
      if (frequencyCounter[values] > maxFrequency) {
        maxFrequency = frequencyCounter[values]
        mode = [Number(values)]
      } else if (frequencyCounter[values] === maxFrequency) {
        mode.push(Number(values))
      }
    }

    if (mode.length === this.data.length) {
      console.log("There is no Mode!")
    }

    let value = ""

    for (let i = 0; i < this.data.length; i++) {
      value = value + `${this.data[i]}, `
    }
    console.log(`You solved for the Mode of ${value} Your result is ${mode}`)
    this.calculatorClosePrompt()
  }

  // Measures of Dispersion Options:

  // Range
  rangeOption() {
    let lowerBound = this.data[0]
    let upperBound = this.data[0]

    for (let i = 1; i < this.data.length; i++) {
      if (this.data[i] < lowerBound) {
        lowerBound = this.data[i]
      }
      if (this.data[i] > upperBound) {
        upperBound = this.data[i]
      }
    }

    const range = upperBound - lowerBound
    let value = ""

    for (let i = 0; i < this.data.length; i++) {
      value = value + `${this.data[i]}, `
    }
    console.log(`You solved for the Range of ${value} Your result is ${range}`)
    this.calculatorClosePrompt()
  }

  //   Variance
  varianceOption() {
    let sum = 0
    let mean = 0
    let value = ""
    for (let i = 0; i < this.data.length; i++) {
      sum = sum + this.data[i]
      value = value + `${this.data[i]}, `
    }
    mean = sum / this.data.length

    let sumSquaredValues = 0

    for (let i = 0; i < this.data.length; i++) {
      const deviation = this.data[i] - mean
      sumSquaredValues += Math.pow(deviation, 2)
    }

    const variance = sumSquaredValues / this.data.length
    console.log(
      `You solved for the Variance of ${value} Your result is ${variance}`
    )
    this.calculatorClosePrompt()
  }

  //   Standard Deviation
  standardDeviationOption() {
    let sum = 0
    let mean = 0
    let value = ""
    for (let i = 0; i < this.data.length; i++) {
      sum = sum + this.data[i]
      value = value + `${this.data[i]}, `
    }
    mean = sum / this.data.length

    let sumSquaredValues = 0

    for (let i = 0; i < this.data.length; i++) {
      const deviation = this.data[i] - mean
      sumSquaredValues += Math.pow(deviation, 2)
    }

    const variance = sumSquaredValues / this.data.length

    const standardDeviation = Math.sqrt(variance)

    console.log(
      `You solved for the Standard Deviation of ${value} Your result is ${standardDeviation}`
    )
    this.calculatorClosePrompt()
  }

  //   Quartile Deviation
  quartileDeviationOption() {
    const sortedDataset = this.data.slice().sort((a, b) => a - b)
    // First Quartile
    const firstQuartileTerm = Math.floor(sortedDataset.length / 4)
    const firstQuartile = sortedDataset[firstQuartileTerm]

    // Second Quartile
    const thirdQuartileTerm = Math.floor((3 * sortedDataset.length) / 4)
    const thirdQuartile = sortedDataset[thirdQuartileTerm]

    // Quartile deviation
    const quartileDeviation = (thirdQuartile - firstQuartile) / 2

    let value = ""

    for (let i = 0; i < this.data.length; i++) {
      value = value + `${this.data[i]}, `
    }
    console.log(
      `You solved for the Quartile Deviation of ${value} Your result is ${quartileDeviation}`
    )
    this.calculatorClosePrompt()
  }
  // Mean Absolute Deviation
  meanAbsoluteDeviationOption() {
    // Calculate the mean
    let sum = 0
    let mean = 0
    let value = ""
    for (let i = 0; i < this.data.length; i++) {
      sum = sum + this.data[i]
      value = value + `${this.data[i]}, `
    }
    mean = sum / this.data.length

    const valueDifference = []

    for (let i = 0; i < this.data.length; i++) {
      const difference = Math.abs(this.data[i] - mean)
      valueDifference.push(difference)
    }

    let sumOfValueDifferences = 0

    for (let i = 0; i < valueDifference.length; i++) {
      sumOfValueDifferences = sumOfValueDifferences + valueDifference[i]
    }

    const meanAbsoluteDeviation = sumOfValueDifferences / this.data.length

    console.log(
      `You solved for the Mean Absolute Deviation of ${value} Your result is ${meanAbsoluteDeviation}`
    )
    this.calculatorClosePrompt()
  }

  // Closing Prompt
  calculatorClosePrompt() {
    console.log(
      "\nPress X to exit the calculator, Press Y to return to the Main Menu, Press Z to restart calculator"
    )
    let closingOption = prompt("Option: ")
    closingOption = closingOption.toUpperCase()
    switch (closingOption) {
      case "X":
        console.log(
          "\nThank you for using the Descriptive Statistics Calculator!"
        )
        break
      case "Y":
        this.displayDsMenu()
        break
      case "Z":
        mainProgram()
        break
      default:
        console.log("Invalid Option!!")
        this.calculatorClosePrompt()
        break
    }
  }
}

function mainProgram() {
  console.log("\nYou are using the Descriptive Statistics Calculator")
  let lengthOfArray = prompt("Input the number of items in your dataset: ")
  let dataSet = []
  let count = 0
  if (lengthOfArray !== "") {
    console.log("Input the values in the dataset: ")
    for (let i = 0; i < lengthOfArray; i++) {
      let data = prompt(`value ${i + 1}: `)
      data = Number(data)
      dataSet.push(data)
    }
    for (let i = 0; i < dataSet.length; i++) {
      if (dataSet[i] == "") {
        count++
      }
    }
    if (count !== 0) {
      console.log("Incomplete or Empty Dataset")
    } else {
      const calculateDs = new DescriptiveStatistics(dataSet, lengthOfArray)
      calculateDs.displayDsMenu()
    }
  } else {
    console.log("No Dataset")
  }
}
mainProgram()
