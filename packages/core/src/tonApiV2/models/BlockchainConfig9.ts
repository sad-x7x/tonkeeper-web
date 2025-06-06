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
/**
 * List of mandatory parameters of the blockchain config.
 * @export
 * @interface BlockchainConfig9
 */
export interface BlockchainConfig9 {
    /**
     * 
     * @type {Array<number>}
     * @memberof BlockchainConfig9
     */
    mandatoryParams: Array<number>;
}

/**
 * Check if a given object implements the BlockchainConfig9 interface.
 */
export function instanceOfBlockchainConfig9(value: object): value is BlockchainConfig9 {
    if (!('mandatoryParams' in value) || value['mandatoryParams'] === undefined) return false;
    return true;
}

export function BlockchainConfig9FromJSON(json: any): BlockchainConfig9 {
    return BlockchainConfig9FromJSONTyped(json, false);
}

export function BlockchainConfig9FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig9 {
    if (json == null) {
        return json;
    }
    return {
        
        'mandatoryParams': json['mandatory_params'],
    };
}

export function BlockchainConfig9ToJSON(json: any): BlockchainConfig9 {
    return BlockchainConfig9ToJSONTyped(json, false);
}

export function BlockchainConfig9ToJSONTyped(value?: BlockchainConfig9 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mandatory_params': value['mandatoryParams'],
    };
}

