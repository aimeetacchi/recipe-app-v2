import React, { createContext, ReactNode, useContext, useReducer } from 'react';

/**
 * State management solution based on this article:
 * https://ionic.io/blog/a-state-management-pattern-for-ionic-react-with-react-hooks
 */
interface State {
    recipes: object[];
    // currentQuestion: number;
    // answers: object[];
    // riskRating?: number;
}

interface ContextProviderProps {
    children?: ReactNode;
}

export const AppContext = createContext<any>({} as State);

export const useAppContext = () => useContext(AppContext);

export const SET_RECIPES = 'SET_RECIPES';
// export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
// export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
// export const SET_RISK_RATING = 'SET_RISK_RATING';
// export const RESET_FORM = 'RESET_FORM';

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case SET_RECIPES: {
            return {
                ...state,
                recipes: action.recipes,
            };
        }
        // case SET_CURRENT_QUESTION: {
        //     return {
        //         ...state,
        //         currentQuestion: action.currentQuestion,
        //     };
        // }
        // case UPDATE_ANSWERS: {
        //     return {
        //         ...state,
        //         answers: [...state.answers, action.answer],
        //     };
        // }
        // case SET_RISK_RATING: {
        //     return {
        //         ...state,
        //         riskRating: action.riskRating,
        //     };
        // }
        // case RESET_FORM: {
        //     return {
        //         ...state,
        //         currentQuestion: 1,
        //         answers: [],
        //         riskRating: undefined,
        //     };
        // }
        default: {
            return state;
        }
    }
};

const logger = (reducer: Function) => {
    const reducerWithLogger = (state: object, action: any) => {
        // console.log('%cPrevious State:', 'color: #9E9E9E; font-weight: 700;', state);
        // console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
        // console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', reducer(state, action));
        return reducer(state, action);
    };

    return reducerWithLogger;
};

const loggerReducer = logger(reducer);

export const initialState: State = {
    recipes: [],
    // currentQuestion: 1,
    // answers: [],
    // riskRating: undefined,
};

export function AppContextProvider({ children }: ContextProviderProps) {
    const fullInitialState = {
        ...initialState,
    };

    let [state, dispatch] = useReducer(loggerReducer, fullInitialState);
    let value = { state, dispatch };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const AppContextConsumer = AppContext.Consumer;