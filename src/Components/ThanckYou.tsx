import doneImage from '../assets/images/icon-thank-you.svg'
import '../assets/styles/thanck-yoy.css'

export default function ThanckYou(){
    return(
        <div className="finish-service-cnt">
            <img src={doneImage} alt="Thanck You" />
            <h2>Thanck You!</h2>
            <p>
                Thancks for confirming you substruiction! 
                We hope you have fun using our platform. 
                If you ever need support,
                please feel fre to email us at support@loremgaming.com.
            </p>
        </div>
    )
}