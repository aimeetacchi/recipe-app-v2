import { Recipe,  } from '../../API'
import CardStyles from './styles'



const Card = ({recipe}: any) => {
  const { name, instructions, file, difficulty, serves, cookingTime, prepTime} = recipe;
  return (
    <CardStyles>
        <div className="card">
            <header className="card__header">
                <h2>{name}</h2>
            </header>
            <div className="card__body">
                {instructions && (<p>{instructions}</p>)}
                {serves && (<p>Serves: {serves}</p>)}
                {prepTime && (<p>Prep Time: {prepTime} mins</p>)}
                {cookingTime && (<p>Cooking Time: {cookingTime} mins</p>)}
                {difficulty && (<p>Difficulty: {difficulty}</p>)}

                {recipe.tags && (<p>Tags:<br/>
                    {recipe.tags.map((tag: string, key: number) => (
                        <span key={key}>{tag} </span>
                    ))}
                </p>)}

                {file && file.key !== 'public/undefined' && <img src={`https://${file.bucket}.s3.amazonaws.com/${file.key}`} alt='recipe'/>}
            </div>
        </div>
    </CardStyles>
  )
}

export default Card