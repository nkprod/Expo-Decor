import React from 'react';
import SHOP_DATA from '../shop/shop.data';
import CollectionPreview from '../../components/preview_collection/preview-collection.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    let collections = SHOP_DATA;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
