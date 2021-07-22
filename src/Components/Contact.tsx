import * as React from "react";
import emailjs from "emailjs-com";
import "./component.scss";

interface ContactProps {
  refer: any;
}
interface MailTemplate {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  success?: string | null;
}

//emailjs.send("service_e3h364v","template_xhn4zws");

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const initState = {
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
    succes: null,
  };
  const [state, setState] = React.useState<MailTemplate>(initState);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (state.from_name && state.from_email && state.message) {
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
            setState({ ...initState, success: "Submitted" });
          },
          (error) => {
            console.log(error.text);
            setState({ ...initState, success: "Failed to Send " });
          }
        );
    } else setState({ ...state, success: "update missing details..." });
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
                      value={state.from_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex">
                    <label>email* </label>
                    <input
                      type="text"
                      className="inputStyle"
                      name="from_email"
                      value={state.from_email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex-column">
                    <label>subject</label>
                    <input
                      className="subject"
                      name="subject"
                      value={state.subject}
                      onChange={handleChange}
                    />
                    <br />
                    <label>message* </label>
                    <textarea
                      name="message"
                      placeholder="tell me about it..."
                      value={state.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="align-right">
                  {!state.success && (
                    <input
                      type="submit"
                      className="pbutton"
                      value="Up and Away"
                      id="submitButton"
                    />
                  )}
                  {state.success && (
                    <div className="flex" style={{ color: "white" }}>
                      <input
                        type="submit"
                        className="pbutton"
                        value={state.success}
                        id="submitButton"
                      />
                      <h2>
                        &nbsp;
                        {state.success === "Submitted" ? (
                          <>&#10003;</>
                        ) : (
                          <>&#10060;</>
                        )}
                      </h2>
                    </div>
                  )}
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
