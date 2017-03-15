'use strict';

import React, { PropTypes } from 'react'
import {Card, Icon} from 'antd'

import './CourseCard.scss';

const CourseCard = ({course}) => {
  return (
        <Card bodyStyle={{ padding: 0 }} bordered={false} className="course-card-container ">
          <div className="course-card-top cart-color purple">
            <Icon type="tag-o" />
            <span>React</span>
            <span> JS </span>
          </div>
          <div className="course-card-content">
            <h3 className="course-card-name">{course.title}</h3>
            <p title={course.description}>{course.description}</p>
            <div className="clearfix course-card-bottom">
              <div className="course-card-info">
                {course.name}
              </div>
              
              <div className="course-card-price">￥198.00</div>
              </div>
          </div>
        </Card>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object
}

export default CourseCard