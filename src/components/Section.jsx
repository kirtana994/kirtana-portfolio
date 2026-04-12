function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export default Section;