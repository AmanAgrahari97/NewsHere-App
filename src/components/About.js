import React from 'react'

export default function About(props) {
  document.title=`${props.category} - NewsHere`;
  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
    <h1 className="" style={{ margin: '35px 0px', marginTop: '100px'}}>About Us</h1>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Get Daily News</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      NewsHere is a news app which can be used to grab quick daily news bites. If you are interested in business news, entertainment news, sports news, technology news etc. then newshere is for you!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        NewsHere is a free daily news website. Here you can find different categories of news to read like sports, business, entertainment, technology etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This news website works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
