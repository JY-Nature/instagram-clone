import { React, Component } from 'react';
import { LayoutWithNavbar } from '../components';

class ExplorePage extends Component {
  render() {
    return (
      <LayoutWithNavbar active="explore">
        <div>
          <h1>탐색 페이지</h1>
        </div>
      </LayoutWithNavbar>
    );
  }
}

export default ExplorePage;
