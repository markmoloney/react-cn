import React, { Component } from "react";
import DisplayForm from "../pattern-components/DisplayForm";
import ShoppingValidatingForm from "../pattern-components/ShoppingValidatingForm";
import FavouritesValidatingForm from "../pattern-components/FavouritesValidatingForm";
import UpdateForm from "../pattern-components/UpdateForm";
import ValidatingFormWizard1 from "../pattern-components/ValidatingFormWizard1";
import ValidatingFormWizard2 from "../pattern-components/ValidatingFormWizard2";
import GroceryList from "../pattern-components/GroceryList";
import TableList from "../pattern-components/TableList";
import ListToList from "../pattern-components/ListToList";
import LinkedList from "../pattern-components/LinkedList";
import MasterDetail from "../pattern-components/MasterDetail";
import ShoppingList from "../pattern-components/ShoppingList";
import FavouritesList from "../pattern-components/FavouritesList"
import SearchList from "../pattern-components/SearchList";
import SearchForm from "../pattern-components/SearchForm";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  components = {
    "Display Form": DisplayForm,
    "Shopping Validating Form": ShoppingValidatingForm,
    "Favourites Validating Form": FavouritesValidatingForm,
    "Update Form": UpdateForm,
    "Validating Form Wizard 1": ValidatingFormWizard1,
    "Validating Form Wizard 2": ValidatingFormWizard2,
    "Grocery List": GroceryList,
    "Table List": TableList,
    "List to List": ListToList,
    "Linked List": LinkedList,
    "Master Detail": MasterDetail,
    "Shopping List": ShoppingList,
    "Favourites List": FavouritesList,
    "Search List": SearchList,
    "Search Form": SearchForm
  };
  defaultComponent = "Display Form";

  render() {
    const PatternName = this.components[
      this.props.patternName || this.defaultComponent
    ];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
      </div>
    );
  }
}
export default UIShellBody;
