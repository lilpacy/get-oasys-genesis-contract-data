/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
	BaseContract,
	BigNumber,
	BytesLike,
	CallOverrides,
	PopulatedTransaction,
	Signer,
	utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
	TypedEventFilter,
	TypedEvent,
	TypedListener,
	OnEvent,
	PromiseOrValue,
} from '../../common'

export interface ConstantsInterface extends utils.Interface {
	functions: {
		'MAX_COMMISSION_RATE()': FunctionFragment
		'MAX_REWARD_RATE()': FunctionFragment
		'MIN_BLOCK_PERIOD()': FunctionFragment
		'MIN_EPOCH_PERIOD()': FunctionFragment
		'MIN_JAIL_PERIOD()': FunctionFragment
		'MIN_JAIL_THRESHOLD()': FunctionFragment
		'MIN_VALIDATOR_THRESHOLD()': FunctionFragment
		'REWARD_PRECISION()': FunctionFragment
		'SECONDS_PER_YEAR()': FunctionFragment
	}

	getFunction(
		nameOrSignatureOrTopic:
			| 'MAX_COMMISSION_RATE'
			| 'MAX_REWARD_RATE'
			| 'MIN_BLOCK_PERIOD'
			| 'MIN_EPOCH_PERIOD'
			| 'MIN_JAIL_PERIOD'
			| 'MIN_JAIL_THRESHOLD'
			| 'MIN_VALIDATOR_THRESHOLD'
			| 'REWARD_PRECISION'
			| 'SECONDS_PER_YEAR',
	): FunctionFragment

	encodeFunctionData(functionFragment: 'MAX_COMMISSION_RATE', values?: undefined): string
	encodeFunctionData(functionFragment: 'MAX_REWARD_RATE', values?: undefined): string
	encodeFunctionData(functionFragment: 'MIN_BLOCK_PERIOD', values?: undefined): string
	encodeFunctionData(functionFragment: 'MIN_EPOCH_PERIOD', values?: undefined): string
	encodeFunctionData(functionFragment: 'MIN_JAIL_PERIOD', values?: undefined): string
	encodeFunctionData(functionFragment: 'MIN_JAIL_THRESHOLD', values?: undefined): string
	encodeFunctionData(functionFragment: 'MIN_VALIDATOR_THRESHOLD', values?: undefined): string
	encodeFunctionData(functionFragment: 'REWARD_PRECISION', values?: undefined): string
	encodeFunctionData(functionFragment: 'SECONDS_PER_YEAR', values?: undefined): string

	decodeFunctionResult(functionFragment: 'MAX_COMMISSION_RATE', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'MAX_REWARD_RATE', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'MIN_BLOCK_PERIOD', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'MIN_EPOCH_PERIOD', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'MIN_JAIL_PERIOD', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'MIN_JAIL_THRESHOLD', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'MIN_VALIDATOR_THRESHOLD', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'REWARD_PRECISION', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'SECONDS_PER_YEAR', data: BytesLike): Result

	events: {}
}

export interface Constants extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this
	attach(addressOrName: string): this
	deployed(): Promise<this>

	interface: ConstantsInterface

	queryFilter<TEvent extends TypedEvent>(
		event: TypedEventFilter<TEvent>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined,
	): Promise<Array<TEvent>>

	listeners<TEvent extends TypedEvent>(
		eventFilter?: TypedEventFilter<TEvent>,
	): Array<TypedListener<TEvent>>
	listeners(eventName?: string): Array<Listener>
	removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
	removeAllListeners(eventName?: string): this
	off: OnEvent<this>
	on: OnEvent<this>
	once: OnEvent<this>
	removeListener: OnEvent<this>

	functions: {
		MAX_COMMISSION_RATE(overrides?: CallOverrides): Promise<[BigNumber]>

		MAX_REWARD_RATE(overrides?: CallOverrides): Promise<[BigNumber]>

		MIN_BLOCK_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>

		MIN_EPOCH_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>

		MIN_JAIL_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>

		MIN_JAIL_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>

		MIN_VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>

		REWARD_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>

		SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<[BigNumber]>
	}

	MAX_COMMISSION_RATE(overrides?: CallOverrides): Promise<BigNumber>

	MAX_REWARD_RATE(overrides?: CallOverrides): Promise<BigNumber>

	MIN_BLOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

	MIN_EPOCH_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

	MIN_JAIL_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

	MIN_JAIL_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>

	MIN_VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>

	REWARD_PRECISION(overrides?: CallOverrides): Promise<BigNumber>

	SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>

	callStatic: {
		MAX_COMMISSION_RATE(overrides?: CallOverrides): Promise<BigNumber>

		MAX_REWARD_RATE(overrides?: CallOverrides): Promise<BigNumber>

		MIN_BLOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_EPOCH_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_JAIL_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_JAIL_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>

		REWARD_PRECISION(overrides?: CallOverrides): Promise<BigNumber>

		SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>
	}

	filters: {}

	estimateGas: {
		MAX_COMMISSION_RATE(overrides?: CallOverrides): Promise<BigNumber>

		MAX_REWARD_RATE(overrides?: CallOverrides): Promise<BigNumber>

		MIN_BLOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_EPOCH_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_JAIL_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_JAIL_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>

		MIN_VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>

		REWARD_PRECISION(overrides?: CallOverrides): Promise<BigNumber>

		SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>
	}

	populateTransaction: {
		MAX_COMMISSION_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>

		MAX_REWARD_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>

		MIN_BLOCK_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>

		MIN_EPOCH_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>

		MIN_JAIL_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>

		MIN_JAIL_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>

		MIN_VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>

		REWARD_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>

		SECONDS_PER_YEAR(overrides?: CallOverrides): Promise<PopulatedTransaction>
	}
}
