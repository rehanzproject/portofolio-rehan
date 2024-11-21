import  { useState } from "react";

function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    try {
      // Here, you could send the form data to a backend or use EmailJS
      // Example:
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID');

      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setFormStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          rows={5}
          required
        ></textarea>
      </div>

      {formStatus && <p className="text-center mb-4 text-sm text-gray-600">{formStatus}</p>}

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactCard;
