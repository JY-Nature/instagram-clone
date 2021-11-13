import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { NavigationBarIcons } from '../assets/icons';
import { Logo, ProfileImage } from '../assets/images';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      profileImage: ProfileImage
    };
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <Link to="/" onClick={function(e) { this.setState({ active: 'home' })}.bind(this)}>
                <div style={{ flex: "0 0 auto", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", alignContent: "stretch" }}>
                  <div style={{ marginTop: "7px" }}>
                    <img src={Logo} alt="logo" style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }} />
                  </div>
                </div>
              </Link>
            </div>
            <div style={{ height: "28px", minWidth: "125px", width: "215px", alignItems: "center", flex: "0 1 auto" }}></div>
            <div className="navbar-links">
              <div style={{paddingLeft: "24px", flexDirection: "row", whiteSpace: "nowrap" }}>
                <Link to="/" className="navbar-link" onClick={function(e) { this.setState({ active: 'home' })}.bind(this)}>
                  {this.state.active === 'home' ? <NavigationBarIcons.HomeActiveIcon /> : <NavigationBarIcons.HomeIcon />}
                </Link>
                <Link to="/direct/inbox" className="navbar-link" onClick={function(e) { this.setState({ active: 'inbox' })}.bind(this)}>
                  {this.state.active === 'inbox' ? <NavigationBarIcons.DirectMessageActiveIcon /> : <NavigationBarIcons.DirectMessageIcon />}
                </Link>
                <Link to="/create/select" className="navbar-link" onClick={function(e) { e.preventDefault(); this.setState({ active: 'upload' })}.bind(this)}>
                  {this.state.active === 'upload' ? <NavigationBarIcons.UploadActiveIcon /> : <NavigationBarIcons.UploadIcon />}
                </Link>
                <Link to="/explore" className="navbar-link" onClick={function(e) { this.setState({ active: 'explore' })}.bind(this)}>
                  {this.state.active === 'explore' ? <NavigationBarIcons.ExploreActiveIcon /> : <NavigationBarIcons.ExploreIcon />}
                </Link>
                <Link to="/accounts/activity" className="navbar-link" onClick={function(e) { e.preventDefault(); this.setState({ active: 'activity' })}.bind(this)}>
                  {this.state.active === 'activity' ? <NavigationBarIcons.ActivityActiveIcon /> : <NavigationBarIcons.ActivityIcon />}
                </Link>
                <span className="navbar-link" style={{ width: "22px", height: "22px", display: "block", flex: "0 0 auto", position: "relative" }} onClick={function(e) { e.preventDefault(); this.setState(prevState => ({ active: 'profile', isProfileMenuOpen: !prevState.isProfileMenuOpen }))}.bind(this)}>
                  { this.state.isProfileMenuOpen && <div className="profile-border"></div>}
                  <img className="profile-image" src={this.state.profileImage} alt="profile" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
