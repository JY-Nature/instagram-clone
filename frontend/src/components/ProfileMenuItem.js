import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileMenuItem extends Component {
  render() {
    let Icon = this.props.icon;
    let to = this.props.to;
    let text = this.props.text;

    return (
      <Link to={to}>
        <div style={{ padding: "8px 16px", flex: "0 0 auto", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", alignContent: "stretch" }}>
          { Icon && <div style={{ alignContent: "stretch", justifyContent: "flex-start", flex: "0 0 auto", marginRight: "12px" }}>
            <Icon />
          </div>}
          <div style={{ flex: "1 1 auto", minHeight: "0", minWidth: "0", justifyContent: "center", alignContent: "stretch" }}>
            <div style={{ flex: "0 0 auto", justifyContent: "flex-start", alignContent: "stretch" }}>
              <div style={{ display: "block", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "rgba(38, 38, 38, 1)", overflow: "hidden", fontWeight: "400", fontSize: "14px", lineHeight: "18px", margin: "-3px 0 -4px" }}>
                <div style={{ height: "28px", width: "170px", flex: "0 0 auto", justifyContent: "center", alignContent: "stretch" }}>
                  <div style={{ display: "inline", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "rgba(38, 38, 38, 1)", fontWeight: "400", fontSize: "14px", lineHeight: "18px" }}>
                    {text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ProfileMenuItem;
