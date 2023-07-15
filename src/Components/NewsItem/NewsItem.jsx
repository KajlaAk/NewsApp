import React  from 'react'

const NewsItem =(props)=>{
    let {title,discription,imageUrl,newsUrl,author,date, source  }=props;
    return (
      <div>
        <div className="card" >
       

  <img src={!imageUrl?"https://i.insider.com/64a7f4515f409e001956eb34?width=1200&format=jpeg":imageUrl}  className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{title} 
    <div style={{padding:"30px"}}>
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">{source}</span>
    </div>
</h5>

    <p className="card-text">{discription}</p>
    <a href={newsUrl} className="btn btn-primary btn-sm" >Read More</a>
    <p className="card-text"><small className="text-muted">  <b>Updated By:</b> {author} <b>On date:</b> {new Date(date).toGMTString()}
</small></p>

  </div>
</div>
        </div>
    )
  }


export default NewsItem