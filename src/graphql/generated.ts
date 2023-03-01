import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
};

export type CreateLikeInput = {
  id?: InputMaybe<Scalars['ID']>;
  numberLikes: Scalars['Int'];
  owner?: InputMaybe<Scalars['String']>;
  recipeLikesId?: InputMaybe<Scalars['ID']>;
};

export type CreateRecipeInput = {
  cookingTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<S3ObjectInput>;
  id?: InputMaybe<Scalars['ID']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ingredientsSet2?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ingredientsSet3?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  owner?: InputMaybe<Scalars['String']>;
  prepTime?: InputMaybe<Scalars['String']>;
  serves?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DeleteLikeInput = {
  id: Scalars['ID'];
};

export type DeleteRecipeInput = {
  id: Scalars['ID'];
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  numberLikes: Scalars['Int'];
  owner?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
  recipeLikesId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['AWSDateTime'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelLikeConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelLikeConditionInput>>>;
  not?: InputMaybe<ModelLikeConditionInput>;
  numberLikes?: InputMaybe<ModelIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelLikeConditionInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  recipeLikesId?: InputMaybe<ModelIdInput>;
};

export type ModelLikeConnection = {
  __typename?: 'ModelLikeConnection';
  items: Array<Maybe<Like>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelLikeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelLikeFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelLikeFilterInput>;
  numberLikes?: InputMaybe<ModelIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelLikeFilterInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  recipeLikesId?: InputMaybe<ModelIdInput>;
};

export type ModelRecipeConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelRecipeConditionInput>>>;
  cookingTime?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  difficulty?: InputMaybe<ModelStringInput>;
  ingredients?: InputMaybe<ModelStringInput>;
  ingredientsSet2?: InputMaybe<ModelStringInput>;
  ingredientsSet3?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelRecipeConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelRecipeConditionInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  prepTime?: InputMaybe<ModelStringInput>;
  serves?: InputMaybe<ModelStringInput>;
  tags?: InputMaybe<ModelStringInput>;
};

export type ModelRecipeConnection = {
  __typename?: 'ModelRecipeConnection';
  items: Array<Maybe<Recipe>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelRecipeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelRecipeFilterInput>>>;
  cookingTime?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  difficulty?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  ingredients?: InputMaybe<ModelStringInput>;
  ingredientsSet2?: InputMaybe<ModelStringInput>;
  ingredientsSet3?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelRecipeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelRecipeFilterInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  prepTime?: InputMaybe<ModelStringInput>;
  serves?: InputMaybe<ModelStringInput>;
  tags?: InputMaybe<ModelStringInput>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelSubscriptionLikeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionLikeFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  numberLikes?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionLikeFilterInput>>>;
};

export type ModelSubscriptionRecipeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionRecipeFilterInput>>>;
  cookingTime?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  difficulty?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  ingredients?: InputMaybe<ModelSubscriptionStringInput>;
  ingredientsSet2?: InputMaybe<ModelSubscriptionStringInput>;
  ingredientsSet3?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionRecipeFilterInput>>>;
  prepTime?: InputMaybe<ModelSubscriptionStringInput>;
  serves?: InputMaybe<ModelSubscriptionStringInput>;
  tags?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLike?: Maybe<Like>;
  createRecipe?: Maybe<Recipe>;
  deleteLike?: Maybe<Like>;
  deleteRecipe?: Maybe<Recipe>;
  updateLike?: Maybe<Like>;
  updateRecipe?: Maybe<Recipe>;
};


export type MutationCreateLikeArgs = {
  condition?: InputMaybe<ModelLikeConditionInput>;
  input: CreateLikeInput;
};


export type MutationCreateRecipeArgs = {
  condition?: InputMaybe<ModelRecipeConditionInput>;
  input: CreateRecipeInput;
};


export type MutationDeleteLikeArgs = {
  condition?: InputMaybe<ModelLikeConditionInput>;
  input: DeleteLikeInput;
};


export type MutationDeleteRecipeArgs = {
  condition?: InputMaybe<ModelRecipeConditionInput>;
  input: DeleteRecipeInput;
};


export type MutationUpdateLikeArgs = {
  condition?: InputMaybe<ModelLikeConditionInput>;
  input: UpdateLikeInput;
};


export type MutationUpdateRecipeArgs = {
  condition?: InputMaybe<ModelRecipeConditionInput>;
  input: UpdateRecipeInput;
};

export type Query = {
  __typename?: 'Query';
  getLike?: Maybe<Like>;
  getRecipe?: Maybe<Recipe>;
  listLikes?: Maybe<ModelLikeConnection>;
  listRecipes?: Maybe<ModelRecipeConnection>;
};


export type QueryGetLikeArgs = {
  id: Scalars['ID'];
};


export type QueryGetRecipeArgs = {
  id: Scalars['ID'];
};


export type QueryListLikesArgs = {
  filter?: InputMaybe<ModelLikeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListRecipesArgs = {
  filter?: InputMaybe<ModelRecipeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  cookingTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSDateTime'];
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['String']>;
  file?: Maybe<S3Object>;
  id: Scalars['ID'];
  ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  ingredientsSet2?: Maybe<Array<Maybe<Scalars['String']>>>;
  ingredientsSet3?: Maybe<Array<Maybe<Scalars['String']>>>;
  likes?: Maybe<ModelLikeConnection>;
  name: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  prepTime?: Maybe<Scalars['String']>;
  serves?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt: Scalars['AWSDateTime'];
};


export type RecipeLikesArgs = {
  filter?: InputMaybe<ModelLikeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type S3Object = {
  __typename?: 'S3Object';
  bucket: Scalars['String'];
  key: Scalars['String'];
  region: Scalars['String'];
};

export type S3ObjectInput = {
  bucket: Scalars['String'];
  key: Scalars['String'];
  region: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateLike?: Maybe<Like>;
  onCreateRecipe?: Maybe<Recipe>;
  onDeleteLike?: Maybe<Like>;
  onDeleteRecipe?: Maybe<Recipe>;
  onUpdateLike?: Maybe<Like>;
  onUpdateRecipe?: Maybe<Recipe>;
};


export type SubscriptionOnCreateLikeArgs = {
  filter?: InputMaybe<ModelSubscriptionLikeFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnCreateRecipeArgs = {
  filter?: InputMaybe<ModelSubscriptionRecipeFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnDeleteLikeArgs = {
  filter?: InputMaybe<ModelSubscriptionLikeFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnDeleteRecipeArgs = {
  filter?: InputMaybe<ModelSubscriptionRecipeFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnUpdateLikeArgs = {
  filter?: InputMaybe<ModelSubscriptionLikeFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnUpdateRecipeArgs = {
  filter?: InputMaybe<ModelSubscriptionRecipeFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};

export type UpdateLikeInput = {
  id: Scalars['ID'];
  numberLikes?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  recipeLikesId?: InputMaybe<Scalars['ID']>;
};

export type UpdateRecipeInput = {
  cookingTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<S3ObjectInput>;
  id: Scalars['ID'];
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ingredientsSet2?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ingredientsSet3?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  prepTime?: InputMaybe<Scalars['String']>;
  serves?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateRecipeMutationVariables = Exact<{
  input: CreateRecipeInput;
  condition?: InputMaybe<ModelRecipeConditionInput>;
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null, items: Array<{ __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null } | null> } | null } | null };

export type UpdateRecipeMutationVariables = Exact<{
  input: UpdateRecipeInput;
  condition?: InputMaybe<ModelRecipeConditionInput>;
}>;


export type UpdateRecipeMutation = { __typename?: 'Mutation', updateRecipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null, items: Array<{ __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null } | null> } | null } | null };

export type DeleteRecipeMutationVariables = Exact<{
  input: DeleteRecipeInput;
  condition?: InputMaybe<ModelRecipeConditionInput>;
}>;


export type DeleteRecipeMutation = { __typename?: 'Mutation', deleteRecipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null, items: Array<{ __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null } | null> } | null } | null };

export type CreateLikeMutationVariables = Exact<{
  input: CreateLikeInput;
  condition?: InputMaybe<ModelLikeConditionInput>;
}>;


export type CreateLikeMutation = { __typename?: 'Mutation', createLike?: { __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null } | null } | null } | null };

export type UpdateLikeMutationVariables = Exact<{
  input: UpdateLikeInput;
  condition?: InputMaybe<ModelLikeConditionInput>;
}>;


export type UpdateLikeMutation = { __typename?: 'Mutation', updateLike?: { __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null } | null } | null } | null };

export type DeleteLikeMutationVariables = Exact<{
  input: DeleteLikeInput;
  condition?: InputMaybe<ModelLikeConditionInput>;
}>;


export type DeleteLikeMutation = { __typename?: 'Mutation', deleteLike?: { __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null } | null } | null } | null };

export type GetRecipeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRecipeQuery = { __typename?: 'Query', getRecipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null, items: Array<{ __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null } | null> } | null } | null };

export type ListRecipesQueryVariables = Exact<{
  filter?: InputMaybe<ModelRecipeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type ListRecipesQuery = { __typename?: 'Query', listRecipes?: { __typename?: 'ModelRecipeConnection', nextToken?: string | null, items: Array<{ __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null } | null } | null> } | null };

export type GetLikeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLikeQuery = { __typename?: 'Query', getLike?: { __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any, file?: { __typename?: 'S3Object', bucket: string, region: string, key: string } | null, likes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null } | null } | null } | null };

export type ListLikesQueryVariables = Exact<{
  filter?: InputMaybe<ModelLikeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type ListLikesQuery = { __typename?: 'Query', listLikes?: { __typename?: 'ModelLikeConnection', nextToken?: string | null, items: Array<{ __typename?: 'Like', id: string, numberLikes: number, owner?: string | null, createdAt: any, updatedAt: any, recipeLikesId?: string | null, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, prepTime?: string | null, cookingTime?: string | null, difficulty?: string | null, serves?: string | null, ingredients?: Array<string | null> | null, ingredientsSet2?: Array<string | null> | null, ingredientsSet3?: Array<string | null> | null, tags?: Array<string | null> | null, owner?: string | null, createdAt: any, updatedAt: any } | null } | null> } | null };


export const CreateRecipeDocument = gql`
    mutation CreateRecipe($input: CreateRecipeInput!, $condition: ModelRecipeConditionInput) {
  createRecipe(input: $input, condition: $condition) {
    id
    name
    description
    prepTime
    cookingTime
    difficulty
    serves
    ingredients
    ingredientsSet2
    ingredientsSet3
    file {
      bucket
      region
      key
    }
    tags
    owner
    likes {
      items {
        id
        numberLikes
        owner
        createdAt
        updatedAt
        recipeLikesId
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
    `;
export type CreateRecipeMutationFn = Apollo.MutationFunction<CreateRecipeMutation, CreateRecipeMutationVariables>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeMutation, CreateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument, options);
      }
export type CreateRecipeMutationHookResult = ReturnType<typeof useCreateRecipeMutation>;
export type CreateRecipeMutationResult = Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<CreateRecipeMutation, CreateRecipeMutationVariables>;
export const UpdateRecipeDocument = gql`
    mutation UpdateRecipe($input: UpdateRecipeInput!, $condition: ModelRecipeConditionInput) {
  updateRecipe(input: $input, condition: $condition) {
    id
    name
    description
    prepTime
    cookingTime
    difficulty
    serves
    ingredients
    ingredientsSet2
    ingredientsSet3
    file {
      bucket
      region
      key
    }
    tags
    owner
    likes {
      items {
        id
        numberLikes
        owner
        createdAt
        updatedAt
        recipeLikesId
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
    `;
export type UpdateRecipeMutationFn = Apollo.MutationFunction<UpdateRecipeMutation, UpdateRecipeMutationVariables>;

/**
 * __useUpdateRecipeMutation__
 *
 * To run a mutation, you first call `useUpdateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipeMutation, { data, loading, error }] = useUpdateRecipeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRecipeMutation, UpdateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRecipeMutation, UpdateRecipeMutationVariables>(UpdateRecipeDocument, options);
      }
export type UpdateRecipeMutationHookResult = ReturnType<typeof useUpdateRecipeMutation>;
export type UpdateRecipeMutationResult = Apollo.MutationResult<UpdateRecipeMutation>;
export type UpdateRecipeMutationOptions = Apollo.BaseMutationOptions<UpdateRecipeMutation, UpdateRecipeMutationVariables>;
export const DeleteRecipeDocument = gql`
    mutation DeleteRecipe($input: DeleteRecipeInput!, $condition: ModelRecipeConditionInput) {
  deleteRecipe(input: $input, condition: $condition) {
    id
    name
    description
    prepTime
    cookingTime
    difficulty
    serves
    ingredients
    ingredientsSet2
    ingredientsSet3
    file {
      bucket
      region
      key
    }
    tags
    owner
    likes {
      items {
        id
        numberLikes
        owner
        createdAt
        updatedAt
        recipeLikesId
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
    `;
export type DeleteRecipeMutationFn = Apollo.MutationFunction<DeleteRecipeMutation, DeleteRecipeMutationVariables>;

/**
 * __useDeleteRecipeMutation__
 *
 * To run a mutation, you first call `useDeleteRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRecipeMutation, { data, loading, error }] = useDeleteRecipeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteRecipeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRecipeMutation, DeleteRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRecipeMutation, DeleteRecipeMutationVariables>(DeleteRecipeDocument, options);
      }
export type DeleteRecipeMutationHookResult = ReturnType<typeof useDeleteRecipeMutation>;
export type DeleteRecipeMutationResult = Apollo.MutationResult<DeleteRecipeMutation>;
export type DeleteRecipeMutationOptions = Apollo.BaseMutationOptions<DeleteRecipeMutation, DeleteRecipeMutationVariables>;
export const CreateLikeDocument = gql`
    mutation CreateLike($input: CreateLikeInput!, $condition: ModelLikeConditionInput) {
  createLike(input: $input, condition: $condition) {
    id
    numberLikes
    owner
    recipe {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
    recipeLikesId
  }
}
    `;
export type CreateLikeMutationFn = Apollo.MutationFunction<CreateLikeMutation, CreateLikeMutationVariables>;

/**
 * __useCreateLikeMutation__
 *
 * To run a mutation, you first call `useCreateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLikeMutation, { data, loading, error }] = useCreateLikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateLikeMutation, CreateLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLikeMutation, CreateLikeMutationVariables>(CreateLikeDocument, options);
      }
export type CreateLikeMutationHookResult = ReturnType<typeof useCreateLikeMutation>;
export type CreateLikeMutationResult = Apollo.MutationResult<CreateLikeMutation>;
export type CreateLikeMutationOptions = Apollo.BaseMutationOptions<CreateLikeMutation, CreateLikeMutationVariables>;
export const UpdateLikeDocument = gql`
    mutation UpdateLike($input: UpdateLikeInput!, $condition: ModelLikeConditionInput) {
  updateLike(input: $input, condition: $condition) {
    id
    numberLikes
    owner
    recipe {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
    recipeLikesId
  }
}
    `;
export type UpdateLikeMutationFn = Apollo.MutationFunction<UpdateLikeMutation, UpdateLikeMutationVariables>;

/**
 * __useUpdateLikeMutation__
 *
 * To run a mutation, you first call `useUpdateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLikeMutation, { data, loading, error }] = useUpdateLikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateLikeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLikeMutation, UpdateLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLikeMutation, UpdateLikeMutationVariables>(UpdateLikeDocument, options);
      }
export type UpdateLikeMutationHookResult = ReturnType<typeof useUpdateLikeMutation>;
export type UpdateLikeMutationResult = Apollo.MutationResult<UpdateLikeMutation>;
export type UpdateLikeMutationOptions = Apollo.BaseMutationOptions<UpdateLikeMutation, UpdateLikeMutationVariables>;
export const DeleteLikeDocument = gql`
    mutation DeleteLike($input: DeleteLikeInput!, $condition: ModelLikeConditionInput) {
  deleteLike(input: $input, condition: $condition) {
    id
    numberLikes
    owner
    recipe {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
    recipeLikesId
  }
}
    `;
export type DeleteLikeMutationFn = Apollo.MutationFunction<DeleteLikeMutation, DeleteLikeMutationVariables>;

/**
 * __useDeleteLikeMutation__
 *
 * To run a mutation, you first call `useDeleteLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLikeMutation, { data, loading, error }] = useDeleteLikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteLikeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLikeMutation, DeleteLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLikeMutation, DeleteLikeMutationVariables>(DeleteLikeDocument, options);
      }
export type DeleteLikeMutationHookResult = ReturnType<typeof useDeleteLikeMutation>;
export type DeleteLikeMutationResult = Apollo.MutationResult<DeleteLikeMutation>;
export type DeleteLikeMutationOptions = Apollo.BaseMutationOptions<DeleteLikeMutation, DeleteLikeMutationVariables>;
export const GetRecipeDocument = gql`
    query GetRecipe($id: ID!) {
  getRecipe(id: $id) {
    id
    name
    description
    prepTime
    cookingTime
    difficulty
    serves
    ingredients
    ingredientsSet2
    ingredientsSet3
    file {
      bucket
      region
      key
    }
    tags
    owner
    likes {
      items {
        id
        numberLikes
        owner
        createdAt
        updatedAt
        recipeLikesId
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetRecipeQuery__
 *
 * To run a query within a React component, call `useGetRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecipeQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
      }
export function useGetRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
        }
export type GetRecipeQueryHookResult = ReturnType<typeof useGetRecipeQuery>;
export type GetRecipeLazyQueryHookResult = ReturnType<typeof useGetRecipeLazyQuery>;
export type GetRecipeQueryResult = Apollo.QueryResult<GetRecipeQuery, GetRecipeQueryVariables>;
export const ListRecipesDocument = gql`
    query ListRecipes($filter: ModelRecipeFilterInput, $limit: Int, $nextToken: String) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        nextToken
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListRecipesQuery__
 *
 * To run a query within a React component, call `useListRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRecipesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListRecipesQuery(baseOptions?: Apollo.QueryHookOptions<ListRecipesQuery, ListRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListRecipesQuery, ListRecipesQueryVariables>(ListRecipesDocument, options);
      }
export function useListRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecipesQuery, ListRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListRecipesQuery, ListRecipesQueryVariables>(ListRecipesDocument, options);
        }
export type ListRecipesQueryHookResult = ReturnType<typeof useListRecipesQuery>;
export type ListRecipesLazyQueryHookResult = ReturnType<typeof useListRecipesLazyQuery>;
export type ListRecipesQueryResult = Apollo.QueryResult<ListRecipesQuery, ListRecipesQueryVariables>;
export const GetLikeDocument = gql`
    query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    numberLikes
    owner
    recipe {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
    recipeLikesId
  }
}
    `;

/**
 * __useGetLikeQuery__
 *
 * To run a query within a React component, call `useGetLikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLikeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLikeQuery(baseOptions: Apollo.QueryHookOptions<GetLikeQuery, GetLikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLikeQuery, GetLikeQueryVariables>(GetLikeDocument, options);
      }
export function useGetLikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLikeQuery, GetLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLikeQuery, GetLikeQueryVariables>(GetLikeDocument, options);
        }
export type GetLikeQueryHookResult = ReturnType<typeof useGetLikeQuery>;
export type GetLikeLazyQueryHookResult = ReturnType<typeof useGetLikeLazyQuery>;
export type GetLikeQueryResult = Apollo.QueryResult<GetLikeQuery, GetLikeQueryVariables>;
export const ListLikesDocument = gql`
    query ListLikes($filter: ModelLikeFilterInput, $limit: Int, $nextToken: String) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      numberLikes
      owner
      recipe {
        id
        name
        description
        prepTime
        cookingTime
        difficulty
        serves
        ingredients
        ingredientsSet2
        ingredientsSet3
        tags
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeLikesId
    }
    nextToken
  }
}
    `;

/**
 * __useListLikesQuery__
 *
 * To run a query within a React component, call `useListLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListLikesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListLikesQuery(baseOptions?: Apollo.QueryHookOptions<ListLikesQuery, ListLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListLikesQuery, ListLikesQueryVariables>(ListLikesDocument, options);
      }
export function useListLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListLikesQuery, ListLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListLikesQuery, ListLikesQueryVariables>(ListLikesDocument, options);
        }
export type ListLikesQueryHookResult = ReturnType<typeof useListLikesQuery>;
export type ListLikesLazyQueryHookResult = ReturnType<typeof useListLikesLazyQuery>;
export type ListLikesQueryResult = Apollo.QueryResult<ListLikesQuery, ListLikesQueryVariables>;