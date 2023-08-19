import React from 'react';
import "./trendingcard.css";


const TrendingCard = (props) => {
    const { nft }=props;
  return ( <div className="trending-card absolute -centre">
    <div className="tc-inner-wrapper">
        <div className="tc-content">
            <img alt={nft.user_name} src={nft.banner} className="tc-banner"/>

        </div>
    </div>
  </div>
  )
};

export default TrendingCard;