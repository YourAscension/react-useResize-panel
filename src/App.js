import "./styles.css";
import { useResize } from "./hooks/useResize";

export default function App() {
  const [targetRefLeft, sizeLeft, actionLeft] = useResize(50, "left");
  const [targetRefRight, sizeRight, actionRight] = useResize(50, "right");
  const [targetRefTop, sizeTop, actionTop] = useResize(50, "bottom");

  return (
    <div className="App">
      <div className="container">
        <div
          ref={targetRefLeft}
          style={{ width: sizeLeft + "px" }}
          className="side-bar left"
        >
          <div className="content"></div>
          <div className="controls">
            <div onMouseDown={actionLeft} className="resize-vertical"></div>
          </div>
        </div>

        <div
          ref={targetRefRight}
          style={{ width: sizeRight + "px" }}
          className="side-bar right"
        >
          <div className="controls">
            <div onMouseDown={actionRight} className="resize-vertical"></div>
          </div>
          <div className="content"></div>
        </div>
        <div
          ref={targetRefTop}
          style={{ height: sizeTop + "px" }}
          className="bottom-bar"
        >
          <div className="controls-horizontal">
            <div onMouseDown={actionTop} className="resize-horizontal"></div>
          </div>
          <div className="content"></div>
        </div>
        <h1>text</h1>
      </div>
    </div>
  );
}
