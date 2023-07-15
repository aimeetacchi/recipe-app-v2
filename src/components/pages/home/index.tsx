import { Heading } from '@aws-amplify/ui-react';
import { Recipe } from '../../../API';
import { useAppContext } from '../../../state';
import Card from "../../card"
import HomeStyles from "./styles"

const Home = () => {
    const { state } = useAppContext();
    const { recipes } = state;
    console.log('recipes in store', recipes);
    return (
        <HomeStyles>
            <div className="w-11/12 lg:w-9/12 mx-auto">
                
                {
                    recipes.length > 0 ? (
                        <>
                            <Heading level={3}>Recipes</Heading>
                            <div className="mt-5 md:flex md:gap-5">
                                {recipes.map((recipe: Recipe, index:number) => (
                                    <Card key={index} recipe={recipe}/>
                                ))}
                            </div>
                           
                        </>
                    ) : (
                        <p>Sorry there is no recipes yet. why not sign up and add one.</p>
                    )
                }
                
            </div>
        </HomeStyles>
    )
}

export default Home