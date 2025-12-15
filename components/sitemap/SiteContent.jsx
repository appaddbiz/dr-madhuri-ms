import React from 'react'

const SiteContent = ({data}) => {
  return (
    <>
        <section className="service-details" key={data.id}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="service-details__left">
                  {/* Dynamic HTML Description */}
                  <div
                    className="service-details__text-1"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default SiteContent