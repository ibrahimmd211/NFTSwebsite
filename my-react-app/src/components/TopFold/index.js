import React from 'react';
import Button from "../../common/Button";
import "./topFold.css";

const TopFold = () => {
  return (
    <div className="topfold absolute-centre">
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect, & sell {" "}
          <span className="heading-gradient">Extroadinary</span> NFTs
        </div>
        <div className="tf-description">
        Blockchain App Factory is a leading NFT marketing agency that creates effective markting plans non-fungible token sales within a short time to ensure massive success for projects.
        </div>
        <div className="tf-left-btns">
        <Button btnType="PRIMARY" btnText="Discover"/>
        <Button btnType="SECONDARY" btnText="create" customClass="tf-left-secondary-btn"/>
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-left-infoStats absolute-centre">
            <div className="tf-infoItem-count">200k+</div>
            <div className="tf-infoItem-label">Collection</div>
            </div>
         
        
          <div className="tf-left-infoStats absolute-centre">
            <div className="tf-infoItem-count">24k+</div>
            <div className="tf-infoItem-label">Design</div>
            </div>
          
          
          <div className="tf-left-infoStats absolute-centre">
            <div className="tf-infoItem-count">345k+</div>
            <div className="tf-infoItem-label">Community</div>

          </div>
      
      </div>
      </div>
      < div className="tf-right"></div>
      <div className="tf-r-bg-blob"></div>
      <div className="tf-right-diamond">
        <div className="tf-right-diamond">
        <div className="tf-r-diamond-item absolute-centre">
          <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gae/LS2AweBD09u_9ZJKCg0kygkkUwUEm48vdgFNYm7SoT-GvQ9iysUUCbSz5ILDKd3SfLFstKOOmKjeWdE7_SZwVhCSggHiLLwytEGN?auto=format&dpr=1&w=256"/>
        </div>
        </div>
        </div>


        <div className="tf-right-diamond">
        <div className="tf-r-diamond-item absolute-centre">
          <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gae/haWoKnUUHLzb4Is-u7wVqhh7uUSFD92oPEaj91Gkul-_3Y0wHXX8T_f5hjaWTwdNH5DyD-8LE9lZGdq0Ghdo_aEu2ftjZcBnCLiMvkg?auto=format&dpr=1&w=750"/>
        </div>
      </div>
      </div>
  
  
    

  )
}

export default TopFold;