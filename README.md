 # Memoi-dapp
 This is a dapp that gives users access to tech classes for beginners in the web3 ecosystem. They can as well be creating, joining and submitting assignments which will be given after each classes on order for them to earn money they can use to get supplies and things needed to take part in more classes.  

## HOW IT IS BUILT

The backend is built using Telos EVM. The frontend will be built siding React.js written in Javascript. The smart contract will be built using Solidity and JavaScript to work its way through the Hardhat Network.

## To Install
### A. Smart contract

1. Clone the repo
2. ```cd smart-contract```
3. ```npm install```
4. ```npx hardhat compile``` outputs artifacts and copy contract_name.json to frontend

Once successfully compiled you can then deploy to the Telos testnet. To do this run this command on the smart-contract folder

```npx hardhat run scripts/deploy.js --network telos_testnet```

This deploys to the telos testnet and output your smart contract address and the admin address

### B. Frontend
1. ```cd teloslearn```
2. ```npm install```
3. ```npm run start```


Link to App
https://memoi-dapp.vercel.app/
