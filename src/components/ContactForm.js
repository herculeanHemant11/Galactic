import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "firstName" && !value) {
      error = "First name is required";
    } else {
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Please enter a valid email address.";
        }
      } else if (name === "phone") {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(value)) {
          error = "Please enter a valid phone number.";
        }
      } else if (name === "message") {
        if (!value) {
          error = "Message is required";
        }
        const wordCount = value.trim().split(/\s+/).length;
        if (wordCount < 40) {
          error = "Message must be at least 40 words.";
        }
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleKeyPress = (e) => {
    const charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    for (const field in formData) {
      validateField(field, formData[field]);
      if (!formData[field]) {
        isValid = false;
      }
    }
    if (isValid) {
      // Submit form data
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="container dnd-section">
      <form className="form" id="contact-us" onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:<span className="form-required">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>
            Email:<span className="form-required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>
            Phone:<span className="form-required">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label>
            Message:<span className="form-required">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
