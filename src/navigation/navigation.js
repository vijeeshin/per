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
      <Route path="/services/" element={<Services />} />
      <Route path="/courses/" element={<Courses />} />
      <Route path="/contact/" element={<Contact />} />
      <Route
        path="/services/technology-transformation"
        element={<TechnologyTransform />}
      />
      <Route
        path="/services/team-building"
        element={<TeamBuilding />}
      />
    </Routes>
  );
}
