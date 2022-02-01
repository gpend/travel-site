export default function Card (props){
    return(
        <div className="card">
            <img src={props.item.photo_loc} alt={props.item.photo_alt} />
            <div className="card--body">
                <div className="card--headline">
                    <p>📍 {props.item.location}</p>
                    <h2>{props.item.title}</h2>
                    <p className="attrib">{props.item.photo_attrib}</p>
                    <h3>{props.item.dates}</h3>
                </div>
                <div className="card--description">
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

