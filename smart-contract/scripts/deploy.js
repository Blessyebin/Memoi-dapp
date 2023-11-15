const hre = require("hardhat");

async function main() {
 const teloslearn = await hre.ethers.getContractFactory("teloslearn");
 const telosLearn = await teloslearn.deploy();

 await telosLearn.deployed();

 console.log("telosLearn deployed to:", telosLearn.address);

 let adminAddr = await telosLearn.admin();
 console.log("admin address:", adminAddr);

 await telosLearn.createQuest("Introduction to Hardhat", 2, 600);
 await telosLearn.createQuest("Unit Testing with Hardhat", 4, 500);
 await telosLearn.createQuest("Debugging and Deploying with Hardhat", 5, 400);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error);
  process.exit(1);
 });
