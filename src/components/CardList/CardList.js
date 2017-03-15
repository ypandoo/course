'use strict';

import React, { PropTypes } from 'react'
import CourseCard from '../CourseCard/CourseCard'
import {Row, Col} from 'antd'

import './CardList.scss'

const CardList = ({courses}) => {
        return(<Row gutter={16}>
          {
            courses.map(course=>(
              <Col span={6} key={course._id} className="gutterRow">
              <CourseCard course={course} />
              </Col>
            ))
          }
        </Row>)
}

CardList.propTypes = {
  courses: PropTypes.array
}

export default CardList