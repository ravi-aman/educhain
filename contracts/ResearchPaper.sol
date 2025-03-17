// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ResearchPaperSubmission {
    struct Paper {
        uint256 id;
        string title;
        string[] authors; // Multiple authors
        string ipfsHash;
        address payable submitter;
        uint256 timestamp;
    }

    struct Donation {
        address donor;
        uint256 amount;
        uint256 timestamp;
    }

    uint256 public paperCount;
    mapping(uint256 => Paper) public papers;
    // Mapping to track all donations per paper ID
    mapping(uint256 => Donation[]) public donations;

    event PaperSubmitted(
        uint256 indexed id,
        string indexed title,
        // Authors cannot be indexed directly in Solidity for dynamic arrays,
        // so we just emit the paper ID and other info.
        address submitter,
        uint256 timestamp
    );
    event PaperDeleted(uint256 indexed id, address indexed submitter);
    event DonationReceived(
        uint256 indexed paperId,
        address indexed donor,
        uint256 amount,
        uint256 timestamp
    );

    modifier onlyValidInput(string memory _input) {
        require(bytes(_input).length > 0, "Input cannot be empty");
        _;
    }

    // Submit a new research paper with multiple authors
    function submitPaper(
        string memory _title,
        string[] memory _authors,
        string memory _ipfsHash
    )
        public
        onlyValidInput(_title)
        onlyValidInput(_ipfsHash)
    {
        require(_authors.length > 0, "At least one author is required");
        paperCount++;
        papers[paperCount] = Paper(
            paperCount,
            _title,
            _authors,
            _ipfsHash,
            payable(msg.sender),
            block.timestamp
        );
        emit PaperSubmitted(paperCount, _title, msg.sender, block.timestamp);
    }

    // Retrieve a specific paper by ID
    function getPaper(uint256 _id) public view returns (Paper memory) {
        require(_id > 0 && _id <= paperCount, "Invalid paper ID");
        return papers[_id];
    }

    // Retrieve all papers for frontend display
    function getAllPapers() public view returns (Paper[] memory) {
        Paper[] memory allPapers = new Paper[](paperCount);
        for (uint256 i = 1; i <= paperCount; i++) {
            allPapers[i - 1] = papers[i];
        }
        return allPapers;
    }

    // Delete a paper (only the submitter can delete their paper)
    function deletePaper(uint256 _id) public {
        require(_id > 0 && _id <= paperCount, "Invalid paper ID");
        require(msg.sender == papers[_id].submitter, "Unauthorized: Only submitter can delete");
        delete papers[_id];
        emit PaperDeleted(_id, msg.sender);
    }

    // Donate funds to a specific paper
    function donateToPaper(uint256 _id) public payable {
        require(_id > 0 && _id <= paperCount, "Invalid paper ID");
        require(msg.value > 0, "Donation must be greater than zero");

        // Record the donation details
        donations[_id].push(Donation({
            donor: msg.sender,
            amount: msg.value,
            timestamp: block.timestamp
        }));

        // Transfer the donation to the paper's submitter
        Paper storage paper = papers[_id];
        (bool success, ) = paper.submitter.call{value: msg.value}("");
        require(success, "Transfer failed");

        emit DonationReceived(_id, msg.sender, msg.value, block.timestamp);
    }

    // Retrieve all donations for a specific paper
    function getDonations(uint256 _id) public view returns (Donation[] memory) {
        require(_id > 0 && _id <= paperCount, "Invalid paper ID");
        return donations[_id];
    }
}
