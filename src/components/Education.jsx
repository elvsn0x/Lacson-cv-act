function Education({ education }) {
  // Safety check
  if (!education || education.length === 0) {
    return <section className="card"><h2>Education</h2><p>No education data available</p></section>;
  }

  return (
    <section className="card">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.program}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;