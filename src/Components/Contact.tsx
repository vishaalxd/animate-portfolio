import * as React from "react";
import "./component.scss";

interface ContactProps{
    refer: any
}

const Contact: React.FC<ContactProps> = (props:ContactProps) => {
  return (
    <>
      <div className="contact">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>
        <div className="flex-center main">
          <div className="flex-column contactform">
            <p ref={props.refer} className="heading">Have a question or want to work together?</p>
            <div className="align-space flex wrap">
              <div className="flex">
                <label>name* </label>
                <input type="text" className="inputStyle" name="name"  />
              </div>
              <div className="flex">
                <label>email* </label>
                <input type="text" className="inputStyle" name="email" />
              </div>
            </div>
            <div>
              <div className="flex-column">
              <label>subject</label>
                <input className="subject" name="subject" />
                <br/>
                <label>message*     </label>
                <textarea name="description" placeholder="tell me about it..."/>
              </div>
            </div>
            <div className="align-right">
              <button className="pbutton"> Up and Away</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
