import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "@hotel-ui/theme";
import "antd/dist/antd.css";
import Routes from "./router";
import { AuthProvider } from "auth";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
