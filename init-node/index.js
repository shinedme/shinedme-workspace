const { cryptoWaitReady } = require('@polkadot/util-crypto');
const { Keyring } = require('@polkadot/api')
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main() {
    await cryptoWaitReady()
    let keyring = new Keyring({ type: 'sr25519' })
    let alice = keyring.addFromUri(process.env.SHINEDME_TREASURY || '//Alice');
    const api = await ApiPromise.create({
        provider: new WsProvider(process.env.BLOCKCHAIN_URL || 'ws://localhost:9944'),
        types: {
            "TokenBalance": "u128",
            // mapping the actual specified address format
            Address: 'AccountId',
            // mapping the lookup
            LookupSource: 'AccountId'
        }
    });

    console.log('Sending init contract')
    const unsub = await api.tx.erc20
        .init('shinedme', 'SHM', 1000000000000)
        .signAndSend(alice, async (result) => {
            console.log(`Current status is ${result.status}`);

            if (result.status.isInBlock) {
                console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
            } else if (result.status.isFinalized) {
                console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
                unsub();

                console.log('Sending create initial affiliation')
                const unsub2 = await api.tx.erc20.createAffiliate('https://www.amazon.com', 100000000, 1, '?tag=shinedme-affiliation-provider')
                    .signAndSend(alice, (result) => {
                        console.log(`Current status is ${result.status}`);

                        if (result.status.isInBlock) {
                            console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
                        } else if (result.status.isFinalized) {
                            console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
                            unsub2();
                            process.exit(0)
                        } else if (result.status.isInvalid) {
                            console.log(result)
                            process.exit(1)
                        }
                    })
            } else if (result.status.isInvalid) {
                console.log('already initialized')
                process.exit(0)
            }
        });
}

main()