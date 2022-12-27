
import Application from "./ui/Application";
import React from "react"; 

import { createRoot } from 'react-dom/client';

const container = document.querySelector("div#main-container");
const root = createRoot(container);

root.render(<Application />);
