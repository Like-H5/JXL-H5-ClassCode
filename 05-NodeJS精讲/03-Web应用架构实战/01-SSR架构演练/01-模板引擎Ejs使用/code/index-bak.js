const ejs = require("ejs");


let data = [
    {name: "Sz1", age: 18},
    {name: "Sz2", age: 19},
    {name: "Sz3", age: 20},
    {name: "Sz4", age: 21}
];

let temp = `
  <ul>
      <%
       for(let i = 0, len = data.length; i < len; i++ ) { 
        let item = data[i];
       %>
          <li>
            <span><%=item.name%></span>
            <h3><%=item.age%></h3>
          </li>
      <% } %>
  </ul>
`

let result = ejs.render(temp, {data})
console.log(result)