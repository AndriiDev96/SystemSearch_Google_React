import React, { Component } from 'react';
import NavbarSearch from './searchBlock/navbarSearch';
import ListResult from './listResult/listResult';

const user = {
  name: "Andrii",
  avatar: "https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/33965097_1828878317418747_7368209674111287296_n.jpg?_nc_cat=110&_nc_ht=scontent.fiev1-1.fna&oh=510be1ffb313b37450d16b42251a54c9&oe=5CD6A688"
}


class App extends Component {
  render() {
    return (
      <>
        <NavbarSearch user = {user} />
        <ListResult />
      </>
    )
  }
}

export default App;
