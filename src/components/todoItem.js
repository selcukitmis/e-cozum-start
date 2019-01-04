import React, {Component} from 'react';

class todoItem extends Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.text}
        <button
          type="button"
          className="btn btn-danger btn-xs"
          onClick={() => {
            this.props.remove()
          }}
        >Sil
        </button>
      </li>
    );
  }
}

export default todoItem;