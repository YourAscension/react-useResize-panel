import { useRef, useState } from "react";

export const useResize = (initialSize, type) => {
  const targetRef = useRef(null);
  const [size, setSize] = useState(initialSize);

  const onMouseDownHandler = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseUp);
    switch (type) {
      case "top":
      case "bottom": {
        document.body.style.cursor = "ns-resize";
        break;
      }
      case "right":
      case "left": {
        document.body.style.cursor = "e-resize";
        break;
      }
      default:
        throw new Error("Wrong type");
    }
  };

  const onMouseMove = (e) => {
    targetRef.current.style.opacity = "40%";
    switch (type) {
      case "top": {
        setSize(e.clientY);
        break;
      }
      case "bottom": {
        setSize(window.innerHeight - e.clientY);
        break;
      }
      case "right": {
        setSize(window.innerWidth - e.clientX);
        break;
      }
      case "left": {
        setSize(e.clientX);
        break;
      }
      default:
        throw new Error("Wrong type");
    }
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mouseleave", onMouseUp);
    document.body.style.cursor = "default";
    targetRef.current.style.opacity = "100%";
  };

  return [targetRef, size, onMouseDownHandler];
};
