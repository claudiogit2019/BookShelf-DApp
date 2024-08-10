async function main() {
    const BookShelf = await ethers.getContractFactory("BookShelf");
    const bookShelf = await BookShelf.deploy();
    await bookShelf.deployed();
  
    console.log("BookShelf deployed to:", bookShelf.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  