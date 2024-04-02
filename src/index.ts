import * as algokit from '@algorandfoundation/algokit-utils';

async function main() {
    const algorand = algokit.Algorandclient.defaultLocalNet()
    const alice = algorand.account.random()
    const bob = algorand.account.random()
}
main();