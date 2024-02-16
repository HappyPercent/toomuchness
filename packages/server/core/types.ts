import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type ChangeHabitEventStatusPayload = {
    id: Scalars['ID']['input'];
    status: HabitEventStatus;
};

export type CreateHabitPayload = {
    description: Scalars['String']['input'];
    name: Scalars['String']['input'];
    periodicity: Scalars['Int']['input'];
    startDate: Scalars['String']['input'];
};

export type Habit = {
    __typename?: 'Habit';
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    periodicity: Scalars['Int']['output'];
    startDate: Scalars['String']['output'];
    status: HabitStatus;
};

export type HabitEvent = {
    __typename?: 'HabitEvent';
    date: Scalars['String']['output'];
    habit: Habit;
    id: Scalars['ID']['output'];
    status: HabitEventStatus;
};

export enum HabitEventStatus {
    Done = 'DONE',
    None = 'NONE',
}

export enum HabitStatus {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
}

export type Mutation = {
    __typename?: 'Mutation';
    changeHabitEventStatus: HabitEvent;
    createHabit: Habit;
};

export type MutationChangeHabitEventStatusArgs = {
    input?: InputMaybe<ChangeHabitEventStatusPayload>;
};

export type MutationCreateHabitArgs = {
    input?: InputMaybe<CreateHabitPayload>;
};

export type Query = {
    __typename?: 'Query';
    habitHistory: Array<Maybe<HabitEvent>>;
    habits: Array<Maybe<Habit>>;
    habitsByDate: Array<Maybe<HabitEvent>>;
};

export type QueryHabitsByDateArgs = {
    date: Scalars['String']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    ChangeHabitEventStatusPayload: ChangeHabitEventStatusPayload;
    CreateHabitPayload: CreateHabitPayload;
    Habit: ResolverTypeWrapper<Habit>;
    HabitEvent: ResolverTypeWrapper<HabitEvent>;
    HabitEventStatus: HabitEventStatus;
    HabitStatus: HabitStatus;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Mutation: ResolverTypeWrapper<{}>;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Boolean: Scalars['Boolean']['output'];
    ChangeHabitEventStatusPayload: ChangeHabitEventStatusPayload;
    CreateHabitPayload: CreateHabitPayload;
    Habit: Habit;
    HabitEvent: HabitEvent;
    ID: Scalars['ID']['output'];
    Int: Scalars['Int']['output'];
    Mutation: {};
    Query: {};
    String: Scalars['String']['output'];
}>;

export type HabitResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Habit'] = ResolversParentTypes['Habit'],
> = ResolversObject<{
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    periodicity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['HabitStatus'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HabitEventResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['HabitEvent'] = ResolversParentTypes['HabitEvent'],
> = ResolversObject<{
    date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    habit?: Resolver<ResolversTypes['Habit'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['HabitEventStatus'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
    changeHabitEventStatus?: Resolver<
        ResolversTypes['HabitEvent'],
        ParentType,
        ContextType,
        Partial<MutationChangeHabitEventStatusArgs>
    >;
    createHabit?: Resolver<ResolversTypes['Habit'], ParentType, ContextType, Partial<MutationCreateHabitArgs>>;
}>;

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
    habitHistory?: Resolver<Array<Maybe<ResolversTypes['HabitEvent']>>, ParentType, ContextType>;
    habits?: Resolver<Array<Maybe<ResolversTypes['Habit']>>, ParentType, ContextType>;
    habitsByDate?: Resolver<
        Array<Maybe<ResolversTypes['HabitEvent']>>,
        ParentType,
        ContextType,
        RequireFields<QueryHabitsByDateArgs, 'date'>
    >;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
    Habit?: HabitResolvers<ContextType>;
    HabitEvent?: HabitEventResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
}>;
