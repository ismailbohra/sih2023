import React, { useState } from 'react';
import './SimpleForm.css';

function SimpleForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    diseaseProbability: '',
    recommendations: '',
    queries: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    // <div className="MainForm">

    <form onSubmit={handleSubmit} className="simple-form">
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={form.age} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Disease Probability:
        <input type="text" name="diseaseProbability" value={form.diseaseProbability} onChange={handleChange} />
      </label>
      <label>
        Recommendations from Site:
        <textarea name="recommendations" value={form.recommendations} onChange={handleChange} />
      </label>
      <label>
        Other Queries:
        <textarea name="queries" value={form.queries} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    
  );
}

export default SimpleForm;
