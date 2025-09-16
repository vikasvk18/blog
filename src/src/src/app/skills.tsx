export default function Skills() {
  const skills = [
    'React', 'JavaScript', 'Next.js', 'Python', 'Java', 'Spring Boot', 'C++',
    'GenAI', 'RAG', 'Data Engineering', 'Cloud', 'Kafka', 'Redis', 'MongoDB', 'SQL', 'Azure',
  ];
  return (
    <main style={{ padding: 32 }}>
      <h1>Skills</h1>
      <ul style={{ columns: 2, fontSize: 18 }}>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </main>
  );
}
