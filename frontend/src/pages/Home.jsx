import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
import Head from '../components/Head'
// import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
    {/* <Navbar /> */}
      <section className='heading'>
        <h1 style={{color: '#0088ff'}} >What do you need help with</h1>
   
      </section>
<Head />
      {/* <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to='/tickets' className='btn btn-block'>
        <FaTicketAlt /> View My Tickets
      </Link> */}
    </>
  )
}

export default Home
