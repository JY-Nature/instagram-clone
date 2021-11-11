import { React, Component } from 'react';
import { LayoutWithNavbar } from '../../components';

class InboxPage extends Component {
  render() {
    return (
      <LayoutWithNavbar active="inbox">
        <div>
          <h1>받은 메시지함</h1>
        </div>
      </LayoutWithNavbar>
    );
  }
}

export default InboxPage;
