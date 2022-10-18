import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../screen/Contact';
import Courses from '../screen/Courses';
import Home from '../screen/Home'
import Services from '../screen/Services';

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
