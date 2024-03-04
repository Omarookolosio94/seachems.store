import Loader from 'core/components/Loader';
import { ScrollToTop } from 'core/helpers/scrollToTop';
import useProductStore from 'core/services/stores/useProduct.Store';
import Public from 'modules/public/Public';
import { ReactNotifications } from 'react-notifications-component';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const App = () => {
  const isProductStoreLoading = useProductStore((store) => store.isLoading);

  return (
    <>
      {isProductStoreLoading && <Loader />}
      <Router>
        <ScrollToTop />
        <ReactNotifications />
        <Routes>
          <Route path="/*" element={<Public />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
