import React, { useEffect, useState, Fragment } from 'react';
import HeaderTitle from '../_dumb/header-title';
import { db } from '../data/firebase';
import LectureSlider from '../lecture-slider';

const Home = () => {
  const [data, updateData] = useState({
    courseList: [],
    lectureList: [],
    sectionList: [],
  });

  useEffect(() => {
    (async () => {
      const lectureSnapshot = await db
        .collection('lecture')
        .where('published', '==', true)
        .get();

      const lectureList = lectureSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const courseSnapshot = await db
        .collection('course')
        .orderBy('order', 'asc')
        .where('published', '==', true)
        .get();
      const courseList = courseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const sectionSnapshot = await db
        .collection('section')
        .orderBy('order', 'asc')
        .get();
      const sectionList = sectionSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      updateData({ lectureList, courseList, sectionList });
      // console.log(lectureList.map(x => x.course))
    })();
  }, []);

  const renderLectureSlider = courseId => {
    const { youtubePlaylistId } = data.courseList.find(course => course.id === courseId)
    const sectionList = data.sectionList.filter(section => section.course.id === courseId)
    const lectureList = data.lectureList.filter(lecture => lecture.course.id === courseId)
    const lectureSliderPropList = { lectureList, courseId, youtubePlaylistId, sectionList }
    return <LectureSlider {...lectureSliderPropList} />;
  };

  const renderCourseList = () => {
    return data.courseList.map(({ title, id }) => (
      <Fragment key={id}>
        <HeaderTitle text={title} tag="h2" />
        {renderLectureSlider(id)}
      </Fragment>
    ));
  };

  return <>{renderCourseList()}</>;
};

export default Home;
