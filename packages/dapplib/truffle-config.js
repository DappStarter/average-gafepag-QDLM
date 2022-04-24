require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note outside coast grace loan flush genius'; 
let testAccounts = [
"0x39db70a244902ff86582fb5d8771a5fb53338911b5ade702097148c82b7d68fb",
"0x71b51654872d9b1299f8b89b1f49e1b12a475a06091f3624ebb85b56134af86f",
"0x645b48463720d13c5135860a44b1f7ce6c2d4778cf5eb26b7de953a869e2e70c",
"0xd4e61989cd73c2992172e6227ece2ca8b57742bbccd5a262f45006ebd37b63d6",
"0x0d9fc39e5e4a94aa61db077270b709bd337a3eabb7094d0cf62a57f2598893c3",
"0xaf0c8d5ee12badaa094038c9d9b0315b923ded5e01aa59c16099c7533d51dce6",
"0x6b90597ffff1d46eb981855dab35ec16f16fdfa387517c9bb2b77d8e282d50c4",
"0xee0da16fffd9e68402a14f37cd2cc8390b1e87380fa355b5e21c2f4260dc29cf",
"0x1f414e3d7b596550456bc715a8f3f6e620c406e20c7e5d485a3dce602afba6e9",
"0x42d66ff0196b837d4e1320e4fe9cea890845842a15c1a9ca7d0821598d5480c0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


