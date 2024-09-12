import { useState } from "react";
import emailjs from '@emailjs/browser'
import "../styles/Form.css"

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    health: "",
    annualIncome: "",
    contactWay: "",
    questions: "",
  });

  const [isSubmitted,setIsSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true)
    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,    // Updated
        import.meta.env.VITE_TEMPLATE_ID,   // Updated
        event.target,
        import.meta.env.VITE_PUBLIC_KEY )
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Help Me Serve You by Answering a Few Questions</h2>
      </div>

      <div className="form-content">
        {!isSubmitted ?(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="form-feild">
                    <label htmlFor={"firstName"}>First Name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                        id={"firstName"}
                    />
                </div>
                
                <div className="form-feild">
                    <label htmlFor={"lastName"}>Last Name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                        id={"lastName"}
                    />
                </div>
            </div>

            <div className="form-group">
                <div className="form-feild">
                    <label htmlFor={"email"}>Email</label>
                    <input
                        type="email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        id={"email"}
                    />
                </div>
                <div className="form-feild">
                    <label htmlFor={"number"}>Phone Number</label>
                    <input
                        type="text"
                        placeholder="(555) 555-5555"
                        onChange={handleChange}
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        id={"number"}
                    />
                </div>
            </div>
          
            <div className="form-group">
                <div className="form-feild">
                    <label htmlFor={"birthday"}>Date of Birth</label>
                    <input
                        type="date"
                        onChange={handleChange}
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        id={"birthday"}
                    />
                </div>

                <div className="form-feild">
                    <label htmlFor={"health"}>Health Status?</label>
                    <select
                        id={"health"}
                        value={formData.health}
                        onChange={handleChange}
                        name="health"
                    >
                        <option value="Empty">-- Choose --</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>
                
            </div>

            <div className="form-group">
                <div className="form-feild">
                    <label htmlFor={"income"}>Annual Income</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="annualIncome"
                        value={formData.annualIncome}
                        id={"income"}
                    />
                </div>
                <div className="form-feild">
                    <label htmlFor={"contactWay"}>Best Way to Contact?</label>
                    <select
                        id={"contactWay"}
                        value={formData.contact}
                        onChange={handleChange}
                        name="contactWay"
                    >
                        <option value="Empty">-- Choose --</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Text">Text</option>
                        <option value="Email">Email</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <div className="form-feild">
                    <label htmlFor={"questions"}>Questions or Comments?</label>
                    <textarea
                        placeholder="Any Question?"
                        onChange={handleChange}
                        name="questions"
                        value={formData.questions}
                        id={"questions"}
                    />
                </div>
            </div>

          <button>Submit</button>
        </form>
        ):(
            <div className="thank-you-message">
                <h3>Thank you for your submission!</h3>
            </div>
        )}
      </div>
    </div>
  );
}

export default Form;
