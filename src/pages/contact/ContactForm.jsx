import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./contact.css";

export default function ContactForm() {
  const [formValue, setFormValue] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  function inputsValidation(e) {
    e.preventDefault();
    if (formValue.name.trim() === "") {
      toast.error("Name Is Required");
    }
    if (formValue.subject.trim() === "") {
      toast.error("Subject Is Required");
    }
    if (formValue.email.trim() === "") {
      toast.error("Email Is Required");
    }
    if (formValue.message.trim() === "") {
      toast.error("Message Is Required");
    }
    if (
      formValue.name.trim() !== "" &&
      formValue.subject.trim() !== "" &&
      formValue.email.trim() !== "" &&
      formValue.message.trim() !== ""
    ) {
      toast.success("Form Submitted");
      console.log(formValue);
    }
  }

  return (
    <div className="contact-form">
      <ToastContainer />
      <h2>Contact Us Form</h2>
      <form onSubmit={inputsValidation}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formValue.name}
            onChange={(e) =>
              setFormValue({ ...formValue, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Subject"
            value={formValue.subject}
            onChange={(e) =>
              setFormValue({ ...formValue, subject: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={formValue.email}
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />
        </div>
        <textarea
          rows="8"
          placeholder="Your Message"
          value={formValue.message}
          onChange={(e) =>
            setFormValue({ ...formValue, message: e.target.value })
          }
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}
