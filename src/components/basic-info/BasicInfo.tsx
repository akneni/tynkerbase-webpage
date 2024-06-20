import './Basic-infoStyles.css'

import PlH from '../../assets/placeholder_image.jpg'

function BasicInfo() {
    return (
        <div className='basic-info'>
            <div className="container">
                <h1>
                    The only cloud software you'll ever need
                </h1>
                <p>Check out more info yada yada yah</p>
                <div className="img-container">
                    <img src={PlH} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo