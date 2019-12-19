import React from 'react';
import Card from '../Card/Card';
import './List.css';

function List(props){
    const allCards = props.cards.map(card => <Card key={card.id} listId= {props.id} cardId={card.id} title={card.title} delete={props.delete} content={card.content}></Card>);
    return (
      <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
          {allCards}
          <button type="button" className="List-add-button" onClick={() => props.add(props.id)}>
            + Add Random Card
          </button>
      </div>
    </section>
    );
}

export default List;