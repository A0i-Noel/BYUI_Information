import React from 'react'
import Topic from '../Components/Organism/ Topic'

const Class = () => {

  const description = (
    <div>
      <p>多くのアメリカの大学では複数の分野を学べることが魅力です。メジャー（専攻）を自分が最も学びたいことに設定しマイナー（副専攻）として自分の興味ある分野の証明書を取ることも可能です。<br />
      (詳しいクラス情報は<a href="https://www.byui.edu/catalog#/programs" target="blank">こちら</a>)<br />
      
      </p>
    </div>
    
  );

  return (
    <Topic
    subtitle={"What can you learn in BYUI"}
      description={description}
      sourceImg={""}
      />
  )
}

export default Class