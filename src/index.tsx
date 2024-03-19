/* @refresh reload */
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

import './index.css';
const App = lazy (() => import('./App.tsx'));
const NotFound = lazy (() => import('./App.tsx'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
 () => (
   <Router>
     <Route path="/:id" component={App} />
     <Route path="*" component={NotFound} />
   </Router>
), 
root!
);
