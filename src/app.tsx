import "../global.css";

import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
    return <div className="w-dvw h-dvh dark:bg-black bg-teal-500"></div>;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(<App />);
