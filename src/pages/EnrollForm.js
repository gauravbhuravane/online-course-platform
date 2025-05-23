import { useState } from 'react';

function EnrollForm() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name}, you enrolled in ${course}`);
  };

  return (
    <div className="container">
      <h2>Enroll in a Course</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <label>Course Name:</label>
        <input value={course} onChange={e => setCourse(e.target.value)} required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default EnrollForm;
