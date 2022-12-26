import {Toolbar} from "@mui/material";

import Header from "./components/ui/Header";
import {MainLayout} from "./components/layouts/MainLayout";

function App() {
  return (
      <MainLayout>
          <Header />
          <p>Salam my dear..!</p>
          <Toolbar id="back-to-top-anchor" />
      </MainLayout>
  );
}

export default App;
