import { Heading } from '@aws-amplify/ui-react';
import { useContext } from "react"
import { RecipeContext } from "../../../App"
import Card from "../../card"
import HomeStyles from "./styles"

const Home = () => {
    const { recipes } = useContext(RecipeContext);
    return (
        <HomeStyles>
            <div className="container">
                
                {
                    recipes.length > 0 ? (
                        <>
                            <Heading level={3}>Recipes</Heading>
                            <div className="flex">

                                <Card/>
                                <Card/>
                                <Card/>
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