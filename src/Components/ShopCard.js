import React from 'react'


class ShopCard extends React.Component{
    render(){
        return(
            <div className="Shop-wrapper">
  <div className="Shop-product-img">
    <img src="http://bit.ly/2tMBBTd" width={327} height={420} alt="Shop" />
  </div>
  <div className="Shop-product-info">
    <div className="Shop-product-text">
      <h1>Harvest Vase</h1>
      <h2>by studio and friends</h2>
      <p>Harvest Vases are a reinterpretation<br /> of peeled fruits and vegetables as<br /> functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth. </p>
    </div>
    <div className="Shop-product-price-btn">
      <p><span>78</span>$</p>
      <button type="button">buy now</button>
    </div>
  </div>
</div>
        )
    }
}
export default ShopCard