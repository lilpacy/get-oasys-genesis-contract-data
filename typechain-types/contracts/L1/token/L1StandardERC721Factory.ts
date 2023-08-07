/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
	BaseContract,
	BigNumber,
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
} from '../../../common'

export interface L1StandardERC721FactoryInterface extends utils.Interface {
	functions: {
		'createStandardERC721(string,string,string)': FunctionFragment
	}

	getFunction(nameOrSignatureOrTopic: 'createStandardERC721'): FunctionFragment

	encodeFunctionData(
		functionFragment: 'createStandardERC721',
		values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
	): string

	decodeFunctionResult(functionFragment: 'createStandardERC721', data: BytesLike): Result

	events: {
		'ERC721Created(string,address)': EventFragment
	}

	getEvent(nameOrSignatureOrTopic: 'ERC721Created'): EventFragment
}

export interface ERC721CreatedEventObject {
	_symbol: string
	_address: string
}
export type ERC721CreatedEvent = TypedEvent<[string, string], ERC721CreatedEventObject>

export type ERC721CreatedEventFilter = TypedEventFilter<ERC721CreatedEvent>

export interface L1StandardERC721Factory extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this
	attach(addressOrName: string): this
	deployed(): Promise<this>

	interface: L1StandardERC721FactoryInterface

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
		createStandardERC721(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			_baseTokenURI: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>
	}

	createStandardERC721(
		_name: PromiseOrValue<string>,
		_symbol: PromiseOrValue<string>,
		_baseTokenURI: PromiseOrValue<string>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	callStatic: {
		createStandardERC721(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			_baseTokenURI: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<void>
	}

	filters: {
		'ERC721Created(string,address)'(
			_symbol?: PromiseOrValue<string> | null,
			_address?: PromiseOrValue<string> | null,
		): ERC721CreatedEventFilter
		ERC721Created(
			_symbol?: PromiseOrValue<string> | null,
			_address?: PromiseOrValue<string> | null,
		): ERC721CreatedEventFilter
	}

	estimateGas: {
		createStandardERC721(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			_baseTokenURI: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>
	}

	populateTransaction: {
		createStandardERC721(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			_baseTokenURI: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>
	}
}
