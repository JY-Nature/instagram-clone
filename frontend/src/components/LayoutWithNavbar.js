import { React, Component } from 'react';
import { Navbar } from '.';

class LayoutWithNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar active={this.props.active} />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default LayoutWithNavbar;
