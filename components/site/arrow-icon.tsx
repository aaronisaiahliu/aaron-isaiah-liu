type Direction = "up-right" | "down" | "left" | "right" | "refresh";

const paths: Record<Direction, string> = {
  "up-right": "M6 18 18 6M6 6h12v12",
  down: "M12 4v16M6 14l6 6 6-6",
  left: "M20 12H4m6-6-6 6 6 6",
  right: "M4 12h16m-6-6 6 6-6 6",
  refresh: "M20 7v5h-5M20 12a8 8 0 1 0-2.3 5.7M20 12a8 8 0 0 0-2.3-5.7",
};

// Vector paths cannot be substituted with platform emoji glyphs.
export default function ArrowIcon({
  direction = "up-right",
}: {
  direction?: Direction;
}) {
  return (
    <svg
      className="site-arrow"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
