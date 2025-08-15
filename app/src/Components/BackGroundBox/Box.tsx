import { type ReactNode, type PointerEvent, useState } from "react";

export default function Box({
  color,
  position,
  children,
  onMove
}: {
  color: string;
  position: { X: number; Y: number };
  children: ReactNode;
  onMove: (dx: number, dy: number) => void;
}) {

    const [lastCoordinates, setLastCoordinate] = useState<{X: number, Y: number} | null>(null)

    function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
      (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
      setLastCoordinate({
        X: e.clientX,
        Y: e.clientY
      })
    }

    function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
      if(lastCoordinates) {
        setLastCoordinate({
          X: e.clientX,
          Y: e.clientY
        })

        const dx = e.clientX - lastCoordinates.X
        const dy = e.clientY - lastCoordinates.Y

        onMove(dx, dy)
      }
    }

    function handlePointerUp() {
      setLastCoordinate(null)
    }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(${position.X}px, ${position.Y}px)`,
      }}
    >
        {children}
    </div>
  );
}
