import LoaderSpinier from 'component/LoaderSpinier/LoaderSpinier';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('HomePage/HomePage'));
const App = () => {
  return (
    <Suspense fallback={<LoaderSpinier />}>
      <HomePage />
    </Suspense>
  );
};

export default App;
