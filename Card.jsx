import picture from './assets/tshirt.jpg'

function Card () {
    return(
            
        <div className="card">
            
            <img src={picture} alt="tshirt-card" className='tshirt-img'></img>
            <h2 className="title"><b> Title:ADDIDAS Dry-Fit Tshirt</b></h2>
            <p className="des"> <b className='des-bold'>Description :</b> Stand out with the reflective shiny Adidas logo that adds a touch of modern sophistication. also Perfect for evening runs or low-light conditions, it enhances visibility, keeping you safe and stylish.</p>
        </div>
    );
}

export default Card