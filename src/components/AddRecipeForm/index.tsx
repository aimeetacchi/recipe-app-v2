import { useEffect, useState } from 'react'
import awsExports from '../../aws-exports'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api';
import Dropzone from 'react-dropzone';
import 'react-dropzone-uploader/dist/styles.css';
import { useForm, Controller  } from 'react-hook-form';
import { createRecipe } from '../../graphql/mutations';
import { CreateRecipeInput } from '../../API';

// import { addRecipe } from '../../actions/AddRecipe'
// import { useDispatch } from 'react-redux'

const AddRecipeForm = () => {
    const { register,  control, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        addRecipeImage(data)
    }
 
    const [file, setFile] = useState<any | null>(null);
    const [recipe, setRecipeState] = useState<any>();


   const addRecipeImage = async (values: any) => {
       const {name, description, difficulty, prepTime, cookingTime, serves, ingredients } = values;
       console.log(file)
        try {
            const result = await Storage.put(file.name, file, {
                contentType: 'image/jpg'
            })

            if(result) {
                const image = {
                        bucket: awsExports.aws_user_files_s3_bucket,
                        region: awsExports.aws_user_files_s3_bucket_region,
                        key: 'public/' + result.key
                }

                setRecipeState({
                    name,
                    difficulty,
                    ingredients: [ingredients],
                    description,
                    serves,
                    prepTime,
                    cookingTime,
                    file: image,
                })       
            }
    
        } catch (error) {
            console.log('Error uploading file:', error)
        }
    }

    const addRecipe = async () => {
        // Adding the Data from AWS
        const res = await API.graphql(graphqlOperation(createRecipe, {input: recipe}));

        // const res = await API.graphql({
        //     query: createRecipe,
        //     variables: {input: recipe},
        //     authMode: 'AWS_IAM',
        // });
        const data = (res as GraphQLResult<CreateRecipeInput>).data;
        console.log(data);

    }

    useEffect(() => {
        if(recipe){
            console.log('Calling add recipe...', recipe)
            // dispatch(addRecipe(recipe))
            addRecipe()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipe])


    return (
        <div className="form-container">
            <form className="block font-opensans mb-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="">
                    <label className="text-blue-900" htmlFor="name">Recipe Name</label>
                    <input id="name" className="block w-full rounded border border-blue-700 text-orange-500" type="text" placeholder="Chicken Curry" {...register("name", {required: true, min: 3, maxLength: 40})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="instructions">Instructions</label>
                    <textarea id="instructions" className="block w-full rounded border border-blue-700 text-orange-500" placeholder="how do you make this dish, write here.." {...register("description", {required: true, min: 10, maxLength: 300})} />
                </div>

                
                <div className="">
                    <label className="text-blue-900" htmlFor="ingredients">Ingredients</label>
                    <textarea id="ingredients" className="block w-full rounded border border-blue-700 text-orange-500" placeholder="Add your ingredients with a comma - dough, tomato, cheese" {...register("ingredients", {required: true, min: 10, maxLength: 300})} />
                </div>

                <div className="my-2 border border-orange-500">
                    <Controller
                        name="image"
                        control={control}
                        // rules={{ required: true }}
                        render={({ field }) => (
                            <div>
                            <Dropzone onDrop={(acceptedFiles) => {
                                field.onChange(acceptedFiles[0])
                                console.log('acceptedFiles', acceptedFiles[0])
                                setFile(acceptedFiles[0])
                            }}>
                            {({ getRootProps, getInputProps }) => (
                                <div className="h-40" {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p className="text-center">Drag and drop an image or click to select</p>
                                </div>
                            )}
                            </Dropzone>
                            {file && (
                                <div>
                                <h4>Thumbnail:</h4>
                                <img src={URL.createObjectURL(file)} alt={file.name} />
                                </div>
                            )}
                            </div>
                        )}
                    />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="difficulty">Difficulty</label>
                    <input id="difficulty" className="block w-full rounded border border-blue-700 text-orange-500" type="text" placeholder="Difficulty" {...register("difficulty", {required: true})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="prepTime">Prep Time (add number)</label>
                    <input id="prepTime" className="block w-full rounded border border-blue-700 text-orange-500" type="text" placeholder="15" {...register("prepTime", {required: true, maxLength: 2})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="cookingTime">Cooking Time (add number)</label>
                    <input id="cookingTime" className="block w-full rounded border border-blue-700 text-orange-500" type="text" placeholder="30" {...register("cookingTime", {required: true, maxLength: 3})} />
                </div>

                <div className="">
                    <label className="text-blue-900" htmlFor="serves">Serves (add number)</label>
                    <input id="serves" className="block w-full rounded border border-blue-700 text-orange-500" type="text" placeholder="2" {...register("serves", {})} />
                </div>

                <input className="mt-2 border rounded border-orange-200 p-3 bg-orange-500" type="submit" />
            </form>
        </div>
    )
   
}

export default AddRecipeForm
