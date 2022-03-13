import ContentContainer from "../ContentContainer/ContentContainer";
import Tools from "../Tools/Tools";


const cardData = [
    {
      id: 1,
      title: "Create and post",
      imgSrc: "./fontawesome-icons/svgs/solid/pen-nib.svg",
      text: "If you know a great drink recipe and want to share it with others then you came to the right place! Write stunning recipes from templates"
    },
    {
      id: 2,
      title: "Find and get inspired",
      imgSrc: "./fontawesome-icons/svgs/solid/pen-to-square.svg",
      text: "Are you tired from drinking the same cocktails? No problem get inspired our best recipes and improve your bartending skills to the next level."
    },
    {
      id: 3,
      title: "Have fun and enjoy your drink!",
      imgSrc: "./fontawesome-icons/svgs/solid/share-from-square.svg",
      text: "Cheers! Share any recipes with your friends, mind-alikes or with anyone from any part of the world."
    },
  ]

function Cards() {
    return(
        <ContentContainer>
        {cardData.map((card) => {
          return <Tools key={card.id} title={card.title} src={card.imgSrc} text={card.text} />
        })}
      </ContentContainer>
    )
}

export default Cards;