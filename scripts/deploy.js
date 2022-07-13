const fs = require('fs');

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log(`Deploying contracts with the account:${deployer.address}`);//print to console the address of the deployer

    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance.toString()}`);//print to console the balance of deployer
  
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();//do the deployment
  
    console.log("Token address:", token.address);//print to console the address of the contract
    
    const data = {
        address: token.address,
        abi: JSON.parse(token.interface.format('json'))
    }
    fs.writeFileSync('frontend/src/Token.json', JSON.stringify(data));
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });