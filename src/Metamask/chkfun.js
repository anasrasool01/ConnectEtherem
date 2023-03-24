import { getOptionsFromChildren } from "@mui/base"
import { ethers } from "ethers"
import HeaderComponent from "../HeaderComponent"

var metamaskInstalled = () => ethereum.metamaskInstalled

if (metamaskInstalled) {
    console.log("Metamask is Installed")
}
else {
    alert("It is not Installed")
}


var metamaskConnected = () => ethereum.isConnected()

const getChainId = async () => {
    return await ethereum.request({ method: 'eth_chainId' })
}

const getNetworkId = async () => {
    return await ethereum.request({ method: 'net_version' })
}

if (metamaskConnected()) {
    ethereum.autoRefreshOnNetworkChange = false
    network.innerHTML = await getNetworkId()
    network.innerHTML = await getChainId()
    await connectToAccount()
    console.log("Metamask Connected :", await metamaskConnected())
}
else {
    // alert("Connect to available Ethereum Network")
    console.log("Connect to available Ethereum Network")
}


const connectToAccount = async () => {
    try {
        let account = await ethereum.request({ method: "eth_requestAccounts" })
        return account
    } catch (error) {
        console.log("error connection:/n", error)
        return error
    }
}



const getAccount = async () => {
    try {
        let account = await ethereum.request({ method: "eth_accounts" })
        return account
    } catch (error) {
        console.log("error getting account:/n", error)
        return error
    }
}




// import { ethers } from "ethers"

const provider = await new ethers.providers.Web3Provider(window.ethereum, "any")
const signer = provider.getSigner()


const getBalance = async () => {
    try {
        let account = await getAccount()
        if (account.length === 0) {
            return 'connect first'
        }
        let balance = await signer.getBalance()
        return ethers.utils.formatEther(balance) + 'ETH'
    } catch (error) {
        console.log("error geting balance:/n", error)
        return error
    }
}



connect.addEventListener("click", async (e) => {
    e.preventDefault()

    let getAccountAddress = await metamaskConfig.getAccount()
    if (getAccountAddress.length < 1) {
        getAccountAddress = await metamaskConfig.connectToAccount()
        account.innerHTML = getAccountAddress
        balance.innerHTML = await metamaskConfig.getBalance()
    }
    else {
        account.innerHTML = getAccountAddress
        balance.innerHTML = await metamaskConfig.getBalance()
    }
    console.log(getAccountAddress)
})

