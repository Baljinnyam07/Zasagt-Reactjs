import React from "react"
import contactJson from "./json/contact.json"
import '../index.css'

function Contact() {
  return (
    <div className="container mx-auto py-[120px] px-[20px] xl:px-0  text-[#23356B]">
        <div className="flex flex-col-reverse lg:flex-row gap-[24px] inline-block ">
          <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1337.042958763837!2d106.917487!3d47.915375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693f12cfaf493%3A0xcefe01c132201edb!2z0KXQsNCw0L0g0JTQsNCw0YLQs9Cw0LsgLSBLaGFhbiBJbnN1cmFuY2U!5e0!3m2!1smn!2smn!4v1689847378351!5m2!1smn!2smnsource=s_q&
            hl=en&
            geocode=&
            q=333+E+34th+St,+New+York,+NY&
            aq=1&
            oq=333&
            sll=37.269174,-119.306607&
            sspn=16.742323,33.815918&
            ie=UTF8&
            hq=&
            hnear=333+E+34th+St,+New+York,+10016&
            t=m&
            z=14&
            ll=40.744403,-73.974467&
            output=embed"
            title="Google Maps"
            width='100%'
            height={351}
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            
          ></iframe>    
          </div>
          <div className="w-full place-content-center">
              <h2 className="text-[32px] font-[500] flex justify-center lg:justify-start">
              Бидэнтэй холбогдох
              </h2>
              <div className="w-full flex flex-wrap lg:block lg:flex-nowrap gap-[24px] text-[#23356B]">
              {contactJson.map((data, index) => (
                <div key={index} className="flex w-max mt-[24px] gap-[16px]">
                  <div className="pt-1" dangerouslySetInnerHTML={{ __html: data.icon }} />
                  <a href={data.link} target="_blank" rel="noreferrer" className="text-[16px] w-full font-400 lg:w-[433px]">{data.property}</a>
                </div>
              ))}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Contact