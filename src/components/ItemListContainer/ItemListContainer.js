import react from "react";



const ItemListContainer = ({ greeting, ...rest}) => {
    return (
        <h2>{greeting}</h2>
    );
  }

  export default ItemListContainer;