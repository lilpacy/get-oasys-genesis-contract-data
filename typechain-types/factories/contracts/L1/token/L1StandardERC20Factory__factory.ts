/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../../common'
import type {
	L1StandardERC20Factory,
	L1StandardERC20FactoryInterface,
} from '../../../../contracts/L1/token/L1StandardERC20Factory'

const _abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'string',
				name: '_symbol',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		name: 'ERC20Created',
		type: 'event',
	},
	{
		inputs: [
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
		name: 'createStandardERC20',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
]

const _bytecode =
	'0x608060405234801561001057600080fd5b50612574806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630b6ec17814610030575b600080fd5b61004361003e36600461017e565b610045565b005b6000338383604051610056906100ce565b61006293929190610232565b604051809103906000f08015801561007e573d6000803e3d6000fd5b509050806001600160a01b0316826040516100999190610272565b604051908190038120907fd714a43f627528ad95fc3dcf6c453cf595be2f4d75c58c4273f17208ed899f4490600090a3505050565b6122b08061028f83390190565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261010257600080fd5b813567ffffffffffffffff8082111561011d5761011d6100db565b604051601f8301601f19908116603f01168101908282118183101715610145576101456100db565b8160405283815286602085880101111561015e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561019157600080fd5b823567ffffffffffffffff808211156101a957600080fd5b6101b5868387016100f1565b935060208501359150808211156101cb57600080fd5b506101d8858286016100f1565b9150509250929050565b60005b838110156101fd5781810151838201526020016101e5565b50506000910152565b6000815180845261021e8160208601602086016101e2565b601f01601f19169290920160200192915050565b6001600160a01b038416815260606020820181905260009061025690830185610206565b82810360408401526102688185610206565b9695505050505050565b600082516102848184602087016101e2565b919091019291505056fe60806040523480156200001157600080fd5b50604051620022b0380380620022b08339810160408190526200003491620002f8565b8181600562000044838262000410565b50600662000053828262000410565b50506007805460ff19169055506200006d600084620000ce565b620000997f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a684620000ce565b620000c57f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a84620000ce565b505050620004dc565b620000da8282620000de565b5050565b620000f582826200012160201b62000b5a1760201c565b60008281526001602090815260409091206200011c91839062000bde620001c1821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000da576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200017d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001d8836001600160a01b038416620001e1565b90505b92915050565b60008181526001830160205260408120546200022a57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001db565b506000620001db565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200025b57600080fd5b81516001600160401b038082111562000278576200027862000233565b604051601f8301601f19908116603f01168101908282118183101715620002a357620002a362000233565b81604052838152602092508683858801011115620002c057600080fd5b600091505b83821015620002e45785820183015181830184015290820190620002c5565b600093810190920192909252949350505050565b6000806000606084860312156200030e57600080fd5b83516001600160a01b03811681146200032657600080fd5b60208501519093506001600160401b03808211156200034457600080fd5b620003528783880162000249565b935060408601519150808211156200036957600080fd5b50620003788682870162000249565b9150509250925092565b600181811c908216806200039757607f821691505b602082108103620003b857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011c57600081815260208120601f850160051c81016020861015620003e75750805b601f850160051c820191505b818110156200040857828155600101620003f3565b505050505050565b81516001600160401b038111156200042c576200042c62000233565b62000444816200043d845462000382565b84620003be565b602080601f8311600181146200047c5760008415620004635750858301515b600019600386901b1c1916600185901b17855562000408565b600085815260208120601f198616915b82811015620004ad578886015182559484019460019091019084016200048c565b5085821015620004cc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611dc480620004ec6000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806379cc67901161010f578063ca15c873116100a2578063e467f7e011610071578063e467f7e01461041d578063e63ab1e914610430578063f94a138b14610457578063ffc3a7691461046a57600080fd5b8063ca15c873146103bd578063d5391393146103d0578063d547741f146103f7578063dd62ed3e1461040a57600080fd5b806395d89b41116100de57806395d89b4114610387578063a217fddf1461038f578063a457c2d714610397578063a9059cbb146103aa57600080fd5b806379cc67901461032e5780638456cb59146103415780639010d07c1461034957806391d148541461037457600080fd5b8063313ce5671161018757806340c10f191161015657806340c10f19146102d457806342966c68146102e75780635c975abb146102fa57806370a082311461030557600080fd5b8063313ce5671461029757806336568abe146102a657806339509351146102b95780633f4ba83a146102cc57600080fd5b806318160ddd116101c357806318160ddd1461023a57806323b872dd1461024c578063248a9ca31461025f5780632f2ff15d1461028257600080fd5b806301ffc9a7146101ea57806306fdde0314610212578063095ea7b314610227575b600080fd5b6101fd6101f83660046117bd565b61047d565b60405190151581526020015b60405180910390f35b61021a6104a8565b604051610209919061180b565b6101fd61023536600461185a565b61053a565b6004545b604051908152602001610209565b6101fd61025a366004611884565b610552565b61023e61026d3660046118c0565b60009081526020819052604090206001015490565b6102956102903660046118d9565b610576565b005b60405160128152602001610209565b6102956102b43660046118d9565b6105a0565b6101fd6102c736600461185a565b610623565b610295610645565b6102956102e236600461185a565b6106df565b6102956102f53660046118c0565b61072f565b60075460ff166101fd565b61023e610313366004611905565b6001600160a01b031660009081526002602052604090205490565b61029561033c36600461185a565b61073c565b610295610751565b61035c610357366004611920565b6107e7565b6040516001600160a01b039091168152602001610209565b6101fd6103823660046118d9565b610806565b61021a61082f565b61023e600081565b6101fd6103a536600461185a565b61083e565b6101fd6103b836600461185a565b6108b9565b61023e6103cb3660046118c0565b6108c7565b61023e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102956104053660046118d9565b6108de565b61023e610418366004611942565b610903565b61029561042b366004611aa4565b61092e565b61023e7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6101fd610465366004611b08565b610a36565b6101fd610478366004611aa4565b610adb565b60006001600160e01b03198216635a05180f60e01b14806104a257506104a282610bf3565b92915050565b6060600580546104b790611b90565b80601f01602080910402602001604051908101604052809291908181526020018280546104e390611b90565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b5050505050905090565b600033610548818585610c28565b5060019392505050565b600033610560858285610d4c565b61056b858585610dc6565b506001949350505050565b60008281526020819052604090206001015461059181610f9f565b61059b8383610fa9565b505050565b6001600160a01b03811633146106155760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61061f8282610fcb565b5050565b6000336105488185856106368383610903565b6106409190611be0565b610c28565b61066f7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610806565b6106d55760405162461bcd60e51b815260206004820152603160248201527f4c315374616e6461726445524332303a206d75737420686176652070617573656044820152707220726f6c6520746f20756e706175736560781b606482015260840161060c565b6106dd610fed565b565b6107097f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610806565b6107255760405162461bcd60e51b815260040161060c90611bf3565b61061f828261103f565b610739338261112a565b50565b610747823383610d4c565b61061f828261112a565b61077b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610806565b6107df5760405162461bcd60e51b815260206004820152602f60248201527f4c315374616e6461726445524332303a206d757374206861766520706175736560448201526e7220726f6c6520746f20706175736560881b606482015260840161060c565b6106dd611284565b60008281526001602052604081206107ff90836112c1565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600680546104b790611b90565b6000338161084c8286610903565b9050838110156108ac5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161060c565b61056b8286868403610c28565b600033610548818585610dc6565b60008181526001602052604081206104a2906112cd565b6000828152602081905260409020600101546108f981610f9f565b61059b8383610fcb565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b80518251146109965760405162461bcd60e51b815260206004820152602e60248201527f4c315374616e6461726445524332303a2062756c6b206d696e7420617267732060448201526d6d75737420626520657175616c7360901b606482015260840161060c565b6109c07f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610806565b6109dc5760405162461bcd60e51b815260040161060c90611bf3565b60005b825181101561059b57610a248382815181106109fd576109fd611c41565b6020026020010151838381518110610a1757610a17611c41565b602002602001015161103f565b80610a2e81611c57565b9150506109df565b600082518451148015610a4a575081518351145b610a665760405162461bcd60e51b815260040161060c90611c70565b60005b845181101561056b57610ac8858281518110610a8757610a87611c41565b6020026020010151858381518110610aa157610aa1611c41565b6020026020010151858481518110610abb57610abb611c41565b6020026020010151610552565b5080610ad381611c57565b915050610a69565b60008151835114610afe5760405162461bcd60e51b815260040161060c90611c70565b3360005b845181101561056b57610b4882868381518110610b2157610b21611c41565b6020026020010151868481518110610b3b57610b3b611c41565b6020026020010151610dc6565b80610b5281611c57565b915050610b02565b610b648282610806565b61061f576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610b9a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006107ff836001600160a01b0384166112d7565b60006001600160e01b03198216637965db0b60e01b14806104a257506301ffc9a760e01b6001600160e01b03198316146104a2565b6001600160a01b038316610c8a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161060c565b6001600160a01b038216610ceb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161060c565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610d588484610903565b90506000198114610dc05781811015610db35760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161060c565b610dc08484848403610c28565b50505050565b6001600160a01b038316610e2a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161060c565b6001600160a01b038216610e8c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161060c565b610e97838383611326565b6001600160a01b03831660009081526002602052604090205481811015610f0f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161060c565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610f46908490611be0565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f9291815260200190565b60405180910390a3610dc0565b6107398133611331565b610fb38282610b5a565b600082815260016020526040902061059b9082610bde565b610fd58282611395565b600082815260016020526040902061059b90826113fa565b610ff561140f565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166110955760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161060c565b6110a160008383611326565b80600460008282546110b39190611be0565b90915550506001600160a01b038216600090815260026020526040812080548392906110e0908490611be0565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03821661118a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161060c565b61119682600083611326565b6001600160a01b0382166000908152600260205260409020548181101561120a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161060c565b6001600160a01b0383166000908152600260205260408120838303905560048054849290611239908490611cc2565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b61128c611458565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110223390565b60006107ff838361149e565b60006104a2825490565b600081815260018301602052604081205461131e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104a2565b5060006104a2565b61059b8383836114c8565b61133b8282610806565b61061f57611353816001600160a01b0316601461152e565b61135e83602061152e565b60405160200161136f929190611cd5565b60408051601f198184030181529082905262461bcd60e51b825261060c9160040161180b565b61139f8282610806565b1561061f576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006107ff836001600160a01b0384166116ca565b60075460ff166106dd5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161060c565b60075460ff16156106dd5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161060c565b60008260000182815481106114b5576114b5611c41565b9060005260206000200154905092915050565b60075460ff161561059b5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b606482015260840161060c565b6060600061153d836002611d4a565b611548906002611be0565b67ffffffffffffffff8111156115605761156061196c565b6040519080825280601f01601f19166020018201604052801561158a576020820181803683370190505b509050600360fc1b816000815181106115a5576115a5611c41565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106115d4576115d4611c41565b60200101906001600160f81b031916908160001a90535060006115f8846002611d4a565b611603906001611be0565b90505b600181111561167b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061163757611637611c41565b1a60f81b82828151811061164d5761164d611c41565b60200101906001600160f81b031916908160001a90535060049490941c9361167481611d61565b9050611606565b5083156107ff5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161060c565b600081815260018301602052604081205480156117b35760006116ee600183611cc2565b855490915060009061170290600190611cc2565b905081811461176757600086600001828154811061172257611722611c41565b906000526020600020015490508087600001848154811061174557611745611c41565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061177857611778611d78565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104a2565b60009150506104a2565b6000602082840312156117cf57600080fd5b81356001600160e01b0319811681146107ff57600080fd5b60005b838110156118025781810151838201526020016117ea565b50506000910152565b602081526000825180602084015261182a8160408501602087016117e7565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461185557600080fd5b919050565b6000806040838503121561186d57600080fd5b6118768361183e565b946020939093013593505050565b60008060006060848603121561189957600080fd5b6118a28461183e565b92506118b06020850161183e565b9150604084013590509250925092565b6000602082840312156118d257600080fd5b5035919050565b600080604083850312156118ec57600080fd5b823591506118fc6020840161183e565b90509250929050565b60006020828403121561191757600080fd5b6107ff8261183e565b6000806040838503121561193357600080fd5b50508035926020909101359150565b6000806040838503121561195557600080fd5b61195e8361183e565b91506118fc6020840161183e565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156119ab576119ab61196c565b604052919050565b600067ffffffffffffffff8211156119cd576119cd61196c565b5060051b60200190565b600082601f8301126119e857600080fd5b813560206119fd6119f8836119b3565b611982565b82815260059290921b84018101918181019086841115611a1c57600080fd5b8286015b84811015611a3e57611a318161183e565b8352918301918301611a20565b509695505050505050565b600082601f830112611a5a57600080fd5b81356020611a6a6119f8836119b3565b82815260059290921b84018101918181019086841115611a8957600080fd5b8286015b84811015611a3e5780358352918301918301611a8d565b60008060408385031215611ab757600080fd5b823567ffffffffffffffff80821115611acf57600080fd5b611adb868387016119d7565b93506020850135915080821115611af157600080fd5b50611afe85828601611a49565b9150509250929050565b600080600060608486031215611b1d57600080fd5b833567ffffffffffffffff80821115611b3557600080fd5b611b41878388016119d7565b94506020860135915080821115611b5757600080fd5b611b63878388016119d7565b93506040860135915080821115611b7957600080fd5b50611b8686828701611a49565b9150509250925092565b600181811c90821680611ba457607f821691505b602082108103611bc457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156104a2576104a2611bca565b6020808252602e908201527f4c315374616e6461726445524332303a206d7573742068617665206d696e746560408201526d1c881c9bdb19481d1bc81b5a5b9d60921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060018201611c6957611c69611bca565b5060010190565b60208082526032908201527f4c315374616e6461726445524332303a2062756c6b207472616e736665722061604082015271726773206d75737420626520657175616c7360701b606082015260800190565b818103818111156104a2576104a2611bca565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611d0d8160178501602088016117e7565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611d3e8160288401602088016117e7565b01602801949350505050565b80820281158282048414176104a2576104a2611bca565b600081611d7057611d70611bca565b506000190190565b634e487b7160e01b600052603160045260246000fdfea264697066735822122034ba8224f64bdc5388dc50d6acb81cc7da2ae2a0c483033eabf609122c1eb3a464736f6c63430008110033a26469706673582212204928c5f2d7d6cbea37a9a6fd62af112949434c79bd931926ca16c4145cb7103464736f6c63430008110033'

type L1StandardERC20FactoryConstructorParams =
	| [signer?: Signer]
	| ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
	xs: L1StandardERC20FactoryConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class L1StandardERC20Factory__factory extends ContractFactory {
	constructor(...args: L1StandardERC20FactoryConstructorParams) {
		if (isSuperArgs(args)) {
			super(...args)
		} else {
			super(_abi, _bytecode, args[0])
		}
	}

	override deploy(
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<L1StandardERC20Factory> {
		return super.deploy(overrides || {}) as Promise<L1StandardERC20Factory>
	}
	override getDeployTransaction(
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): TransactionRequest {
		return super.getDeployTransaction(overrides || {})
	}
	override attach(address: string): L1StandardERC20Factory {
		return super.attach(address) as L1StandardERC20Factory
	}
	override connect(signer: Signer): L1StandardERC20Factory__factory {
		return super.connect(signer) as L1StandardERC20Factory__factory
	}

	static readonly bytecode = _bytecode
	static readonly abi = _abi
	static createInterface(): L1StandardERC20FactoryInterface {
		return new utils.Interface(_abi) as L1StandardERC20FactoryInterface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): L1StandardERC20Factory {
		return new Contract(address, _abi, signerOrProvider) as L1StandardERC20Factory
	}
}