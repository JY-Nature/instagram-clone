import { React, Component } from 'react';
import { LayoutWithNavbar } from '../components';
import { NotFoundPage } from '.';

class ProfilePage extends Component {
  render() {
    let { username } = this.props.match.params;
    let isUsernameExist = true;

    if (!isUsernameExist) {
      return (
        <LayoutWithNavbar>
          <NotFoundPage />
        </LayoutWithNavbar>
      );
    }

    return (
      <LayoutWithNavbar active="profile">
        <div>
          <h1>{username}님의 프로필 페이지</h1>
        </div>
      </LayoutWithNavbar>
    )
  }
}

export default ProfilePage;
