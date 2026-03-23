import React from "react";


interface Props {
  show: boolean;
}

const CVModal: React.FC<Props> = ({ show }) => {
  if (!show) return null;
  return (
    <section
      id="hire"
      className="flex flex-col items-center justify-center w-full"
      style={{ textAlign: 'center' }}
    >
      <h3 className="text-xl font-semibold text-white mb-4">My CV</h3>
      <img
        src="/arjit_cv.jpg"
        alt="CV"
        className="rounded-lg border-2 border-cyan-400 shadow-lg mb-4"
        style={{
          width: '260px',
          maxWidth: '90vw',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
      <div className="flex gap-4 mt-4">
        <a
          href="/arjit_cv.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 font-bold px-6 py-2 rounded-full transition-all inline-block"
        >
          Open CV Full Page
        </a>
        <a
          href="/arjit_cv.jpg"
          download
          className="text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-6 py-2 rounded-full transition-all inline-block"
        >
          Download
        </a>
      </div>
    </section>
  );
};
export default CVModal;
