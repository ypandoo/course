import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
    routing: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);

    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
  }

  renderAuthenticatedPage() {
    return (

        <div className="ant-layout-main">
          <div className="ant-layout-header" />

          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                {this.props.children}
              </div>
            </div>
          </div>

          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>

        </div>
    );
  }

  render() {
    // const { isAuthenticated } = this.props;
    return (
      <div>
        {this.renderAuthenticatedPage()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { routing/*, auth: { isAuthenticated, user } */} = state;
  return {
    /*isAuthenticated, user,*/routing
  };
}

export default connect(mapStateToProps)(App);