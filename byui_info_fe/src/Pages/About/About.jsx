import React from 'react'
import Topic from '../../Components/Organism/ Topic'

const About = () => {
  return (
      <Topic 
      subtitle={"About This Site"}
      description={["このサイトはBYUIのプログラミングクラスの一環で制作している新しくBYUIに来る日本人に向けたサイトです。最大限正しく有益な情報をまとめていますので、留学前に役に立てれば幸いです。もし不備や間違い、追加して欲しい情報などがあれば気軽に”Contact”からご連絡ください。",<br />,"著者に関してのプロフィールは",<a href='https://www.linkedin.com/in/aoi-kuriki-6aa160233/' target="blank">こちら</a>,"から。"]}
      sourceImg={""}
      />
  )
}

export default About