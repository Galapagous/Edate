const Spinner = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="50" height="50">
      <defs>
        <radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
          <stop offset="0" stopColor="#000112" />
          <stop offset=".3" stopColor="#000112" stopOpacity=".9" />
          <stop offset=".6" stopColor="#000112" stopOpacity=".6" />
          <stop offset=".8" stopColor="#000112" stopOpacity=".3" />
          <stop offset="1" stopColor="#000112" stopOpacity="0" />
        </radialGradient>
      </defs>
  
      {/* Rotating Circle */}
      <circle 
        transform-origin="center" 
        fill="none" 
        stroke="url(#a12)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeDasharray="200 1000" 
        strokeDashoffset="0" 
        cx="100" 
        cy="100" 
        r="70"
      >
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          calcMode="spline" 
          dur="2s" 
          values="360;0" 
          keyTimes="0;1" 
          keySplines="0 0 1 1" 
          repeatCount="indefinite" 
        />
      </circle>
  
      {/* Static Circle */}
      <circle 
        transform-origin="center" 
        fill="none" 
        opacity=".2" 
        stroke="#000112" 
        strokeWidth="3" 
        strokeLinecap="round" 
        cx="100" 
        cy="100" 
        r="70" 
      />
    </svg>
  );
  
  export default Spinner;
  