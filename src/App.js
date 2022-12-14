import logo from './logo.svg';
import './App.css';
import React, {Fragment, useState} from 'react'
import 'models/cart_items.model'
import * as PropTypes from "prop-types";


const movies = [
  {id: 0, name: "test", price: 1.99, quantity: 1, description: "test description"},
  {id: 1, name: "test", price: 1.99, quantity: 1, description: "test description"},

]

const Row = (props) => {
  const {id, name, price, quantity, description, delRow, index} = props
  return (<React.Fragment>
    <tr>
      <td> {name} </td>
      <td> {price}</td>
      <td> {quantity}</td>
      {/*<td> {id} </td>*/}
      <td><button onClick={
        () => {delRow(index)}
      }>Delete</button></td>
    </tr>
    <tr>
      <td colSpan="4"> {description}  </td>
    </tr>
  </React.Fragment>
  )


}


{/*function Row(props) {
  return null;
}

Row.propTypes = {
  price: PropTypes.any,
  quantity: PropTypes.any
};
*/}

const TableData = (props) => {
  const {data, delRow} = props
  return(
    <tbody>
    {data.map((row, index) =>
      <Row key = {index}
          name = {row.name}
           delRow = {delRow}
           index = {index}
           price = {row.price}
           quantity = {row.quantity}
           id = {row.id}
           description = {row.description}/>
    )}

    </tbody>
  )
}


function App() {

  const [rows, setRows] = useState(movies)

  const deleteRow = (number) => {
    let copy = [...rows]
    copy = copy.filter(
        (item, index) => number !== index
    )
    setRows(copy)
  }
  return (

    <div className="App">

      <header className="App-header">
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/}


        <h1> Shopping Cart </h1>

        <table>
          <tr>
            <th>Movie</th>

            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <TableData data = {rows}
                     delRow = {deleteRow}
          />
          {/*<tr>
            <td>name</td>

            <td>$1.99</td>
            <td> <input type="number" id="quantity" name="quantity" min="0" placeholder="0"/ > </td>
            <td> <button type={"button"} onClick={"alert('test delete')"}> delete </button>   </td>
          </tr>
          <tr>
            <td colSpan="4"> description  </td>
          </tr> */}

        </table>
      </header>
    </div>
  );
}

export default App;
