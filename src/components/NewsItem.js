import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
            <span class="badge rounded-pill bg-dark" style={{ left: "88%", zIndex: 1 }}>
              {source}
            </span>
          </div>

          <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/23/01/apple-periscope-components-suppliers/-952x498w6/gsmarena_000.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
