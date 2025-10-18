import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import contactBg from "../assets/contactus.png"; // background image
import emailjs from "@emailjs/browser"; // 📧 EmailJS for email integration

const ContactUs = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_xxxxxx", // 🔹 Your EmailJS service ID
        "template_xxxxxx", // 🔹 Your EmailJS template ID
        formRef.current,
        "public_xxxxxx" // 🔹 Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section
      className="relative py-24 bg-cover bg-center text-white "
      style={{
        backgroundImage: `linear-gradient(rgba(1, 24, 78, 0.749), rgba(1, 24, 78, 0.548)), url(${contactBg})`,
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01184e86]/70 via-[#004AAD]/50 to-[#01184e83]/80" />

      <div className="relative max-w-5xl mx-auto px-6 z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-5"
        >
          Contact <span className="text-[#00b4ff]">Us</span>
        </motion.h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-5">
          Have a question, suggestion, or need help? Fill out the form below, and our team will respond promptly.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 mx-auto max-w-3xl space-y-6"
        >
          <div>
            <label className="block text-left text-gray-200 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#00b4ff]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-left text-gray-200 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#00b4ff]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-left text-gray-200 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#00b4ff]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-[#00b4ff] hover:bg-[#0090cc] text-white font-semibold py-3 px-10 rounded-full transition-all shadow-lg"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent ✅"
              : status === "error"
              ? "Error! Try Again"
              : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
