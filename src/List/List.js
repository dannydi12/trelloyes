import React from 'react';
import Card from '../Card/Card';
import './List.css';

function List(props){
    console.log(props.cards);
    const allCards = props.cards.map(card => <Card title={card.title} content={card.content}></Card>);

    return (
      <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
          {allCards}
          <button type="button" className="List-add-button">
            + Add Random Card
          </button>
      </div>
    </section>
    );
}

export default List