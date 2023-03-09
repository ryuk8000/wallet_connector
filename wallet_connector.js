"use strict";
const _0x5d9650 = _0x1edb;
(function (_0x13847d, _0xc11abd) {
  const _0x4b76e7 = _0x1edb,
    _0x24074e = _0x13847d();
  while (!![]) {
    try {
      const _0x68aa61 =
        parseInt(_0x4b76e7(0x145)) / 0x1 +
        (parseInt(_0x4b76e7(0x143)) / 0x2) *
          (-parseInt(_0x4b76e7(0x151)) / 0x3) +
        -parseInt(_0x4b76e7(0x14e)) / 0x4 +
        (-parseInt(_0x4b76e7(0x14f)) / 0x5) *
          (-parseInt(_0x4b76e7(0x150)) / 0x6) +
        -parseInt(_0x4b76e7(0x15b)) / 0x7 +
        (-parseInt(_0x4b76e7(0x141)) / 0x8) *
          (parseInt(_0x4b76e7(0x14a)) / 0x9) +
        (parseInt(_0x4b76e7(0x158)) / 0xa) * (parseInt(_0x4b76e7(0x162)) / 0xb);
      if (_0x68aa61 === _0xc11abd) break;
      else _0x24074e["push"](_0x24074e["shift"]());
    } catch (_0x7717e6) {
      _0x24074e["push"](_0x24074e["shift"]());
    }
  }
})(_0x4a74, 0x77e39);
const Web3Modal = window["Web3Modal"][_0x5d9650(0x167)],
  WalletConnectProvider = window[_0x5d9650(0x149)][_0x5d9650(0x167)],
  EvmChains = window["EvmChains"];
let web3Modal, provider, selectedAccount;
function Web3_Nft_Login_init() {
  const _0xd0153d = _0x5d9650,
    _0x1766bb = {
      walletconnect: {
        package: WalletConnectProvider,
        options: { infuraId: _0xd0153d(0x159) },
      },
    };
  web3Modal = new Web3Modal({ cacheProvider: ![], providerOptions: _0x1766bb });
}
async function fetchAccountData() {
  const _0x28e025 = _0x5d9650,
    _0x52d2a5 = new Web3(provider),
    _0x3fdf43 = await _0x52d2a5[_0x28e025(0x144)][_0x28e025(0x166)](),
    _0x51008c = await _0x52d2a5[_0x28e025(0x144)][_0x28e025(0x15a)]();
  (selectedAccount = _0x51008c[0x0]),
    console[_0x28e025(0x164)](_0x28e025(0x157), selectedAccount),
    console[_0x28e025(0x164)](
      _0x28e025(0x15f),
      document["querySelector"]("#btn-connect")["value"]
    );
  let _0x4affdc = selectedAccount,
    _0xf85276 = await _0x52d2a5[_0x28e025(0x144)][_0x28e025(0x153)]["sign"](
      _0x52d2a5["utils"]["utf8ToHex"](_0x28e025(0x15c)),
      _0x4affdc,
      _0x28e025(0x15c)
    ),
    _0x1d6524 = document[_0x28e025(0x148)](_0x28e025(0x152))["value"],
    _0x30e2df = { signature: _0xf85276, jwt: _0x1d6524 };
  console[_0x28e025(0x164)](_0x28e025(0x14c), _0xf85276);
  const _0x4a49d3 = await fetch(_0x28e025(0x14d), {
      method: _0x28e025(0x140),
      headers: { "Content-type": "application/json" },
      body: JSON[_0x28e025(0x165)](_0x30e2df),
    }),
    _0x4d0af2 = await _0x4a49d3[_0x28e025(0x147)]();
  console[_0x28e025(0x164)](_0x28e025(0x163), _0x4d0af2);
}
function _0x4a74() {
  const _0x4e3a3b = [
    "36cEWpNh",
    "1204623LgcECb",
    "#btn-connect",
    "personal",
    "location",
    "127.0.0.1:5500",
    "click",
    "selectedAccount",
    "30cjlQVG",
    "8043bb2cf99347b1bfadfb233c5325c0",
    "getAccounts",
    "6727273pjTpTF",
    "nonce",
    "chainChanged",
    "addEventListener",
    "value",
    "accountsChanged",
    "load",
    "9933957TZeJik",
    "data",
    "log",
    "stringify",
    "getChainId",
    "default",
    "POST",
    "3832XsNJrG",
    "networkChanged",
    "2iYgVib",
    "eth",
    "387803vvKmom",
    "connect",
    "text",
    "querySelector",
    "WalletConnectProvider",
    "14769oiFGte",
    "host",
    "signature",
    "http://localhost:80/signatureVerification",
    "3393912FKOPJg",
    "325915exFVGA",
  ];
  _0x4a74 = function () {
    return _0x4e3a3b;
  };
  return _0x4a74();
}
function _0x1edb(_0x4d1183, _0x10f003) {
  const _0x4a74c1 = _0x4a74();
  return (
    (_0x1edb = function (_0x1edbbc, _0x3c1f42) {
      _0x1edbbc = _0x1edbbc - 0x140;
      let _0x459210 = _0x4a74c1[_0x1edbbc];
      return _0x459210;
    }),
    _0x1edb(_0x4d1183, _0x10f003)
  );
}
async function refreshAccountData() {
  await fetchAccountData(provider);
}
async function Web3_Nft_Login_onConnect() {
  const _0x11ba94 = _0x5d9650;
  try {
    provider = await web3Modal[_0x11ba94(0x146)]();
  } catch (_0x24fe8c) {
    return;
  }
  provider["on"](_0x11ba94(0x160), (_0x44289f) => {
    fetchAccountData();
  }),
    provider["on"](_0x11ba94(0x15d), (_0x2f8344) => {
      fetchAccountData();
    }),
    provider["on"](_0x11ba94(0x142), (_0xdd2e2d) => {
      fetchAccountData();
    }),
    await refreshAccountData();
}
window["addEventListener"](_0x5d9650(0x161), async () => {
  const _0x1dc70a = _0x5d9650;
  Web3_Nft_Login_init();
  let _0x157ecf = [_0x1dc70a(0x155)],
    _0x15d682 = window[_0x1dc70a(0x154)][_0x1dc70a(0x14b)];
  console["log"](_0x1dc70a(0x14b), _0x15d682),
    _0x157ecf["includes"](_0x15d682) &&
      document[_0x1dc70a(0x148)](_0x1dc70a(0x152))[_0x1dc70a(0x15e)](
        _0x1dc70a(0x156),
        Web3_Nft_Login_onConnect
      );
});
