import logo from './logo.svg';
import './HeaderComponent.css';
import { useState } from 'react';
import { ethers } from 'ethers';

function HeaderComponent() {

    const [walletAddress, setWalletAddress] = useState("");


    async function requestAccount() {
        console.log('Requesting account...');

        if (window.ethereum) {
            console.log('detected');

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                // setWalletAddress(accounts[0]);
            } catch (error) {
                console.log('Error connecting...');
            }

        } else {
            alert('Meta Mask not detected');
        }
    }

    async function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
    }



    return (
        <header className="TopHeader">

            <div className='leftHead'>
                <img src={logo} className="headerLogo" alt="logo" />
                <h1 className='lefth1'>harpie</h1>
            </div>

            <div className="MiddleHeader">
                <h3 className="Middle">Team</h3>
                <h3 className="Middle">Blog</h3>
                <h3 className="Middle">Pricing</h3>
                <h3 className="Middle">Contact</h3>
            </div>

            <div className="RightHeader">
                {/* <h3>SIGNIN</h3> */}
                {/* <button className="btn">
                    <h3>Connect</h3>
                </button> */}

                <button className="btn" onClick={requestAccount}>Connect</button>
                {/* <h3>Wallet Address:{walletAddress}</h3> */}

            </div >
        </header >
    );
}

export default HeaderComponent;