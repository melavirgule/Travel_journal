import placeholder from '../assets/placeholder-red-small.png'

export default function Card(props) {

    // console.log(props)

    return(

            <>
                <div className="card">
                    <div className='card--img__container'>
                        <img src={props.imageUrl} alt={props.title}  className="card--img"/>
                    </div>
    
                    <div className="card--content">
                        <div className="card--location">
                            <img src={placeholder} alt="placeholder logo" />
                            <h3 className="card--country">{props.location}</h3>
                            <a className="card--location__link" href={props.googleMapsUrl}>View on Google Maps</a>
                        </div>
                        <h2 className="card--city">{props.title}</h2>
                        <p className="card--dates">{props.startDate} - {props.endDate}</p>
                        <p className="card--description">{props.description}</p>
                        <hr className='card--separator'/>
                    </div>
                </div>

            </>

    )
}