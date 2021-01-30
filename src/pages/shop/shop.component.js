import React from 'react';

import SHOP_DATA from './shop.data';


import PreviewCollection from '../../components/preview-collections/preview-collections.components';



class ShopPgae extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const {collections} = this.state;
    return(
     <div className = "shop-page">
       {
         collections.map(({id, ...otherCollections}) => (
           <PreviewCollection key = {id} {...otherCollections}/>
         ))
       }
     </div>
    )
  }
  
}


export default ShopPgae;

