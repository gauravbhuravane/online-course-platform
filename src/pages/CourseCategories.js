import { Link } from 'react-router-dom';

const courses = [
  { id: '1', title: 'React Basics', category: 'Web Development', description: 'Learn React fundamentals.' },
  { id: '2', title: 'Python for Data Science', category: 'Data Science', description: 'Data science using Python.' },
  { id: '3', title: 'UI/UX Design Principles', category: 'Design', description: 'Understand UI/UX concepts.' },
];

function CourseCategories() {
  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <div className="container">
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <h3>All Courses</h3>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h4>{course.title}</h4>
            <p>{course.category}</p>
            <Link to={`/course/${course.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCategories;
