import { useRef, useEffect } from "react";

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>;
const Canvas: React.FC<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  console.log(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    context.fillStyle = "blue";
    context.rect(0, 0, 100, 100);
    context.strokeRect(50, 50, 50, 50);
  }, []);
  return (
    <>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        width={props.width}
        height={props.height}
      ></canvas>
    </>
  );
};

export default Canvas;
