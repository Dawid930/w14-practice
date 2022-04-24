//rfce arra katt
//nincs render igy mindig a fv-t futtatja le 

import React, { useEffect, useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState('This is the default state of a function component')
    const [key2, setKey2] = useState(0)
    const [countries, setCountries] = useState([])

    
    
    useEffect(
        () => {
            console.log("render");
            fetch('https://restcountries.com/v3.1/all')
                .then(res => res.json())
                .then(countriesData => setCountries(countriesData)) //countriesDatara fog valtozni a countries. Itt azzal h megadjuk siman a countriesDatat, bele is meni az adatot?
        },
        [] //ha itt valtozas tortenik akkor ujrafut a useEffect
    )//ami [] benne van azt tudja a react h nem kell ujra futtatnia csak spec esetekben
console.log(countries);
  return (
    <div>{key1}
        <button onClick={() => setKey1('Function component clicked')}>Click me to update</button>
        <button onClick={() => setKey2(1)}>{key2}</button>

        <div className='countries'>
            {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
        </div>
    </div>
  )
}

export default ButtonWithHooks