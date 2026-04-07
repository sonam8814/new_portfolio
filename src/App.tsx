import { lazy, Suspense } from "react";
import "./App.css";

const AnimatedBlobs = lazy(() => import("./components/AnimatedBlobs"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense fallback={null}>
              <AnimatedBlobs />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
