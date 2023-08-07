import { ethers } from 'ethers';
import { StakeManager__factory, StakeManager } from './typechain-types';
import json from './validators-production.json';

type Address = `0x${string}`;
type Provider = ethers.providers.Provider;
type Signer = ethers.Signer;
type Contract = ethers.Contract;

const _address = '0x0000000000000000000000000000000000001001';
const _provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.mainnet.oasys.games',
);

class StakingManager {
  address: Address;
  provider: Provider;
  signer: Signer | undefined;
  contract: StakeManager;
  constructor(signer?: Signer, address: Address = _address) {
    this.address = address;
    this.provider = _provider;
    this.signer = signer;
    // this.contract = new ethers.Contract(address, abi, signer ? signer : _provider)
    this.contract = StakeManager__factory.connect(
      address as string,
      signer ? signer : _provider,
    );
  }
  getValidatorAddresses(cursor: number, howMany: number): Promise<any> {
    return this.contract.getValidators(0, cursor, howMany);
  }
}

const main = async () => {
  const defaultStakingManager = new StakingManager();
  const vl = (await defaultStakingManager.getValidatorAddresses(0, 100)).owners
    .length;
  const vjl = Object.keys(json).length;
  console.log(vl, vjl);
  //   const notIncludedAddresses = validatorAddrs.filter(
  //     address => !(address in json),
  //   );
};

main().then(console.log).catch(console.error);
