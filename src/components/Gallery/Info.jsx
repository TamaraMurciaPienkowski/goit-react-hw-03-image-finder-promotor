import React, { Component } from 'react';

class Info extends Component {
  render() {
    const { toggleButtonSearch, inputSearch, isActiveSearchButton } =
      this.props;

    return (
      <div>
        <button onClick={toggleButtonSearch}>
          {isActiveSearchButton
            ? 'Wyłącz button szukaj'
            : 'Włącz button szukaj'}
        </button>
        {isActiveSearchButton ? (
          <div>
            <h1> Aby wyszukać: {inputSearch}</h1>
            <p> Kliknij button szukaj</p>
          </div>
        ) : (
          <h1>
            Aby wyszukać wpisz coś w inputa korzystamy teraz z aktualizacji za
            pomocą componentDidUpdate
          </h1>
        )}
      </div>
    );
  }
}
export default Info;
