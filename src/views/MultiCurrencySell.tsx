import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Sell } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Cluster } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useCurrency } from "../components/Currency";
import styled from "styled-components";
import { useMemo } from "react";

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster;

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
    background-color: #FDE68A;
    color:#ca8a04;
  }
  .candy-card-border{
    cursor:pointer;
    padding: 0;
    border-radius: 15px;
    background: #FDE68A;
    border: 2px solid #ca8a04;
    transform: translate3d(0,0,0);
    transition: all 150ms ease-out;
    
  }
  .candy-status-tag {
    top: 10px;
    left: -10px;
    background: #ff8200;
    border-radius: 5px 5px 5px 0 !important;
  }
  .candy-card-border:hover {
    transform: translate3d(0,-1px,0);
    border: 2px solid #FDE68A;
  }
  .candy-sell-modal-content {
    margin:0 0 30px;
  }
  
  .candy-sell-modal-img {
    min-width:120px;
  }
  
  .candy-sell-modal-input-number {
    background: #fff;
    color: #000;
    border: 2px solid #ca8a04
  }
  
  .candy-sell-modal-button.candy-button {
    border-radius: 5px;
    font-size:18px;
    font-weight: 800;
    padding:15px 0;
  }
  
  .candy-sell-modal-button.candy-button[disabled] {
    background:#ddd;
  }
  
  .candy-sell-modal-input-number > span {
    font-weight: 800;
    color:#ca8a04;
    padding-right:2px;
  }
  .candy-modal {
    background:rgba(0,0,0,0.75);
  }
  .candy-sell-modal-hr {
    display:none;
  }
  
  .candy-sell-modal-nft-name {
    max-width:300px;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  
  .candy-sell-modal-title {
    display:none;
  }
  .candy-nft-info {
    color: #fff;
    padding: 15px 20px 17px 20px;
    border-radius: 0;
    background: none;
  }
  
  .candy-nft-info > div.ticker {
    color: #EAB308;
    font-weight: 600;
  }
  
  .candy-nft-info > div.name {
    color: #ca8a04;
    font-size:16px;
    margin: 0;
  }
`;

const MyCollection: React.FC = () => {
  const wallet = useAnchorWallet();
  const { getCurrencySettings } = useCurrency();
  const settings = getCurrencySettings();

  const candyShop = useMemo(
    () =>
      new CandyShop({
        candyShopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
        treasuryMint: new PublicKey(settings.treasuryMint),
        candyShopProgramId: CANDY_SHOP_PROGRAM_ID,
        env: NETWORK,
        settings,
      }),
    [settings]
  );

  if (!candyShop) {
    return <></>;
  }

  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>My Collection</h1>
      <Sell
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      />
    </DesContainer>
  );
};

export default MyCollection;
