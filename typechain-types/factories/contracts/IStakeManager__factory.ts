/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { IStakeManager, IStakeManagerInterface } from '../../contracts/IStakeManager'

const _abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'AddedRewardBalance',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'ClaimedCommissions',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'lockedUnstake',
				type: 'uint256',
			},
		],
		name: 'ClaimedLockedUnstake',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'ClaimedRewards',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'oldOperator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newOperator',
				type: 'address',
			},
		],
		name: 'OperatorUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'ReStaked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum Token.Type',
				name: 'token',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Staked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum Token.Type',
				name: 'token',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Unstaked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'lockedUnstake',
				type: 'uint256',
			},
		],
		name: 'UnstakedV2',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'epochs',
				type: 'uint256[]',
			},
		],
		name: 'ValidatorActivated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'epochs',
				type: 'uint256[]',
			},
		],
		name: 'ValidatorDeactivated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'until',
				type: 'uint256',
			},
		],
		name: 'ValidatorJailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
		],
		name: 'ValidatorJoined',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
		],
		name: 'ValidatorSlashed',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'epochs',
				type: 'uint256[]',
			},
		],
		name: 'activateValidator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'addRewardBalance',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epochs',
				type: 'uint256',
			},
		],
		name: 'claimCommissions',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'lockedUnstake',
				type: 'uint256',
			},
		],
		name: 'claimLockedUnstake',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epochs',
				type: 'uint256',
			},
		],
		name: 'claimRewards',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
		],
		name: 'claimUnstakes',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'epochs',
				type: 'uint256[]',
			},
		],
		name: 'deactivateValidator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epoch',
				type: 'uint256',
			},
		],
		name: 'getBlockAndSlashes',
		outputs: [
			{
				internalType: 'uint256',
				name: 'blocks',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'slashes',
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
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epochs',
				type: 'uint256',
			},
		],
		name: 'getCommissions',
		outputs: [
			{
				internalType: 'uint256',
				name: 'commissions',
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
				name: 'staker',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'lockedUnstake',
				type: 'uint256',
			},
		],
		name: 'getLockedUnstake',
		outputs: [
			{
				internalType: 'enum Token.Type',
				name: 'token',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'unlockTime',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'claimable',
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
				name: 'staker',
				type: 'address',
			},
		],
		name: 'getLockedUnstakeCount',
		outputs: [
			{
				internalType: 'uint256',
				name: 'count',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'staker',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'cursor',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'howMany',
				type: 'uint256',
			},
		],
		name: 'getLockedUnstakes',
		outputs: [
			{
				internalType: 'enum Token.Type[]',
				name: 'tokens',
				type: 'uint8[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'unlockTimes',
				type: 'uint256[]',
			},
			{
				internalType: 'bool[]',
				name: 'claimable',
				type: 'bool[]',
			},
			{
				internalType: 'uint256',
				name: 'newCursor',
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
				name: 'staker',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epochs',
				type: 'uint256',
			},
		],
		name: 'getRewards',
		outputs: [
			{
				internalType: 'uint256',
				name: 'rewards',
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
				name: 'staker',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epoch',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'cursor',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'howMany',
				type: 'uint256',
			},
		],
		name: 'getStakerStakes',
		outputs: [
			{
				internalType: 'address[]',
				name: 'validators',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'oasStakes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'woasStakes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'soasStakes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'newCursor',
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
				name: 'cursor',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'howMany',
				type: 'uint256',
			},
		],
		name: 'getStakers',
		outputs: [
			{
				internalType: 'address[]',
				name: 'stakers',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'newCursor',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'validators',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'epochs',
				type: 'uint256',
			},
		],
		name: 'getTotalRewards',
		outputs: [
			{
				internalType: 'uint256',
				name: 'rewards',
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
				name: 'epoch',
				type: 'uint256',
			},
		],
		name: 'getTotalStake',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amounts',
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
				name: 'staker',
				type: 'address',
			},
		],
		name: 'getUnstakes',
		outputs: [
			{
				internalType: 'uint256',
				name: 'oasUnstakes',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'woasUnstakes',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'soasUnstakes',
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
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epoch',
				type: 'uint256',
			},
		],
		name: 'getValidatorInfo',
		outputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'active',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'jailed',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'candidate',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'stakes',
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
				name: 'cursor',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'howMany',
				type: 'uint256',
			},
		],
		name: 'getValidatorOwners',
		outputs: [
			{
				internalType: 'address[]',
				name: 'owners',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'newCursor',
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
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epoch',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'cursor',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'howMany',
				type: 'uint256',
			},
		],
		name: 'getValidatorStakes',
		outputs: [
			{
				internalType: 'address[]',
				name: 'stakers',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'stakes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'newCursor',
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
				name: 'epoch',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'cursor',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'howMany',
				type: 'uint256',
			},
		],
		name: 'getValidators',
		outputs: [
			{
				internalType: 'address[]',
				name: 'owners',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'operators',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'stakes',
				type: 'uint256[]',
			},
			{
				internalType: 'bool[]',
				name: 'candidates',
				type: 'bool[]',
			},
			{
				internalType: 'uint256',
				name: 'newCursor',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IEnvironment',
				name: '_environment',
				type: 'address',
			},
			{
				internalType: 'contract IAllowlist',
				name: '_allowlist',
				type: 'address',
			},
		],
		name: 'initialize',
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
		],
		name: 'joinValidator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'epochs',
				type: 'uint256',
			},
		],
		name: 'restakeCommissions',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'epochs',
				type: 'uint256',
			},
		],
		name: 'restakeRewards',
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
				internalType: 'uint256',
				name: 'blocks',
				type: 'uint256',
			},
		],
		name: 'slash',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'enum Token.Type',
				name: 'token',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'stake',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'enum Token.Type',
				name: 'token',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'unstake',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'enum Token.Type',
				name: 'token',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'unstakeV2',
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
		],
		name: 'updateOperator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
]

export class IStakeManager__factory {
	static readonly abi = _abi
	static createInterface(): IStakeManagerInterface {
		return new utils.Interface(_abi) as IStakeManagerInterface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): IStakeManager {
		return new Contract(address, _abi, signerOrProvider) as IStakeManager
	}
}
