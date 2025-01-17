// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ParametricInsurance {
    struct InsurancePolicy {
        address insured;
        uint256 premium;
        uint256 payout;
        string policyDetails;
    }

    InsurancePolicy[] public policies;

    function createContract(uint256 premium, uint256 payout, string memory policyDetails) public {
        policies.push(InsurancePolicy(msg.sender, premium, payout, policyDetails));
    }

    function getTotalContracts() public view returns (uint256) {
        return policies.length;
    }

    function getContractDetails(uint256 index) public view returns (
        address insured, 
        uint256 premium, 
        uint256 payout, 
        string memory policyDetails
    ) {
        require(index < policies.length, "Invalid index");
        InsurancePolicy memory policy = policies[index];
        return (policy.insured, policy.premium, policy.payout, policy.policyDetails);
    }
}
