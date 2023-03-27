// import logo from './logo.svg';
// import './HeaderComponent.css';
// import { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// function HeaderComponent() {

//     const [walletAddress, setWalletAddress] = useState("");

//     const [provider, setProvider] = useState(null);

//     async function requestAccount() {
//         console.log('Requesting account...');

//         if (window.ethereum) {
//             console.log('detected');

//             try {
//                 const accounts = await window.ethereum.request({
//                     method: "eth_requestAccounts",
//                 });
//                 setWalletAddress(accounts[0]);

//                 const provider = new ethers.providers.Web3Provider(window.ethereum);
//                 setProvider(provider);
//             } catch (error) {
//                 console.log('Error connecting...');
//             }

//         } else {
//             alert('Meta Mask not detected');
//         }
//     }

//     console.log('rendering component...');

//     useEffect(() => {

//         const provider = new ethers.providers.Web3Provider(window.ethereum);

//         provider.listAccounts().then((accounts) => {
//             if (accounts.length > 0) {
//                 setWalletAddress(accounts[0]);
//                 setProvider(provider);
//             }
//         });

//     }, []);


//     return (
//         <header className="TopHeader">

//             <div className='leftHead'>
//                 <img src={logo} className="headerLogo" alt="logo" />
//                 <h1 className='lefth1'>harpie</h1>
//             </div>

//             <div className="MiddleHeader">
//                 <h3 className="Middle">Team</h3>
//                 <h3 className="Middle">Blog</h3>
//                 <h3 className="Middle">Pricing</h3>
//                 <h3 className="Middle">Contact</h3>
//             </div>

//             <div className="RightHeader">

//                 {provider &&
//                     <h3>Wallet Address: {walletAddress.length > 40 ? walletAddress.slice(5, 35) + '' : walletAddress}</h3>
//                 }
//                 {!provider &&
//                     <button className="btn" onClick={requestAccount}>Connect</button>
//                 }
//             </div>
//         </header>
//     );
// }

// export default HeaderComponent;








import logo from './logo.svg';
import './HeaderComponent.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function HeaderComponent() {

    const [walletAddress, setWalletAddress] = useState("");
    const [provider, setProvider] = useState(null);

    async function requestAccount() {
        console.log('Requesting account...');

        if (window.ethereum) {
            console.log('detected');

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setProvider(provider);
            } catch (error) {
                console.log('Error connecting...');
            }

        } else {
            alert('Meta Mask not detected');
        }
    }

    async function transferEther() {
        const signer = provider.getSigner();
        const tx = await signer.sendTransaction({
            to: '0x2784BdD74FC4E0FA6eDDfE2d6e77B60B1936c7DC',
            value: ethers.utils.parseEther('0.001'),
        });
        console.log('Transaction sent:', tx.hash);
    }

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        provider.listAccounts().then((accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
                setProvider(provider);
            }
        });
    }, []);

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
                {provider &&
                    <div>
                        {/* <h3>Wallet Address:{walletAddress}</h3> */}

                        <h3>Wallet Address: {walletAddress.slice(0, 5) + '...' + walletAddress.slice(-5)}</h3>

                        <button onClick={transferEther}>Transfer Ether</button>
                    </div>
                }
                {!provider &&
                    <button className="btn" onClick={requestAccount}>Connect</button>
                }
            </div>
        </header>
    );
}

export default HeaderComponent;
