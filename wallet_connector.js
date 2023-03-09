
   

        "use strict";

        /**
         * Example JavaScript code that interacts with the page and Web3 wallets
         */

        // Unpkg imports
        const Web3Modal = window.Web3Modal.default;
        const WalletConnectProvider = window.WalletConnectProvider.default;
        const EvmChains = window.EvmChains;
        //const Fortmatic = window.Fortmatic;

        // Web3modal instance
        let web3Modal

        // Chosen wallet provider given by the dialog window
        let provider;


        // Address of the selected account
        let selectedAccount;


        /**
         * Setup the orchestra
         */
        function Web3_Nft_Login_init() {

            // Tell Web3modal what providers we have available.
            // Built-in web browser provider (only one can exist as a time)
            // like MetaMask, Brave or Opera is added automatically by Web3modal
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
                    }
                },

                /*fortmatic: {
                  package: Fortmatic,
                  options: {
                    key: ""
                  }
                }*/
            };

            web3Modal = new Web3Modal({
                cacheProvider: false, // optional
                providerOptions, // required
            });

        }


        /**
         * Kick in the UI action after Web3modal dialog has chosen a provider
         */
        async function fetchAccountData() {

            // Get a Web3 instance for the wallet
            const web3 = new Web3(provider);

            // Get connected chain id from Ethereum node
            const chainId = await web3.eth.getChainId();
            // Load chain information over an HTTP API
            //const chainData = await EvmChains.getChain(chainId);
            //document.querySelector("#network-name").textContent = chainData.name;

            // Get list of accounts of the connected wallet
            const accounts = await web3.eth.getAccounts();

            // MetaMask does not give you all accounts, only the selected account
            selectedAccount = accounts[0];
            console.log('selectedAccount',selectedAccount)
            console.log( "value",document.querySelector("#btn-connect").value)

            let address = selectedAccount;
            let signature=await web3.eth.personal.sign(web3.utils.utf8ToHex("nonce"), address, "nonce")
            let jwt=document.querySelector("#btn-connect").value
            let jsonbody={
                signature,
                jwt
            }
            console.log('signature',signature)
            
           const res=await fetch(`http://localhost:80/signatureVerification`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body:JSON.stringify(jsonbody)
                    })

            const data=await res.text()
            console.log('data',data)
           


        }



        /**
         * Fetch account data for UI when
         * - User switches accounts in wallet
         * - User switches networks in wallet
         * - User connects wallet initially
         */
        async function refreshAccountData() {

            await fetchAccountData(provider);
        }


        /**
         * Connect wallet button pressed.
         */
        async function Web3_Nft_Login_onConnect() {


            try {
                provider = await web3Modal.connect();
            } catch (e) {
                //console.log("Could not get a wallet connection", e);
                return;
            }

            // Subscribe to accounts change
            provider.on("accountsChanged", (accounts) => {
                fetchAccountData();
            });

            // Subscribe to chainId change
            provider.on("chainChanged", (chainId) => {
                fetchAccountData();
            });

            // Subscribe to networkId change
            provider.on("networkChanged", (networkId) => {
                fetchAccountData();
            });

            await refreshAccountData();
        }


        window.addEventListener('load', async () => {
            Web3_Nft_Login_init();
             let validDomains=["127.0.0.1:5500","www.know-about-blockchain.com"]
             let hostDomain=window.location.host
             console.log("host",hostDomain)
             if(validDomains.includes(hostDomain)){
            document.querySelector("#btn-connect").addEventListener("click", Web3_Nft_Login_onConnect);
             }
        });

