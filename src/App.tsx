import React from "react";
import { Layout } from "./components/Layout";
import { TileNavigation } from "./components/TileNavigation";

function App() {
  return (
    <div className="App">
      <Layout>
        <TileNavigation />
      </Layout>
    </div>
  );
}

export default App;
