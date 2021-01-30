import React from 'react';

import './preview-collections.style.scss';

import CollectionItem from '../collection-item/collection-item.component';

//contains entire collections
const PreviewCollection = ({title, items}) => {
  return(
    <div className = "collection-preview">
      <h1 className = "title">{title.toUpperCase()}</h1>
      <div className = "preview">
          {
            items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherCollections}) => (
              <CollectionItem key = {id} {...otherCollections}/>
            ))
          }
      </div>
    </div>
  ) 
}

export default PreviewCollection;