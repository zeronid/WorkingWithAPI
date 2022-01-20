import React, { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com'

function App() {
  //local
  const [data, setData] = useState([]);
  const [body, setBody] = useState({
    title: '',
    body: '',
    userId: 1,
  });
  let input = ['title', 'body']

  useEffect(() => {
    (async () => {
      fetch(`${url}/posts`)
        .then(res => res.json())
        .then(data => setData(data))
    })();
  }, [])

  const postData = async (b) => {
    fetch(`${url}/posts`, {
      method: 'POST', body: JSON.stringify(b), headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then((res) => res.json())
      .then((data) => setData(pervState => [...pervState, data]))
  }

  const hanndleChanges = (event, field) => {
    setBody(pervState => ({ ...pervState, [field]: event.target.value }))
  }

  return (
    <div className="App" style={{ padding: 30 }}>
      {input.map(a =>
        <>
          <label>{a}</label>
          <input onChange={(event) => hanndleChanges(event, a)} ></input>
        </>
      )}
      <button onClick={() => postData(body)}>CLICK ME!</button>
      {data.map(e =>
        <div style={{ borderColor: 'black', width: '150px', borderRadius: 3, borderWidth: 3 }}>
          <h6>{e.title}</h6>
          <p>{e.body}</p>
          <p>{e.userId}</p>
        </div>
      )}
    </div>
  );
}

export default App;
