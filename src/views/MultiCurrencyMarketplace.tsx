import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders, Stat } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Cluster } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { useCurrency } from "../components/Currency";
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

  .candy-card-border{
    cursor:pointer;
    padding: 0;
    border-radius: 15px;
    background: #FDE68A;
    border: 2px solid #ca8a04;
    transform: translate3d(0,0,0);
    transition: all 150ms ease-out;
    
  }
  .candy-card-border:hover {
    transform: translate3d(0,-1px,0);
    border: 2px solid #FDE68A;
  }

  .candy-order-info > div.candy-order-name {
    color: #ca8a04;
    font-size:16px;
    margin: 0;

  }
  .candy-order-info > div.candy-order-ticker {
    color: #EAB308;
    font-weight: 600;
  }

  .candy-order-info > div.candy-order-price {
    font-size:16px;
    font-weight: 800;
    color: #713F12;
  }
  .candy-dropdown {
    padding: 7px 12px;
    width: 100%;
    max-width: 200px;
    border: none;
  }
  .candy-dropdown-menu {
    overflow:hidden;
    border:none;
    width: 100%;
    max-width: 200px;
  }
  .candy-dropdown-menu .menu-middle-item,
  .candy-dropdown-menu .menu-last-item {
    font-size:15px;
    border-color: #ddd;
    font-weight: 500;
    border: 1px;
    padding:7px 12px;
    color:#ca8a04;
  }
`;

const MultiCurrencyMarketplace: React.FC = () => {
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
  console.log("Currency Settings", settings);

  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={"Marketplace"}
        description={
          "Candy Shop is an open source on-chain protocol that empowers DAOs, NFT projects and anyone interested in creating an NFT marketplace to do so within minutes!"
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  );
};

export default MultiCurrencyMarketplace;
