import type { AppContext, AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SSRDeviceContext, getSSRDeviceType } from "@/hooks/isMobile";
import "../styles/globals.scss";
import Layout from "@/components/layout";

const Jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["cyrillic-ext"],
  variable: "--font-Jakarta",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

interface MyAppProps extends AppProps {
  isSsrMobile: boolean;
  isSsrTablet: boolean;
}

function App({ Component, pageProps, isSsrMobile, isSsrTablet }: MyAppProps) {
  return (
    <Layout>
      <div className="root">
        <SSRDeviceContext.Provider
          value={{
            isSsrMobile,
            isSsrTablet,
          }}
        >
          <style jsx global>
            {`
              :root {
                --font-Jakarta: ${Jakarta.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
        </SSRDeviceContext.Provider>
      </div>
    </Layout>
  );
}

interface MyAppProps extends AppProps {
  isSsrMobile: boolean;
  isSsrTablet: boolean;
}

App.getInitialProps = async (appContext: AppContext): Promise<MyAppProps> => {
  const deviceType = getSSRDeviceType(appContext);

  // Extract your initial pageProps
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    Component: appContext.Component,
    router: appContext.router,
    ...deviceType,
  };
};

export default App;
