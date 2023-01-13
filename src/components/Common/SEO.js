import { Helmet } from "react-helmet";

function SEO(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "NOVA | Decentralized Perpetual Exchange",
    description:
      "Trade spot or perpetual BTC, ETH, AVAX and other top cryptocurrencies with up to 50x leverage directly from your wallet on Arbitrum and Avalanche.",
    image: "",
    type: "exchange",
    ...customMeta,
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />

      
        <meta name="twitter:image" content={meta.image} />
      </Helmet>
      {children}
    </>
  );
}

export default SEO;
