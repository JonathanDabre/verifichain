"use client";
import React, { useState, useContext } from "react";
import { IoDocumentText } from "react-icons/io5";
import { uploadFileToIPFS, uploadJSONToIPFS } from "@/utils/pinata";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";
import { WalletContext } from "@/context/wallet";
import verification from "../verification";

const DragAndDrop = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [fileHash, setFileHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnEnabled, setBtnEnabled] = useState(false);
  const [btnContent, setBtnContent] = useState("Add Document");

  const { isConnected, signer } = useContext(WalletContext);

  // Dummy info for now (static)
  const dummyInfo = {
    name: "Sample Document",
    description: "This is a sample document for blockchain verification",
    exporter: "Sample Exporter"
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024 / 1024).toFixed(2));

      const uploadSimulator = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(uploadSimulator);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 200);

      try {
        const data = new FormData();
        data.set("file", file);
        setLoading(true);
      
        const toastId = toast.loading("Uploading to IPFS...");
      
        const response = await uploadFileToIPFS(data);
        if (response.success === true) {
          setFileHash(response.pinataURL);
          toast.success("File uploaded successfully!", { id: toastId });
          setBtnEnabled(true);
        } else {
          console.error(error);
          toast.error("Failed to upload to IPFS.", { id: toastId });
        }
      } catch (e) {
        toast.error("Error uploading file to IPFS.");
        console.error("IPFS upload error: ", e);
      } finally {
        setLoading(false);
      }
    }
  };

  const uploadMetadataToIPFS = async () => {
    const nftJSON = {
      ...dummyInfo,
      fileHash: fileHash,
    };

    try {
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        return response.pinataURL;
      }
    } catch (e) {
      console.log("Error uploading JSON metadata: ", e);
      toast.error("Error uploading metadata to IPFS");
    }
  };

  const addDocumentToBlockchain = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first.");
      return;
    }

    if (!signer) {
      toast.error("Signer not available. Please check your wallet connection.");
      return;
    }
    try {
      let contract = new ethers.Contract(
        verification.address,
        verification.abi,
        signer
      );

      if (!contract) {
        toast.error("Contract not initialized. Please connect your wallet.");
        return;
      }

      setBtnContent("Processing...");
      const metadataURL = await uploadMetadataToIPFS();
      if (!metadataURL) return;

      // toast.loading("Adding document to blockchain...");

      // Generate a unique hash for the document using ethers.keccak256
      const docHash = ethers.keccak256(ethers.toUtf8Bytes(fileName + fileHash));

      // let transaction = await contract.addDocHash(docHash, metadataURL);
      // await transaction.wait();
      
      setBtnContent("Add Document");
      setBtnEnabled(false);
      toast.success("Successfully added document to blockchain!");
    } catch (e) {
      console.error("Blockchain interaction error", e);
      toast.error("Failed to add document to blockchain");
      setBtnContent("Add Document");
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Toaster />
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-black hover:bg-gray-800"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-300">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>

      {/* Progress Bar */}
      {uploadProgress > 0 && (
        <div className="w-full">
          <div className="progress-card w-full my-4 rounded-xl bg-[#0A0A0A] px-4 py-6">
            <div className="flex space-x-3">
              <div className="icon">
                <div className="iconbg h-full rounded-lg py-2 px-3 flex justify-center items-center text-xl bg-[#1A1A1A] text-white">
                  <IoDocumentText />
                </div>
              </div>
              <div className="file-details text-white">
                <div className="textpart flex flex-col space-y-2">
                  <div className="filename font-semibold text-sm">{fileName}</div>
                  <div className="file-size text-xs">{fileSize} MB</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-[95%]">
                <div className="w-full bg-gray-600 rounded-full h-3 mt-4">
                  <div
                    className="bg-gray-300 h-3 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
              <div className="">
                <p className="mt-3 text-sm text-gray-400">{uploadProgress}% </p>
              </div>
            </div>
          </div>
          <div className="buttons flex justify-end space-x-3">
            <div className="cancel">
              <button className="border border-white text-white text-sm font-semibold rounded-lg px-5 py-2">
                Cancel
              </button>
            </div>
            <div className="submit">
              <button
                onClick={addDocumentToBlockchain}
                className={`rounded-lg px-5 py-2 text-sm font-semibold ${
                  btnEnabled ? "bg-white text-black cursor-pointer" : "bg-gray-400 text-gray-600 cursor-not-allowed"
                }`}
                disabled={!btnEnabled}
              >
                {btnContent}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="generated mt-10">
        {loading ? (
          <div className="loader">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.50667 39.3039 6.83854C40.7949 9.17041 43.5802 10.5776 46.2279 10.6379C50.2675 10.7711 54.5077 10.5572 58.4674 10.5791C65.3718 10.6413 72.2705 11.0749 78.3522 11.9305C83.2884 12.6714 87.5469 14.5795 90.6067 17.0577C92.0865 18.2443 93.7287 19.5256 94.9464 20.9832C96.154 22.4408 96.9292 24.1284 96.2996 26.1354C95.9528 27.0673 94.6652 28.4715 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : (
<<<<<<< HEAD
          <div className="file-hash-container w-full text-center">
            {hash && (
              <div className="flex flex-col w-full xl:flex-row space-x-3">
                <p className="bg-[#4F1C31] overflow-hidden px-3 py-2 rounded-lg text-[#EC5F8F] border border-[#EC5F8F] text-sm ">{hash}</p>
=======
          <div className="file-hash-container text-center">
            {fileHash && (
              <div className="flex space-x-3">
                <p className="bg-[#4F1C31] px-3 py-2 rounded-lg text-[#EC5F8F] border border-[#EC5F8F] text-sm ">{fileHash}</p>
>>>>>>> 5f0c2a8be248e51fb7ee347e2247c3cf51548f57
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(fileHash);
                    toast.success("Hash copied to clipboard!");
                  }}
                  className="border border-white text-white text-sm font-semibold rounded-lg px-5 py-2"
                >
                  Copy Hash
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;