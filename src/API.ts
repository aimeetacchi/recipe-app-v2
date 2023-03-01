/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  prepTime?: string | null,
  cookingTime?: string | null,
  difficulty?: string | null,
  serves?: string | null,
  ingredients?: Array< string | null > | null,
  ingredientsSet2?: Array< string | null > | null,
  ingredientsSet3?: Array< string | null > | null,
  file?: S3ObjectInput | null,
  tags?: Array< string | null > | null,
  owner?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  prepTime?: ModelStringInput | null,
  cookingTime?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  serves?: ModelStringInput | null,
  ingredients?: ModelStringInput | null,
  ingredientsSet2?: ModelStringInput | null,
  ingredientsSet3?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  name: string,
  description?: string | null,
  prepTime?: string | null,
  cookingTime?: string | null,
  difficulty?: string | null,
  serves?: string | null,
  ingredients?: Array< string | null > | null,
  ingredientsSet2?: Array< string | null > | null,
  ingredientsSet3?: Array< string | null > | null,
  file?: S3Object | null,
  tags?: Array< string | null > | null,
  owner?: string | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  numberLikes: number,
  owner?: string | null,
  recipe?: Recipe | null,
  createdAt: string,
  updatedAt: string,
  recipeLikesId?: string | null,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  prepTime?: string | null,
  cookingTime?: string | null,
  difficulty?: string | null,
  serves?: string | null,
  ingredients?: Array< string | null > | null,
  ingredientsSet2?: Array< string | null > | null,
  ingredientsSet3?: Array< string | null > | null,
  file?: S3ObjectInput | null,
  tags?: Array< string | null > | null,
  owner?: string | null,
};

export type DeleteRecipeInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  numberLikes: number,
  owner?: string | null,
  recipeLikesId?: string | null,
};

export type ModelLikeConditionInput = {
  numberLikes?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
  recipeLikesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLikeInput = {
  id: string,
  numberLikes?: number | null,
  owner?: string | null,
  recipeLikesId?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  prepTime?: ModelStringInput | null,
  cookingTime?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  serves?: ModelStringInput | null,
  ingredients?: ModelStringInput | null,
  ingredientsSet2?: ModelStringInput | null,
  ingredientsSet3?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items:  Array<Recipe | null >,
  nextToken?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  numberLikes?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
  recipeLikesId?: ModelIDInput | null,
};

export type ModelSubscriptionRecipeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  prepTime?: ModelSubscriptionStringInput | null,
  cookingTime?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  serves?: ModelSubscriptionStringInput | null,
  ingredients?: ModelSubscriptionStringInput | null,
  ingredientsSet2?: ModelSubscriptionStringInput | null,
  ingredientsSet3?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRecipeFilterInput | null > | null,
  or?: Array< ModelSubscriptionRecipeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  numberLikes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    prepTime?: string | null,
    cookingTime?: string | null,
    difficulty?: string | null,
    serves?: string | null,
    ingredients?: Array< string | null > | null,
    ingredientsSet2?: Array< string | null > | null,
    ingredientsSet3?: Array< string | null > | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    tags?: Array< string | null > | null,
    owner?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        recipeLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    prepTime?: string | null,
    cookingTime?: string | null,
    difficulty?: string | null,
    serves?: string | null,
    ingredients?: Array< string | null > | null,
    ingredientsSet2?: Array< string | null > | null,
    ingredientsSet3?: Array< string | null > | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    tags?: Array< string | null > | null,
    owner?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        recipeLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    prepTime?: string | null,
    cookingTime?: string | null,
    difficulty?: string | null,
    serves?: string | null,
    ingredients?: Array< string | null > | null,
    ingredientsSet2?: Array< string | null > | null,
    ingredientsSet3?: Array< string | null > | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    tags?: Array< string | null > | null,
    owner?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        recipeLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    owner?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    recipeLikesId?: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    owner?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    recipeLikesId?: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    owner?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    recipeLikesId?: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    prepTime?: string | null,
    cookingTime?: string | null,
    difficulty?: string | null,
    serves?: string | null,
    ingredients?: Array< string | null > | null,
    ingredientsSet2?: Array< string | null > | null,
    ingredientsSet3?: Array< string | null > | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    tags?: Array< string | null > | null,
    owner?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        recipeLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    owner?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    recipeLikesId?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      numberLikes: number,
      owner?: string | null,
      recipe?:  {
        __typename: "Recipe",
        id: string,
        name: string,
        description?: string | null,
        prepTime?: string | null,
        cookingTime?: string | null,
        difficulty?: string | null,
        serves?: string | null,
        ingredients?: Array< string | null > | null,
        ingredientsSet2?: Array< string | null > | null,
        ingredientsSet3?: Array< string | null > | null,
        tags?: Array< string | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      recipeLikesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
  owner?: string | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    prepTime?: string | null,
    cookingTime?: string | null,
    difficulty?: string | null,
    serves?: string | null,
    ingredients?: Array< string | null > | null,
    ingredientsSet2?: Array< string | null > | null,
    ingredientsSet3?: Array< string | null > | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    tags?: Array< string | null > | null,
    owner?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        recipeLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    prepTime?: string | null,
    cookingTime?: string | null,
    difficulty?: string | null,
    serves?: string | null,
    ingredients?: Array< string | null > | null,
    ingredientsSet2?: Array< string | null > | null,
    ingredientsSet3?: Array< string | null > | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    tags?: Array< string | null > | null,
    owner?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        recipeLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    prepTime?: string | null,
    cookingTime?: string | null,
    difficulty?: string | null,
    serves?: string | null,
    ingredients?: Array< string | null > | null,
    ingredientsSet2?: Array< string | null > | null,
    ingredientsSet3?: Array< string | null > | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    tags?: Array< string | null > | null,
    owner?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        recipeLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    owner?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    recipeLikesId?: string | null,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    owner?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    recipeLikesId?: string | null,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    owner?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      description?: string | null,
      prepTime?: string | null,
      cookingTime?: string | null,
      difficulty?: string | null,
      serves?: string | null,
      ingredients?: Array< string | null > | null,
      ingredientsSet2?: Array< string | null > | null,
      ingredientsSet3?: Array< string | null > | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      tags?: Array< string | null > | null,
      owner?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    recipeLikesId?: string | null,
  } | null,
};
