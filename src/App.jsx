import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchCSV } from "./assets/data";

export default function App() {
  const [tableOneData, setTableOneData] = useState([]); // State for table one data
  const [tableTwoData, setTableTwoData] = useState([]); // State for table two data

  useEffect(() => {
    fetchCSV().then((data) => {
      setTableOneData(data);
      const dataMap = Object.fromEntries(
        data.map((row) => [row.Index, row.Value]) // converting table one data into maps to easily acccess index using keys
      );

      const tableTwo = [
        { category: "Alpha", value: (dataMap["A5"] + dataMap["A20"]) },
        { category: "Beta", value: (dataMap["A15"] / dataMap["A7"]) },
        { category: "Charlie", value: (dataMap["A13"] * dataMap["A12"]) },
      ];

      setTableTwoData(tableTwo);
    });
  }, []);
  return (
    <div>
      {/* Table One */}
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableOneData.map(({ Index, Value }) => (
            <tr key={Index}>
              <td>{Index}</td>
              <td>{Value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table Two */}
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableTwoData.map(({ category, value }) => (
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
