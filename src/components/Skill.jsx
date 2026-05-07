function Skill({ name, glyph, image }) {
  return (
    <span className="skill-tag" title={name}>
      <span className="skill-tag__glyph" aria-hidden="true">
        {image ? <img src={image} alt={name} style={{ width: "100%", height: "100%" }} /> : glyph}
      </span>
      <span className="skill-tag__label">{name}</span>
    </span>
  );
}

export default Skill;