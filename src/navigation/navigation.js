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
      <Route path="/per/" element={<Home />} />
      <Route path="/per/services/" element={<Services />} />
      <Route path="/per/courses/" element={<Courses />} />
      <Route path="/per/contact/" element={<Contact />} />
      <Route
        path="/per/services/technology-transformation"
        element={<TechnologyTransform />}
      />
      <Route path="/per/services/team-building" element={<TeamBuilding />} />
      <Route
        path="/per/services/on-demand-talent"
        element={<OnDemandTalent />}
      />
      <Route
        path="/per/services/product-management"
        element={<ProductManagement />}
      />
      <Route
        path="/per/services/discovery-workshops"
        element={<DiscoveryWorkshops />}
      />
      <Route
        path="/per/services/technology-training"
        element={<TechnologyTraining />}
      />
      <Route path="/per/services/uiux-design" element={<UIUXDesign />} />
    </Routes>
  );
}
