// components/CreateRecipe.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import AddRecipeForm from '../../AddRecipeForm';

const CreateRecipe = () => {
    const { authStatus } = useAuthenticator();
    console.log('authStatus', authStatus);

    const message = authStatus === 'authenticated' ? 'Create Recipe' : 'Loading...';
    return (
        <div className="container">
            <Heading level={1}>{message}</Heading>
            <AddRecipeForm/>
        </div>
    )
}

export default CreateRecipe;
