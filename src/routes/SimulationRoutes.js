import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// login option 3 routing
const ResearchAndDevelopment = Loadable(lazy(() => import('views/pages/simulations/researchAndDevelopment/researchAndDevelopemnt')));

// ==============================|| Simulation ROUTING ||============================== //

const SimulationRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/simulations/department/researchAndDevelopment',
            element: <ResearchAndDevelopment />
        }
    ]
};

export default SimulationRoutes;
