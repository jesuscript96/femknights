type TargetProps = {
  /** Número de anillos concéntricos (la diana "crece" al aumentar). */
  rings?: number;
  size?: number;
  /** Añade un punto sólido en el centro (bullseye completa). */
  filledCenter?: boolean;
  /** Proporción de trazo respecto al hueco (0-1). */
  strokeRatio?: number;
  color?: string;
  className?: string;
};

export default function Target({
  rings = 3,
  size = 320,
  filledCenter = false,
  strokeRatio = 0.5,
  color = "#111111",
  className,
}: TargetProps) {
  const c = size / 2;
  const maxOuter = c * 0.95;
  const step = maxOuter / rings;
  const sw = step * strokeRatio;

  const circles = [];
  for (let k = 0; k < rings; k++) {
    const r = maxOuter - k * step - sw / 2;
    circles.push(
      <circle
        key={k}
        cx={c}
        cy={c}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={sw}
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      role="img"
      aria-hidden="true"
      style={{ maxWidth: "100%", height: "auto", display: "block" }}
    >
      {circles}
      {filledCenter && <circle cx={c} cy={c} r={sw * 0.6} fill={color} />}
    </svg>
  );
}
