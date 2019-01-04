import React, {Fragment, Component} from 'react';
import TodoItem from '../components/todoItem'
import Title from '../components/title'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus"],
      todo : ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = this.state.todo;
    if (todo) {
      let array = this.state.items;
      array.push(todo);
      this.setState({items: array, todo: ""})
    }
  }

  removeItem(item) {
    let allItems = this.state.items;
    allItems     = allItems.filter(s => s !== item);
    this.setState({items: allItems});
  }

  render() {
    return (
      <Fragment>
        <br/>
        <div className="row">
          <div className="col-md-8">
            <Title text="Todo List"/>
            <ul className="list-group">
              {this.state.items.map((item, index) =>
                <TodoItem
                  key={index}
                  text={item}
                  remove={() => {
                    this.removeItem(item)
                  }}
                />)}
            </ul>
          </div>
          <div className="col-md-4">
            <form onSubmit={(event) => {
              this.handleSubmit(event)
            }}>
              <div className="form-group">
                <Title text="New Todo"/>
                <input type="text"
                       className="form-control"
                       value={this.state.todo}
                       name="todoText"
                       onChange={(event) => {
                         this.setState({todo: event.target.value})
                       }}
                       placeholder="Enter todo"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}