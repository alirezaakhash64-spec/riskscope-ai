const riskData = {
  bitcoin:{score:15,risk:"Low"},
  ethereum:{score:20,risk:"Low"},
  bnb:{score:25,risk:"Low"},
  solana:{score:45,risk:"Medium"},
  xrp:{score:50,risk:"Medium"},
  cardano:{score:55,risk:"Medium"},
  pepe:{score:90,risk:"High"},
  bonk:{score:92,risk:"High"},
  floki:{score:88,risk:"High"}
};

function getRisk(coin){
  const key = coin.toLowerCase();
  return riskData[key] || {
    score:70,
    risk:"Unknown"
  };
}
