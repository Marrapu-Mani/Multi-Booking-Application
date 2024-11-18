import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import FuncitonHallsPage from "./pages/FunctionHalls";
import SportsFacilitiesPage from "./pages/SportsFacilities";
import WellnessServicesPage from "./pages/WellnessServices";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/function-halls', element: <FuncitonHallsPage /> },
      { path: '/sports-facilities', element: <SportsFacilitiesPage /> },
      { path: '/wellness-services', element: <WellnessServicesPage /> }
    ],
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}