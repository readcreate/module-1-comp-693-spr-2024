let zak = 'Zak';
let sally = 'Sally';
let holly = 'Holly';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let aaron = 'Aaron D. Tires';
let ivanna = 'Ivanna SeeIfThisWorksAgain';

// below we now use {} within the li
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron), /*#__PURE__*/React.createElement("li", null, ivanna));
ReactDOM.render(element, document.getElementById('content'));