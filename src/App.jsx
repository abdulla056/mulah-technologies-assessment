import { useEffect, useState } from "react";
import "./App.css";
import { fetchCSV } from "./assets/data";

export default function App() {
  const [tableOneData, setTableOneData] = useState([]); // State for table one data
  const [tableTwoData, setTableTwoData] = useState([]); // State for table two data

  useEffect(() => { // Fetching data from the CSV file and setting the state
    fetchCSV().then((data) => {
      setTableOneData(data); // setting the state for table one data
      const dataMap = Object.fromEntries(
        data.map((row) => [row.Index, row.Value]) // converting table one data into maps to easily acccess index using keys
      );

      const tableTwo = [
        { category: "Alpha", value: (dataMap["A5"] + dataMap["A20"]) },
        { category: "Beta", value: (dataMap["A15"] / dataMap["A7"]) },
        { category: "Charlie", value: (dataMap["A13"] * dataMap["A12"]) },
      ];

      setTableTwoData(tableTwo); // setting the state for table two data
    });
  }, []);
  return (
    <div>
      {/* Table One */}
      <table id="tableOne">
        <thead>
          <tr>
            <th>Index</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableOneData.map(({ Index, Value }) => ( // Mapping through the table one data
            <tr key={Index}>
              <td>{Index}</td>
              <td>{Value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table Two */}
      <table id="tableTwo">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableTwoData.map(({ category, value }) => ( // Mapping through the table two data
            <tr key={category}>
              <td>{category}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
