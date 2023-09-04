import './Card.css'
import cardImage from './batman.jpg'
export default function Card(movieDetails){
    return(
        <div class="movie-card">
            <div class="image">
                <img src={cardImage}/>
            </div>
            <div class="descritpion">
                <h1>Batman</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nobis ab voluptate alias aut consequuntur minima earum optio adipisci in possimus, odit aliquid vitae dolorum maxime reprehenderit voluptatum quas a!</p>
            </div>
            <div class="tags">
                <p>Action</p>
                <p>Mystery</p>
                <p>Drama</p>
            </div>
            
        </div>
    )
}