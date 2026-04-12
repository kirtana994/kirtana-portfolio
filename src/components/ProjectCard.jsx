function ProjectCard({ title, desc, link }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>View Repo</button>
      </a>
    </article>
  );
}

export default ProjectCard;