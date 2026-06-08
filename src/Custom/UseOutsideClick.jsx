import { useEffect } from "react";

export default function useOutsideClick(ref, setFun, status) {
  useEffect(() => {
    function outSide(e) {
      if (ref.current && status && !ref.current.contains(e.target)) {
        setFun();
      }
    }
    document.addEventListener("click", outSide);
    return () => {
      document.removeEventListener("click", outSide);
    };
  }, [status]);
}
