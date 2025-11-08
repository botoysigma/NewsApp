"use client";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-xl w-80">
        <h2 className="text-lg font-bold mb-4">Settings</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          More settings coming soon!
        </p>
        <button
          onClick={onClose}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md mt-2 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
