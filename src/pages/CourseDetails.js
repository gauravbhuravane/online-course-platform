import { useParams, Link } from 'react-router-dom';

const courses = [
  { id: '1', title: 'React Basics', category: 'Web Development', description: 'Learn React fundamentals.' },
  { id: '2', title: 'Python for Data Science', category: 'Data Science', description: 'Data science using Python.' },
  { id: '3', title: 'UI/UX Design Principles', category: 'Design', description: 'Understand UI/UX concepts.' },
];

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) return <div className="container">Course not found.</div>;

  return (
    <div className="container">
      <h2>{course.title}</h2>
      <p>Category: {course.category}</p>
      <p>{course.description}</p>
      <Link to="/enroll" className="btn">Enroll Now</Link>
    </div>
  );
}

export default CourseDetails;
