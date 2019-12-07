import React from 'react';
import Card from '../Card/Card';
import './List.css';

function List(props){
    console.log(props.cards);
    
    return (
      <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
          <Card></Card>
          <button type="button" className="List-add-button">
            + Add Random Card
          </button>
      </div>
    </section>
    );
}

export default List