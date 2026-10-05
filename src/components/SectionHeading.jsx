export default function SectionHeading({ title, dark = false }) {
  const color = dark ? 'var(--olive)' : undefined
  return (
    <div className="sec-heading">
      <div className="sec-title-row">
        <span className="sec-dash" style={color ? { color } : {}}>-</span>
        <span className="sec-arch" style={color ? { borderColor: color } : {}} />
        <h2 className="sec-name">{title}</h2>
        <span className="sec-arch" style={color ? { borderColor: color } : {}} />
        <span className="sec-dash" style={color ? { color } : {}}>-</span>
      </div>
    </div>
  )
}
