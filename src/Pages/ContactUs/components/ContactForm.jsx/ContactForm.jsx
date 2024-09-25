import React from "react";
import "./ContactForm.css";
import Head from "../Head/Head";
const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0f74f878-f0e9-494a-a097-74a12165c437");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="FormContainer">
      
      <div className="form-part">
        <h2>Lets start a conversation.</h2>
        <div className="formContent">
          <div className="left">
            <h3>Ask How we can help You</h3>
            <div className="QandA">
              <p id="heads">See our platform in action</p>
              <p>
                magnam! Debitis consequuntur velit aut, fugiat dignissimos
                aperiam
              </p>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="ins">
              <label htmlFor="FN">First Name</label>
              <input type="text" name="FirstName" id="FN" />
            </div>
            <div className="ins">
              <label htmlFor="LN">Last Name</label>
              <input type="text" name="LastName" id="LN" />
            </div>
            <div className="ins">
              <label htmlFor="mail">Email</label>
              <input type="email" name="Email" id="mail" />
            </div>
            <div className="ins">
              <label htmlFor="mess">Your message</label>
              <textarea rows={10} cols={55} name="Message" id="mess"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
