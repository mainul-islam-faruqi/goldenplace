import axios from 'axios';

const getReq = async (url:string, body:any, cb:any) => {
  const config = {
    headers: {
      Accept: 'application/json', 
      'Authorization': `Bearer ${process.env.RARIFY_API_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body ? body : ''
  }

  axios.get(url, config)
  .then(data => {
    console.log(data.data)
    cb(null, data.data)
  })
}

const getOpenSeaReq = async (url:string, cb:any) => {
  const config = {
    headers: {
      Accept: 'application/json', 
      'X-API-KEY': `${process.env.OPENSEA_API_KEY}`,
    },
    
  }

  const response = await axios.get(url, config)
  return cb(null, response.data)
  // .then(data => {
  //   console.log(data.data)
  //   cb(null, data.data)
  // })
}



export const getTrendingNFTCollections = (cb:any) => {
  const body = 'insights_trends.period=24h&include=insights_trends&sort=-insights_trends.volume_change_percent&page[limit]=3'
  getReq(`https://api.rarify.tech/data/contracts`, body, cb);
}

export const getTopNFTCollections = (cb:any) => {
  const body = new URLSearchParams({
    'include': 'insights',
    'sort': '-insights.volume&-insights.trades&-insights.unique_buyers&-insights.max_price'
  })
  getReq(`https://docs.rarify.tech/data/contracts`, body, cb);
}

export const getNFTCollections = (cb: any) => {
  return getOpenSeaReq('https://api.opensea.io/api/v1/collections?offset=0&limit=100', cb)
}

// export const getNFTsByContract = (address, cb) => {
// if(!address) return
// simpleHashGetReq(`https://api.simplehash.com/api/v0/nfts/ethereum/${address}?count=100`, cb)
// }