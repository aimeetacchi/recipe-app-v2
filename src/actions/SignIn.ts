import Types from './types';
import { Auth } from 'aws-amplify';

// ADD FAVE ==
export const signIn = (credentials: any) => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    try {
        dispatch(setLoadingSignIn());
       
          // SIGN IN TO AWS WITH COGNITO
            const user = await Auth.signIn(credentials);

        // dispatch({
        //     type: Types.ADD_FAVE_RECIPE,
        //     payload: item
        // })
     
        dispatch(signInComplete()); 

    } catch(err) {
        console.log('error signing in:', err)

        // RUN FAIL ACTION ----
        dispatch(signInFailed(err))
    }
}


export const signInComplete = () => {
    return {
        type: Types.SIGN_IN_COMPLETE
    }
}

export const signInFailed = (err: any) => {
    return {
        type: Types.SIGN_IN_FAILED,
        payload: err
    }
}


// Set Loading to True..
export const setLoadingSignIn = () => {
    return {
        type: Types.SET_LOADING_ADD_SIGN_IN,
    }
}
