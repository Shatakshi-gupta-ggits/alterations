import { CreateUserData, ListServicesData, UpdateOrderData, UpdateOrderVariables, GetUserOrdersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListServices(options?: useDataConnectQueryOptions<ListServicesData>): UseDataConnectQueryResult<ListServicesData, undefined>;
export function useListServices(dc: DataConnect, options?: useDataConnectQueryOptions<ListServicesData>): UseDataConnectQueryResult<ListServicesData, undefined>;

export function useUpdateOrder(options?: useDataConnectMutationOptions<UpdateOrderData, FirebaseError, UpdateOrderVariables>): UseDataConnectMutationResult<UpdateOrderData, UpdateOrderVariables>;
export function useUpdateOrder(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateOrderData, FirebaseError, UpdateOrderVariables>): UseDataConnectMutationResult<UpdateOrderData, UpdateOrderVariables>;

export function useGetUserOrders(options?: useDataConnectQueryOptions<GetUserOrdersData>): UseDataConnectQueryResult<GetUserOrdersData, undefined>;
export function useGetUserOrders(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserOrdersData>): UseDataConnectQueryResult<GetUserOrdersData, undefined>;
