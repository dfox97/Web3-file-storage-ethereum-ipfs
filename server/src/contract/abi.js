const abiKey = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_fileName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_url",
        "type": "string"
      }
    ],
    "name": "add",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getFile",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "hashToVerify",
        "type": "string"
      }
    ],
    "name": "verifyDocument",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
export default abiKey;
// export const abiKey = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_fileName",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_hash",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_url",
// 				"type": "string"
// 			}
// 		],
// 		"name": "add",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getFile",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getHash",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getLength",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "id",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "hashToVerify",
// 				"type": "string"
// 			}
// 		],
// 		"name": "verifyDocument",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
