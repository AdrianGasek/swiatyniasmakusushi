const Spinner = ({ className = "", size = 16 }) => (
    <div
      role="status"
      className={` absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 w-${size} h-${size} ${className}`}
    >
      <div className="lds-ripple"><div></div><div></div></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
  
  export default Spinner;
  