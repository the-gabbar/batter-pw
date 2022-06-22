import styles from '../styles/Home.module.css'
import Batch from '../components/Batch'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* navbar code */}
      <nav style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)" }} id="header">
        <div className='nav-items relative pb-4'>
          <ul className='items'>
            <li style={{ marginLeft: "20px" }} className='navbar-item hover:cursor-pointer inline-block pt-2'><i style={{ fontSize: "40px" }} className="fa-solid fa-bars"></i></li>
            <div style={{ marginLeft: "38%" }} className="inline-block">
              <div style={{ marginLeft: "0" }} className="inline-block">
                <li style={{ marginLeft: "20px" }} className='navbar-item text-3xl font-bold inline-block hover:cursor-pointer whitespace-normal text-center'>PHYSICS WALLAH</li>
                <li style={{ marginLeft: "20px" }} className='absolute top-0 right-0 navbar-item inline-block hover:cursor-pointer whitespace-normal mr-5'><Image src="/../public/pw_dark.png" width={60} height={60} /></li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      {/* batches and stuff */}
      <div style={{ backgroundColor: "#e8e8e8", height: "150vh" }} className='batches-page'>
        <div className="options relative">
          <div className='search-bar inline'>
            <input className='mt-5 placeholder:italic bg-grey-300 placeholder:text-grey' style={{borderRadius: "26px", width: "20rem" ,height: "2rem"}} type="text" placeholder="Search batches here"></input>
          </div>
          <div className='toggle-button inline'>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round} float-right`}></span>
            </label>
          </div>
        </div>
        <hr />
        <div style={{ paddingLeft: "10%" }} className='batches relative px-20 mt-10 relative'>
          <Batch name="Lakshya JEE" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <Batch name="Lakshya NEET" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <Batch name="Arjuna JEE" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <br />
          <br />
          <Batch name="Arjuna NEET" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <Batch name="Umeed Batch" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <Batch name="Another Batch" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <br />
          <br />
          <Batch name="Lakshya JEE" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <Batch name="Arjuna 2.0" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
          <Batch name="Arjuna 2.0" img="https://i.ytimg.com/vi/T8pCYpAMY4o/maxresdefault.jpg" />
        </div>
      </div>

      <script src="https://kit.fontawesome.com/d3e43fefda.js" crossorigin="anonymous"></script>
    </div>
  )
}
