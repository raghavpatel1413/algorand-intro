import * as algokit from '@algorandfoundation/algokit-utils';

async function main() {
    const algorand = algokit.AlgorandClient.defaultLocalNet()
    const alice = algorand.account.random()
    const bob = algorand.account.random()

    console.log("Alice address: ", alice.addr)
}
main();