import { React, Component } from 'react';
import { ProfileMenuItem, Divider } from '.';
import { ProfileMenuIcons } from '../assets/icons';

class ProfileMenuTemplete extends Component {
  render() {
    let username = this.props.username;

    return (
      <div>
        <div style={{ top: "-6px", bottom: "0", left: "184px", backgroundColor: "#ffffff", border: "1px solid #ffffff", boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.0975)", height: "14px", width: "14px", position: "absolute", transform: "rotate(45deg)" }}></div>
        <div style={{ borderRadius: "6px", height: "100%", width: "100%", position: "relative", backgroundColor: "#ffffff" }}>
          <ProfileMenuItem to={`/${username}/`} icon={ProfileMenuIcons.ProfileIcon} text="프로필" />
          <ProfileMenuItem to={`/${username}/saved/`} icon={ProfileMenuIcons.BookmarkIcon} text="저장됨" />
          <ProfileMenuItem to={`/${username}/edit/`} icon={ProfileMenuIcons.SettingIcon} text="설정" />
          <ProfileMenuItem to="/accounts/switch/" icon={ProfileMenuIcons.SwitchIcon} text="계정 전환" />
          <Divider />
          <ProfileMenuItem to="/accounts/logout" text="로그아웃" />
        </div>
      </div>
    );
  }
}

export default ProfileMenuTemplete;
