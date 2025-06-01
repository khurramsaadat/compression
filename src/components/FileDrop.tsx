"use client";
import React, { useRef, useState } from "react";

interface FileDropProps {
  onFilesSelected: (files: File[]) => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/bmp"];
const MAX_FILES = 100;

const FileDrop: React.FC<FileDropProps> = ({ onFilesSelected }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const validFiles = Array.from(files).filter(
      (file) => ACCEPTED_TYPES.includes(file.type)
    );
    const limitedFiles = validFiles.slice(0, MAX_FILES);
    setSelectedFiles(limitedFiles);
    onFilesSelected(limitedFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      <label
        htmlFor="file-upload"
        className={`flex flex-col items-center justify-center border-4 border-dashed rounded-3xl p-16 transition-colors duration-300 cursor-pointer w-full ${
          dragActive ? "border-blue-500 bg-blue-100 dark:bg-blue-900 dark:border-blue-400" : "border-blue-300 bg-blue-50 dark:bg-gray-800 dark:border-gray-700"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        tabIndex={0}
        role="button"
        aria-label="Select or drop images"
      >
        <p className="mb-2 text-2xl text-gray-700 dark:text-gray-200 font-semibold text-center transition-colors duration-300">
          Drag and drop images here, or click to select
        </p>
        <input
          ref={inputRef}
          id="file-upload"
          type="file"
          accept="image/jpeg,image/png,image/bmp"
          multiple
          className="sr-only"
          onChange={handleChange}
        />
        <p className="text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">(JPG, PNG, BMP, up to 100 files)</p>
      </label>
      {selectedFiles.length > 0 && (
        <div className="mt-4 bg-white dark:bg-gray-900 rounded shadow p-4 transition-colors duration-300">
          <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">Selected {selectedFiles.length} image(s):</p>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm max-h-40 overflow-y-auto transition-colors duration-300">
            {selectedFiles.map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileDrop; 