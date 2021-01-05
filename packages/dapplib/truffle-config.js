require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food chat cost remember update half knife equal gentle'; 
let testAccounts = [
"0xce9437f09bb918e70f16e86c85bb9fedb703dabf727a4c4de99b31ea96e6befd",
"0x99763c16671d1f5ea2c87e4828fe04e6ab8aa633efa441a29cbd9827758758ab",
"0x8dcd6847c28df58929b7a7000c8f5ba5fa4b83e88d15a5c1953ac7ff9d9d3204",
"0x90c15d7942e53eb7536d2061735eee2b6376d8cc0d6c2de4d46db8bc17e0294d",
"0x8e1823377ff981b8e4bcba3b41d39cd0e1f7d17ab5a9b65d84f213e384280e37",
"0xd20dda8ba689ae1348a2200de83ea880e5f634f0e9162895739a0aac02b62f5d",
"0xd099d7a6330c98bbc945d3aad52b5a7a39e930d933af93692c5521f58a855cbb",
"0x712c2c99bf6dc514dbdabfa42a0106631dc674c5c14fbf51ab87abf37f7fa778",
"0x4f039a4339685aeba65547675b6b9fd5c2952c31b23d371097eeb4a728714dee",
"0x7afa167e58bbb6650d94bad93f144b0cd4a608f8482619edef06a70faff5e4ce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
