import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Aos from 'aos'
import './App.css';
import 'aos/dist/aos.css';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://plugins.capittalx.com/api/cryptosCurrency")
    .then((response) => {
      setPosts(response.data)
    }).catch(() => {
      console.log("Deu errado")
    })
  }, [])

  useEffect(() => {
    Aos.init({duration: 600});
  }, [])

	return(
		<div className="app">
      <div className="container">
      <div className="cards">
      {posts.map((post, key) => {
        return(
          <div data-aos="fade-left" className="card" key={key} >
						<h1>{post.name}</h1>    
            <h2>{post.priceChangePercent.toFixed(1) + "%"}</h2>
            <h3>{"R$ " + post.lastPriceReal}</h3>
				</div>
        )
      })}
			
			</div>
      </div>
		</div>
	)

}

export default App;