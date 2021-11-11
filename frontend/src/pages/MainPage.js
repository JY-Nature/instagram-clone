import { React, Component } from 'react';
import { LoginPage } from '.';
import { LayoutWithNavbar } from '../components';

class MainPage extends Component {
  render() {
    if (localStorage.getItem('token')) return <LoginPage />;

    return (
      <LayoutWithNavbar active="home">
        메인 페이지
      </LayoutWithNavbar>
    );
  }
}

export default MainPage;
