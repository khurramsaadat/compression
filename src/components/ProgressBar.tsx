import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="w-full max-w-xl mx-auto mt-6">
    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
    <div className="text-center text-sm mt-1 text-gray-700">{progress}%</div>
  </div>
);

export default ProgressBar; 