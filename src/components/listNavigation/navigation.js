import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let links = [
  { label: 'Усі', link: '!#', active: true },
  { label: 'Зображення', link: '!#', },
  { label: 'Відео', link: '!#', },
  { label: 'Новини', link: '!#', },
  { label: 'Карти', link: '!#', },
  { label: 'Більше', link: '!#', },
  { label: 'Налаштування', link: '!#', },
  { label: 'Інструменти', link: '!#', }
];

class Navigation extends Component {

  render() {
    let linksRender = links.map((link, index) => {
      let linkRender = link.active ?
        <a className="navigation-link navigation-link--active" href={link.link}>{link.label}</a> :
        <a className="navigation-link" href={link.link}>{link.label}</a>

      return (
        <li key={index} className="navigation-list-item">
          {linkRender}
        </li>
      );
    });

    return (
      <nav className="menu-navigation container">
        <div>
          <ul className="list-navigation">
            {linksRender}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;