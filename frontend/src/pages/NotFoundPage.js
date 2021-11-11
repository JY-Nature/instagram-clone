import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <div style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center", color: "#262626", fontWeight: "600", fontSize: "22px", lineHeight: "26px", margin: "-4px 0 -5px" }}>죄송합니다. 페이지를 사용할 수 없습니다.</h2>
        <div style={{ marginTop: "40px", marginBottom: "20px" }}>
          <div style={{ textAlign: "center", color: "#262626", fontWeight: "400", fontSize: "16px", lineHeight: "24px", margin: "-10px 0 -6px" }}>
            클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다. <Link to="/" style={{ textDecoration: "none", color: "#00376b" }}>Instagram으로 돌아가기.</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
