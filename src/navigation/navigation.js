import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../screen/Contact';
import Courses from '../screen/Courses';
import { DiscoveryWorkshops } from '../screen/DiscoveryWorkshops';
import Home from '../screen/Home'
import { OnDemandTalent } from '../screen/OnDemandTalent';
import { ProductManagement } from '../screen/ProductManagement';
import Services from '../screen/Services';
import { TeamBuilding } from '../screen/TeamBuilding';
import { TechnologyTraining } from '../screen/TechnologyTraining';
import { TechnologyTransform } from '../screen/TechnologyTransform';
import { UIUXDesign } from '../screen/UIUXDesign';

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/" element={<Services />} />
      <Route path="/courses/" element={<Courses />} />
      <Route path="/contact/" element={<Contact />} />
      <Route
        path="/services/technology-transformation"
        element={<TechnologyTransform />}
      />
      <Route path="/services/team-building" element={<TeamBuilding />} />
      <Route
        path="/services/on-demand-talent"
        element={<OnDemandTalent />}
      />
      <Route
        path="/services/product-management"
        element={<ProductManagement />}
      />
      <Route
        path="/services/discovery-workshops"
        element={<DiscoveryWorkshops />}
      />
      <Route
        path="/services/technology-training"
        element={<TechnologyTraining />}
      />
      <Route path="/services/uiux-design" element={<UIUXDesign />} />
    </Routes>
  );
}
