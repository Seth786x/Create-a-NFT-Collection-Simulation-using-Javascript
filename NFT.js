// Create an Array for storing nfts
const nftCollection = [];

// Create the mintNFT function
function mintNFT(name, eyeColor, shirtType, bling) {
  const nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling
  };
  nftCollection.push(nft);
}

// Create the listNFTs function
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("NFT " + (i + 1) + ":");
    console.log("Name: " + nftCollection[i].name);
    console.log("Eye Color: " + nftCollection[i].eyeColor);
    console.log("Shirt Type: " + nftCollection[i].shirtType);
    console.log("Bling: " + nftCollection[i].bling);
    console.log('-------------------------');
  }
}

// Create the getTotalSupply function
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions to test the implementation
mintNFT("Cool Cat", "Blue", "Hoodie", "Gold Chain");
mintNFT("Hip Dog", "Brown", "T-Shirt", "Diamond Stud");
mintNFT("Funky Monkey", "Green", "Tank Top", "Silver Ring");

listNFTs();
console.log("Total NFTs Minted: " + getTotalSupply());