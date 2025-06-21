import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import "./contact.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // ✅ show loading

    try {
      const response = await axios.post(
        "https://formspree.io/f/xwplpbor",
        formData
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          contact: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false); // ✅ hide loading
    }
  };

  return (
    <section className="bg-image">
      <div className="container">
        <h2 className="mb-0 py-3 py-md-5 page-title">Contact Details</h2>

        <div className="fw-normal fw-md-bold">
          <h4 className="card-title pb-3">SADHUKHAN PHARMACY</h4>
          <p className="fs-6 card-title">Bainchi G.T Road , Near Petrol Pump</p>
          <p className="fs-6 card-title">Pin : 712134</p>
          <p className="fs-6 card-title">Bainchi, Hooghly</p>
        </div>

        <div className="fs-5 pt-3">
          <p className="footer-text">
            <IoMailOutline /> sadhukhanpharmacy.med@gmail.com
          </p>
          <p className="footer-text">
            <IoCallOutline /> 7866065406
          </p>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3 my-md-5">
            <div className="image shadow py-5 py-md-0">
              <h5 className="text-green-600">Email Query</h5>
              <p className="text-center w-75 w-md-50 mb-0">
                Send us an email for any specific details about products or
                doctors.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 my-3 my-md-5">
            <form
              onSubmit={handleSubmit}
              className="p-4 border rounded-2 shadow email-quiry-form"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-green-700">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="E.g: Jhon Doe"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contact" className="form-label text-green-700">
                  Contact
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="E.g: Example@info.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-green-700">
                  Message
                </label>
                <textarea
                  className="form-control "
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn bg-green-700 text-white w-75"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
