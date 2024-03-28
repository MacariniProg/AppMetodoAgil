export async function ProjectList() {
  const res = await fetch("http://localhost:3000/api/projects", {
    method: "GET",
  });
  const data = await res.json();

  return (
    <div>
      {data.data.map((project) => (
        <p>{project.name}</p>
      ))}
    </div>
  );
}
