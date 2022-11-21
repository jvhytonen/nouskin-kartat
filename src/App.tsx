import React, { useState, useEffect } from 'react';
import './App.css';
import Maps from './Components/Maps'
import { fetchApiKey } from './http-requests/fetch-api-key'


function App() {
  // Google Maps Api -key must be downloaded before rendering the Maps-component.
  const [apikey, setApikey] = useState<string | null>(null)
  const [apiKeyLoaded, setApiKeyLoaded] = useState<boolean>(false)
  const [loadingInfo, setLoadingInfo] = useState<string>('Loading data...')

  useEffect(() => {
    const getKey = async () => {
      try {
        //const key: any = await fetchApiKey() Tested and it works. This will be used in production. 
        const key = process.env.REACT_APP_API_KEY!
        setApikey(key)
        setApiKeyLoaded(true)
      }
      catch (err) {
        console.log(err)
        setLoadingInfo('An error occured!')
      }
    }
    getKey()
  })
  return (
    <div className="App">
      <header className="App-header">
        {apiKeyLoaded ? <Maps mapApiKey={apikey} /> : <h1>{loadingInfo}</h1>}
      </header>
    </div>
  );
}

export default App;
