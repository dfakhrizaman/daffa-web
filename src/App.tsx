import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import AppRouting from "./routes/AppRouting";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "'Outfit', sans-serif",
        colors: {
          primaryBlue: ["#6676A0", "#284582"],
          themeBlack: ["#0A101F"],
        },
        primaryColor: "primaryBlue",
      }}
    >
      <BrowserRouter>
        <AppRouting />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
