pragma solidity ^0.8.0;

contract Wallet {
    struct Asset {
        uint amount;
        address token;
    }

    mapping(address => Asset) public assets;

    function deposit(address token, uint amount) public payable {
        // Vérifier que l'appelant est autorisé
        require(msg.sender == owner, "Unauthorized");

        // Mettre à jour le solde de l'actif
        assets[token].amount += amount;
    }

    // ... autres fonctions
}