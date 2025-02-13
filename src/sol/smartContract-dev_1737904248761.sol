```solidity
pragma solidity ^0.8.0;

contract cvnu {

    // State variables
    string public name;
    uint public age;

    // Constructor
    constructor(string memory _name, uint _age) {
        name = _name;
        age = _age;
    }

    // Function to update the name
    function updateName(string memory _name) public {
        name = _name;
    }

    // Function to update the age
    function updateAge(uint _age) public {
        age = _age;
    }

    // Function to retrieve the name
    function getName() public view returns (string memory) {
        return name;
    }

    // Function to retrieve the age
    function getAge() public view returns (uint) {
        return age;
    }
}
```

**Explanation:**

This Solidity smart contract `cvnu.sol` defines a simple structure to store and manage a person's name and age. 

* **pragma solidity ^0.8.0;**: This line specifies the version of the Solidity compiler to be used. 
* **contract cvnu { ... }**: This defines a new contract named `cvnu`.
* **State variables**:
    * `name`:  A string variable to store the person's name.
    * `age`:  A uint variable to store the person's age.
* **Constructor**: 
    * `constructor(string memory _name, uint _age) { ... }`: This function is executed when a new instance of the contract is created. It takes the person's name and age as input and initializes the state variables.
* **Functions**:
    * `updateName(string memory _name) public { ... }`: This function allows anyone to update the person's name.
    * `updateAge(uint _age) public { ... }`: This function allows anyone to update the person's age.
    * `getName() public view returns (string memory) { ... }`: This function allows anyone to retrieve the person's name.
    * `getAge() public view returns (uint) { ... }`: This function allows anyone to retrieve the person's age.


**Key Concepts:**

* **Smart Contracts:** Self-executing contracts with the terms of the agreement directly written into code.
* **Solidity:** The programming language used to write smart contracts on the Ethereum blockchain.
* **State Variables:** Variables that store data permanently within the contract.
* **Functions:**  Code blocks that perform specific actions.

* **Constructor:** A special function that is called when a new instance of a contract is created.



Let me know if you have any other questions or would like to explore more complex smart contract functionalities!
