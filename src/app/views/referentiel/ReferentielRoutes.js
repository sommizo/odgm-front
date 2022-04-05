import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NaturePrestation = Loadable(lazy(() => import("./referentiel/naturePrestation/NaturePrestation")));

const referentielRoutes = [
    {
        path: '/referentiel/naturePrestation/NaturePrestation',
        element: <NaturePrestation />,
    },
]

export default referentielRoutes
