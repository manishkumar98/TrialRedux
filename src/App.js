import { useState } from "react";
import "./styles.css";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState();
  const [inputType, SetInputType] = useState();
  function handleSubmit(e) {
    var itemList1 = [...itemList];
    console.log(e);
    itemList1.push([inputText, inputType]);
    setItemList(itemList1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        //value="inputText"
        placeholder="Item"
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="text"
        //value="inputType"
        placeholder="Label"
        onChange={(e) => SetInputType(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {itemList[0]}
    </div>
  );
}
