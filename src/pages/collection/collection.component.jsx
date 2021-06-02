import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";
import { collect, connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h1>Collection page</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
