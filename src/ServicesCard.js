
import { dataServices } from "./dataServices";

export const ServicesCard = ({services, prevButton, nextButton})=> {

        const {id, image, text} = dataServices[services];

        

        return (
            <div className="container1">
                <h3 className="heading">Our services</h3>
                <p>{text}</p>
                <div className="container2" >
                    
                    <button onClick={prevButton} className="btn"><img className="icon" width="55" height="55" src="https://img.icons8.com/fluency/48/previous.png" alt="previous"/></button>
                    <div key={id}>
                        <img className="image" src={image} alt="pic" width="500px"/>
                        
                    </div>
                    
                    <button onClick={nextButton} className="btn"><img className="icon" width="55" height="55" src="https://img.icons8.com/fluency/48/next.png" alt="next"/></button>
                    


                </div>
                
            </div>
        )

}