import React from 'react'

function Header({to}) {
    //const toHeader = 'this is the end of the header'   //ha destructuring helyett propskent lenne atadva
/*   return (
    <div>Header {{to}}</div>
  ) */
  return React.createElement("div", null, `Header ${to}`)
}

export default Header

//rfce vagy rafc ez arrow function