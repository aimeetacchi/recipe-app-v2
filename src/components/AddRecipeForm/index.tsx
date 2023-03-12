import { useEffect, useState } from 'react'
import awsExports from '../../aws-exports'
// import { Storage } from 'aws-amplify'
import { useForm } from 'react-hook-form';

// import { addRecipe } from '../../actions/AddRecipe'
// import { useDispatch } from 'react-redux'

const AddRecipeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    } 
    console.log(errors);
    // const dispatch = useDispatch();
    // const [imageValue, setImageValue] = useState();

    // const [recipe, setRecipeState] = useState();


//    const addRecipeImage = async (values: any) => {
//        const {name, description, difficulty, prepTime, cookingTime, serves } = values;
//         try {
//             const result = await Storage.put(imageValue.name, imageValue, {
//                 contentType: 'image/jpg'
//             })

//             if(result) {
//                 const image = {
//                         bucket: awsExports.aws_user_files_s3_bucket,
//                         region: awsExports.aws_user_files_s3_bucket_region,
//                         key: 'public/' + result.key
//                 }

//                 setRecipeState({
//                     name,
//                     difficulty,
//                     description,
//                     serves,
//                     prepTime,
//                     cookingTime,
//                     file: image,
//                 })       
//             }
    
//         } catch (error) {
//             console.log('Error uploading file:', error)
//         }
//     }

    // useEffect(() => {
    //     if(recipe){
    //         console.log('Calling add recipe...', recipe)
    //         dispatch(addRecipe(recipe))
    //     }
    // }, [recipe])


    return (
        <div className="form-container">
            <form className="block text-black font-opensans" onSubmit={handleSubmit(onSubmit)}>

                <div className="">
                    <label className="text-blue-900" htmlFor="name">Recipe Name</label>
                    <input className="block w-full rounded border border-blue-700 text-black" id="name" type="text" placeholder="Chicken Curry" {...register("Recipe Name", {required: true, min: 3, maxLength: 40})} />
                </div>
              
                <div className="">
                    <label className="text-blue-900" htmlFor="name">Instructions</label>
                    <textarea className="block h-40 w-full rounded border border-blue-700 text-black" {...register("Instructions (on how to make)", {required: true, min: 10, maxLength: 100})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="name">Difficulty</label>
                    <input className="block w-full rounded border border-blue-700" type="text" placeholder="Difficulty" {...register("Difficulty", {required: true})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="name">Prep Time (add number)</label>
                    <input className="block w-full rounded border border-blue-700" type="text" placeholder="15" {...register("Prep Time", {required: true, maxLength: 2})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="name">Cooking Time (add number)</label>
                    <input className="block w-full rounded border border-blue-700" type="text" placeholder="30" {...register("Cooking Time", {required: true, maxLength: 3})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="name">Serves (add number)</label>
                    <input className="block w-full rounded border border-blue-700" type="text" placeholder="2" {...register("Serves", {})} />
                </div>

                <input className="border border-blue-600 p-3 bg-blue-500" type="submit" />
            </form>
        </div>
    )
   
}

export default AddRecipeForm
