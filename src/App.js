import Card from "./components/Card"
import Navbar from "./components/Navbar"
import "./App.css";
export default function App(){
    return (
        <div className="background">
            <Navbar/>
            <main className="grid">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </main>
        </div>
        
    )
};