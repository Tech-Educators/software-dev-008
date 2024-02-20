import './ottercard.css'

export default function Otter({otter}) {
    return (
        <div className='otterCard'>
            <img src={otter.image} alt="" className='otter-image'/>
            <h4 className='otter-txt-700 ibm-plex-sans-semibold'> {otter.name}</h4>
            <div className='otter-detail-container'>
                <p className='ibm-plex-sans-light txt-mS'> 🌍 {otter.location}</p>
                <p className='ibm-plex-sans-light txt-mS'>🍴 {otter.diet}</p>
            </div>
        </div>
    )
}