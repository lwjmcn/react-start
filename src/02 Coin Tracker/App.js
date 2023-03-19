/*
select의 option value 속성에 object는 전달할 수 없음
JSON.stringify(object) 문자열로 전달해야 함
*/
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [price, setPrice] = useState(0);
  const onChange = (e) => setMoney(e.target.value);
  const onSelect = (e) => setPrice(e.target.value);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json)=>{
        setCoins(json);
        setLoading(false);
      });
  },[])
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : (
        <div>
         I have <input
          value = {money}
          onChange={onChange}
          type="number"
          placeholder="I have ..."  
        />USD
        <br/>
        <select onChange={onSelect}>
            {coins.map((item) => (
              <option key={item.id} value={item.quotes.USD.price}>
                {item.name} ({item.symbol}): ${item.hasOwnProperty("quotes") ? item.quotes.hasOwnProperty("USD") ? item.quotes.USD.price : null : null} USD
              </option>
            ))}
        </select>
        {price === 0 ? null : (
          <p>You can get {Math.floor(money/price)}</p>
        )}
        </div>
        )
      }
    </div>    
  );
}

export default App;
