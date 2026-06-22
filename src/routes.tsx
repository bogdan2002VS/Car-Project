import { Navigate, type RouteObject } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import GenerationPage from './pages/GenerationPage'
import EnginePage from './pages/EnginePage'
import OverviewModule from './pages/module/OverviewModule'
import WiringModule from './pages/module/WiringModule'
import WiringDetailPage from './pages/module/WiringDetailPage'
import PartsModule from './pages/module/PartsModule'
import PartDetailPage from './pages/module/PartDetailPage'
import GuidesModule from './pages/module/GuidesModule'
import GuideDetailPage from './pages/module/GuideDetailPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'g/:genId', element: <GenerationPage /> },
      {
        path: 'g/:genId/:engineId',
        element: <EnginePage />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: 'overview', element: <OverviewModule /> },
          { path: 'wiring', element: <WiringModule /> },
          { path: 'wiring/:diagramId', element: <WiringDetailPage /> },
          { path: 'parts', element: <PartsModule /> },
          { path: 'parts/item/:partId', element: <PartDetailPage /> },
          { path: 'guides', element: <GuidesModule /> },
          { path: 'guides/:guideId', element: <GuideDetailPage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
