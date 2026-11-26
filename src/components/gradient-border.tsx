export const GradientBorder = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{
        height: "100%",
        left: 0,
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        width: "100%",
      }}
    >
      <defs>
        <linearGradient id="page-border-gradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#009FBD" />
          <stop offset="100%" stopColor="#4A249D" />
        </linearGradient>
      </defs>
      <rect
        fill="none"
        height="calc(100% - 2.5px)"
        rx="30.75"
        stroke="url(#page-border-gradient)"
        strokeLinejoin="round"
        strokeWidth="2.5"
        width="calc(100% - 2.5px)"
        x="1.25"
        y="1.25"
      />
    </svg>
  );
};
