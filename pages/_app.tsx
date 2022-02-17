import { globalStyles } from "@styles";

interface AppProps {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
