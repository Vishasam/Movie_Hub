import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route
          index
          element={
            <Box>
              <HomePage />
            </Box>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
