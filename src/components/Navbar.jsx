"use client";
import { useState,useContext } from 'react';
import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";
import { WalletContext } from "@/context/wallet";
import { BrowserProvider } from "ethers";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiWalletconnect } from "react-icons/si";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    isConnected,
    setIsConnected,
    userAddress,
    setUserAddress,
    signer,
    isAuthorized,
    setSigner,
  } = useContext(WalletContext);

  const connectWallet = async () => {
    if (!window.ethereum) {
      throw new Error("Metamask is not installed");
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);
      const accounts = await provider.send("eth_requestAccounts", []);
      setIsConnected(true);
      setUserAddress(accounts[0]);
      const network = await provider.getNetwork();
      console.log(network)
      const chainID = network.chainId;
      const sepoliaNetworkID = "11155111";

      if (chainID.toString() !== sepoliaNetworkID) {
        alert("Please switch your MetaMask to Sepolia Test Network");
        return;
      }
    } catch (error) {
      console.error("connection error: ", error);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black sticky top-0">
        <div className="mx-auto flex items-center justify-between px-4 py-4">
        {/* Brand Logo and Name */}
        <div className="text-2xl font-bold text-white">
            <Link href="/">
            <div className="flex space-x-2">
                <div className=" mr-3">
                    <img
                        className='w-8'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor3xYhXDjy35hYLdeq-JaDQUV2fcLQa4Crw&s"
                        alt=""
                    />
                </div>
                <div className="brand-name flex items-end">VerifiChain</div>
            </div>
            </Link>
        </div>
    
        {/* Navigation Items for Desktop */}
        <div className="hidden xl:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-gray-400">
            Home
            </Link>
            <Link href="/upload" className="text-gray-300 hover:text-gray-400">
            Upload
            </Link>
            <Link href="/verify" className="text-gray-300 hover:text-gray-400">
            Verify
            </Link>
            <Link href="/manage" className="text-gray-300 hover:text-gray-400">
            Manage
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-gray-400">
            Dashboard
            </Link>
        </div>
    
        {/* Auth Buttons */}
        <div className="hidden xl:flex space-x-4 text-sm font-semibold">
            <button
              className={`px-4 py-2 rounded-full text-sm flex items-center bg-white text-black hover:bg-gray-200${
                isConnected ? "cursor-not-allowed" : "bg-gray-200 hover:bg-gray-200"
              }`}
              onClick={connectWallet}
              >
              {isConnected ? (
                <>{userAddress?.slice(0, 10)}...</>
              ) : (
                <>
                  <SiWalletconnect className='md:mr-4' />
                  <span className='hidden md:inline-block'>Connect Wallet</span>
                </>
              )}
            </button>
        </div>
    
        {/* Mobile Menu Button */}
        <div className="xl:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
                <div className="">
                <RxCross2 />
                </div>
            ) : (
                <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                ></path>
                </svg>
            )}
            </button>
        </div>
        </div>
    
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="xl:hidden bg-black px-5 py-2 font-semibold">
            <Link href="/" className="block text-gray-300 py-2 hover:text-gray-400">
            Home
            </Link>
            <Link href="/upload" className="block text-gray-300 py-2 hover:text-gray-400">
            Upload
            </Link>
            <Link href="/verify" className="block text-gray-300 py-2 hover:text-gray-400">
            Verify
            </Link>
            <Link href="/manage" className="block text-gray-300 py-2 hover:text-gray-400">
            Manage
            </Link>
            <Link href="/dashboard" className="block text-gray-300 py-2 hover:text-gray-400">
            Dashboard
            </Link>
            <div className="mt-4 flex flex-col space-y-3">
            <button className="flex justify-center bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
                Connect Wallet
            </button>
            
            </div>
        </div>
        )}
    </nav>
  

  
  );
};

export default Navbar;
