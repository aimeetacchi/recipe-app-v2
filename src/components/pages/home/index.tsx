import { Heading } from '@aws-amplify/ui-react';
import { ListRecipesQuery, Recipe } from '../../../API';
import { SET_RECIPES, useAppContext } from '../../../state';
import Card from "../../card"
import HomeStyles from "./styles"
import { useEffect } from 'react';
import { API, GraphQLResult } from '@aws-amplify/api';
import { listRecipes } from '../../../graphql/queries';

const Home = () => {
    const { state, dispatch } = useAppContext();
    const { recipes } = state;
    console.log('recipes in store', recipes);

    const getData = async () => {
        // Getting the Data from AWS - IAM unauth way
        const recipesData = await API.graphql({
        query: listRecipes,
        authMode: 'AWS_IAM'
      }) as GraphQLResult<ListRecipesQuery>;
  
      const data = recipesData?.data?.listRecipes?.items
  
      // setting data in store
      dispatch({
          type: SET_RECIPES,
          recipes: data,
      });
    }
  
    useEffect(() => {
      console.log('Running the getData function...')
      getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <HomeStyles>
            <div className="w-11/12 lg:w-10/12 mx-auto">
                
                {
                    recipes.length > 0 ? (
                        <>
                            <Heading level={3}>Recipes</Heading>
                            <div className="mt-5 md:flex md:gap-7 md:flex-wrap">
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