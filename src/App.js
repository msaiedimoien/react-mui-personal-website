import {Toolbar} from "@mui/material";

import Header from "./components/ui/Header";
import {MainLayout} from "./components/layouts/MainLayout";

function App() {
  return (
      <MainLayout>
          <Header />
          <Toolbar id="back-to-top-anchor" />
      </MainLayout>
  );
}

export default App;
