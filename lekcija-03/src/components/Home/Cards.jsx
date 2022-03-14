import ContentContainer from "../ContentContainer/ContentContainer";
import Tools from "../Tools/Tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faHistory, faMagnifyingGlass, faThumbsUp, faUser} from "@fortawesome/free-solid-svg-icons";


const cardData = [
    {
      id: 1,
      title: "Create and post",
      imgSrc: <FontAwesomeIcon color='#ffffff' icon={faCirclePlus} size="3x" />,
      text: "If you know a great drink recipe and want to share it with others then you came to the right place! Write stunning recipes from templates"
    },
    {
      id: 2,
      title: "Find and get inspired",
      imgSrc: <FontAwesomeIcon color='#ffffff' icon={faMagnifyingGlass} size="3x" />,
      text: "Are you tired from drinking the same cocktails? No problem get inspired our best recipes and improve your bartending skills to the next level."
    },
    {
      id: 3,
      title: "Have fun and enjoy your drink!",
      imgSrc: <FontAwesomeIcon color='#ffffff' icon={faThumbsUp} size="3x" />,
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