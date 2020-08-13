# shinedme-workspace
Shinedme is an innovative outfit sharing and affiliation marketing DAPP on polkdadot chain. User can share outfit styles with an optional purchase link, comment, like and edit other people's upload to earn tokens. Tokens are paid by shinedme (as an incentive to usage of the APP) and from third party e-commerce site who are willing to pay an affiliation to attract shinedme users to purchase clothes, shoes or accessories from their shop. Both app user on boarding and decentralized affiliation business user has an intuitive, one-click on boarding and does not require knowledge of blockchain or complicated setup. 
Besides earn tokens, we originated an interesting OpenCV and machine learning based image editor to tweak and share their thoughts to which part of outfit can be improved. The editor is easy to use and fun. This process is called "shining" and where "shined me" name is from. Currently it only have one editing feature, that is changing clothes color in some user specified range to another color but keep clothes pattern and style. ML model is used to avoid face color been changed by mistake.

## Major features
- Automatic generate and save Polkadot keypair locally, it's a user friendly one-click onboarding process
- Upload outfit image and earn token reward
- Optionally, attach a purchase link and earn additional affiliation reward from a provider when other user later click on the link. The reward is handled and guaranteed by the shinedme pallet as part of blockchain and it's decentralized
- Comment or like other people's upload and earn token reward
- Edit other's outfit by changing color of part of clothes in a frontend APP to suggest an alternative outfit. ML model is used to face recorgization and avoid face color changed by mistake
- Both uploaded photo and edited photo is saved in IPFS and their CID is indexed in chain
- Third party store owners can create affiliation and serve as affiliation provider to take advantage of the user base of shinedme. Affiliation payment is authorized and handled in a fully decentralized way by chain.
- Shinedme also provide a default affiliation reward provider so even at begining of launch user can earn reward from shinedme. The single
click reward is calculated based on actual payment received from e-commerce websites that shinedme website own a USD affiliation program account, such as Amazon and Walmart

## Run all services with docker-compose

### Prerequisite:
- git, GNU make
- docker-compose **1.25.0 and above**

### Steps
```
git submodule update --init --recursive
make
docker-compose up
```

## Future plans
- Integrate with actual Kusama or Polkadot chain and host live. The actual integration need to serve the shinedme chain as a parachain to Polkadot. We didn't purchase Kusama coin to do this because:
  - The Hackathon is required to be "run project at no cost". 
  - It's first step to test in a isolated blockchain network as it's a customized blockchain with different pallets.
- Add more interesting ML based image editing features to make it even more creative and economically attractive to share an image, such as:
  - clip an accessory or clothes from another image, and paste into the target photo to indicate "a better outfit style", and suggested user can earn tokens from purchase of suggested item replacement
  - change pattern of a cloth instead of color
- Make it more secure and higher performance from current prototype, such as:
  - replace usage of map of vectors to double maps
  - build indexer service that listening events from chain and organize data in a database to handle complex queries efficiently. Like thegraph.com. Unfortunately there's no available library in polkdadot eco-system, if next time join hackathon we'd like to choose "tools" and build a thegraph like indexer :)
  - allow user to backup generated keypair. Keys are not and will not stored on server to be decentralized, but it will be good to ask user to remember 12-word mnenomics and have recover account from 12-word feature
- at begining of shinedme launch, we're unable to calculate affiliation reward in a decentralized, blockchain based way because we must have a running website with moderate user activities to apply for Amazon and Walmart affiliation program. So we simply pay user reward to tokens as reward in a centralized way to attract more usage. Then shinedme will be eligible to open an affiliation account, and blockchain based reward calculation can be enabled by a offchain worker in chain runtime, that read earnings from Amazon and Walmart API and distribute equivalent amount of token to users based on earning.
