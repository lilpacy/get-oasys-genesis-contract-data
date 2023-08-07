/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type {
	SidechainERC721,
	SidechainERC721Interface,
} from '../../../contracts/nft-bridge/SidechainERC721'

const _abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'mainchainId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'mainchainERC721',
				type: 'address',
			},
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_symbol',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'approved',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'ApprovalForAll',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'SidechainBurn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'SidechainMint',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'burn',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getApproved',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getMainchainERC721',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'mint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ownerOf',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'tokenByIndex',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'tokenURI',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
]

const _bytecode =
	'0x60c06040523480156200001157600080fd5b5060405162001ef638038062001ef6833981016040819052620000349162000263565b8151829082906200004d906000906020850190620000f0565b50805162000063906001906020840190620000f0565b505050620000806200007a6200009a60201b60201c565b6200009e565b50506080919091526001600160a01b031660a05262000335565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000fe90620002f8565b90600052602060002090601f0160209004810192826200012257600085556200016d565b82601f106200013d57805160ff19168380011785556200016d565b828001600101855582156200016d579182015b828111156200016d57825182559160200191906001019062000150565b506200017b9291506200017f565b5090565b5b808211156200017b576000815560010162000180565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001be57600080fd5b81516001600160401b0380821115620001db57620001db62000196565b604051601f8301601f19908116603f0116810190828211818310171562000206576200020662000196565b816040528381526020925086838588010111156200022357600080fd5b600091505b8382101562000247578582018301518183018401529082019062000228565b83821115620002595760008385830101525b9695505050505050565b600080600080608085870312156200027a57600080fd5b845160208601519094506001600160a01b03811681146200029a57600080fd5b60408601519093506001600160401b0380821115620002b857600080fd5b620002c688838901620001ac565b93506060870151915080821115620002dd57600080fd5b50620002ec87828801620001ac565b91505092959194509250565b600181811c908216806200030d57607f821691505b602082108114156200032f57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051611b9b6200035b60003960006102f9015260006102ce0152611b9b6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b8578063a22cb4651161007c578063a22cb4651461028f578063b88d4fde146102a2578063c87b56dd146102b5578063cf518ea2146102c8578063e985e9c514610324578063f2fde38b1461036057600080fd5b806370a0823114610248578063715018a61461025b5780638da5cb5b1461026357806395d89b41146102745780639dc29fac1461027c57600080fd5b806323b872dd1161010a57806323b872dd146101d65780632f745c59146101e957806340c10f19146101fc57806342842e0e1461020f5780634f6ccce7146102225780636352211e1461023557600080fd5b806301ffc9a71461014757806306fdde031461016f578063081812fc14610184578063095ea7b3146101af57806318160ddd146101c4575b600080fd5b61015a610155366004611660565b610373565b60405190151581526020015b60405180910390f35b610177610384565b60405161016691906116d5565b6101976101923660046116e8565b610416565b6040516001600160a01b039091168152602001610166565b6101c26101bd36600461171d565b6104b0565b005b6008545b604051908152602001610166565b6101c26101e4366004611747565b6105c6565b6101c86101f736600461171d565b6105f7565b6101c261020a36600461171d565b61068d565b6101c261021d366004611747565b610708565b6101c86102303660046116e8565b610723565b6101976102433660046116e8565b6107b6565b6101c8610256366004611783565b61082d565b6101c26108b4565b600a546001600160a01b0316610197565b6101776108ea565b6101c261028a36600461171d565b6108f9565b6101c261029d36600461179e565b610967565b6101c26102b03660046117f0565b610976565b6101776102c33660046116e8565b6109ae565b604080517f000000000000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015201610166565b61015a6103323660046118cc565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101c261036e366004611783565b610a96565b600061037e82610b31565b92915050565b606060008054610393906118ff565b80601f01602080910402602001604051908101604052809291908181526020018280546103bf906118ff565b801561040c5780601f106103e15761010080835404028352916020019161040c565b820191906000526020600020905b8154815290600101906020018083116103ef57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104945760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104bb826107b6565b9050806001600160a01b0316836001600160a01b031614156105295760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161048b565b336001600160a01b038216148061054557506105458133610332565b6105b75760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161048b565b6105c18383610b56565b505050565b6105d03382610bc4565b6105ec5760405162461bcd60e51b815260040161048b9061193a565b6105c1838383610cbb565b60006106028361082d565b82106106645760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161048b565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600a546001600160a01b031633146106b75760405162461bcd60e51b815260040161048b9061198b565b6106c18282610e62565b816001600160a01b03167f1221d1d62fd29aa3348cad8b3fb92894338bb05a8bbcd4684f17fd50daee0daf826040516106fc91815260200190565b60405180910390a25050565b6105c183838360405180602001604052806000815250610976565b600061072e60085490565b82106107915760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161048b565b600882815481106107a4576107a46119c0565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b03168061037e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161048b565b60006001600160a01b0382166108985760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161048b565b506001600160a01b031660009081526003602052604090205490565b600a546001600160a01b031633146108de5760405162461bcd60e51b815260040161048b9061198b565b6108e86000610fb0565b565b606060018054610393906118ff565b600a546001600160a01b031633146109235760405162461bcd60e51b815260040161048b9061198b565b61092c81611002565b816001600160a01b03167f68afa1ea27a056cd862274b88c407fd8a8a4fcbdfb3cf170805aa3f444380643826040516106fc91815260200190565b6109723383836110a9565b5050565b6109803383610bc4565b61099c5760405162461bcd60e51b815260040161048b9061193a565b6109a884848484611178565b50505050565b6000818152600260205260409020546060906001600160a01b0316610a2d5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161048b565b6000610a4460408051602081019091526000815290565b90506000815111610a645760405180602001604052806000815250610a8f565b80610a6e846111ab565b604051602001610a7f9291906119d6565b6040516020818303038152906040525b9392505050565b600a546001600160a01b03163314610ac05760405162461bcd60e51b815260040161048b9061198b565b6001600160a01b038116610b255760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161048b565b610b2e81610fb0565b50565b60006001600160e01b0319821663780e9d6360e01b148061037e575061037e826112a9565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b8b826107b6565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610c3d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161048b565b6000610c48836107b6565b9050806001600160a01b0316846001600160a01b03161480610c835750836001600160a01b0316610c7884610416565b6001600160a01b0316145b80610cb357506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610cce826107b6565b6001600160a01b031614610d325760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161048b565b6001600160a01b038216610d945760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161048b565b610d9f8383836112f9565b610daa600082610b56565b6001600160a01b0383166000908152600360205260408120805460019290610dd3908490611a1b565b90915550506001600160a01b0382166000908152600360205260408120805460019290610e01908490611a32565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610eb85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161048b565b6000818152600260205260409020546001600160a01b031615610f1d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161048b565b610f29600083836112f9565b6001600160a01b0382166000908152600360205260408120805460019290610f52908490611a32565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600061100d826107b6565b905061101b816000846112f9565b611026600083610b56565b6001600160a01b038116600090815260036020526040812080546001929061104f908490611a1b565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b816001600160a01b0316836001600160a01b0316141561110b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161048b565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611183848484610cbb565b61118f84848484611304565b6109a85760405162461bcd60e51b815260040161048b90611a4a565b6060816111cf5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156111f957806111e381611a9c565b91506111f29050600a83611acd565b91506111d3565b60008167ffffffffffffffff811115611214576112146117da565b6040519080825280601f01601f19166020018201604052801561123e576020820181803683370190505b5090505b8415610cb357611253600183611a1b565b9150611260600a86611ae1565b61126b906030611a32565b60f81b818381518110611280576112806119c0565b60200101906001600160f81b031916908160001a9053506112a2600a86611acd565b9450611242565b60006001600160e01b031982166380ac58cd60e01b14806112da57506001600160e01b03198216635b5e139f60e01b145b8061037e57506301ffc9a760e01b6001600160e01b031983161461037e565b6105c1838383611402565b60006001600160a01b0384163b156113f757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611348903390899088908890600401611af5565b6020604051808303816000875af1925050508015611383575060408051601f3d908101601f1916820190925261138091810190611b32565b60015b6113dd573d8080156113b1576040519150601f19603f3d011682016040523d82523d6000602084013e6113b6565b606091505b5080516113d55760405162461bcd60e51b815260040161048b90611a4a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610cb3565b506001949350505050565b6001600160a01b03831661145d5761145881600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611480565b816001600160a01b0316836001600160a01b0316146114805761148083826114ba565b6001600160a01b038216611497576105c181611557565b826001600160a01b0316826001600160a01b0316146105c1576105c18282611606565b600060016114c78461082d565b6114d19190611a1b565b600083815260076020526040902054909150808214611524576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061156990600190611a1b565b60008381526009602052604081205460088054939450909284908110611591576115916119c0565b9060005260206000200154905080600883815481106115b2576115b26119c0565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806115ea576115ea611b4f565b6001900381819060005260206000200160009055905550505050565b60006116118361082d565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b031981168114610b2e57600080fd5b60006020828403121561167257600080fd5b8135610a8f8161164a565b60005b83811015611698578181015183820152602001611680565b838111156109a85750506000910152565b600081518084526116c181602086016020860161167d565b601f01601f19169290920160200192915050565b602081526000610a8f60208301846116a9565b6000602082840312156116fa57600080fd5b5035919050565b80356001600160a01b038116811461171857600080fd5b919050565b6000806040838503121561173057600080fd5b61173983611701565b946020939093013593505050565b60008060006060848603121561175c57600080fd5b61176584611701565b925061177360208501611701565b9150604084013590509250925092565b60006020828403121561179557600080fd5b610a8f82611701565b600080604083850312156117b157600080fd5b6117ba83611701565b9150602083013580151581146117cf57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561180657600080fd5b61180f85611701565b935061181d60208601611701565b925060408501359150606085013567ffffffffffffffff8082111561184157600080fd5b818701915087601f83011261185557600080fd5b813581811115611867576118676117da565b604051601f8201601f19908116603f0116810190838211818310171561188f5761188f6117da565b816040528281528a60208487010111156118a857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156118df57600080fd5b6118e883611701565b91506118f660208401611701565b90509250929050565b600181811c9082168061191357607f821691505b6020821081141561193457634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600083516119e881846020880161167d565b8351908301906119fc81836020880161167d565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a2d57611a2d611a05565b500390565b60008219821115611a4557611a45611a05565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000600019821415611ab057611ab0611a05565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611adc57611adc611ab7565b500490565b600082611af057611af0611ab7565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611b28908301846116a9565b9695505050505050565b600060208284031215611b4457600080fd5b8151610a8f8161164a565b634e487b7160e01b600052603160045260246000fdfea264697066735822122038abeffcd4bf56ee05b83f9ae87ebcd0d9b247992bbc2c2d095afa0b2270d19d64736f6c634300080c0033'

type SidechainERC721ConstructorParams =
	| [signer?: Signer]
	| ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
	xs: SidechainERC721ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class SidechainERC721__factory extends ContractFactory {
	constructor(...args: SidechainERC721ConstructorParams) {
		if (isSuperArgs(args)) {
			super(...args)
		} else {
			super(_abi, _bytecode, args[0])
		}
	}

	override deploy(
		mainchainId: PromiseOrValue<BigNumberish>,
		mainchainERC721: PromiseOrValue<string>,
		_name: PromiseOrValue<string>,
		_symbol: PromiseOrValue<string>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<SidechainERC721> {
		return super.deploy(
			mainchainId,
			mainchainERC721,
			_name,
			_symbol,
			overrides || {},
		) as Promise<SidechainERC721>
	}
	override getDeployTransaction(
		mainchainId: PromiseOrValue<BigNumberish>,
		mainchainERC721: PromiseOrValue<string>,
		_name: PromiseOrValue<string>,
		_symbol: PromiseOrValue<string>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): TransactionRequest {
		return super.getDeployTransaction(
			mainchainId,
			mainchainERC721,
			_name,
			_symbol,
			overrides || {},
		)
	}
	override attach(address: string): SidechainERC721 {
		return super.attach(address) as SidechainERC721
	}
	override connect(signer: Signer): SidechainERC721__factory {
		return super.connect(signer) as SidechainERC721__factory
	}

	static readonly bytecode = _bytecode
	static readonly abi = _abi
	static createInterface(): SidechainERC721Interface {
		return new utils.Interface(_abi) as SidechainERC721Interface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): SidechainERC721 {
		return new Contract(address, _abi, signerOrProvider) as SidechainERC721
	}
}