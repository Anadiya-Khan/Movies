import { Routes ,Route } from 'react-router-dom'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite'
import Navbar from './components/Navbar'
import { MovieProvider } from './Context/MovieContext'

function App() {
  return (
    <>
    {/* // only one root element is return  */}
   <div>  
    {/* {{}} first for the var and second for the obj to pass */}
    {/* <MovieCard movie={{title : "Tims film", release : '2024'}}/>
    <MovieCard movie={{title : "Joe films", release : '2024'}}/> */}
     <MovieProvider>
     <Navbar/>
    <main className='main-content'> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favorite />}/>
      </Routes>
      </main> 
      </MovieProvider>
   </div>
   </>
  )
}

export default App

