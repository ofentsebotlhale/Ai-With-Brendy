import { Provider } from "react-redux";
import { store } from "./redux/store";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import React from "react";

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-800 transition-all">
          <Navbar />
          <div className="p-6 mt-12">
            <h1 className="text-2xl font-bold dark:text-white">
              Welcome to the Dashboard
            </h1>
          </div>
        </div>
      </div>
    </Provider>
  );
}
