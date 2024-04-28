import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title,desc,imageUrl,NewsUrl,author,date,source}=this.props;
    return (
     <div className="card my-2 " style={{width: "18rem",height:"450px"}}>
      <div style={{display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
    }}>
      <span className=" badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>{source}</span>
      </div>
        <img src={imageUrl} className="card-img-top" alt="..." style={{maxHeight:"150px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title?.substring(0,50)}...</h5>
          <p className="card-text">{desc?.substring(0,50)}...</p>
         <p> <small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
          <a href={NewsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
        </div>
      </div>
    )
  }
}

export default NewsItem