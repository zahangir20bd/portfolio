import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" name=" " id="" />
        <label>Email</label>
        <input type="email" name=" " id="" />
        <label>Subject</label>
        <input type="text" name=" " id="" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here"></textarea>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
