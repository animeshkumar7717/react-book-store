import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Main = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(()=>{
    getBooks(params.name)
  },[params.name])

  const getBooks = (name) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}=free-ebooks&key=AIzaSyCcNszhYihTDwsqnhnggVJd2jObL_i-Tpw&maxResults=30`)
      .then(res => {
        setData(res.data.items)
      })
      .catch(err => console.log(err))
  }


  return (
    <div>
      <div className="row" style={{ margin: "50px"}}>

        {data.map((item)=>{
          let thumnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className='projectCard'>
                <img src={thumnail} alt='' style={{marginTop: "20px", width: "120px", height: "150px"}} />
                <div className="info">
                  <div className="texts">
                    <h4 style={{color:"black", fontSize: "12px"}}>{item.volumeInfo.title}</h4>
                    <p style={{color:"black", fontSize: "12px"}}>{item.volumeInfo.authors}</p>
                    <button className='btn btn-sm btn-dark' style={{marginBottom: "40px", marginTop: '0px'}}>
                      <a href={item.volumeInfo.previewLink} style={{textDecoration: "none", color: "white"}}>Get Book</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default Main

/**
 * 'https://www.googleapis.com/books/v1/volumes?q' + 'bersary' + 'free-ebook&key=AIzaSyAYdsouNcaVwDw6W63_U-XAydgcsRTmq4s' + '&maxResults=30'
 * 
 */
