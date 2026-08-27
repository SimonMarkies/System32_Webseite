import ReleaseTimer from "./ReleaseDate"
import WishlistButton from "./WishlistButton"
import "./description.css"  

export default function Description() {
    return(
        <section id="descriptionID" className="description">

            <div className="descriptionWishlist">
                 <ReleaseTimer /> 
                 <WishlistButton />
            </div>

            <div className="explaination">
                
                <h1>One Shot - Kill everyone</h1>
                <div className="textPic">
                    <p>
                        <b>You are a computer virus.</b> <br /> Your only mission: kill the system. <br /> <br />

                        Play as the virus in our 2D top-down action game and experience total chaos with different scenarios and over-the-top bosses. <br />
                        Can you corrupt the system? <br />

                        Find out by wishlisting System32
                    </p>

                    <img src="public\Screenshot1.jpg" alt="Gameplay from System32" />
                </div>
                

            </div>
            
            
        </section>
    )
}