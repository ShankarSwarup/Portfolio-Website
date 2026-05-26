import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('Message sent successfully!');
        e.target.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus(data.error || 'Something went wrong. Please try again.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (err) {
      console.error(err);
      setStatus('Could not connect to the server.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const inputClass = 'w-full bg-surface-dark border border-text-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-light placeholder:text-text-muted/50';

  return (
    <section id="contact" className="py-24 px-6 bg-surface-dark/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-light">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-text-muted mb-10">Have a project in mind or looking to hire a Senior Engineer? Let's talk.</p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-text-muted pl-1">Name</label>
                <input required name="name" type="text" className={inputClass} placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-text-muted pl-1">Email</label>
                <input required name="email" type="email" className={inputClass} placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-text-muted pl-1">Message</label>
              <textarea required name="message" rows="5" className={`${inputClass} resize-none`} placeholder="How can I help you?"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-medium hover:opacity-90 transition-all flex justify-center items-center gap-2">
              {status || <><FiSend /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
