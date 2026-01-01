import "./DCard.css"

export default function DCard(props) {
  return (
    <div className="DCard cardEffect">
      {props.icon}
      <p className="DCardTitle">{props.title}</p>
      <p className="DCardDesc" style={props.desc?{display:"block"}:{display:"none"}}>{props.desc}</p>
    </div>
  )
}