const sum = require('../redux/sum')
test('sum function test case', () => {
  expect(sum(2,2)).toBe(4)
   })


// import { iteratorSymbol } from "immer/dist/internal";
// import React from "react";
// import { ReactDOM } from "react-dom";
// import App from "../App";




// it("rendering without careshing", ()=>{
//   const div = document.createElement('div');
//   ReactDOM.render(<App />,div);
//   ReactDOM.unmountComponentAtNode(div);

// });

