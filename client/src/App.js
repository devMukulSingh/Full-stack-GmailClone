import { Suspense,lazy } from 'react';
import React from 'react';
import { Route , createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate} from "react-router-dom";
import { routes } from "./routes/routes.js";
import SuspenseLoader from './components/Commons/SuspenseLoader';

const ErrorComponents = lazy( () => import('./components/Commons/ErrorComponents'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path = { routes.main.path } element = { <Navigate to = {`${routes.emails.path}/inbox`} /> } />
        <Route path = { routes.main.path } element = { <routes.main.element /> }>
        <Route path ={ `${routes.emails.path }/:type` } element = { <routes.emails.element/> }  errorElement = { <ErrorComponents/> }/>
        <Route path = { routes.view.path } element = { <routes.view.element/> } errorElement = { <ErrorComponents/> } />
        <Route/>
        </Route>

      <Route path = { routes.invalid.path } element = { <Navigate to = {`${routes.emails.path}/inbox`} />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <Suspense fallback = {SuspenseLoader} >
        <RouterProvider router = {router} />
      </Suspense>
    </>
  );
}

export default App;
