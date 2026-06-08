import { useState } from "react";
export default function useToggle(value) {
  const [toggle, setToggle] = useState(value);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return [toggle, handleToggle];
}
