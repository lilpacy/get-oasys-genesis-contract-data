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
	PayableOverrides,
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

export interface WOASInterface extends utils.Interface {
	functions: {
		'allowance(address,address)': FunctionFragment
		'approve(address,uint256)': FunctionFragment
		'balanceOf(address)': FunctionFragment
		'decimals()': FunctionFragment
		'decreaseAllowance(address,uint256)': FunctionFragment
		'deposit()': FunctionFragment
		'increaseAllowance(address,uint256)': FunctionFragment
		'name()': FunctionFragment
		'symbol()': FunctionFragment
		'totalSupply()': FunctionFragment
		'transfer(address,uint256)': FunctionFragment
		'transfer(address[],uint256[])': FunctionFragment
		'transferFrom(address,address,uint256)': FunctionFragment
		'transferFrom(address[],address[],uint256[])': FunctionFragment
		'withdraw(uint256,address)': FunctionFragment
		'withdraw(uint256)': FunctionFragment
	}

	getFunction(
		nameOrSignatureOrTopic:
			| 'allowance'
			| 'approve'
			| 'balanceOf'
			| 'decimals'
			| 'decreaseAllowance'
			| 'deposit'
			| 'increaseAllowance'
			| 'name'
			| 'symbol'
			| 'totalSupply'
			| 'transfer(address,uint256)'
			| 'transfer(address[],uint256[])'
			| 'transferFrom(address,address,uint256)'
			| 'transferFrom(address[],address[],uint256[])'
			| 'withdraw(uint256,address)'
			| 'withdraw(uint256)',
	): FunctionFragment

	encodeFunctionData(
		functionFragment: 'allowance',
		values: [PromiseOrValue<string>, PromiseOrValue<string>],
	): string
	encodeFunctionData(
		functionFragment: 'approve',
		values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
	): string
	encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string
	encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'decreaseAllowance',
		values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
	): string
	encodeFunctionData(functionFragment: 'deposit', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'increaseAllowance',
		values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
	): string
	encodeFunctionData(functionFragment: 'name', values?: undefined): string
	encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
	encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'transfer(address,uint256)',
		values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
	): string
	encodeFunctionData(
		functionFragment: 'transfer(address[],uint256[])',
		values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]],
	): string
	encodeFunctionData(
		functionFragment: 'transferFrom(address,address,uint256)',
		values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
	): string
	encodeFunctionData(
		functionFragment: 'transferFrom(address[],address[],uint256[])',
		values: [
			PromiseOrValue<string>[],
			PromiseOrValue<string>[],
			PromiseOrValue<BigNumberish>[],
		],
	): string
	encodeFunctionData(
		functionFragment: 'withdraw(uint256,address)',
		values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
	): string
	encodeFunctionData(
		functionFragment: 'withdraw(uint256)',
		values: [PromiseOrValue<BigNumberish>],
	): string

	decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'transfer(address,uint256)', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'transfer(address[],uint256[])', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'transferFrom(address,address,uint256)',
		data: BytesLike,
	): Result
	decodeFunctionResult(
		functionFragment: 'transferFrom(address[],address[],uint256[])',
		data: BytesLike,
	): Result
	decodeFunctionResult(functionFragment: 'withdraw(uint256,address)', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'withdraw(uint256)', data: BytesLike): Result

	events: {
		'Approval(address,address,uint256)': EventFragment
		'Deposit(address,uint256)': EventFragment
		'Transfer(address,address,uint256)': EventFragment
		'Withdrawal(address,uint256)': EventFragment
	}

	getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
	getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment
	getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
	getEvent(nameOrSignatureOrTopic: 'Withdrawal'): EventFragment
}

export interface ApprovalEventObject {
	owner: string
	spender: string
	value: BigNumber
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>

export interface DepositEventObject {
	sender: string
	amount: BigNumber
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>

export type DepositEventFilter = TypedEventFilter<DepositEvent>

export interface TransferEventObject {
	from: string
	to: string
	value: BigNumber
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>

export type TransferEventFilter = TypedEventFilter<TransferEvent>

export interface WithdrawalEventObject {
	recipient: string
	amount: BigNumber
}
export type WithdrawalEvent = TypedEvent<[string, BigNumber], WithdrawalEventObject>

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>

export interface WOAS extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this
	attach(addressOrName: string): this
	deployed(): Promise<this>

	interface: WOASInterface

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
		allowance(
			owner: PromiseOrValue<string>,
			spender: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<[BigNumber]>

		approve(
			spender: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

		decimals(overrides?: CallOverrides): Promise<[number]>

		decreaseAllowance(
			spender: PromiseOrValue<string>,
			subtractedValue: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		deposit(
			overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		increaseAllowance(
			spender: PromiseOrValue<string>,
			addedValue: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		name(overrides?: CallOverrides): Promise<[string]>

		symbol(overrides?: CallOverrides): Promise<[string]>

		totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

		'transfer(address,uint256)'(
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		'transfer(address[],uint256[])'(
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		'transferFrom(address,address,uint256)'(
			from: PromiseOrValue<string>,
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		'transferFrom(address[],address[],uint256[])'(
			froms: PromiseOrValue<string>[],
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		'withdraw(uint256,address)'(
			amount: PromiseOrValue<BigNumberish>,
			recipient: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>

		'withdraw(uint256)'(
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<ContractTransaction>
	}

	allowance(
		owner: PromiseOrValue<string>,
		spender: PromiseOrValue<string>,
		overrides?: CallOverrides,
	): Promise<BigNumber>

	approve(
		spender: PromiseOrValue<string>,
		amount: PromiseOrValue<BigNumberish>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

	decimals(overrides?: CallOverrides): Promise<number>

	decreaseAllowance(
		spender: PromiseOrValue<string>,
		subtractedValue: PromiseOrValue<BigNumberish>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	deposit(
		overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	increaseAllowance(
		spender: PromiseOrValue<string>,
		addedValue: PromiseOrValue<BigNumberish>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	name(overrides?: CallOverrides): Promise<string>

	symbol(overrides?: CallOverrides): Promise<string>

	totalSupply(overrides?: CallOverrides): Promise<BigNumber>

	'transfer(address,uint256)'(
		to: PromiseOrValue<string>,
		amount: PromiseOrValue<BigNumberish>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	'transfer(address[],uint256[])'(
		tos: PromiseOrValue<string>[],
		amounts: PromiseOrValue<BigNumberish>[],
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	'transferFrom(address,address,uint256)'(
		from: PromiseOrValue<string>,
		to: PromiseOrValue<string>,
		amount: PromiseOrValue<BigNumberish>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	'transferFrom(address[],address[],uint256[])'(
		froms: PromiseOrValue<string>[],
		tos: PromiseOrValue<string>[],
		amounts: PromiseOrValue<BigNumberish>[],
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	'withdraw(uint256,address)'(
		amount: PromiseOrValue<BigNumberish>,
		recipient: PromiseOrValue<string>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	'withdraw(uint256)'(
		amount: PromiseOrValue<BigNumberish>,
		overrides?: Overrides & { from?: PromiseOrValue<string> },
	): Promise<ContractTransaction>

	callStatic: {
		allowance(
			owner: PromiseOrValue<string>,
			spender: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<BigNumber>

		approve(
			spender: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<boolean>

		balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

		decimals(overrides?: CallOverrides): Promise<number>

		decreaseAllowance(
			spender: PromiseOrValue<string>,
			subtractedValue: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<boolean>

		deposit(overrides?: CallOverrides): Promise<void>

		increaseAllowance(
			spender: PromiseOrValue<string>,
			addedValue: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<boolean>

		name(overrides?: CallOverrides): Promise<string>

		symbol(overrides?: CallOverrides): Promise<string>

		totalSupply(overrides?: CallOverrides): Promise<BigNumber>

		'transfer(address,uint256)'(
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<boolean>

		'transfer(address[],uint256[])'(
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: CallOverrides,
		): Promise<boolean>

		'transferFrom(address,address,uint256)'(
			from: PromiseOrValue<string>,
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<boolean>

		'transferFrom(address[],address[],uint256[])'(
			froms: PromiseOrValue<string>[],
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: CallOverrides,
		): Promise<boolean>

		'withdraw(uint256,address)'(
			amount: PromiseOrValue<BigNumberish>,
			recipient: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<void>

		'withdraw(uint256)'(
			amount: PromiseOrValue<BigNumberish>,
			overrides?: CallOverrides,
		): Promise<void>
	}

	filters: {
		'Approval(address,address,uint256)'(
			owner?: PromiseOrValue<string> | null,
			spender?: PromiseOrValue<string> | null,
			value?: null,
		): ApprovalEventFilter
		Approval(
			owner?: PromiseOrValue<string> | null,
			spender?: PromiseOrValue<string> | null,
			value?: null,
		): ApprovalEventFilter

		'Deposit(address,uint256)'(
			sender?: PromiseOrValue<string> | null,
			amount?: null,
		): DepositEventFilter
		Deposit(sender?: PromiseOrValue<string> | null, amount?: null): DepositEventFilter

		'Transfer(address,address,uint256)'(
			from?: PromiseOrValue<string> | null,
			to?: PromiseOrValue<string> | null,
			value?: null,
		): TransferEventFilter
		Transfer(
			from?: PromiseOrValue<string> | null,
			to?: PromiseOrValue<string> | null,
			value?: null,
		): TransferEventFilter

		'Withdrawal(address,uint256)'(
			recipient?: PromiseOrValue<string> | null,
			amount?: null,
		): WithdrawalEventFilter
		Withdrawal(recipient?: PromiseOrValue<string> | null, amount?: null): WithdrawalEventFilter
	}

	estimateGas: {
		allowance(
			owner: PromiseOrValue<string>,
			spender: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<BigNumber>

		approve(
			spender: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

		decimals(overrides?: CallOverrides): Promise<BigNumber>

		decreaseAllowance(
			spender: PromiseOrValue<string>,
			subtractedValue: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		deposit(
			overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		increaseAllowance(
			spender: PromiseOrValue<string>,
			addedValue: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		name(overrides?: CallOverrides): Promise<BigNumber>

		symbol(overrides?: CallOverrides): Promise<BigNumber>

		totalSupply(overrides?: CallOverrides): Promise<BigNumber>

		'transfer(address,uint256)'(
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		'transfer(address[],uint256[])'(
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		'transferFrom(address,address,uint256)'(
			from: PromiseOrValue<string>,
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		'transferFrom(address[],address[],uint256[])'(
			froms: PromiseOrValue<string>[],
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		'withdraw(uint256,address)'(
			amount: PromiseOrValue<BigNumberish>,
			recipient: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>

		'withdraw(uint256)'(
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<BigNumber>
	}

	populateTransaction: {
		allowance(
			owner: PromiseOrValue<string>,
			spender: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<PopulatedTransaction>

		approve(
			spender: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		balanceOf(
			account: PromiseOrValue<string>,
			overrides?: CallOverrides,
		): Promise<PopulatedTransaction>

		decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

		decreaseAllowance(
			spender: PromiseOrValue<string>,
			subtractedValue: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		deposit(
			overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		increaseAllowance(
			spender: PromiseOrValue<string>,
			addedValue: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		name(overrides?: CallOverrides): Promise<PopulatedTransaction>

		symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

		totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

		'transfer(address,uint256)'(
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		'transfer(address[],uint256[])'(
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		'transferFrom(address,address,uint256)'(
			from: PromiseOrValue<string>,
			to: PromiseOrValue<string>,
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		'transferFrom(address[],address[],uint256[])'(
			froms: PromiseOrValue<string>[],
			tos: PromiseOrValue<string>[],
			amounts: PromiseOrValue<BigNumberish>[],
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		'withdraw(uint256,address)'(
			amount: PromiseOrValue<BigNumberish>,
			recipient: PromiseOrValue<string>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>

		'withdraw(uint256)'(
			amount: PromiseOrValue<BigNumberish>,
			overrides?: Overrides & { from?: PromiseOrValue<string> },
		): Promise<PopulatedTransaction>
	}
}
