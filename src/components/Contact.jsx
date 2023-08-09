import React from "react"
import contactJson from "./json/contact.json"

function Contact() {
  return (
    <div className="container mx-auto py-[120px] max-w-[1440px] text-[#23356B]">
        <div className="flex gap-[24px]">
          <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1337.042958763837!2d106.917487!3d47.915375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693f12cfaf493%3A0xcefe01c132201edb!2z0KXQsNCw0L0g0JTQsNCw0YLQs9Cw0LsgLSBLaGFhbiBJbnN1cmFuY2U!5e0!3m2!1smn!2smn!4v1689847378351!5m2!1smn!2smn"
            width="588"
            height="351"
            title="Google Maps"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>    
          </div>
          <div className="">
              <h2 className="text-[32px] font-500">
              Бидэнтэй холбогдох
              </h2>
              {contactJson.map((data, index) => (
                <div key={index} className="flex mt-[24px] gap-[16px]">
                  <div dangerouslySetInnerHTML={{ __html: data.icon }} />
                  <div className="text-[16px] w-[483px] font-400">{data.property}</div>
                </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Contact