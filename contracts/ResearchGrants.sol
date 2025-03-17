// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ResearchGrants {
    // Use an enum to track the status of each proposal
    enum ProposalStatus {
        Pending,
        Approved,
        Rejected
    }

    struct GrantProposal {
        uint256 id;
        string proposalTitle;
        string researcher;
        uint256 requestedAmount;
        address payable researcherAddress;
        ProposalStatus status;
    }

    address public admin;
    uint256 public proposalCount;
    mapping(uint256 => GrantProposal) public proposals;

    // Events with indexed parameters for easier off-chain filtering
    event GrantApplied(
        uint256 indexed id,
        string proposalTitle,
        string researcher,
        uint256 requestedAmount
    );
    event GrantApproved(uint256 indexed id, uint256 amount);
    event GrantRejected(uint256 indexed id);

    // Only the admin (deployer) can perform administrative actions
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // Allows a researcher to apply for a grant
    function applyForGrant(
        string memory _proposalTitle,
        string memory _researcher,
        uint256 _requestedAmount
    ) public {
        require(
            bytes(_proposalTitle).length > 0,
            "Proposal title cannot be empty"
        );
        require(
            bytes(_researcher).length > 0,
            "Researcher name cannot be empty"
        );
        require(
            _requestedAmount > 0,
            "Requested amount must be greater than zero"
        );

        proposalCount++;
        proposals[proposalCount] = GrantProposal({
            id: proposalCount,
            proposalTitle: _proposalTitle,
            researcher: _researcher,
            requestedAmount: _requestedAmount,
            researcherAddress: payable(msg.sender),
            status: ProposalStatus.Pending
        });
        emit GrantApplied(
            proposalCount,
            _proposalTitle,
            _researcher,
            _requestedAmount
        );
    }

    // Admin-only function to approve a grant proposal
    // Funds are transferred using a safe call
    function approveGrant(uint256 _proposalId) public payable onlyAdmin {
        require(
            _proposalId > 0 && _proposalId <= proposalCount,
            "Invalid proposal ID"
        );
        GrantProposal storage proposal = proposals[_proposalId];
        require(
            proposal.status == ProposalStatus.Pending,
            "Proposal already processed"
        );
        require(
            msg.value >= proposal.requestedAmount,
            "Insufficient funds sent"
        );

        proposal.status = ProposalStatus.Approved;
        (bool sent, ) = proposal.researcherAddress.call{value: msg.value}("");
        require(sent, "Failed to transfer funds");
        emit GrantApproved(_proposalId, msg.value);
    }

    // Admin-only function to reject a grant proposal
    function rejectGrant(uint256 _proposalId) public onlyAdmin {
        require(
            _proposalId > 0 && _proposalId <= proposalCount,
            "Invalid proposal ID"
        );
        GrantProposal storage proposal = proposals[_proposalId];
        require(
            proposal.status == ProposalStatus.Pending,
            "Proposal already processed"
        );

        proposal.status = ProposalStatus.Rejected;
        emit GrantRejected(_proposalId);
    }

    // Retrieve a single proposal by ID
    function getProposal(
        uint256 _proposalId
    ) public view returns (GrantProposal memory) {
        require(
            _proposalId > 0 && _proposalId <= proposalCount,
            "Invalid proposal ID"
        );
        return proposals[_proposalId];
    }

    // Retrieve all proposals for frontend display
    function getAllProposals() public view returns (GrantProposal[] memory) {
        GrantProposal[] memory allProposals = new GrantProposal[](
            proposalCount
        );
        for (uint256 i = 1; i <= proposalCount; i++) {
            allProposals[i - 1] = proposals[i];
        }
        return allProposals;
    }
}
