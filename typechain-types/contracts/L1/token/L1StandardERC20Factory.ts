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

export interface L1StandardERC20FactoryInterface extends utils.Interface {
	functions: {
		'createStandardERC20(string,string)': FunctionFragment
	}

	getFunction(nameOrSignatureOrTopic: 'createStandardERC20'): FunctionFragment

	encodeFunctionData(
		functionFragment: 'createStandardERC20',
		values: [PromiseOrValue<string>, PromiseOrValue<string>],
	): string

	decodeFunctionResult(functionFragment: 'createStandardERC20', data: BytesLike): Result

	events: {
		'ERC20Created(string,address)': EventFragment
	}

	getEvent(nameOrSignatureOrTopic: 'ERC20Created'): EventFragment
}

export interface ERC20CreatedEventObject {
	_symbol: string
	_address: string
}
export type ERC20CreatedEvent = TypedEvent<[string, string], ERC20CreatedEventObject>

export type ERC20CreatedEventFilter = TypedEventFilter<ERC20CreatedEvent>

export interface L1StandardERC20Factory extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this
	attach(addressOrName: string): this
	deployed(): Promise<this>

	interface: L1StandardERC20FactoryInterface

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
		createStandardERC20(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>
	}

	createStandardERC20(
		_name: PromiseOrValue<string>,
		_symbol: PromiseOrValue<string>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	callStatic: {
		createStandardERC20(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<void>
	}

	filters: {
		'ERC20Created(string,address)'(
			_symbol?: PromiseOrValue<string> | null,
			_address?: PromiseOrValue<string> | null,
		): ERC20CreatedEventFilter
		ERC20Created(
			_symbol?: PromiseOrValue<string> | null,
			_address?: PromiseOrValue<string> | null,
		): ERC20CreatedEventFilter
	}

	estimateGas: {
		createStandardERC20(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>
	}

	populateTransaction: {
		createStandardERC20(
			_name: PromiseOrValue<string>,
			_symbol: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>
	}
}
