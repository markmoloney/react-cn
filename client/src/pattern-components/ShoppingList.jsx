import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon,
  Button
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "./Header";
import ValidatingForm from "./ValidatingForm";
import "./patterns.scss";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    const data = [
      [
        { label: "Item", value: "Apple", type: "textinput" },
        { label: "Quantity", value: "1", type: "textinput" }
      ],
      [
        { label: "Item", value: "Mask", type: "textinput" },
        { label: "Quantity", value: "45", type: "textinput" }
      ],
      [
        { label: "Item", value: "Bread", type: "textinput" },
        { label: "Quantity", value: "2", type: "textinput" }
      ]
    ];
    this.state = {
      selectedRow: 0,
      data,
      adding: false
    };
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  addRow = () => {
    let data = this.state.data.slice();
    let selectedRow = this.state.data.length;
    data[selectedRow] = [
      { label: "Item", value: "Enter data below", type: "textinput" },
      { label: "Quantity", value: "", type: "textinput" }
    ];
    this.setState({ data, selectedRow, adding: true });
  };

  deleteRow = () => {
    let data = this.state.data.slice();
    if (data.length > 0) {
      data.splice(this.state.selectedRow, 1);
      this.setState({ data, selectedRow: 0 });
    }
  };

  updateRow = newData => {
    let data = this.state.data.slice();
    let selectedRow = this.state.selectedRow;
    data[selectedRow] = [
      { label: "Item", value: newData.item, type: "textinput" },
      { label: "Quantity", value: newData.quantity, type: "textinput" }
    ];
    this.setState({ data });
  };

  toggleAdding = () => {
    const adding = this.state.adding;
    this.setState({ adding: !adding });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>
        {Object.keys(row).map(col => {
          return (
            <StructuredListCell key={col} className="simple-list-row">
              {row[col]}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
    const selectedRow = this.state.selectedRow;
    const data = this.state.data;
    const columns = data.length
      ? data[selectedRow].map(item => item.label)
      : [];

    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Shopping List"
          subtitle="This composite pattern is build from the Table List pattern and uses the Validating Form pattern for creating items, Update Form pattern for Update."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {columns.map(key => {
                    return (
                      <StructuredListCell head key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </StructuredListCell>
                    );
                  })}
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                {data.map((row, i) => {
                  const values = row.map(item => item.value);
                  return this.renderRow(values, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
        <div className="bx--row left-align">
          <div className="bx--col-xs-12">
            <Button className="add-delete-row-buttons" onClick={this.addRow}>
              Add Row
            </Button>
            <Button className="add-delete-row-buttons" onClick={this.deleteRow}>
              Delete Row
            </Button>
          </div>
        </div>
        <br />
        <br />
        {data.length > 0 && (
          <div className="bx--row">
            <div className="bx--col-xs-12">
              <ValidatingForm
                data={data[selectedRow]}
                updateRow={this.updateRow}
                adding={this.state.adding}
                toggleAdding={this.toggleAdding}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingList;
