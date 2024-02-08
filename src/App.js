import React from "react";
import Filedropzone from "./Filedropzone";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import { useState } from "react";
import "./FileDropZone.css"; // Create this CSS file for styling

const App = () => {
  const [state, setState] = useState({});

  const [FileData, setFileData] = useState([]);

  const HandelData = (data) => {
    setFileData(data);
  };
  return (
    <>
      <Filedropzone OnDataLoad={HandelData}></Filedropzone>
      {FileData.length > 0 && (
        <PivotTableUI
          data={FileData}
          onChange={(e) => setState(e)}
          {...state}
        ></PivotTableUI>
      )}
    </>
  );
};

export default App;
