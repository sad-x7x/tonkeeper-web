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
 * 
 * @export
 * @interface EncryptedComment
 */
export interface EncryptedComment {
    /**
     * 
     * @type {string}
     * @memberof EncryptedComment
     */
    encryptionType: string;
    /**
     * 
     * @type {string}
     * @memberof EncryptedComment
     */
    cipherText: string;
}

/**
 * Check if a given object implements the EncryptedComment interface.
 */
export function instanceOfEncryptedComment(value: object): value is EncryptedComment {
    if (!('encryptionType' in value) || value['encryptionType'] === undefined) return false;
    if (!('cipherText' in value) || value['cipherText'] === undefined) return false;
    return true;
}

export function EncryptedCommentFromJSON(json: any): EncryptedComment {
    return EncryptedCommentFromJSONTyped(json, false);
}

export function EncryptedCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncryptedComment {
    if (json == null) {
        return json;
    }
    return {
        
        'encryptionType': json['encryption_type'],
        'cipherText': json['cipher_text'],
    };
}

export function EncryptedCommentToJSON(json: any): EncryptedComment {
    return EncryptedCommentToJSONTyped(json, false);
}

export function EncryptedCommentToJSONTyped(value?: EncryptedComment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'encryption_type': value['encryptionType'],
        'cipher_text': value['cipherText'],
    };
}

