import React from "react";

const CVPreviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">CV Preview</h1>
      <img
        src="/arjit_cv.jpg"
        alt="CV Preview"
        className="rounded-lg border-2 border-cyan-400 shadow-lg mb-6"
        style={{ width: '100%', maxWidth: 800, height: 'auto', objectFit: 'contain' }}
      />
      <a
        href="/arjit_cv.jpg"
        download
        className="mt-4 text-white bg-blue-600 hover:bg-blue-700 font-bold px-6 py-2 rounded-full transition-all inline-block"
      >
        Download CV
      </a>
    </div>
  );
};

export default CVPreviewPage;
