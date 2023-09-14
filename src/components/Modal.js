import ReactDOM from "react-dom"
import './Modal.css';
import { useEffect ,useContext,useState} from "react";
import MovieContext from "../context/MovieContext";
import TvShowContext from "../context/TvShowContext";
import { SlClose } from "react-icons/sl";
export default function Modal({closeModal,itemId,isMovie}){
    const {fetchMovieVideo,} = useContext(MovieContext);
    const {fetchTvShowVideo,} = useContext(TvShowContext);
    
    const [video,setVideo] = useState("");

    const fetchResultVideo = async ()=>{
        const result =await (isMovie?fetchMovieVideo(itemId):fetchTvShowVideo(itemId));
        let teaser;

        // if there isnt an trailer we will try to get a teaser 
        // if there isnt both of them then we will just have an unresponsive video

        for(let i=0;i<result.length;i++){
            if(result[i].type=="Trailer" ){
                setVideo(result[i].key);
                break;
            }
            else if(teaser==undefined && result[i].type=="Teaser"){
                teaser = result[i].key
            }
        }
        if(video==undefined){
            try{
                setVideo(teaser);
            }
            catch{
                setVideo(result[0]);
            }
            
        }

    }
    useEffect(()=>{
        fetchResultVideo();

    },[]);
    return ReactDOM.createPortal(
        <div className="modal-background" onClick={closeModal}>
           <div className="modal-box">
            <div className="exit-box">
                {/* <SlClose size={20}/> */}
            </div>
                <div className="video-box">
                    <iframe src={`https://www.youtube.com/embed/${video}`} title="how to embed youtube in react" allowFullScreen/>
                </div>
                
           </div>
        </div>,
        document.querySelector('.modal-container')
    )
    

}