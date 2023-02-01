// == Import
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes, NavLink } from 'react-router-dom';
import {
  Menu, Loader,
} from 'semantic-ui-react';

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import '../../styles/index.scss';

import logoGithub from '../../assets/images/logo-github.png';

import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import Faq from '../Faq';
import NotFound from '../NotFound';

// == Composant
function App() {
  const [isLoading, toggleIsLoading] = useState(false);

  const [profileData, setProfileData] = useState([]);
  const [resultData, setResultData] = useState(null);

  const [newSearch, setSearch] = useState();

  const API_URL = 'https://api.github.com/search/repositories?q=';

  const loadResults = async () => {
    toggleIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}${newSearch}`);

      setProfileData(response.data.items);
      setResultData(response.data.total_count);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      toggleIsLoading(false);
    }
  };

  useEffect(() => {
    if (!newSearch) {
      return;
    }
    loadResults();
  }, [newSearch]);

  return (
    <div className="app">
      <img className="logo" src={logoGithub} alt="GitHub Logo" />
      <Menu pointing>
        <Menu.Item as={NavLink} to="/">Recherche</Menu.Item>
        <Menu.Item as={NavLink} to="/faq">FAQ</Menu.Item>
      </Menu>

      {isLoading
        && (
          <Loader active inline="centered" />
        )}

      {!isLoading && (
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <SearchBar loadResults={loadResults} setSearch={setSearch} />
                <Message data={resultData} />
                <ReposResults data={profileData} />
              </>
          )}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

// == Export
export default App;
