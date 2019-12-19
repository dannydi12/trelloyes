import React from 'react';
import './App.css';
import List from './List/List';
import STORE from './Store'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards
  }

  deleteCard = (list, card) => {
    const newList = this.state.lists.map(list => {
        return {id: list.id, 
          header: list.header, 
          cardIds: list.cardIds.filter(cardId => cardId !== card)};
    });

    const allCards = this.state.allCards;
    delete allCards[card];

    this.setState ({
      lists: newList,
      allCards
    })

    
  }

  addRandom = (id) => {
    const newCard = newRandomCard();

    const allCards = this.state.allCards
    allCards[newCard.id] = newCard;

    const lists = this.state.lists.map(list => {
      if (list.id === id) {
        return {id: list.id, header: list.header, cardIds: [...list.cardIds, newCard.id]}
      }
      return list;
    })

    this.setState({
      lists,
      allCards
    });

  }

  render() {
    const cardList = this.state.lists.map(list =>
      <List
        key={list.id}
        id={list.id}
        add={this.addRandom}
        delete={this.deleteCard}
        header={list.header}
        cards={list.cardIds.map(id => this.state.allCards[id])}>
      </List>
    );
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
}

export default App;
