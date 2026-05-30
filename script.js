const MAX_FREE = 50;
const data = {
  bitcoin:{
  name:'Bitcoin',
  symbol:'BTC',
  risk:'Low Risk',
  cls:'low',
  stars:'★★★★★',
  summary:'Bitcoin has the longest market history, very high liquidity, and the strongest global adoption among cryptocurrencies.',
  why:[
    'Oldest cryptocurrency',
    'Very high liquidity',
    'Strong global adoption',
    'Lower risk than most crypto assets'
  ],
  note:'Bitcoin is still volatile, but it is generally easier for beginners to understand than many smaller cryptocurrencies.',
  factors:{
    'Project Maturity':'Strong',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'Very High',
    'Sentiment Dependency':'Low'
  },
  risks:[
    'Regulatory uncertainty',
    'ETF market concentration',
    'Macro-economic sensitivity'
  ]
},
  ethereum:{name:'Ethereum',symbol:'ETH',risk:'Low Risk',cls:'low',stars:'★★★★★',summary:'Ethereum powers the largest smart contract ecosystem and is widely used across crypto applications.',why:['Large developer ecosystem','Strong utility','High liquidity','Active development'],note:'Ethereum is well-known, but beginners should still understand that it can move sharply with the market.',factors:{'Project Maturity':'Strong','Volatility':'Medium','Utility':'Very High','Liquidity':'High','Sentiment Dependency':'Low'},risks:['Smart contract vulnerabilities','Layer-2 competition','Regulatory uncertainty']},
  bnb:{
  name:'BNB',
  symbol:'BNB',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'BNB has strong utility inside the Binance ecosystem, but it carries regulatory and centralization risks.',
  why:[
    'Strong exchange ecosystem utility',
    'High liquidity across major markets',
    'Regulatory pressure around Binance',
    'More centralized than Bitcoin or Ethereum'
  ],
  note:'BNB can be useful for fees and ecosystem access, but its risk is tied closely to Binance and regulatory developments.',
  factors:{
    'Project Maturity':'Strong',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'High',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Binance regulatory risk',
    'Exchange dependency',
    'Centralization risk'
  ]
},
  solana:{
  name:'Solana',
  symbol:'SOL',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Solana offers fast transactions and strong ecosystem growth but faces network reliability concerns.',
  why:[
    'Rapid ecosystem growth',
    'Strong developer activity',
    'High transaction throughput',
    'History of network outages'
  ],
  note:'Solana has strong growth potential but investors should monitor network stability and validator concentration.',
  factors:{
    'Project Maturity':'Strong',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'High',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Network outages',
    'Validator concentration',
    'Ecosystem dependency'
  ]
},
  avalanche:{name:'Avalanche',symbol:'AVAX',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Avalanche has real technology and ecosystem activity, but it competes in a crowded blockchain market.',why:['Useful blockchain platform','Competitive market','Growth depends on adoption','Moderate volatility'],note:'Beginners should understand that strong technology does not remove market risk.',factors:{'Project Maturity':'Good','Volatility':'Medium','Utility':'High','Liquidity':'Medium-High','Sentiment Dependency':'Medium'}},
  toncoin:{name:'Toncoin',symbol:'TON',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Toncoin has strong attention due to its Telegram ecosystem connection, but it is still developing.',why:['Fast growth','Telegram ecosystem attention','Still maturing','Market sentiment influence'],note:'TON may be interesting, but beginners should understand it is less mature than Bitcoin or Ethereum.',factors:{'Project Maturity':'Developing','Volatility':'Medium','Utility':'Medium-High','Liquidity':'Medium','Sentiment Dependency':'Medium'}},
  polygon:{name:'Polygon',symbol:'POL',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Polygon focuses on scaling Ethereum and has real utility, but faces strong competition.',why:['Ethereum scaling use case','Known ecosystem','High competition','Depends on network adoption'],note:'Polygon is easier to understand after learning the basics of Ethereum.',factors:{'Project Maturity':'Good','Volatility':'Medium','Utility':'High','Liquidity':'Medium-High','Sentiment Dependency':'Medium'}},
  near:{name:'NEAR Protocol',symbol:'NEAR',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'NEAR is a blockchain platform with solid technology, but adoption is smaller than the biggest networks.',why:['Strong technology','Smaller adoption','Competitive category','Moderate volatility'],note:'Beginners should compare NEAR with larger ecosystems before trying to understand it deeply.',factors:{'Project Maturity':'Good','Volatility':'Medium','Utility':'Medium','Liquidity':'Medium','Sentiment Dependency':'Medium'}},
  arbitrum:{name:'Arbitrum',symbol:'ARB',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Arbitrum is an Ethereum Layer 2 project. It has real use, but the concept may be harder for beginners.',why:['Ethereum Layer 2 utility','Real ecosystem usage','Newer token','Technical learning curve'],note:'Arbitrum may be legitimate, but beginners may need to learn what Layer 2 networks are first.',factors:{'Project Maturity':'Developing','Volatility':'Medium','Utility':'High','Liquidity':'Medium','Sentiment Dependency':'Medium'}},
  optimism:{name:'Optimism',symbol:'OP',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Optimism helps scale Ethereum and has ecosystem usage, but it remains a developing project.',why:['Layer 2 use case','Ethereum ecosystem link','Growing adoption','Competition with other Layer 2s'],note:'Beginners should first understand Ethereum before trying to evaluate Optimism.',factors:{'Project Maturity':'Developing','Volatility':'Medium','Utility':'High','Liquidity':'Medium','Sentiment Dependency':'Medium'}},
  chainlink:{
  name:'Chainlink',
  symbol:'LINK',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Chainlink is the leading oracle network but depends heavily on continued adoption across the crypto ecosystem.',
  why:[
    'Leading oracle infrastructure',
    'Widely integrated across DeFi',
    'Strong utility and demand',
    'Growth depends on ecosystem adoption'
  ],
  note:'Chainlink plays a critical role in blockchain data delivery, but future growth depends on continued adoption.',
  factors:{
    'Project Maturity':'Strong',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'High',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Oracle competition',
    'Adoption dependency',
    'Smart contract risks'
  ]
},
  dogecoin:{name:'Dogecoin',symbol:'DOGE',risk:'High Risk',cls:'high',stars:'★★☆☆☆',summary:'Dogecoin is a meme-based cryptocurrency with strong community attention and high sentiment dependency.',why:['Meme coin origin','Influenced by social media','High volatility','Limited fundamental utility'],note:'Dogecoin can move quickly based on online attention, which can be risky for beginners.',factors:{'Project Maturity':'Old','Volatility':'High','Utility':'Low-Medium','Liquidity':'High','Sentiment Dependency':'High'}},
  shiba:{name:'Shiba Inu',symbol:'SHIB',risk:'High Risk',cls:'high',stars:'★★☆☆☆',summary:'Shiba Inu is heavily influenced by community hype and meme-coin market cycles.',why:['Meme coin','High volatility','Hype-driven','Limited fundamentals'],note:'Beginners should be careful with assets that depend strongly on social media excitement.',factors:{'Project Maturity':'Medium','Volatility':'High','Utility':'Low','Liquidity':'Medium-High','Sentiment Dependency':'High'}},
  pepe:{name:'PEPE',symbol:'PEPE',risk:'High Risk',cls:'high',stars:'★☆☆☆☆',summary:'PEPE is a meme-driven cryptocurrency with very high volatility and strong dependence on online trends.',why:['Meme-driven asset','Very high volatility','Social sentiment dependent','Limited long-term fundamentals'],note:'PEPE may experience rapid price swings. It is generally not beginner-friendly.',factors:{'Project Maturity':'Weak','Volatility':'Very High','Utility':'Low','Liquidity':'Medium','Sentiment Dependency':'Very High'}},
  floki:{name:'FLOKI',symbol:'FLOKI',risk:'High Risk',cls:'high',stars:'★☆☆☆☆',summary:'FLOKI is a meme-related token with high dependence on community and trend cycles.',why:['Meme coin category','Trend-driven demand','High volatility','Uncertain long-term fundamentals'],note:'Beginners should understand that meme coins can rise and fall very quickly.',factors:{'Project Maturity':'Medium','Volatility':'High','Utility':'Low-Medium','Liquidity':'Medium','Sentiment Dependency':'High'}},
  bonk:{name:'BONK',symbol:'BONK',risk:'High Risk',cls:'high',stars:'★☆☆☆☆',summary:'BONK is a Solana ecosystem meme coin with high volatility and strong community-driven behavior.',why:['Meme coin','Solana ecosystem trend','High volatility','Sentiment-driven'],note:'BONK may be difficult for beginners because its value can depend heavily on market hype.',factors:{'Project Maturity':'Weak','Volatility':'Very High','Utility':'Low','Liquidity':'Medium','Sentiment Dependency':'High'}},
  xrp:{name:'XRP',symbol:'XRP',risk:'Medium Risk',cls:'medium',stars:'★★★★☆',summary:'XRP is an established crypto asset focused on payments, but it has unique regulatory and market risks.',why:['Long market history','Payment-focused use case','High liquidity','Regulatory sensitivity'],note:'XRP is well-known, but beginners should understand that regulations can affect market perception.',factors:{'Project Maturity':'Strong','Volatility':'Medium','Utility':'Medium-High','Liquidity':'High','Sentiment Dependency':'Medium'}},
  cardano:{name:'Cardano',symbol:'ADA',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Cardano is a well-known blockchain project with a research-focused approach and slower ecosystem growth.',why:['Established project','Active community','Slower adoption pace','Competitive market'],note:'Cardano is known and easier to research, but adoption speed is an important risk factor.',factors:{'Project Maturity':'Good','Volatility':'Medium','Utility':'Medium','Liquidity':'High','Sentiment Dependency':'Medium'}},
  sui:{name:'Sui',symbol:'SUI',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Sui is a newer blockchain project with growth potential but less long-term market history.',why:['Newer ecosystem','Strong technical focus','Shorter track record','Higher uncertainty'],note:'Sui may be interesting, but beginners should be aware that newer projects carry more uncertainty.',factors:{'Project Maturity':'Developing','Volatility':'Medium-High','Utility':'Medium','Liquidity':'Medium','Sentiment Dependency':'Medium'}},
  uniswap:{name:'Uniswap',symbol:'UNI',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Uniswap is linked to a major decentralized exchange, but token value can be affected by DeFi market cycles.',why:['Strong DeFi brand','Real protocol usage','Governance token complexity','DeFi market risk'],note:'Beginners should first understand decentralized exchanges before evaluating UNI.',factors:{'Project Maturity':'Good','Volatility':'Medium','Utility':'Medium-High','Liquidity':'High','Sentiment Dependency':'Medium'}}
};
const aliases={btc:'bitcoin',bitcoin:'bitcoin',eth:'ethereum',ethereum:'ethereum',bnb:'bnb',sol:'solana',solana:'solana',avax:'avalanche',avalanche:'avalanche',ton:'toncoin',toncoin:'toncoin',matic:'polygon',pol:'polygon',polygon:'polygon',near:'near',arb:'arbitrum',arbitrum:'arbitrum',op:'optimism',optimism:'optimism',link:'chainlink',chainlink:'chainlink',doge:'dogecoin',dogecoin:'dogecoin',shib:'shiba',shiba:'shiba',pepe:'pepe',floki:'floki',bonk:'bonk',xrp:'xrp',ada:'cardano',cardano:'cardano',sui:'sui',uni:'uniswap',uniswap:'uniswap'};
const input=document.getElementById('coinInput'), btn=document.getElementById('analyzeBtn'), result=document.getElementById('result'), paywall=document.getElementById('paywall'), remainingEl=document.getElementById('remaining');
function used(){return Number(localStorage.getItem('rs_used')||0)}
function updateRemaining(){remainingEl.textContent=Math.max(0,MAX_FREE-used())}
function analyze(q){
  if(used()>=MAX_FREE){
    paywall.classList.remove('hidden');
    return;
  }

  const key = aliases[q.toLowerCase().trim()];
  const coin = data[key];

  if(!coin){
    result.className = 'result';
    result.innerHTML = '<h2>Coin not found</h2><p>Try Bitcoin, Ethereum, Solana, PEPE, Dogecoin, XRP or Cardano.</p>';
    return;
  }

  localStorage.setItem('used', used()+1);
  updateRemaining();

  const riskText = coin.risk || 'Medium Risk';
  const score = riskText.includes('Low') ? 2 : riskText.includes('Medium') ? 5 : 8;
  const level = riskText.includes('Low') ? 'Low Risk' : riskText.includes('Medium') ? 'Medium Risk' : 'High Risk';

  result.className = 'result';
  result.innerHTML = `
    <h2>${coin.name} (${coin.symbol}) Risk Dashboard</h2>
   <div class="risk-badge ${score <= 3 ? 'low' : score <= 6 ? 'medium' : 'high'}">${level} • ${score}/10</div>
    <p><b>Risk Level:</b> ${level}</p>
    <p><b>Liquidity:</b> ${score <= 3 ? 'High' : score <= 6 ? 'Medium' : 'Low'}</p>
    <p><b>Volatility:</b> ${score <= 3 ? 'Lower' : score <= 6 ? 'Medium' : 'High'}</p>
    <p><b>Category:</b> ${coin.name === 'Bitcoin' ? 'Large Cap' : coin.name === 'Ethereum' ? 'Large Cap' : coin.name === 'PEPE' ? 'Meme Coin' : 'Mid Cap'}</p>
    <p><b>Key Risks:</b></p>
<ul>
${coin.risks ? coin.risks.map(r => `<li>${r}</li>`).join('') : '<li>No major risks identified</li>'}
</ul>
<p><b>Why This Rating?</b></p>
<ul>
${coin.why ? coin.why.map(w => `<li>${w}</li>`).join('') : '<li>Rating based on overall risk profile</li>'}
</ul>
<p><b>Market Tier:</b> ${score <= 3 ? 'Large Cap' : score <= 6 ? 'Mid Cap' : 'Speculative'}</p>
<p><b>Risk Trend:</b> ${score <= 3 ? 'Stable' : score <= 6 ? 'Moderate' : 'Aggressive'}</p>
<p><b>Beginner Suitability:</b> ${score <= 3 ? 'High' : score <= 6 ? 'Medium' : 'Low'}</p>
<p><b>Summary:</b> ${coin.name === 'Bitcoin' ? 'The most established cryptocurrency with strong network security and adoption.' : coin.name === 'Ethereum' ? 'Leading smart contract platform with broad ecosystem adoption.' : coin.name === 'PEPE' ? 'Highly speculative meme coin with elevated volatility risk.' : 'Crypto asset with moderate market and adoption risk.'}</p>
    <p><b>Investor Note:</b> This is an educational risk overview, not financial advice.</p>
  `;
}
btn.onclick=()=>analyze(input.value); input.addEventListener('keydown',e=>{if(e.key==='Enter')analyze(input.value)});
['Bitcoin','Ethereum','Solana','PEPE','Dogecoin','Chainlink'].forEach(x=>{const b=document.createElement('button');b.className='chip';b.textContent=x;b.onclick=()=>{input.value=x;analyze(x)};document.getElementById('chips').appendChild(b)});
updateRemaining();
const waitlistForm = document.querySelector('.waitlist-form');

if (waitlistForm) {
  waitlistForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const emailInput = waitlistForm.querySelector('input[name="email"]');
    const button = waitlistForm.querySelector('button');

    button.textContent = 'Joining...';

    try {
      await fetch(waitlistForm.action, {
        method: 'POST',
        body: new FormData(waitlistForm),
        headers: {
          Accept: 'application/json'
        }
      });

      emailInput.value = '';
      button.textContent = 'You’re on the list ✅';
    } catch (error) {
    button.textContent = 'Join Early Access';
      alert('Something went wrong. Please try again.');
    }
  });
}
