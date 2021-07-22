import * as React from "react";
import emailjs from "emailjs-com";
import "./component.scss";

interface ContactProps {
  refer: any;
}
interface MailTemplate {
  name: string;
  email: string;
  subject: string;
  description: string;
}

//emailjs.send("service_e3h364v","template_xhn4zws");

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const [state, setState] = React.useState<MailTemplate>({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_e3h364v",
        "template_xhn4zws",
        e.target,
        "user_Pr2hyEtuVN71lr1D29K9F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

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
        <div className="flex-center ">
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="main">
              <div className="flex-column contactform">
                <p ref={props.refer} className="heading">
                  Have a question or want to work together?
                </p>
                <div className="align-space flex wrap">
                  <div className="flex">
                    <label>name* </label>
                    <input
                      type="text"
                      className="inputStyle"
                      name="from_name"
                      // onChange={handleChange}
                    />
                  </div>
                  <div className="flex">
                    <label>email* </label>
                    <input
                      type="text"
                      className="inputStyle"
                      name="from_email"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex-column">
                    <label>subject</label>
                    <input
                      className="subject"
                      name="subject"
                      // onChange={handleChange}
                    />
                    <br />
                    <label>message* </label>
                    <textarea
                      name="message"
                      placeholder="tell me about it..."
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="align-right">
                  <input
                    type="submit"
                    className="pbutton"
                    value="Up and Away"
                  />{" "}
                  Up and Away
                  {/* </input> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
