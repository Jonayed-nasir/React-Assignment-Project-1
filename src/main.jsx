import * as React from "react";
import { createRoot } from 'react-dom/client';
import {HeroUIProvider} from "@heroui/react";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
      <App />
  </HeroUIProvider>
);
