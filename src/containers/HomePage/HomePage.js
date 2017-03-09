import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'antd'

import './HomePage.scss';

import {fetchCourseAction} from '../../actions/courseAction'

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(fetchCourseAction());
  }

  render() {
    return(
     <div>
        <Row gutter={24}>
          <Col span={6}>1</Col>
          <Col span={6}>2</Col>
          <Col span={6}>3</Col>
          <Col span={6}>4</Col>
        </Row>
     </div>);
  }
}

HomePage.propTypes = {
};

function mapStateToProps({courses}) {
  return {
    courses:courses
  };
}

export default connect(mapStateToProps)(HomePage);