/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type {
	INFTBridgeSidechain,
	INFTBridgeSidechainInterface,
} from '../../../contracts/nft-bridge/INFTBridgeSidechain'

const _abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'mainchainId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'depositIndex',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'mainchainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sidechainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'mainFrom',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sideTo',
				type: 'address',
			},
		],
		name: 'DepositFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'mainchainId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'depositIndex',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'mainchainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sidechainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'mainFrom',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sideTo',
				type: 'address',
			},
		],
		name: 'DepositFinalized',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'mainchainId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'mainchainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sidechainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'symbol',
				type: 'string',
			},
		],
		name: 'SidechainERC721Created',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'withdrawalIndex',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'mainchainId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'depositIndex',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'mainchainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sidechainERC721',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sideFrom',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'mainTo',
				type: 'address',
			},
		],
		name: 'WithdrawalInitiated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'withdrawalIndex',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'mainchainId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'depositIndex',
				type: 'uint256',
			},
		],
		name: 'WithdrawalRejected',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'sidechainId',
				type: 'uint256',
			},
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
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol',
				type: 'string',
			},
		],
		name: 'createSidechainERC721',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'sidechainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'mainchainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'depositIndex',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'mainchainERC721',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'mainFrom',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'sideTo',
				type: 'address',
			},
		],
		name: 'finalizeDeposit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
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
		],
		name: 'getSidechainERC721',
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
				name: 'withdrawalIndex',
				type: 'uint256',
			},
		],
		name: 'getWithdrawalInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'sidechainERC721',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'sideFrom',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'rejected',
						type: 'bool',
					},
				],
				internalType: 'struct INFTBridgeSidechain.WithdrawalInfo',
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
				name: 'sidechainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'withdrawalIndex',
				type: 'uint256',
			},
		],
		name: 'rejectWithdrawal',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'sidechainId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'newRelayer',
				type: 'address',
			},
		],
		name: 'transferSidechainRelayer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sidechainERC721',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'mainTo',
				type: 'address',
			},
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
]

export class INFTBridgeSidechain__factory {
	static readonly abi = _abi
	static createInterface(): INFTBridgeSidechainInterface {
		return new utils.Interface(_abi) as INFTBridgeSidechainInterface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): INFTBridgeSidechain {
		return new Contract(address, _abi, signerOrProvider) as INFTBridgeSidechain
	}
}
