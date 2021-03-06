import React from 'react';
import Dashboard from '../dashboard';
import Home from '../home';
import Course from '../course';
import { StyledWebInfo, StyledRouter } from './web-info.style';
import Lecture from '../lecture';
import PlayVideo from '../play-video';
import ManageUser from '../manage-user';
import Subscribe from '../subscribe';
import HomeOld from '../home-old';
import CoursePlayList from '../course-play-list';
// import { Router } from '@reach/router'
import { QuickProfile } from '../quick-profile';
import StandUp from '../stand-up';

const WebInfo = () => {
  return (
    <>
      <StyledWebInfo>
        <StyledRouter>
          <Home path="/" />
          <HomeOld path="/home-old" />
          <Dashboard path="dashboard" />
          <Course path="/manage/course/:courseId" />
          <Lecture path="/manage/lecture/:lectureId" />
          <PlayVideo path="/video/:youtubeVideoId" />
          <CoursePlayList path="/course/:courseId" />
          <QuickProfile path="/manage/profile" />
          <ManageUser path="/manage/user" />
          <Subscribe path="/subscribe" />
          <StandUp path="/my-update" />
        </StyledRouter>
      </StyledWebInfo>
    </>
  );
};

export default WebInfo;
