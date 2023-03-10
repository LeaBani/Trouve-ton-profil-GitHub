import { createRoot } from 'react-dom/client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
