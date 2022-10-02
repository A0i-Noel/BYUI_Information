import React from 'react'

const  Topic = ({subtitle, description, sourceImg}) => {
  return (
    <div className='topicContainer'>
      <h2>{subtitle}</h2>
      <div className='upperContent'>
        <p>{description}</p>
      </div>
      <div className='bottomContent'>
        <img src={sourceImg} />
      </div>
    </div>
  )
}

export default  Topic