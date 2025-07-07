import React from "react";

const AlertTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
    {...props}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-dark p-4">
      <div className="bg-dark dark:bg-white shadow-2xl rounded-2xl p-8 w-full md:w-md text-center animate-fade-in">
        <div className="flex justify-center mb-4 animate-pop-in">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
            <AlertTriangleIcon />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-500 mb-2">
          Page Currently Unavailable
        </h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring this page to life. Please check back soon.
        </p>

        <p className="text-sm text-gray-400">Thank you for your patience.</p>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
