// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={'card'`${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-para">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="img-logo" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
