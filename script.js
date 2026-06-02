const MAX_FREE = 50;
const coinGeckoIds = {
  bitcoin: 'bitcoin',
  ethereum: 'ethereum',
  bnb: 'binancecoin',
  solana: 'solana',
  avalanche: 'avalanche-2',
  toncoin: 'the-open-network',
  polygon: 'matic-network',
  near: 'near',
  arbitrum: 'arbitrum',
  optimism: 'optimism',
  chainlink: 'chainlink',
  dogecoin: 'dogecoin',
  shiba: 'shiba-inu',
  pepe: 'pepe'
};

function money(n) {
  if (!n && n !== 0) return 'Loading...';
  return '$' + Number(n).toLocaleString();
}

function percent(n) {
  if (!n && n !== 0) return 'Loading...';
  return `${Number(n).toFixed(2)}%`;
}

async function fetchMarketData() {
  try {
    const prices = await Promise.all([
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT').then(r => r.json()),
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT').then(r => r.json()),
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=SOLUSDT').then(r => r.json())
    ]);

    const map = {
      BTCUSDT: 'bitcoin',
      ETHUSDT: 'ethereum',
      SOLUSDT: 'solana'
    };

    prices.forEach((coin) => {
      const key = map[coin.symbol];

      if (key && data[key]) {
        data[key].price = Number(coin.lastPrice);
        data[key].change24h = Number(coin.priceChangePercent);
        data[key].marketCap = null;
      }
    });

  } catch (err) {
    console.error('Market data error:', err);
  }
}
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
],

breakdown:{
  volatility:2,
  liquidity:18,
  adoption:18,
  sentiment:5,
  technology:18
},
},
  ethereum:{
  name:'Ethereum',
  symbol:'ETH',
  risk:'Low Risk',
  cls:'low',
  stars:'★★★★☆',
  summary:'Leading smart contract platform with broad ecosystem adoption.',
  why:[
    'Large developer ecosystem',
    'Strong utility',
    'High liquidity',
    'Active development'
  ],
  note:'Ethereum is widely used, but smart contract and Layer-2 risks still exist.',
  factors:{
    'Project Maturity':'Strong',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'High',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Smart contract vulnerabilities',
    'Layer-2 competition',
    'Regulatory uncertainty'
  ],
  breakdown:{
    volatility:4,
    liquidity:18,
    adoption:19,
    sentiment:15,
    technology:18
  }
},
  bnb:{
  name:'BNB',
  symbol:'BNB',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Exchange-focused asset with strong liquidity and broad Binance ecosystem utility.',
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
    ,

breakdown:{
  volatility:10,
  liquidity:6,
  adoption:8,
  sentiment:9,
  technology:7
}
},
  solana:{
  name:'Solana',
  symbol:'SOL',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'High-performance blockchain with strong ecosystem growth and developer adoption.',
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
    ,

breakdown:{
  volatility:12,
  liquidity:7,
  adoption:8,
  sentiment:7,
  technology:9
}
},
  avalanche:{
  name:'Avalanche',
  symbol:'AVAX',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Scalable smart contract platform focused on speed, low fees, and institutional blockchain adoption.',
  why:[
    'Useful blockchain platform',
    'Competitive market',
    'Growth depends on adoption',
    'Moderate volatility'
  ],
  note:'Beginners should understand that strong technology does not remove market risk.',
  factors:{
    'Project Maturity':'Good',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'Medium-High',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Competition from other smart contract platforms',
    'Market volatility',
    'Adoption uncertainty'
  ],
  breakdown:{
    volatility:11,
    liquidity:8,
    adoption:8,
    sentiment:6,
    technology:9
  }
},
  toncoin:{
  name:'Toncoin',
  symbol:'TON',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Messaging-focused blockchain ecosystem leveraging Telegram adoption and user accessibility.',
  why:[
    'Fast growth',
    'Telegram ecosystem attention',
    'Still maturing',
    'Market sentiment influence'
  ],
  note:'TON may be interesting, but beginners should understand it is less mature than Bitcoin or Ethereum.',
  factors:{
    'Project Maturity':'Developing',
    'Volatility':'Medium',
    'Utility':'Medium-High',
    'Liquidity':'Medium',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Ecosystem maturity risk',
    'Telegram dependency',
    'Market sentiment volatility'
  ],
  breakdown:{
    volatility:10,
    liquidity:8,
    adoption:9,
    sentiment:10,
    technology:8
  }
},
  polygon:{
  name:'Polygon',
  symbol:'POL',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Ethereum scaling network with strong real-world utility, but facing growing Layer-2 competition.',
  why:[
    'Ethereum scaling use case',
    'Known ecosystem',
    'High competition',
    'Depends on network adoption'
  ],
  note:'Polygon is easier to understand after learning the basics of Ethereum.',
  factors:{
    'Project Maturity':'Good',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'Medium-High',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Layer-2 competition',
    'Adoption dependency',
    'Market volatility'
  ],
  breakdown:{
    volatility:9,
    liquidity:8,
    adoption:8,
    sentiment:6,
    technology:9
  }
},
  near:{
  name:'NEAR Protocol',
  symbol:'NEAR',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Developer-friendly blockchain focused on scalability, usability, and mainstream application adoption.',
  why:[
    'Strong technology',
    'Smaller adoption',
    'Competitive category',
    'Moderate volatility'
  ],
  note:'Beginners should compare NEAR with larger ecosystems before trying to understand it deeply.',
  factors:{
    'Project Maturity':'Good',
    'Volatility':'Medium',
    'Utility':'Medium',
    'Liquidity':'Medium',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Competitive Layer-1 market',
    'Adoption uncertainty',
    'Market volatility'
  ],
  breakdown:{
    volatility:10,
    liquidity:7,
    adoption:7,
    sentiment:6,
    technology:9
  }
},
  arbitrum:{
  name:'Arbitrum',
  symbol:'ARB',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Leading Ethereum Layer-2 network focused on scaling, lower fees, and expanding DeFi adoption.',
  why:[
    'Ethereum Layer 2 utility',
    'Real ecosystem usage',
    'Newer token',
    'Technical learning curve'
  ],
  note:'Arbitrum may be legitimate, but beginners may need to learn what Layer 2 networks are first.',
  factors:{
    'Project Maturity':'Developing',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'Medium',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Layer-2 competition',
    'Adoption dependency',
    'Technical complexity'
  ],
  breakdown:{
    volatility:9,
    liquidity:8,
    adoption:8,
    sentiment:6,
    technology:9
  }
},
  optimism:{
  name:'Optimism',
  symbol:'OP',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Ethereum Layer-2 network designed to reduce transaction costs and improve blockchain scalability.',
  why:[
    'Layer 2 use case',
    'Ethereum ecosystem link',
    'Growing adoption',
    'Competition with other Layer 2s'
  ],
  note:'Beginners should first understand Ethereum before trying to evaluate Optimism.',
  factors:{
    'Project Maturity':'Developing',
    'Volatility':'Medium',
    'Utility':'High',
    'Liquidity':'Medium',
    'Sentiment Dependency':'Medium'
  },
  risks:[
    'Layer-2 competition',
    'Adoption dependency',
    'Technical complexity'
  ],
  breakdown:{
    volatility:9,
    liquidity:8,
    adoption:8,
    sentiment:6,
    technology:8
  }
},
  chainlink:{
  name:'Chainlink',
  symbol:'LINK',
  risk:'Medium Risk',
  cls:'medium',
  stars:'★★★☆☆',
  summary:'Leading decentralized oracle network powering data infrastructure across DeFi.',
  why:[
    'Leading oracle infrastructure',
    'Widely integrated across DeFi',
    'Strong utility and demand',
    'Growth depends on ecosystem adoption'
  ],
    breakdown:{
  volatility:8,
  liquidity:8,
  adoption:9,
  sentiment:6,
  technology:9
},
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
  dogecoin:{
  name:'Dogecoin',
  symbol:'DOGE',
  risk:'High Risk',
  cls:'high',
  stars:'★★☆☆☆',
 summary:'Community-driven cryptocurrency with strong brand recognition but limited utility beyond payments and speculation.',
  why:[
    'Strong community support',
    'High market visibility',
    'Limited utility compared to major chains',
    'Highly sentiment-driven price action'
  ],
  note:'Dogecoin can experience large price swings based on social media trends and market sentiment.',
  factors:{
    'Project Maturity':'Medium',
    'Volatility':'High',
    'Utility':'Low',
    'Liquidity':'High',
    'Sentiment Dependency':'Very High'
  },
  risks:[
    'Meme dependency',
    'Whale concentration',
    'Limited development activity'
  ]
    ,

breakdown:{
  volatility:16,
  liquidity:8,
  adoption:5,
  sentiment:18,
  technology:4
}
},
  shiba:{name:'Shiba Inu',symbol:'SHIB',risk:'High Risk',cls:'high',stars:'★★☆☆☆',summary:'Shiba Inu is heavily influenced by community hype and meme-coin market cycles.',why:['Meme coin','High volatility','Hype-driven','Limited fundamentals'],note:'Beginners should be careful with assets that depend strongly on social media excitement.',factors:{'Project Maturity':'Medium','Volatility':'High','Utility':'Low','Liquidity':'Medium-High','Sentiment Dependency':'High'}},
  pepe:{
  name:'PEPE',
  symbol:'PEPE',
  risk:'High Risk',
  cls:'high',
  stars:'★☆☆☆☆',
  summary:'Highly speculative meme coin driven by social sentiment, volatility, and short-term market attention.',
  why:[
    'Strong meme-driven popularity',
    'Large speculative trading volume',
    'Limited real-world utility',
    'Price heavily influenced by social sentiment'
  ],
  note:'PEPE can generate significant gains or losses in short periods and should be considered highly speculative.',
  factors:{
    'Project Maturity':'Low',
    'Volatility':'Very High',
    'Utility':'Low',
    'Liquidity':'Medium',
    'Sentiment Dependency':'Very High'
  },
  risks:[
    'Extreme volatility',
    'Speculative demand',
    'Liquidity risk'
  ]
    ,

breakdown:{
  volatility:20,
  liquidity:6,
  adoption:3,
  sentiment:20,
  technology:2
}
},
  floki:{name:'FLOKI',symbol:'FLOKI',risk:'High Risk',cls:'high',stars:'★☆☆☆☆',summary:'FLOKI is a meme-related token with high dependence on community and trend cycles.',why:['Meme coin category','Trend-driven demand','High volatility','Uncertain long-term fundamentals'],note:'Beginners should understand that meme coins can rise and fall very quickly.',factors:{'Project Maturity':'Medium','Volatility':'High','Utility':'Low-Medium','Liquidity':'Medium','Sentiment Dependency':'High'}},
  bonk:{name:'BONK',symbol:'BONK',risk:'High Risk',cls:'high',stars:'★☆☆☆☆',summary:'BONK is a Solana ecosystem meme coin with high volatility and strong community-driven behavior.',why:['Meme coin','Solana ecosystem trend','High volatility','Sentiment-driven'],note:'BONK may be difficult for beginners because its value can depend heavily on market hype.',factors:{'Project Maturity':'Weak','Volatility':'Very High','Utility':'Low','Liquidity':'Medium','Sentiment Dependency':'High'}},
  xrp:{name:'XRP',symbol:'XRP',risk:'Medium Risk',cls:'medium',stars:'★★★★☆',summary:'XRP is an established crypto asset focused on payments, but it has unique regulatory and market risks.',why:['Long market history','Payment-focused use case','High liquidity','Regulatory sensitivity'],note:'XRP is well-known, but beginners should understand that regulations can affect market perception.',factors:{'Project Maturity':'Strong','Volatility':'Medium','Utility':'Medium-High','Liquidity':'High','Sentiment Dependency':'Medium'}},
  cardano:{name:'Cardano',symbol:'ADA',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Cardano is a well-known blockchain project with a research-focused approach and slower ecosystem growth.',why:['Established project','Active community','Slower adoption pace','Competitive market'],note:'Cardano is known and easier to research, but adoption speed is an important risk factor.',factors:{'Project Maturity':'Good','Volatility':'Medium','Utility':'Medium','Liquidity':'High','Sentiment Dependency':'Medium'}},
  sui:{name:'Sui',symbol:'SUI',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Sui is a newer blockchain project with growth potential but less long-term market history.',why:['Newer ecosystem','Strong technical focus','Shorter track record','Higher uncertainty'],note:'Sui may be interesting, but beginners should be aware that newer projects carry more uncertainty.',factors:{'Project Maturity':'Developing','Volatility':'Medium-High','Utility':'Medium','Liquidity':'Medium','Sentiment Dependency':'Medium'}},
  uniswap:{name:'Uniswap',symbol:'UNI',risk:'Medium Risk',cls:'medium',stars:'★★★☆☆',summary:'Uniswap is linked to a major decentralized exchange, but token value can be affected by DeFi market cycles.',why:['Strong DeFi brand','Real protocol usage','Governance token complexity','DeFi market risk'],note:'Beginners should first understand decentralized exchanges before evaluating UNI.',factors:{'Project Maturity':'Good','Volatility':'Medium','Utility':'Medium-High','Liquidity':'High','Sentiment Dependency':'Medium'}}
};
const aliases={btc:'bitcoin',bitcoin:'bitcoin',eth:'ethereum',ethereum:'ethereum',bnb:'bnb',sol:'solana',solana:'solana',avax:'avalanche',avalanche:'avalanche',ton:'toncoin',toncoin:'toncoin',matic:'polygon',pol:'polygon',polygon:'polygon',near:'near',arb:'arbitrum',arbitrum:'arbitrum',op:'optimism',optimism:'optimism',link:'chainlink',chainlink:'chainlink',doge:'dogecoin',dogecoin:'dogecoin',shib:'shiba',shiba:'shiba',pepe:'pepe',floki:'floki',bonk:'bonk',xrp:'xrp',ada:'cardano',cardano:'cardano',sui:'sui',uni:'uniswap',uniswap:'uniswap'};
const input=document.getElementById('coinInput'), btn=document.getElementById('analyzeBtn'), result=document.getElementById('result'), paywall=document.getElementById('paywall'), remainingEl=document.getElementById('remaining');
const suggestions = document.getElementById('suggestions');
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
    <p><b>Live Price:</b> ${money(coin.price)}</p>
<p><b>Market Cap:</b> ${money(coin.marketCap)}</p>
<p><b>24h Change:</b> ${percent(coin.change24h)}</p>
    <p><b>Liquidity:</b> ${score <= 3 ? 'High' : score <= 6 ? 'Medium' : 'Low'}</p>
    <p><b>Volatility:</b> ${score <= 3 ? 'Lower' : score <= 6 ? 'Medium' : 'High'}</p>
    <p><b>Key Risks:</b></p>
<ul>
${coin.risks ? coin.risks.map(r => `<li>${r}</li>`).join('') : '<li>No major risks identified</li>'}
</ul>
<p><b>Why This Rating?</b></p>
<ul>
${coin.why ? coin.why.map(w => `<li>${w}</li>`).join('') : '<li>Rating based on overall risk profile</li>'}
</ul>
<p><b>Risk Breakdown:</b></p>

<div class="breakdown-item">
  <span>Volatility (${coin.breakdown?.volatility || 0}/20)</span>
  <div class="bar">
    <div class="fill danger" style="width:${((coin.breakdown?.volatility || 0)/20)*100}%"></div>
  </div>
</div>

<div class="breakdown-item">
  <span>Liquidity (${coin.breakdown?.liquidity || 0}/20)</span>
  <div class="bar">
    <div class="fill safe" style="width:${((coin.breakdown?.liquidity || 0)/20)*100}%"></div>
  </div>
</div>

<div class="breakdown-item">
  <span>Adoption (${coin.breakdown?.adoption || 0}/20)</span>
  <div class="bar">
    <div class="fill safe" style="width:${((coin.breakdown?.adoption || 0)/20)*100}%"></div>
  </div>
</div>

<div class="breakdown-item">
  <span>Sentiment (${coin.breakdown?.sentiment || 0}/20)</span>
  <div class="bar">
    <div class="fill warning" style="width:${((coin.breakdown?.sentiment || 0)/20)*100}%"></div>
  </div>
</div>

<div class="breakdown-item">
  <span>Technology (${coin.breakdown?.technology || 0}/20)</span>
  <div class="bar">
    <div class="fill safe" style="width:${((coin.breakdown?.technology || 0)/20)*100}%"></div>
  </div>
</div>
<p><b>Market Tier:</b> ${coin.symbol === 'SOL' || coin.symbol === 'BNB' ? 'Large Cap' : score <= 3 ? 'Large Cap' : score <= 6 ? 'Mid Cap' : 'Speculative'}</p>
<p><b>Risk Trend:</b> ${score <= 3 ? 'Stable' : score <= 6 ? 'Moderate' : 'Aggressive'}</p>
<p><b>Beginner Suitability:</b> ${score <= 3 ? 'High' : score <= 6 ? 'Medium' : 'Low'}</p>
<p><b>Summary:</b> ${coin.name === 'Bitcoin' ? 'The most established cryptocurrency with strong network security and adoption.' : coin.name === 'Ethereum' ? 'Leading smart contract platform with broad ecosystem adoption.' : coin.name === 'PEPE' ? 'Highly speculative meme coin with elevated volatility risk.' : 'Crypto asset with moderate market and adoption risk.'}</p>
    <p><b>Investor Note:</b> This is an educational risk overview, not financial advice.</p>
  `;
}
input.addEventListener('input', () => {
  const value = input.value.toLowerCase().trim();

  if (!value) {
    suggestions.innerHTML = '';
    return;
  }

  const matches = Object.values(data)
    .filter(c =>
      c.name.toLowerCase().includes(value) ||
      c.symbol.toLowerCase().includes(value)
    )
    .slice(0,5);

  suggestions.innerHTML = matches.map(c => `
    <div class="suggestion-item"
      onclick="document.getElementById('coinInput').value='${c.name}';document.getElementById('suggestions').innerHTML=''">
      ${c.name} (${c.symbol})
    </div>
  `).join('');
});
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
const portfolioInput = document.getElementById('portfolioInput');
const portfolioBtn = document.getElementById('portfolioBtn');
const portfolioResult = document.getElementById('portfolioResult');

function analyzePortfolio() {
  const raw = portfolioInput.value.trim();

  if (!raw) {
    portfolioResult.innerHTML = '<p>Please enter at least two crypto symbols.</p>';
    return;
  }

  const symbols = raw
    .split(',')
    .map(s => s.trim().toLowerCase())
    .filter(Boolean);

  const coins = symbols
  .map(symbol => data[aliases[symbol] || symbol])
  .filter(Boolean);

  if (coins.length < 2) {
    portfolioResult.innerHTML = '<p>Please enter at least two supported coins, like BTC, ETH, SOL.</p>';
    return;
  }

  const highRiskCount = coins.filter(c => c.risk === 'High Risk').length;
  const mediumRiskCount = coins.filter(c => c.risk === 'Medium Risk').length;

  let portfolioRisk = 'Low';
  if (highRiskCount >= 2) portfolioRisk = 'High';
  else if (highRiskCount === 1 || mediumRiskCount >= 2) portfolioRisk = 'Medium';

  portfolioResult.innerHTML = `
    <div class="result">
      <h3>Portfolio Risk: ${portfolioRisk}</h3>
      <p><b>Coins Analyzed:</b> ${coins.map(c => c.symbol).join(', ')}</p>
      <p><b>Diversification:</b> ${coins.length >= 4 ? 'Good' : 'Basic'}</p>
      <p><b>Risk Notes:</b></p>
      <ul>
        <li>${highRiskCount > 0 ? 'Contains high-risk assets' : 'No high-risk assets detected'}</li>
        <li>${mediumRiskCount > 0 ? 'Includes medium-risk exposure' : 'Mostly lower-risk exposure'}</li>
        <li>This is an educational overview, not financial advice.</li>
      </ul>
    </div>
  `;
}

if (portfolioBtn) {
  portfolioBtn.onclick = analyzePortfolio;
}
