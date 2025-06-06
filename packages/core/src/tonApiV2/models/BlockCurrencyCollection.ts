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
import type { BlockCurrencyCollectionOtherInner } from './BlockCurrencyCollectionOtherInner';
import {
    BlockCurrencyCollectionOtherInnerFromJSON,
    BlockCurrencyCollectionOtherInnerFromJSONTyped,
    BlockCurrencyCollectionOtherInnerToJSON,
    BlockCurrencyCollectionOtherInnerToJSONTyped,
} from './BlockCurrencyCollectionOtherInner';

/**
 * 
 * @export
 * @interface BlockCurrencyCollection
 */
export interface BlockCurrencyCollection {
    /**
     * 
     * @type {number}
     * @memberof BlockCurrencyCollection
     */
    grams: number;
    /**
     * 
     * @type {Array<BlockCurrencyCollectionOtherInner>}
     * @memberof BlockCurrencyCollection
     */
    other: Array<BlockCurrencyCollectionOtherInner>;
}

/**
 * Check if a given object implements the BlockCurrencyCollection interface.
 */
export function instanceOfBlockCurrencyCollection(value: object): value is BlockCurrencyCollection {
    if (!('grams' in value) || value['grams'] === undefined) return false;
    if (!('other' in value) || value['other'] === undefined) return false;
    return true;
}

export function BlockCurrencyCollectionFromJSON(json: any): BlockCurrencyCollection {
    return BlockCurrencyCollectionFromJSONTyped(json, false);
}

export function BlockCurrencyCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockCurrencyCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'grams': json['grams'],
        'other': ((json['other'] as Array<any>).map(BlockCurrencyCollectionOtherInnerFromJSON)),
    };
}

export function BlockCurrencyCollectionToJSON(json: any): BlockCurrencyCollection {
    return BlockCurrencyCollectionToJSONTyped(json, false);
}

export function BlockCurrencyCollectionToJSONTyped(value?: BlockCurrencyCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'grams': value['grams'],
        'other': ((value['other'] as Array<any>).map(BlockCurrencyCollectionOtherInnerToJSON)),
    };
}

