type ArrowIconProps = {
    color?: string; 
  };
  
  export default function ArrowUpRightIcon({ color}: ArrowIconProps) {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={color}
      >
        <path
          d="M1 11L11 1M11 1H1M11 1V11"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  