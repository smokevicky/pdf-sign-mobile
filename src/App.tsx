
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { UploadPage, SignPage, SuccessPage } from '@pages';
import { Header } from '@atoms';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router basename="/pdf-sign-mobile">
          <Routes>
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/sign" element={<SignPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Navigate to="/upload" />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
