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
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
	TypedEventFilter,
	TypedEvent,
	TypedListener,
	OnEvent,
	PromiseOrValue,
} from '../../common'

export interface SignersInterface extends utils.Interface {
	functions: {
		'addSigner(address,uint64,bytes)': FunctionFragment
		'getSigners()': FunctionFragment
		'nonce()': FunctionFragment
		'removeSigner(address,uint64,bytes)': FunctionFragment
		'threshold()': FunctionFragment
		'updateThreshold(uint256,uint64,bytes)': FunctionFragment
		'verifySignatures(bytes32,uint64,bytes)': FunctionFragment
	}

	getFunction(
		nameOrSignatureOrTopic:
			| 'addSigner'
			| 'getSigners'
			| 'nonce'
			| 'removeSigner'
			| 'threshold'
			| 'updateThreshold'
			| 'verifySignatures',
	): FunctionFragment

	encodeFunctionData(
		functionFragment: 'addSigner',
		values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>],
	): string
	encodeFunctionData(functionFragment: 'getSigners', values?: undefined): string
	encodeFunctionData(functionFragment: 'nonce', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'removeSigner',
		values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>],
	): string
	encodeFunctionData(functionFragment: 'threshold', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'updateThreshold',
		values: [
			PromiseOrValue<BigNumberish>,
			PromiseOrValue<BigNumberish>,
			PromiseOrValue<BytesLike>,
		],
	): string
	encodeFunctionData(
		functionFragment: 'verifySignatures',
		values: [
			PromiseOrValue<BytesLike>,
			PromiseOrValue<BigNumberish>,
			PromiseOrValue<BytesLike>,
		],
	): string

	decodeFunctionResult(functionFragment: 'addSigner', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'getSigners', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'nonce', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'removeSigner', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'threshold', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'updateThreshold', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'verifySignatures', data: BytesLike): Result

	events: {
		'SignerAdded(address)': EventFragment
		'SignerRemoved(address)': EventFragment
		'ThresholdUpdated(uint256)': EventFragment
	}

	getEvent(nameOrSignatureOrTopic: 'SignerAdded'): EventFragment
	getEvent(nameOrSignatureOrTopic: 'SignerRemoved'): EventFragment
	getEvent(nameOrSignatureOrTopic: 'ThresholdUpdated'): EventFragment
}

export interface SignerAddedEventObject {
	_address: string
}
export type SignerAddedEvent = TypedEvent<[string], SignerAddedEventObject>

export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>

export interface SignerRemovedEventObject {
	_address: string
}
export type SignerRemovedEvent = TypedEvent<[string], SignerRemovedEventObject>

export type SignerRemovedEventFilter = TypedEventFilter<SignerRemovedEvent>

export interface ThresholdUpdatedEventObject {
	_threshold: BigNumber
}
export type ThresholdUpdatedEvent = TypedEvent<[BigNumber], ThresholdUpdatedEventObject>

export type ThresholdUpdatedEventFilter = TypedEventFilter<ThresholdUpdatedEvent>

export interface Signers extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this
	attach(addressOrName: string): this
	deployed(): Promise<this>

	interface: SignersInterface

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
		addSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		getSigners(overrides?: CallOverrides): Promise<[string[]]>

		nonce(overrides?: CallOverrides): Promise<[BigNumber]>

		removeSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		threshold(overrides?: CallOverrides): Promise<[BigNumber]>

		updateThreshold(
			_threshold: PromiseOrValue<BigNumberish>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		verifySignatures(
			_hash: PromiseOrValue<BytesLike>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: CallOverrides,
		): Promise<[boolean]>
	}

	addSigner(
		_address: PromiseOrValue<string>,
		expiration: PromiseOrValue<BigNumberish>,
		signatures: PromiseOrValue<BytesLike>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	getSigners(overrides?: CallOverrides): Promise<string[]>

	nonce(overrides?: CallOverrides): Promise<BigNumber>

	removeSigner(
		_address: PromiseOrValue<string>,
		expiration: PromiseOrValue<BigNumberish>,
		signatures: PromiseOrValue<BytesLike>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	threshold(overrides?: CallOverrides): Promise<BigNumber>

	updateThreshold(
		_threshold: PromiseOrValue<BigNumberish>,
		expiration: PromiseOrValue<BigNumberish>,
		signatures: PromiseOrValue<BytesLike>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	verifySignatures(
		_hash: PromiseOrValue<BytesLike>,
		expiration: PromiseOrValue<BigNumberish>,
		signatures: PromiseOrValue<BytesLike>,
		overrides?: CallOverrides,
	): Promise<boolean>

	callStatic: {
		addSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: CallOverrides,
		): Promise<void>

		getSigners(overrides?: CallOverrides): Promise<string[]>

		nonce(overrides?: CallOverrides): Promise<BigNumber>

		removeSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: CallOverrides,
		): Promise<void>

		threshold(overrides?: CallOverrides): Promise<BigNumber>

		updateThreshold(
			_threshold: PromiseOrValue<BigNumberish>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: CallOverrides,
		): Promise<void>

		verifySignatures(
			_hash: PromiseOrValue<BytesLike>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: CallOverrides,
		): Promise<boolean>
	}

	filters: {
		'SignerAdded(address)'(_address?: PromiseOrValue<string> | null): SignerAddedEventFilter
		SignerAdded(_address?: PromiseOrValue<string> | null): SignerAddedEventFilter

		'SignerRemoved(address)'(_address?: PromiseOrValue<string> | null): SignerRemovedEventFilter
		SignerRemoved(_address?: PromiseOrValue<string> | null): SignerRemovedEventFilter

		'ThresholdUpdated(uint256)'(
			_threshold?: PromiseOrValue<BigNumberish> | null,
		): ThresholdUpdatedEventFilter
		ThresholdUpdated(
			_threshold?: PromiseOrValue<BigNumberish> | null,
		): ThresholdUpdatedEventFilter
	}

	estimateGas: {
		addSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		getSigners(overrides?: CallOverrides): Promise<BigNumber>

		nonce(overrides?: CallOverrides): Promise<BigNumber>

		removeSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		threshold(overrides?: CallOverrides): Promise<BigNumber>

		updateThreshold(
			_threshold: PromiseOrValue<BigNumberish>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		verifySignatures(
			_hash: PromiseOrValue<BytesLike>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: CallOverrides,
		): Promise<BigNumber>
	}

	populateTransaction: {
		addSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		getSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>

		nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>

		removeSigner(
			_address: PromiseOrValue<string>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		threshold(overrides?: CallOverrides): Promise<PopulatedTransaction>

		updateThreshold(
			_threshold: PromiseOrValue<BigNumberish>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		verifySignatures(
			_hash: PromiseOrValue<BytesLike>,
			expiration: PromiseOrValue<BigNumberish>,
			signatures: PromiseOrValue<BytesLike>,
			overrides?: CallOverrides,
		): Promise<PopulatedTransaction>
	}
}