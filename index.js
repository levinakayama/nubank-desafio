const readline = require("readline");
const { calculateCapitalGains } = require("./services/capitalGainsCalculator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Digite as operações em formato JSON. Digite 'END' para finalizar:"
);

let inputData = "";
let finalResults = [];

rl.on("line", (line) => {
  if (line.trim().toLowerCase() === "end") {
    try {
      const operationsArray = inputData.match(/\[.*?\]/g);

      if (operationsArray) {
        operationsArray.forEach((block) => {
          const operations = JSON.parse(block);
          const result = calculateCapitalGains(operations);
          finalResults.push(...result);
        });
      }


      inputData = "";
    } catch (error) {
      console.error("Erro ao processar entrada JSON:", error.message);
    }

    console.log("\nResultados:");
    finalResults.forEach((result) => {
     
      let tax = result.tax;
      tax = tax.toFixed(2);
      result.tax = tax;
      console.log(JSON.stringify(result));
    });

    rl.close();
  } else {
    inputData += line;
  }
});