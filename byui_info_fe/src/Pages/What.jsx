import React from 'react'
import Topic from '../Components/Organism/ Topic'

const What = () => {
const description = (
  <div>
    <p>Brigham Young University Idaho(BYUI,ブリガムヤング大学アイダホ校)はアメリカのアイダホ州に位置する大学です。<br />
    この大学は末日聖徒イエスキリスト教会が創立した大学のため他の海外大学に比べ大幅に安い学費で留学を経験できることも利点です。(詳しい金額は<a href="https://www.byui.edu/financial-aid/tuition-costs" target="blank">こちら</a>)<br />
    
    </p>
  </div>
  
);

  return (
    <Topic 
    subtitle={"What is BYUI?"}
      description={description}
      sourceImg={""}
    />
  )
}

export default What