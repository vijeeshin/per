import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../screen/Contact';
import Courses from '../screen/Courses';
import Home from '../screen/Home'
import Services from '../screen/Services';
import { TeamBuilding } from '../screen/TeamBuilding';
import { TechnologyTransform } from '../screen/TechnologyTransform';

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/per/" element={<Home />} />
      <Route path="/per/services/" element={<Services />} />
      <Route path="/per/courses/" element={<Courses />} />
      <Route path="/per/contact/" element={<Contact />} />
      <Route
        path="/per/services/technology-transformation"
        element={<TechnologyTransform />}
      />
      <Route path="/per/services/team-building" element={<TeamBuilding />} />
    </Routes>
  );
}
