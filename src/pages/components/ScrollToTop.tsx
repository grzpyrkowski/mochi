import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // const regExp = "\/.+\/";

  useEffect(() => {
    // if (!pathname.match(regExp) || pathname.toString() === "/oferta" || pathname.toString() === "/projekty/salon") {
      window.scrollTo(0, 0);
    // }
  }, [pathname]);

  return null;
}