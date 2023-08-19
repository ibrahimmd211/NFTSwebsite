import React from 'react';
import TrendingCard from "./TrendingCard";
import TRENDING_NFTS from "./../Data../trendingNfts"



import"./trendingNfts.css";


const settings ={
  slideToShow: 3,
  slideToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrwo: false,
};
const TrendingNfts = () => {
  return (
    <div className="trending-nfts"> 
    <div className="tn-title absolute-centre">
      <span className="heading-gradient">Trending NFTs</span>
     
    </div>
    <div className="tn-bg-blob"></div>
    < slider {...settings}>
    {TRENDING_NFTS.map((_nft)=>(
      <TrendingCard nft={_nft} />
    ))}
    </slider>
    </div>
    
  
  );
}

export default TrendingNfts;