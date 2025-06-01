import React from 'react';

interface SettingsPanelProps {
  quality: number;
  maxSize: number;
  maxWidth: number;
  maxHeight: number;
  onChange: (settings: { quality: number; maxSize: number; maxWidth: number; maxHeight: number }) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ quality, maxSize, maxWidth, maxHeight, onChange }) => {
  return (
    <div className="w-full max-w-xl mx-auto mt-8 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-colors duration-300">
      <div className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">Advanced Settings</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center gap-3 mb-4">
          <label className="w-28 font-medium text-gray-800 dark:text-gray-200">Quality :</label>
          <input
            type="range"
            min={10}
            max={100}
            value={quality}
            onChange={e => onChange({ quality: +e.target.value, maxSize, maxWidth, maxHeight })}
            className="flex-1 accent-blue-500 dark:accent-blue-300 transition-colors duration-300"
          />
          <input
            type="number"
            min={10}
            max={100}
            value={quality}
            onChange={e => onChange({ quality: +e.target.value, maxSize, maxWidth, maxHeight })}
            className="w-16 border rounded px-2 py-1 ml-2 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-300"
          />
          <span className="ml-1 dark:text-gray-300">%</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <label className="w-28 font-medium text-gray-800 dark:text-gray-200">Max Size :</label>
          <input
            type="range"
            min={0.1}
            max={10}
            step={0.1}
            value={maxSize}
            onChange={e => onChange({ quality, maxSize: +e.target.value, maxWidth, maxHeight })}
            className="flex-1 accent-pink-500 dark:accent-pink-300 transition-colors duration-300"
          />
          <input
            type="number"
            min={0.1}
            max={10}
            step={0.1}
            value={maxSize}
            onChange={e => onChange({ quality, maxSize: +e.target.value, maxWidth, maxHeight })}
            className="w-16 border rounded px-2 py-1 ml-2 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-300"
          />
          <span className="ml-1 dark:text-gray-300">MB</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <label className="w-28 font-medium text-gray-800 dark:text-gray-200">Max Width :</label>
          <input
            type="number"
            min={100}
            max={4096}
            value={maxWidth}
            onChange={e => onChange({ quality, maxSize, maxWidth: +e.target.value, maxHeight })}
            className="w-24 border rounded px-2 py-1 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-300"
          />
          <span className="ml-1 dark:text-gray-300">pixels</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <label className="w-28 font-medium text-gray-800 dark:text-gray-200">Max Height :</label>
          <input
            type="number"
            min={100}
            max={4096}
            value={maxHeight}
            onChange={e => onChange({ quality, maxSize, maxWidth, maxHeight: +e.target.value })}
            className="w-24 border rounded px-2 py-1 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-300"
          />
          <span className="ml-1 dark:text-gray-300">pixels</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel; 