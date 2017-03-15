import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col, Card, Icon} from 'antd'
import CardList from '../../components/CardList/CardList'

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
    const { courses } = this.props;
    return(
     <div className="o-wrapper c-home">
        <div id="subNav" className="sub-nav" data-fixed-start="#subNav" data-fixed-end="#footer">
          <div className="inner-holder">
              <ul>
                <li className="nav-title"><Icon type="book" />推荐课程 </li>
                <li className="sub-nav-item--active" >最热</li>
                <li >前端</li>
                <li>后端</li>
                <li>移动端</li>
                <li>数据库</li>
                <li>云计算</li>
                <li>UI</li>
                <li>测试</li>
                <li>微信</li>
              </ul>

              <div className="flow-mode">
                <span className="ifanrx show-style show-style--list"></span>
              </div>
          </div>
        </div>

        <Row gutter={24}>
          <Col span={18}>
          {
            courses ? <CardList courses={courses.data} /> : 'Loading...'
          }
              
              
          </Col>
          
          <Col span={6}>
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </Col>
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