/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PoolImplementationType } from './PoolImplementationType';
import {
    PoolImplementationTypeFromJSON,
    PoolImplementationTypeFromJSONTyped,
    PoolImplementationTypeToJSON,
    PoolImplementationTypeToJSONTyped,
} from './PoolImplementationType';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
    AccountAddressToJSONTyped,
} from './AccountAddress';

/**
 * validator's participation in elections
 * @export
 * @interface DepositStakeAction
 */
export interface DepositStakeAction {
    /**
     * 
     * @type {number}
     * @memberof DepositStakeAction
     */
    amount: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof DepositStakeAction
     */
    staker: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof DepositStakeAction
     */
    pool: AccountAddress;
    /**
     * 
     * @type {PoolImplementationType}
     * @memberof DepositStakeAction
     */
    implementation: PoolImplementationType;
}



/**
 * Check if a given object implements the DepositStakeAction interface.
 */
export function instanceOfDepositStakeAction(value: object): value is DepositStakeAction {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('staker' in value) || value['staker'] === undefined) return false;
    if (!('pool' in value) || value['pool'] === undefined) return false;
    if (!('implementation' in value) || value['implementation'] === undefined) return false;
    return true;
}

export function DepositStakeActionFromJSON(json: any): DepositStakeAction {
    return DepositStakeActionFromJSONTyped(json, false);
}

export function DepositStakeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositStakeAction {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'staker': AccountAddressFromJSON(json['staker']),
        'pool': AccountAddressFromJSON(json['pool']),
        'implementation': PoolImplementationTypeFromJSON(json['implementation']),
    };
}

export function DepositStakeActionToJSON(json: any): DepositStakeAction {
    return DepositStakeActionToJSONTyped(json, false);
}

export function DepositStakeActionToJSONTyped(value?: DepositStakeAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'staker': AccountAddressToJSON(value['staker']),
        'pool': AccountAddressToJSON(value['pool']),
        'implementation': PoolImplementationTypeToJSON(value['implementation']),
    };
}

