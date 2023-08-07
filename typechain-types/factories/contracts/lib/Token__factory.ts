/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type { Token, TokenInterface } from '../../../contracts/lib/Token'

const _abi = [
	{
		inputs: [],
		name: 'SOAS',
		outputs: [
			{
				internalType: 'contract IERC20',
				name: '',
				type: 'IERC20',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'WOAS',
		outputs: [
			{
				internalType: 'contract IERC20',
				name: '',
				type: 'IERC20',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
]

const _bytecode =
	'0x60ae610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063155ce9d1146042578063ccaf803814606b575b600080fd5b604f6001602960991b0181565b6040516001600160a01b03909116815260200160405180910390f35b604f6002602960991b018156fea26469706673582212200bcd3c3f9de5ffd8fd1d06b449483386bdbbba0b4bfc92c4a7261739bbf6e1dd64736f6c634300080c0033'

type TokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
	xs: TokenConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Token__factory extends ContractFactory {
	constructor(...args: TokenConstructorParams) {
		if (isSuperArgs(args)) {
			super(...args)
		} else {
			super(_abi, _bytecode, args[0])
		}
	}

	override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<Token> {
		return super.deploy(overrides || {}) as Promise<Token>
	}
	override getDeployTransaction(
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): TransactionRequest {
		return super.getDeployTransaction(overrides || {})
	}
	override attach(address: string): Token {
		return super.attach(address) as Token
	}
	override connect(signer: Signer): Token__factory {
		return super.connect(signer) as Token__factory
	}

	static readonly bytecode = _bytecode
	static readonly abi = _abi
	static createInterface(): TokenInterface {
		return new utils.Interface(_abi) as TokenInterface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): Token {
		return new Contract(address, _abi, signerOrProvider) as Token
	}
}