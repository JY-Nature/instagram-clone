import { React, Component } from 'react';
import { LoginPage } from '.';
import { LayoutWithNavbar } from '../components';

class MainPage extends Component {
  render() {
    if (localStorage.getItem('token')) return <LoginPage />;

    return (
      <LayoutWithNavbar active="home">
        <div>
          <h1>메인 페이지</h1>
        </div>
      </LayoutWithNavbar>
    );
  }
}

export default MainPage;
