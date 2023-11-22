import React , {useEffect, useState} from 'react'

export default function Home() {

    const [background, setBackground] = useState("");

    
  useEffect(() => {
    setBackground("linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('img/hero-image.jpg')");
  }, []);


  return (
    <>
    
    {background && (
          <div
            className="hero flex middle-xs"
            style={{
              backgroundImage: background,
            }}
          >
            <div className="hero-text">
              <h1>PoloRocan</h1>
              <p>Musicos Profesionales.</p>
            </div>
          </div>
        )}
    
    
    
    </>
    
  )
}
