import React, {useState} from 'react'

const Contact = () => {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [q, setQ] = useState("");

  const changeName = (e) => {
    setName(() => e.target.value)
  }

  const changeMail = (e) => {
    setMail(() => e.target.value)
  }

  const changeQuestion = (e) => {
    setQ(() => e.target.value)
  }

  const handleSubmit = (e) => {
    const data = {
      name: name,
      mail: mail,
      question: q
    }

    // send data to database

    setName("")
    setMail("")
    setQ("")
  }

  return (
    <div className='formContainer'>
      <form>
        <h1>Contact</h1>
        <label>Name: </label>
       <input onChange={changeName} value={name} type="text" placeholder="Your Name" width="100%"/>
       <label>E-mail: </label>
       <input onChange={changeMail} value={mail} type="email" placeholder="E-mail" />
       <label>Question: </label>
       <textarea onChange={changeQuestion} value={q} rows="10"/>
       <button type="submit">Button</button>
      </form>     
    </div>
  )
}

export default Contact