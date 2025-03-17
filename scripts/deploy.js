import hardhat from "hardhat";

const { ethers } = hardhat;

async function main() {
    // Get the contract factories
    const ResearchPaper = await ethers.getContractFactory("ResearchPaperSubmission");
    const PeerReview = await ethers.getContractFactory("PeerReview");
    const ResearchGrants = await ethers.getContractFactory("ResearchGrants");

    // Deploy each contract
    const researchPaper = await ResearchPaper.deploy();
    await researchPaper.waitForDeployment(); // ✅ Use this instead of deployed()
    console.log("ResearchPaper deployed to:", await researchPaper.getAddress());

    const peerReview = await PeerReview.deploy();
    await peerReview.waitForDeployment();
    console.log("PeerReview deployed to:", await peerReview.getAddress());

    const researchGrants = await ResearchGrants.deploy();
    await researchGrants.waitForDeployment();
    console.log("ResearchGrants deployed to:", await researchGrants.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
