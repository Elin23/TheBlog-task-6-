import { useEffect, useState } from 'react';

type Props = {
  isOpen: boolean;
  onSave: (name: string) => void;
  onClose: () => void;
};

export default function NamePopup({ isOpen, onSave, onClose }: Props) {
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setInputName('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-md flex items-center justify-center font-inter">
      <div className="bg-white dark:bg-dark text-text dark:text-white p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center border border-borderColor dark:border-borderColor-02">
        <h2 className="text-xl font-semibold mb-4">
          We’d love to personalize your experience — what should we call you?
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-md border border-borderColor dark:border-white/20 bg-transparent mb-4 focus:outline-none focus:ring-2 focus:ring-purple"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <div className="flex justify-between gap-3">
          <button
            onClick={() => {
              onSave(inputName || 'Your name');
              onClose();
            }}
            className="w-full bg-purple text-white py-2 rounded-md hover:bg-darkBlue transition">
            Save
          </button>
          <button
            onClick={() => {
              onSave('Your name');
              onClose();
            }}
            className="w-full border border-[color:var(--color-borderColor)] dark:border-white/30 py-2 rounded-md hover:bg-[color:var(--color-bg-soft)] dark:hover:bg-white/10 transition">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
