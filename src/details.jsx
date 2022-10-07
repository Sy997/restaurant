import React from "react"
import Navbar from "../Navbar/Navbar"
import images from './images'
import data from './data'
import './details.css'

const Details = () => {
  rerurn (
    <div className="datails">
    <Navbar />
    <div className"tieccuois">
    {data.tieccuois.map((kind) =>
      <div className="tieccuoi">
        <img src={imges.cuoi1} alt="">
        <span>Phòng {kind.classify}</span>
        <div className="price">
          <p style={{textDecoration:"through-line"}}>{kind.cost}</p>
          <p>{kind.sales}</p>
        </div>
      </div>
      )}
    </div>
    <div className="sinhnhats">
      {data.tieccuois.map((kind) =>
      <div className="sinhnhat">
        <img src={images.bir1} alt="">
        <span>Phòng {data.classify}</span>
        <div className="price">
          <p style={{textDecoration:"through-line"}}>{data.cost}</p>
          <p>{data.sales}</p>
        </div>
      </div>
    )}
    </div>
    <div className="giatiens">
      {data.tieccuois.map((kind) =>
      <div className="giatien">
        <img src={images.gt1} alt="">
        <span>Phòng {data.classify}</span>
        <div className="price">
          <p style={{textDecoration:"through-line"}}>{data.cost}</p>
          <p>{data.sales}</p>
        </div>
      </div>
    )}
    </div>
    <div className="giatiens">
      {data.tieccuois.map((kind) =>
      <div className="giatien">
        <img src={images.gt1} alt="">
        <span>Phòng {data.classify}</span>
        <div className="price">
          <p style={{textDecoration:"through-line"}}>{data.cost}</p>
          <p>{data.sales}</p>
        </div>
      </div>
    )}
    </div>
    <div className="daythangs">
      {data.tieccuois.map((kind) =>
      <div className="daythang">
        <img src={images.dt1} alt="">
        <span>Phòng {data.classify}</span>
        <div className="price">
          <p style={{textDecoration:"through-line"}}>{data.cost}</p>
          <p>{data.sales}</p>
        </div>
      </div>
      )}
    </div>
    <div className="mungthos">
      {data.tieccuois.map((kind) =>
      <div className="mungtho">
        <img src={images.gt1} alt="">
        <span>Phòng {data.classify}</span>
        <div className="price">
          <p style={{textDecoration:"through-line"}}>{data.cost}</p>
          <p>{data.sales}</p>
        </div>
      </div>
      )}
    </div>
    <div className="ngoaitrois">
      {data.tieccuois.map((kind) =>
      <div className="ngoaitroi">
        <img src={images.gt1} alt="">
        <span>Phòng {data.classify}</span>
        <div className="price">
          <p style={{textDecoration:"through-line"}}>{data.cost}</p>
          <p>{data.sales}</p>
        </div>
      </div>
    )}
    </div>    
    </div>
)
}
