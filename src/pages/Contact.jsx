import { useParams } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  const { id } = useParams()

  return (
    <div className='contact'>
      <h1>Contact ID: {id}</h1>
    </div>
  )
}

export default Contact
