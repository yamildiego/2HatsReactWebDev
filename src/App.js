import React from 'react';
import Search from './Components/Search/Search';
import PersonalPanel from './Components/PersonalPanel/PersonalPanel';
import ListFood from './Components/ListFood/ListFood';

function App() {
  return (
    <div className="App">
      <Search />
      <PersonalPanel />
      <ListFood />
    </div>
  );
}

export default App;
