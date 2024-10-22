"use client";
import { useState } from 'react';

export default function AccessControl({ docHash, onClose }) {
  const [address, setAddress] = useState('');
  const [permissions, setPermissions] = useState({
    view: false,
    verify: false,
    download: false,
  });

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setPermissions({ ...permissions, [name]: checked });
  };

  const grantAccess = () => {
    // Grant access logic
    console.log(`Granting access to ${address} for document ${docHash}`);
  };

  const revokeAccess = () => {
    // Revoke access logic
    console.log(`Revoking access for ${address}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-[#0A0A0A] p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto relative border border-[#656565]">
        <h3 className="text-lg font-semibold mb-4 text-white ">
          Manage Access for Document: {docHash}
        </h3>

        {/* Address Input */}
        <input
          type="text"
          placeholder="Enter third party address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 bg-black border border-[#656565] rounded-md mb-4 text-sm focus:ring-blue-500 focus:border-blue-500 text-white"
        />

        {/* Permission Checkboxes */}
        <div className="space-y-2 text-white">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="view"
              checked={permissions.view}
              onChange={handlePermissionChange}
              className="form-checkbox text-blue-500"
            />
            <span className="ml-2">View</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="verify"
              checked={permissions.verify}
              onChange={handlePermissionChange}
              className="form-checkbox text-blue-500"
            />
            <span className="ml-2">Verify</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="download"
              checked={permissions.download}
              onChange={handlePermissionChange}
              className="form-checkbox text-blue-500"
            />
            <span className="ml-2">Download</span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <div className="space-x-4">
            <button
              onClick={grantAccess}
              className="px-4 py-2 bg-white text-black rounded-md font-semibold text-sm transition"
            >
              Grant Access
            </button>
            <button
              onClick={revokeAccess}
              className="px-4 py-2 bg-white text-black font-semibold rounded-md text-sm transition"
            >
              Revoke Access
            </button>
          </div>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white text-white rounded-md text-sm transition"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
