import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../screen/Contact';
import Courses from '../screen/Courses';
import Home from '../screen/Home'
import Services from '../screen/Services';

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/per/" element={<Home />} />
      <Route path="/per/services" element={<Services />} />
      <Route path="/per/courses" element={<Courses />} />
      <Route path="/per/contact" element={<Contact />} />
    </Routes>
  );
}
