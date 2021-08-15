import React, { useState } from "react";

export default function InputBar(props) {
  const [value, setValue] = useState("");
  // console.log(props);
  let handleInput = (e) => {
    // console.log(e.target.value);

    setValue(e.target.value);

   
  };

if (value.length >=3) {
    let lowercaseValue = value.toLowerCase();
    let findArr = props.movies.filter((item) => {
        
      return item.title.toLowerCase().includes(lowercaseValue, 0);
    });
  
    console.log(findArr);
    props.handleSearch(findArr);
  
}
  return (
    <div>
      <input type={"search"} value={value} onChange={handleInput}></input>
    </div>
  );
}
