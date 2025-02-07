import type { Chain } from "../src/types";
export default {
  "name": "Neon EVM DevNet",
  "chain": "Solana",
  "rpc": [
    "https://neon-evm-devnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://devnet.neonevm.org"
  ],
  "faucets": [
    "https://neonfaucet.org"
  ],
  "icon": {
    "url": "ipfs://Qmcxevb3v8PEvnvfYgcG3bCBuPhe5YAdsHeaufDChSSR3Q",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "Neon",
    "symbol": "NEON",
    "decimals": 18
  },
  "infoURL": "https://neon-labs.org",
  "shortName": "neonevm-devnet",
  "chainId": 245022926,
  "networkId": 245022926,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://neon-devnet.blockscout.com",
      "icon": {
        "url": "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
        "width": 551,
        "height": 540,
        "format": "png"
      },
      "standard": "EIP3091"
    },
    {
      "name": "native",
      "url": "https://devnet.explorer.neon-labs.org",
      "standard": "EIP3091"
    },
    {
      "name": "neonscan",
      "url": "https://devnet.neonscan.org",
      "standard": "EIP3091"
    }
  ],
  "testnet": false,
  "slug": "neon-evm-devnet"
} as const satisfies Chain;