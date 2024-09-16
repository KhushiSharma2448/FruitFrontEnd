import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/CreateFaqPage.css";

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [formData, setFormData] = useState({ question: '', answer: '' });
  const [editingFaq, setEditingFaq] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await axios.get('https://fruitbackend-1ikc.onrender.com/api/faqs');
      setFaqs(response.data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddFaq = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fruitbackend-1ikc.onrender.com/api/faqs', formData);
      setFormData({ question: '', answer: '' });
      fetchFaqs();
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const handleEditFaq = (faq) => {
    setFormData({ question: faq.question, answer: faq.answer });
    setEditingFaq(faq.id);
  };

  const handleUpdateFaq = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://fruitbackend-1ikc.onrender.com/faqs/${editingFaq}`, formData);
      setFormData({ question: '', answer: '' });
      setEditingFaq(null);
      fetchFaqs();
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  const handleDeleteFaq = async (id) => {
    try {
      await axios.delete(`https://fruitbackend-1ikc.onrender.com/api/faqs/${id}`);
      fetchFaqs();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  return (
    <div className="faq-page-container" style="padding-top:40px">
      <h1>FAQ Page</h1>
      <form onSubmit={editingFaq ? handleUpdateFaq : handleAddFaq} className="faq-form">
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={formData.question}
          onChange={handleChange}
          required
        />
        <textarea
          name="answer"
          placeholder="Answer"
          value={formData.answer}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingFaq ? 'Update FAQ' : 'Add FAQ'}</button>
      </form>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <button onClick={() => handleEditFaq(faq)}>Edit</button>
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
