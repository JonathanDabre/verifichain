"use client";
import { useState } from 'react';
import AccessControl from './accessControl';
import { RiCircleFill } from "react-icons/ri";

const mockDocuments = [
  { name: 'Degree Certificate', hash: 'https://gateway.pinata.cloud/ipfs/Qmd3RzTq728BKd2KXDN25zJAXuDXqBHf4uNoeLyGcSWxzg', date: '2024-10-01', status: 'Pending' },
  { name: 'Transcript', hash: 'https://gateway.pinata.cloud/ipfs/Qmd3RzTq728BKd2KXDN25zJAXuDXqBHf4uNoeLyGcSWxzg', date: '2024-09-25', status: 'Pending' },
  { name: 'Leaving Certificate', hash: 'https://gateway.pinata.cloud/ipfs/Qmd3RzTq728BKd2KXDN25zJAXuDXqBHf4uNoeLyGcSWxzg', date: '2024-10-01', status: 'Verified' },
  { name: 'Marksheet', hash: 'https://gateway.pinata.cloud/ipfs/Qmd3RzTq728BKd2KXDN25zJAXuDXqBHf4uNoeLyGcSWxzg', date: '2024-09-25', status: 'Verified' },
];

export default function DocumentList() {
  const [documents, setDocuments] = useState(mockDocuments);
  const [selectedDocument, setSelectedDocument] = useState(null); // Tracks the document selected for managing access

  const deleteDocument = (hash) => {
    setDocuments(documents.filter((doc) => doc.hash !== hash));
  };

  const openAccessControl = (doc) => {
    setSelectedDocument(doc);
  };

  const closeAccessControl = () => {
    setSelectedDocument(null);
  };

  return (
    <div className=" p-6 bg-[#0A0A0A] text-white rounded-lg border  border-[#656565] ">
      <h2 className="text-lg font-semibold mb-6">Your Uploaded Documents</h2>
      <div className="overflow-x-auto">
        <div className="table-auto w-full flex flex-col text-left border-collapse">
          <div className='rounded-lg w-full'>
            <div className="bg-black flex w-full font-semibold justify-between border-[#656565] border-x border-t rounded-t-lg">
              <div className="px-4 py-2 w-[25%]">Name</div>
              <div className="px-4 py-2 w-[20%]">Hash</div>
              <div className="px-4 py-2 w-[15%]">Date</div>
              <div className="px-4 py-2 w-[10%] text-center">Status</div>
              <div className="px-4 py-2 w-[30%] text-center">Actions</div>
            </div>
          </div>
          <div className='flex flex-col'>
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-black border-b flex border text-sm border-[#656565] hover:bg-[#0A0A0A] transition">
                <div className="px-4 py-2 w-[25%]">{doc.name}</div>
                <div className="px-4 py-2 truncate w-[20%]">{doc.hash}</div>
                <div className="px-4 py-2 w-[15%]">{doc.date}</div>
                <div className="px-4 py-2 w-[10%] flex justify-center items-center">
                  <div className={`flex space-x-2 px-3 py-2 font-semibold text-xs rounded-md `}> 
                    <div className={` text-lg  ${
                      doc.status === 'Verified' ? 'text-green-600' : 'text-yellow-500'
                    }`}>
                        <RiCircleFill />
                    </div>
                    <div className="text-white pt-[3px]">
                        {doc.status}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 space-x-4 w-[30%] flex justify-center">
                    <button
                        onClick={() => openAccessControl(doc)}
                        className="px-4 py-2 bg-white text-black font-semibold rounded-md text-sm transition"
                    >
                    Manage Access
                    </button>
                    <button
                        onClick={() => deleteDocument(doc.hash)}
                        className="px-4 py-2 border border-white text-white font-semibold rounded-md text-sm transition"
                    >
                        Delete
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show modal if a document is selected */}
      {selectedDocument && (
        <AccessControl docHash={selectedDocument.hash} onClose={closeAccessControl} />
      )}
    </div>
  );
}
