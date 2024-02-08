import React from "react";
import Papa from "papaparse";
import { useDropzone } from "react-dropzone";

const Filedropzone = ({ OnDataLoad }) => {
  //created a function ti handel drop data
  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      //file Name
      const filename = file.name;
      console.log(filename);

      //read file content
      const render = new FileReader();

      render.onload = () => {
        const result = render.result;

        //parse cvs data
        Papa.parse(result, {
          complete: (ParseData) => {
            OnDataLoad(ParseData.data);
          },
        });
      };
      render.readAsText(file);
    });
  };

  // Ondrop function is automatically called when  files droped
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <>
      <div
        style={{
          border: "1px dashed black",
          padding: "20px",
          marginBottom: "20px",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Drag & drop CSV files here, or click to select files</p>
      </div>
    </>
  );
};

export default Filedropzone;
