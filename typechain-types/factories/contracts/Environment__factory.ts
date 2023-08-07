/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../common'
import type { Environment, EnvironmentInterface } from '../../contracts/Environment'

const _abi = [
	{
		inputs: [],
		name: 'AlreadyInitialized',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OnlyBlockProducer',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OnlyNotLastBlock',
		type: 'error',
	},
	{
		inputs: [],
		name: 'PastEpoch',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'detail',
				type: 'string',
			},
		],
		name: 'ValidationError',
		type: 'error',
	},
	{
		inputs: [],
		name: 'epoch',
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
				name: '_epoch',
				type: 'uint256',
			},
		],
		name: 'findValue',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startBlock',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startEpoch',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'blockPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'epochPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'rewardRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'validatorThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailPeriod',
						type: 'uint256',
					},
				],
				internalType: 'struct IEnvironment.EnvironmentValue',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startBlock',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startEpoch',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'blockPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'epochPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'rewardRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'validatorThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailPeriod',
						type: 'uint256',
					},
				],
				internalType: 'struct IEnvironment.EnvironmentValue',
				name: 'initialValue',
				type: 'tuple',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initialized',
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
		name: 'isFirstBlock',
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
		name: 'isLastBlock',
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
		name: 'nextValue',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startBlock',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startEpoch',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'blockPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'epochPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'rewardRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'validatorThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailPeriod',
						type: 'uint256',
					},
				],
				internalType: 'struct IEnvironment.EnvironmentValue',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startBlock',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startEpoch',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'blockPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'epochPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'rewardRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'validatorThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailPeriod',
						type: 'uint256',
					},
				],
				internalType: 'struct IEnvironment.EnvironmentValue',
				name: 'newValue',
				type: 'tuple',
			},
		],
		name: 'updateValue',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'updates',
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
		inputs: [],
		name: 'value',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startBlock',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startEpoch',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'blockPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'epochPeriod',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'rewardRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'commissionRate',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'validatorThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailThreshold',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'jailPeriod',
						type: 'uint256',
					},
				],
				internalType: 'struct IEnvironment.EnvironmentValue',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'values',
		outputs: [
			{
				internalType: 'uint256',
				name: 'startBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'startEpoch',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'blockPeriod',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'epochPeriod',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'rewardRate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'commissionRate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'validatorThreshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'jailThreshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'jailPeriod',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
]

const _bytecode =
	'0x608060405234801561001057600080fd5b50611048806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063900cf0cf11610071578063900cf0cf146101b9578063b4c2f727146101cf578063bd4eff19146101e2578063ccfb9935146101f5578063d4a53686146101fd578063fcbb371b1461020557600080fd5b806308a54356146100ae578063158ef93e146100c35780633fa4f245146100e55780634ba7ed391461015a5780635e383d2114610162575b600080fd5b6100c16100bc366004610ec6565b610218565b005b6000546100d09060ff1681565b60405190151581526020015b60405180910390f35b6100ed61027e565b6040516100dc9190600061012082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525092915050565b6100d061031a565b610175610170366004610f41565b610338565b60408051998a5260208a0198909852968801959095526060870193909352608086019190915260a085015260c084015260e0830152610100820152610120016100dc565b6101c1610396565b6040519081526020016100dc565b6101c16101dd366004610f41565b6103d7565b6100c16101f0366004610ec6565b6103f8565b6100ed6104b9565b6100d061059b565b6100ed610213366004610f41565b6105be565b33411461023857604051631cf4735960e01b815260040160405180910390fd5b60005460ff161561025b5760405162dc149f60e41b815260040160405180910390fd5b6000805460ff191660019081178255908252602082015261027b816106df565b50565b610286610e42565b60006102906109a8565b905061029e81439054111590565b6102af576102aa6109e6565b6102b1565b805b604080516101208101825282548152600183015460208201526002830154918101919091526003820154606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260089091015461010082015292915050565b600061032461027e565b606001516103329043610f70565b15919050565b6002818154811061034857600080fd5b90600052602060002090600902016000915090508060000154908060010154908060020154908060030154908060040154908060050154908060060154908060070154908060080154905089565b6000806103a16109a8565b90506103af81439054111590565b6103c8576103c36103be6109e6565b610a39565b6103d1565b6103d181610a39565b91505090565b600181815481106103e757600080fd5b600091825260209091200154905081565b33411461041857604051631cf4735960e01b815260040160405180910390fd5b61042061059b565b1561043e57604051631e59ccd960e01b815260040160405180910390fd5b610446610396565b81602001511161046957604051630eae4c9760e01b815260040160405180910390fd5b60006104736109a8565b905061048181439054111590565b15610497576104908183610a67565b82526104ac565b6104a9826104a36109e6565b90610a67565b82525b6104b5826106df565b5050565b6104c1610e42565b60006104cb61027e565b905060006104d76109a8565b90506000826060015183602001516104ed610396565b6104f79190610f9a565b610502906001610fb1565b61050c9190610fc9565b83516105189190610fb1565b905061052682829054111590565b6105305782610593565b604080516101208101825283548152600184015460208201526002840154918101919091526003830154606082015260048301546080820152600583015460a0820152600683015460c0820152600783015460e082015260088301546101008201525b935050505090565b60006105a561027e565b606001516105b4436001610fb1565b6103329190610f70565b6105c6610e42565b6106d96002805480602002602001604051908101604052809291908181526020016000905b828210156106785783829060005260206000209060090201604051806101200160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820154815260200160078201548152602001600882015481525050815260200190600101906105eb565b5050600180546040805160208084028201810190925282815289955093508301828280156106c557602002820191906000526020600020905b8154815260200190600101908083116106b1575b5050505050610a9f9092919063ffffffff16565b92915050565b6106e881610b35565b6001548015806107305750610730436002610704600185610f9a565b8154811061071457610714610fe8565b90600052602060002090600902016109df90919063ffffffff16565b156108ed57506020810180516001805480820182557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6019190915560028054918201815560005282517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace60099092029182015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf82015560408201517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad082015560608201517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad182015560808201517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad282015560a08201517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad382015560c08201517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad482015560e08201517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad5820155610100909101517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad690910155565b602082015160016108fe8184610f9a565b8154811061090e5761090e610fe8565b600091825260209091200155816002610928600184610f9a565b8154811061093857610938610fe8565b9060005260206000209060090201600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e0820151816007015561010082015181600801559050505050565b60028054600091906109bc90600190610f9a565b815481106109cc576109cc610fe8565b9060005260206000209060090201905090565b9054111590565b6002546000906001811415610a1d576002600081548110610a0957610a09610fe8565b906000526020600020906009020191505090565b6002610a298183610f9a565b81548110610a0957610a09610fe8565b6003810154815460009190610a4e9043610f9a565b610a589190610ffe565b82600101546106d99190610fb1565b6000826003015483600101548360200151610a829190610f9a565b610a8c9190610fc9565b8354610a989190610fb1565b9392505050565b610aa7610e42565b83518285610ab6600184610f9a565b81518110610ac657610ac6610fe8565b602002602001015111610aff5783610adf600183610f9a565b81518110610aef57610aef610fe8565b6020026020010151915050610a98565b6000610b0e8685600085610d95565b9050848181518110610b2257610b22610fe8565b6020026020010151925050509392505050565b600181604001511015610b905760405163a1b63ceb60e01b815260206004820152601960248201527f626c6f636b506572696f6420697320746f6f20736d616c6c2e0000000000000060448201526064015b60405180910390fd5b600381606001511015610be65760405163a1b63ceb60e01b815260206004820152601960248201527f65706f6368506572696f6420697320746f6f20736d616c6c2e000000000000006044820152606401610b87565b606481608001511115610c3c5760405163a1b63ceb60e01b815260206004820152601860248201527f7265776172645261746520697320746f6f206c617267652e00000000000000006044820152606401610b87565b60648160a001511115610c925760405163a1b63ceb60e01b815260206004820152601c60248201527f636f6d6d697373696f6e5261746520697320746f6f206c617267652e000000006044820152606401610b87565b60018160c001511015610ce85760405163a1b63ceb60e01b815260206004820181905260248201527f76616c696461746f725468726573686f6c6420697320746f6f20736d616c6c2e6044820152606401610b87565b60018160e001511015610d3e5760405163a1b63ceb60e01b815260206004820152601b60248201527f6a61696c5468726573686f6c6420697320746f6f20736d616c6c2e00000000006044820152606401610b87565b6001816101000151101561027b5760405163a1b63ceb60e01b815260206004820152601860248201527f6a61696c506572696f6420697320746f6f20736d616c6c2e00000000000000006044820152606401610b87565b600081831415610db157610daa600183610f9a565b9050610e3a565b60006002610dbf8486610fb1565b610dc99190610ffe565b905084868281518110610dde57610dde610fe8565b60200260200101511115610e0057610df886868684610d95565b915050610e3a565b84868281518110610e1357610e13610fe8565b60200260200101511015610e3757610df88686610e31846001610fb1565b86610d95565b90505b949350505050565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051610120810167ffffffffffffffff81118282101715610ec057634e487b7160e01b600052604160045260246000fd5b60405290565b60006101208284031215610ed957600080fd5b610ee1610e8e565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013581830152508091505092915050565b600060208284031215610f5357600080fd5b5035919050565b634e487b7160e01b600052601260045260246000fd5b600082610f7f57610f7f610f5a565b500690565b634e487b7160e01b600052601160045260246000fd5b600082821015610fac57610fac610f84565b500390565b60008219821115610fc457610fc4610f84565b500190565b6000816000190483118215151615610fe357610fe3610f84565b500290565b634e487b7160e01b600052603260045260246000fd5b60008261100d5761100d610f5a565b50049056fea26469706673582212206732433a35efc4cfa12fb88d25bcb8e7433ee5f49e858c5318248d7aeb57aa6464736f6c634300080c0033'

type EnvironmentConstructorParams =
	| [signer?: Signer]
	| ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
	xs: EnvironmentConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Environment__factory extends ContractFactory {
	constructor(...args: EnvironmentConstructorParams) {
		if (isSuperArgs(args)) {
			super(...args)
		} else {
			super(_abi, _bytecode, args[0])
		}
	}

	override deploy(
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<Environment> {
		return super.deploy(overrides || {}) as Promise<Environment>
	}
	override getDeployTransaction(
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): TransactionRequest {
		return super.getDeployTransaction(overrides || {})
	}
	override attach(address: string): Environment {
		return super.attach(address) as Environment
	}
	override connect(signer: Signer): Environment__factory {
		return super.connect(signer) as Environment__factory
	}

	static readonly bytecode = _bytecode
	static readonly abi = _abi
	static createInterface(): EnvironmentInterface {
		return new utils.Interface(_abi) as EnvironmentInterface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): Environment {
		return new Contract(address, _abi, signerOrProvider) as Environment
	}
}
