import React from 'react'

import GitHubLabel from './components/gitluboutocomplete';
const App: React.FC = () => {
 
const labels=  [
    {
      "name": "Republic of China",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg"
    },
    {
      "name": "Kosovo",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg"
    },
    {
      "name": "Swaziland",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Swaziland.svg"
    },
    {
      "name": "France",
      "icon": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
    },
    {
      "name": "El Salvador",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg"
    },
    {
      "name": "Vietnam",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
    },
    {
      "name": "Slovenia",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg"
    },
    {
      "name": "United Arab Emirates",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
    },
    {
      "name": "North Korea",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg"
    },
    {
      "name": "Samoa",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg"
    },
    {
      "name": "Greece",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
    },
    {
      "name": "East Timor",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg"
    },
    {
      "name": "Czech Republic",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg"
    },
    {
      "name": "Mali",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg"
    },
    {
      "name": "South Korea",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
    },
    {
      "name": "Central African Republic",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg"
    },
    {
      "name": "Ethiopia",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
    },
    {
      "name": "Yemen",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg"
    },
    {
      "name": "Malawi",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg"
    },
    {
      "name": "Japan",
      "icon": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
    },
    {
      "name": "Canada",
      "icon": "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
    },
    {
      "name": "Colombia",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
    },
    {
      "name": "Brunei",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg"
    },
    {
      "name": "Denmark",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"
    },
    {
      "name": "Saint Vincent and Grenadines",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg"
    },
    {
      "name": "Italy",
      "icon": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
      "name": "Portugal",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
    },
    {
      "name": "Bolivia",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg"
    },
    {
      "name": "Singapore",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
    }
  ]
  
  

  return (
    <>
      <div>
        {/* <Autocomplete data={labels} /> */}

        <GitHubLabel labels={labels}/>
      </div>
    </>
  )
}

export default App
