import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./@leo/utility/helper/ProtectedRoute";
import { authorizedStructure, unAuthorizedStructure } from "./pages";
import Error404 from "./pages/errors/Error404";
import JWTAuthAuthProvider from "./@leo/services/auth/jwt-auth/JWTAuthProvider";
import AuthRoutes from "./@leo/utility/AuthRoutes";
import AppLayout from "./@leo/core/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: authorizedStructure.routes.map((item) => {
      return {
        path: item.path,
        Component: item.component,
      };
    }),
  },
  ...unAuthorizedStructure.routes.map((item) => {
    return { path: item.path, Component: item.component };
  }),
  { path: "*", element: <Error404 /> },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <JWTAuthAuthProvider>
        <AuthRoutes>
          <RouterProvider router={router} />
        </AuthRoutes>
      </JWTAuthAuthProvider>
    </ThemeProvider>
  );
}

export default App;
