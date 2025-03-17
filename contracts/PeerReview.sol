// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PeerReview {
    struct Review {
        uint256 reviewId;
        uint256 paperId;
        string reviewerName;
        string comments;
        uint8 rating;
        uint256 timestamp;
        address reviewer; // added reviewer address for ownership checks
    }

    // Reviews for each paper (reviewId mapping for easier management)
    mapping(uint256 => Review[]) public reviews;
    uint256 public reviewCount;

    // Engagement tracking:
    mapping(uint256 => mapping(address => bool)) public paperLiked;
    mapping(uint256 => uint256) public likeCounts;
    mapping(uint256 => uint256) public viewCounts;

    // Events for reviews and engagement actions
    event ReviewSubmitted(uint256 reviewId, uint256 paperId, string reviewerName, uint8 rating);
    event ReviewUpdated(uint256 reviewId, uint256 paperId, string newComments, uint8 newRating);
    event PaperLiked(uint256 paperId, address liker, uint256 likeCount);
    event PaperViewed(uint256 paperId, uint256 viewCount);

    /// @notice Submit a review for a given paper.
    function submitReview(
        uint256 _paperId,
        string memory _reviewerName,
        string memory _comments,
        uint8 _rating
    ) public {
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");
        reviewCount++;
        reviews[_paperId].push(
            Review({
                reviewId: reviewCount,
                paperId: _paperId,
                reviewerName: _reviewerName,
                comments: _comments,
                rating: _rating,
                timestamp: block.timestamp,
                reviewer: msg.sender
            })
        );
        emit ReviewSubmitted(reviewCount, _paperId, _reviewerName, _rating);
    }

    /// @notice Update a review. Only the original reviewer can update.
    function updateReview(
        uint256 _paperId,
        uint256 _reviewId,
        string memory _newComments,
        uint8 _newRating
    ) public {
        require(_newRating >= 1 && _newRating <= 5, "Rating must be between 1 and 5");
        Review[] storage paperReviews = reviews[_paperId];
        bool found = false;
        for (uint256 i = 0; i < paperReviews.length; i++) {
            if (paperReviews[i].reviewId == _reviewId) {
                require(paperReviews[i].reviewer == msg.sender, "Unauthorized: Not the original reviewer");
                paperReviews[i].comments = _newComments;
                paperReviews[i].rating = _newRating;
                paperReviews[i].timestamp = block.timestamp;
                emit ReviewUpdated(_reviewId, _paperId, _newComments, _newRating);
                found = true;
                break;
            }
        }
        require(found, "Review not found");
    }

    /// @notice Retrieve all reviews for a specific paper.
    function getReviews(uint256 _paperId) public view returns (Review[] memory) {
        return reviews[_paperId];
    }

    /// @notice Like a paper. Each address can like a paper only once.
    function likePaper(uint256 _paperId) public {
        require(!paperLiked[_paperId][msg.sender], "You have already liked this paper");
        paperLiked[_paperId][msg.sender] = true;
        likeCounts[_paperId] += 1;
        emit PaperLiked(_paperId, msg.sender, likeCounts[_paperId]);
    }

    /// @notice Record a view for a paper.
    function recordView(uint256 _paperId) public {
        viewCounts[_paperId] += 1;
        emit PaperViewed(_paperId, viewCounts[_paperId]);
    }

    /// @notice Calculate average rating for a paper.
    function getAverageRating(uint256 _paperId) public view returns (uint256) {
        Review[] memory paperReviews = reviews[_paperId];
        if (paperReviews.length == 0) {
            return 0;
        }
        uint256 total;
        for (uint256 i = 0; i < paperReviews.length; i++) {
            total += paperReviews[i].rating;
        }
        return total / paperReviews.length;
    }
}
