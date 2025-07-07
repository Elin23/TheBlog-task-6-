interface ArrowUpIconProps {
  color?: string;
  className?: string; 
}
export default function ArrowUpIcon({
  color = "text-black", 
  className = "w-7 h-7"
}: ArrowUpIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${color}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <line x1="12" y1="19" x2="12" y2="5" strokeLinecap="round" />
      <polyline
        points="5,12 12,5 19,12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
