async function main() {
  const STUSD = await ethers.getContractFactory("STUSD");
  const token = await STUSD.deploy();
  console.log("STUSD deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
