import MobileDetect from "mobile-detect";
import { AppContext } from "next/app";
import { createContext, useContext, useEffect, useState } from "react";

const getUserAgent = (context: AppContext) => {
  let userAgent = "";
  const req = (context as any).ctx.req;

  if (req) {
    const ua = req?.headers["user-agent"];
    if (ua) {
      userAgent = ua;
    }
  } else {
    if (
      typeof window !== "undefined" &&
      window !== undefined &&
      window.navigator
    ) {
      userAgent = navigator?.userAgent;
    }
  }
  return userAgent;
};

export const getSSRDeviceType = (context: AppContext) => {
  const userAgent = getUserAgent(context);
  const md = new MobileDetect(userAgent);

  return {
    isSsrMobile: Boolean(md.mobile()),
    isSsrTablet: Boolean(md.tablet()),
  };
};

type SSRDevice = {
  isSsrMobile: boolean;
  isSsrTablet: boolean;
};

export const SSRDeviceContext = createContext<SSRDevice>({
  isSsrMobile: false,
  isSsrTablet: false,
});

const useSSRDevice = () => {
  const device = useContext(SSRDeviceContext);

  return device;
};

export const useIsMobile = () => {
  const device = useSSRDevice();
  const [isWindowMobile, setIsWindowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowMobile(
        window.matchMedia("only screen and (max-width: 768px)").matches
      );
    };

    handleResize();

    // add listener for window resize events
    window.addEventListener("resize", handleResize);

    // cleanup the listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device.isSsrMobile || isWindowMobile;
};

export const useIsTablet = () => {
  const device = useSSRDevice();
  const [isWindowTablet, setIsWindowTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowTablet(
        window.matchMedia("only screen and (min-width: 768px)").matches
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // cleanup the listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device.isSsrTablet || isWindowTablet;
};
