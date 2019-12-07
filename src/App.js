import React from 'react';
import './App.css';
import List from './List/List';

function App(props) {
  const cardList = props.store.lists.map(list => <List key={list.id} header={list.header} cards={list.cardIds}></List>);

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {cardList}
    </div>
  </main>
  );
}

export default App;
