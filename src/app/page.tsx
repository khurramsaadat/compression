'use client';
import Hero from '@/components/Hero';
import FileDrop from '@/components/FileDrop';
import SettingsPanel from '@/components/SettingsPanel';
import ProgressBar from '@/components/ProgressBar';
import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';

interface CompressedResult {
  name: string;
  originalSize: number;
  compressedSize: number;
  blob: Blob;
}

const PostCompressionBlock = () => (
  <div className="max-w-2xl w-full mt-10 text-center flex flex-col items-center gap-4 text-gray-800">
    <div className="text-base mb-2">It takes time and money for development and server costs for this app</div>
    <div className="text-lg font-semibold mb-2">If you like it, <a href="#" className="text-blue-600 underline">consider one time purchase of $10. Use forever!</a></div>
    <div className="mb-2">We offer regional pricing in some countries. <a href="#" className="text-blue-600 underline">Click here to check!</a></div>
    <div className="mb-2">Press <span className="font-bold">Ctrl/Cmd + D</span> to Bookmark</div>
    <a href="/feedback" className="text-blue-600 underline">Feedback</a>
  </div>
);

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [settings, setSettings] = useState({
    quality: 60,
    maxSize: 2,
    maxWidth: 4096,
    maxHeight: 4096,
  });
  const [compressing, setCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<CompressedResult[] | null>(null);
  const [done, setDone] = useState(false);

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
    setResults(null);
    setDone(false);
    setProgress(0);
    setCompressing(false);
  };

  const handleSettingsChange = (newSettings: typeof settings) => {
    setSettings(newSettings);
  };

  const handleStartCompression = async () => {
    setCompressing(true);
    setProgress(0);
    setResults(null);
    setDone(false);
    const compressed: CompressedResult[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      try {
        const compressedBlob = await imageCompression(file, {
          maxSizeMB: settings.maxSize,
          maxWidthOrHeight: Math.max(settings.maxWidth, settings.maxHeight),
          initialQuality: settings.quality / 100,
          useWebWorker: true,
        });
        compressed.push({
          name: file.name,
          originalSize: file.size,
          compressedSize: compressedBlob.size,
          blob: compressedBlob,
        });
      } catch {
        compressed.push({
          name: file.name,
          originalSize: file.size,
          compressedSize: file.size,
          blob: file,
        });
      }
      setProgress(Math.round(((i + 1) / selectedFiles.length) * 100));
    }
    setResults(compressed);
    setCompressing(false);
    setDone(true);
  };

  const handleDownload = async () => {
    if (!results) return;
    if (results.length === 1) {
      // Single file: download directly
      const url = URL.createObjectURL(results[0].blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = results[0].name;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      // Multiple files: zip and download
      const zip = new JSZip();
      results.forEach(r => zip.file(r.name, r.blob));
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'compressed-images.zip';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const totalOriginal = results?.reduce((sum, r) => sum + r.originalSize, 0) || 0;
  const totalCompressed = results?.reduce((sum, r) => sum + r.compressedSize, 0) || 0;
  const percentSaved = totalOriginal && totalCompressed ? Math.round(100 - (totalCompressed / totalOriginal) * 100) : 0;

  return (
    <>
      <Hero>
        <FileDrop onFilesSelected={handleFilesSelected} />
      </Hero>
      {selectedFiles.length > 0 && !done && (
        <div className="flex flex-col items-center mt-8">
          <div className="mb-6 text-lg font-medium text-gray-800">
            Selected {selectedFiles.length} image{selectedFiles.length > 1 ? 's' : ''}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-2xl mb-6 shadow-lg transition-colors"
            onClick={handleStartCompression}
            disabled={compressing}
          >
            Start compression
            <div className="text-base font-normal">with default settings</div>
          </button>
          <SettingsPanel {...settings} onChange={handleSettingsChange} />
          {compressing && <ProgressBar progress={progress} />}
        </div>
      )}
      {done && results && (
        <div className="flex flex-col items-center mt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Done ✓</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded mb-6 shadow"
            onClick={handleDownload}
          >
            {results.length === 1 ? 'Download image' : 'Download all as ZIP'}
          </button>
          <div className="border border-blue-300 rounded-lg p-6 mb-6 bg-white text-center">
            <div className="text-2xl font-bold mb-2">Saved {percentSaved}%</div>
            <div className="text-gray-700">{((totalOriginal - totalCompressed) / 1024).toFixed(1)} KB reduced</div>
          </div>
          <button
            className="text-blue-600 underline text-base mt-2"
            onClick={() => {
              setSelectedFiles([]);
              setResults(null);
              setDone(false);
              setProgress(0);
            }}
          >
            Compress more images!
          </button>
          <PostCompressionBlock />
        </div>
      )}
    </>
  );
}
