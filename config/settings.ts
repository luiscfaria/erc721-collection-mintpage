const settings = {
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS  || 'error',
    moralisKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY  || 'error',
  };
  
  export { settings };
  