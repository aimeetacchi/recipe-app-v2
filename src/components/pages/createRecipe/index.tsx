// components/CreateRecipe.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import AddRecipeForm from '../../AddRecipeForm';

const CreateRecipe = () => {
    const { authStatus } = useAuthenticator();
    // console.log('authStatus', authStatus);

    const message = authStatus === 'authenticated' ? 'Create Recipe' : 'Loading...';
    return (
        <div className="create-recipe w-2/5 mx-auto">
            <h2 className="font-lato text-3xl">{message}</h2>
            <AddRecipeForm/>
        </div>
    )
}

export default CreateRecipe;
