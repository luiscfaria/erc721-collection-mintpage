import { settings } from '../config/settings-ts';
import { CHAIN_NAMESPACES } from '@web3auth/base';

const networks = [
  {
    name: 'Ethereum Mainnet',
    chainId: 1,
    token: 'ETH',
    testnet: false,
    coinGeckoTokenId: 'ethereum',
    etherscanBaseUrl: 'https://etherscan.io',
    openSeaNetwork: 'ethereum',
    openSeaBaseUrl: 'https://opensea.io/',
  },
  {
    name: 'Polygon (less fees) - 20% off',
    chainId: 137,
    token: 'MATIC',
    testnet: false,
    coinGeckoTokenId: 'matic-network',
    etherscanBaseUrl: 'https://polygonscan.com',
    openSeaNetwork: 'matic',
    openSeaBaseUrl: 'https://opensea.io/',
  },
];

if (settings.nodeEnv === 'test') {
  networks.push({
    name: 'Rinkeby',
    chainId: 4,
    token: 'ETH',
    testnet: false,
    coinGeckoTokenId: 'ethereum',
    etherscanBaseUrl: 'https://rinkeby.etherscan.io',
    openSeaNetwork: 'rinkeby',
    openSeaBaseUrl: 'https://testnets.opensea.io/',
  });
}

const metamaskNetworks = {
  137: {
    chainId: '0x89',
    rpcUrls: ['https://rpc-mainnet.matic.network/'],
    chainName: 'Matic Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
  4: {
    chainId: '0x04',
    rpcUrls: ['https://rinkeby.infura.io/v3/'],
    chainName: 'Rinkeby Test Network',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
  },
};

export { networks, metamaskNetworks };
