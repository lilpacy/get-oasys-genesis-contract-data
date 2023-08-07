/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
	BaseContract,
	BigNumber,
	BigNumberish,
	BytesLike,
	CallOverrides,
	ContractTransaction,
	Overrides,
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
} from '../common'

export declare namespace IEnvironment {
	export type EnvironmentValueStruct = {
		startBlock: PromiseOrValue<BigNumberish>
		startEpoch: PromiseOrValue<BigNumberish>
		blockPeriod: PromiseOrValue<BigNumberish>
		epochPeriod: PromiseOrValue<BigNumberish>
		rewardRate: PromiseOrValue<BigNumberish>
		commissionRate: PromiseOrValue<BigNumberish>
		validatorThreshold: PromiseOrValue<BigNumberish>
		jailThreshold: PromiseOrValue<BigNumberish>
		jailPeriod: PromiseOrValue<BigNumberish>
	}

	export type EnvironmentValueStructOutput = [
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
	] & {
		startBlock: BigNumber
		startEpoch: BigNumber
		blockPeriod: BigNumber
		epochPeriod: BigNumber
		rewardRate: BigNumber
		commissionRate: BigNumber
		validatorThreshold: BigNumber
		jailThreshold: BigNumber
		jailPeriod: BigNumber
	}
}

export interface EnvironmentInterface extends utils.Interface {
	functions: {
		'epoch()': FunctionFragment
		'findValue(uint256)': FunctionFragment
		'initialize((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))': FunctionFragment
		'initialized()': FunctionFragment
		'isFirstBlock()': FunctionFragment
		'isLastBlock()': FunctionFragment
		'nextValue()': FunctionFragment
		'updateValue((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))': FunctionFragment
		'updates(uint256)': FunctionFragment
		'value()': FunctionFragment
		'values(uint256)': FunctionFragment
	}

	getFunction(
		nameOrSignatureOrTopic:
			| 'epoch'
			| 'findValue'
			| 'initialize'
			| 'initialized'
			| 'isFirstBlock'
			| 'isLastBlock'
			| 'nextValue'
			| 'updateValue'
			| 'updates'
			| 'value'
			| 'values',
	): FunctionFragment

	encodeFunctionData(functionFragment: 'epoch', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'findValue',
		values: [PromiseOrValue<BigNumberish>],
	): string
	encodeFunctionData(
		functionFragment: 'initialize',
		values: [IEnvironment.EnvironmentValueStruct],
	): string
	encodeFunctionData(functionFragment: 'initialized', values?: undefined): string
	encodeFunctionData(functionFragment: 'isFirstBlock', values?: undefined): string
	encodeFunctionData(functionFragment: 'isLastBlock', values?: undefined): string
	encodeFunctionData(functionFragment: 'nextValue', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'updateValue',
		values: [IEnvironment.EnvironmentValueStruct],
	): string
	encodeFunctionData(functionFragment: 'updates', values: [PromiseOrValue<BigNumberish>]): string
	encodeFunctionData(functionFragment: 'value', values?: undefined): string
	encodeFunctionData(functionFragment: 'values', values: [PromiseOrValue<BigNumberish>]): string

	decodeFunctionResult(functionFragment: 'epoch', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'findValue', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'initialized', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'isFirstBlock', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'isLastBlock', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'nextValue', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'updateValue', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'updates', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'value', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'values', data: BytesLike): Result

	events: {}
}

export interface Environment extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this
	attach(addressOrName: string): this
	deployed(): Promise<this>

	interface: EnvironmentInterface

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
		epoch(overrides?: CallOverrides): Promise<[BigNumber]>

		findValue(
			_epoch: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<[IEnvironment.EnvironmentValueStructOutput]>

		initialize(
			initialValue: IEnvironment.EnvironmentValueStruct,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		initialized(overrides?: CallOverrides): Promise<[boolean]>

		isFirstBlock(overrides?: CallOverrides): Promise<[boolean]>

		isLastBlock(overrides?: CallOverrides): Promise<[boolean]>

		nextValue(overrides?: CallOverrides): Promise<[IEnvironment.EnvironmentValueStructOutput]>

		updateValue(
			newValue: IEnvironment.EnvironmentValueStruct,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		updates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>

		value(overrides?: CallOverrides): Promise<[IEnvironment.EnvironmentValueStructOutput]>

		values(
			arg0: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<
			[
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
			] & {
				startBlock: BigNumber
				startEpoch: BigNumber
				blockPeriod: BigNumber
				epochPeriod: BigNumber
				rewardRate: BigNumber
				commissionRate: BigNumber
				validatorThreshold: BigNumber
				jailThreshold: BigNumber
				jailPeriod: BigNumber
			}
		>
	}

	epoch(overrides?: CallOverrides): Promise<BigNumber>

	findValue(
		_epoch: PromiseOrValue<BigNumberish>,
		overrides?: CallOverrides,
	): Promise<IEnvironment.EnvironmentValueStructOutput>

	initialize(
		initialValue: IEnvironment.EnvironmentValueStruct,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	initialized(overrides?: CallOverrides): Promise<boolean>

	isFirstBlock(overrides?: CallOverrides): Promise<boolean>

	isLastBlock(overrides?: CallOverrides): Promise<boolean>

	nextValue(overrides?: CallOverrides): Promise<IEnvironment.EnvironmentValueStructOutput>

	updateValue(
		newValue: IEnvironment.EnvironmentValueStruct,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	updates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

	value(overrides?: CallOverrides): Promise<IEnvironment.EnvironmentValueStructOutput>

	values(
		arg0: PromiseOrValue<BigNumberish>,
		overrides?: CallOverrides,
	): Promise<
		[
			BigNumber,
			BigNumber,
			BigNumber,
			BigNumber,
			BigNumber,
			BigNumber,
			BigNumber,
			BigNumber,
			BigNumber,
		] & {
			startBlock: BigNumber
			startEpoch: BigNumber
			blockPeriod: BigNumber
			epochPeriod: BigNumber
			rewardRate: BigNumber
			commissionRate: BigNumber
			validatorThreshold: BigNumber
			jailThreshold: BigNumber
			jailPeriod: BigNumber
		}
	>

	callStatic: {
		epoch(overrides?: CallOverrides): Promise<BigNumber>

		findValue(
			_epoch: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<IEnvironment.EnvironmentValueStructOutput>

		initialize(
			initialValue: IEnvironment.EnvironmentValueStruct,
			overrides?: CallOverrides,
		): Promise<void>

		initialized(overrides?: CallOverrides): Promise<boolean>

		isFirstBlock(overrides?: CallOverrides): Promise<boolean>

		isLastBlock(overrides?: CallOverrides): Promise<boolean>

		nextValue(overrides?: CallOverrides): Promise<IEnvironment.EnvironmentValueStructOutput>

		updateValue(
			newValue: IEnvironment.EnvironmentValueStruct,
			overrides?: CallOverrides,
		): Promise<void>

		updates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

		value(overrides?: CallOverrides): Promise<IEnvironment.EnvironmentValueStructOutput>

		values(
			arg0: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<
			[
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
				BigNumber,
			] & {
				startBlock: BigNumber
				startEpoch: BigNumber
				blockPeriod: BigNumber
				epochPeriod: BigNumber
				rewardRate: BigNumber
				commissionRate: BigNumber
				validatorThreshold: BigNumber
				jailThreshold: BigNumber
				jailPeriod: BigNumber
			}
		>
	}

	filters: {}

	estimateGas: {
		epoch(overrides?: CallOverrides): Promise<BigNumber>

		findValue(
			_epoch: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<BigNumber>

		initialize(
			initialValue: IEnvironment.EnvironmentValueStruct,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		initialized(overrides?: CallOverrides): Promise<BigNumber>

		isFirstBlock(overrides?: CallOverrides): Promise<BigNumber>

		isLastBlock(overrides?: CallOverrides): Promise<BigNumber>

		nextValue(overrides?: CallOverrides): Promise<BigNumber>

		updateValue(
			newValue: IEnvironment.EnvironmentValueStruct,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		updates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

		value(overrides?: CallOverrides): Promise<BigNumber>

		values(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>
	}

	populateTransaction: {
		epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>

		findValue(
			_epoch: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<PopulatedTransaction>

		initialize(
			initialValue: IEnvironment.EnvironmentValueStruct,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>

		isFirstBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

		isLastBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

		nextValue(overrides?: CallOverrides): Promise<PopulatedTransaction>

		updateValue(
			newValue: IEnvironment.EnvironmentValueStruct,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		updates(
			arg0: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<PopulatedTransaction>

		value(overrides?: CallOverrides): Promise<PopulatedTransaction>

		values(
			arg0: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<PopulatedTransaction>
	}
}
