import React from 'react'

function WatchList() {
  for (var i=0; i< localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
  }
  
  
  return (
    <div>
      <h1>WatchList</h1>
    </div>
  )
}

export default WatchList

