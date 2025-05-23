/* tslint:disable */
/* eslint-disable */
/**
 * Custodial-Battery REST API.
 * REST API for Custodial Battery which provides gas to different networks to help execute transactions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EcPreview
 */
export interface EcPreview {
    /**
     * 
     * @type {number}
     * @memberof EcPreview
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof EcPreview
     */
    symbol: string;
    /**
     * 
     * @type {number}
     * @memberof EcPreview
     */
    decimals: number;
    /**
     * 
     * @type {string}
     * @memberof EcPreview
     */
    image: string;
}

/**
 * Check if a given object implements the EcPreview interface.
 */
export function instanceOfEcPreview(value: object): value is EcPreview {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('decimals' in value) || value['decimals'] === undefined) return false;
    if (!('image' in value) || value['image'] === undefined) return false;
    return true;
}

export function EcPreviewFromJSON(json: any): EcPreview {
    return EcPreviewFromJSONTyped(json, false);
}

export function EcPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): EcPreview {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'symbol': json['symbol'],
        'decimals': json['decimals'],
        'image': json['image'],
    };
}

  export function EcPreviewToJSON(json: any): EcPreview {
      return EcPreviewToJSONTyped(json, false);
  }

  export function EcPreviewToJSONTyped(value?: EcPreview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'symbol': value['symbol'],
        'decimals': value['decimals'],
        'image': value['image'],
    };
}

