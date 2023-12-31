import React from 'react'
import Bac from '../common/bac/Bac'
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'

const CourseHome = () => {
  return (
    <>
    <Bac title='Explore Courses'/>
    <CoursesCard/>
    <OnlineCourses/>
    </>
  )
}

export default CourseHome