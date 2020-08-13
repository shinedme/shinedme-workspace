# Shinedme-workspace
## What is Shinedme
Shinedme is an innovative outfit sharing and affiliation marketing DAPP on polkdadot chain.

The process of uploading photos is called "shining" which is the website name "Shinedme" come from. The photo can be very different but Shinedme cuts the final result to be radio of 4:3 (height:width) which gives the best visual effect. 
optional
Both app user and decentralized affiliation business user has an intuitive, one-click on boarding, which does not require complicated setup process and extra knowledge of blockchain. 

User can share outfit styles with an optional purchase link, comment, like and edit other user's uploaded outfit to have fun and earn tokens. Tokens are paid by both shinedme (an incentive to sharing the APP to others) and from third party e-commerce site who are willing to pay an affiliation to attract users to purchase clothes, shoes or accessories from their shop. 

Besides earning tokens, Shinedme originate an interesting image editor. With this editor, user can easily tweak and share their thoughts to change part of outfit on the photo. The editor is easy to use and fun. This process is called "having an idea". Currently it only have one editing feature, that is changing clothes color in some specified range to another color but keep clothes pattern and style.

## Major features and functionalities
- Automatic generate and save Polkadot keypair locally, it's a user friendly one-click onboarding process.

- Upload outfit image and earn token reward for that.

- Optionally but make convenience for other users, attach one purchase link about this photo and earn additional affiliation reward from a provider when other user later click on the link. The reward is handled and guaranteed by the pallet as part of blockchain and decentralized.

- Comment or like other people's upload and earn token reward.

- Edit other's outfit based on OpenCV and machine learning model by changing color of part of clothes to make it different appearance. These changed photos will be attached with original photo and in the gallery page. Machine Learning model is used to face recorgization and avoid face color changed by mistake.

- Both uploaded photo and edited photo is saved in IPFS and their CID is indexed in chain.

- Third party store owners can create affiliation in the provider page and serve as affiliation provider to take advantage of the user community of shinedme. Affiliation payment is authorized and handled in a fully decentralized way on chain.

- Shinedme also provide a default affiliation reward provider so even at begining of launch, user can earn reward from shinedme. The single click reward is calculated based on actual payment received from e-commerce websites that shinedme website own a USD affiliation program account, such as Amazon and Walmart.

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
- Integrate with actual Kusama or Polkadot chain and host live. The actual integration need to serve the Shinedme chain as a parachain to Polkadot. We didn't purchase Kusama coin to do this because:
  - The Hackathon is required to be "run project at no cost". 
  - It's first step to test in a isolated blockchain network as it's a customized blockchain with different pallets.

- Add more interesting ML modal for image editing features to make it even more creative and economically attractive to share an image, such as:
  - clip an accessory or clothes from another image, and paste into the target photo to indicate "a better outfit style", and suggested user can earn tokens from purchase of suggested item replacement.
  - change pattern of a cloth instead of color.

- Make it more secure and higher performance from current prototype, such as:
  - replace usage of map of vectors to double maps.
  - build indexer service that listening events from chain and organize data in a database to handle complex queries efficiently. Like thegraph.com. Unfortunately there's no available library in polkdadot eco-system, if next time join hackathon we'd like to choose "tools" and build a thegraph like indexer :) .
  - allow user to backup generated keypair. Keys are not and will not stored on server to be decentralized, but it will be good to ask user to remember 12-word mnenomics and have recover account from 12-word feature.

- At first Shinedme launch, we're not begin with calculating affiliation reward in a decentralized blockchain Amazon or Walmart do not have affiliation program for it. So we simply pay user reward to tokens as reward in a centralized way to attract more user. When Shinedme community starts up and grows larger, we will be eligible to open an affiliation account and make blockchain based reward calculation. 