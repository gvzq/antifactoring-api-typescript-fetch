/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Antifactoring App
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface ApiInvoiceBody
 */
export interface ApiInvoiceBody {
    /**
     * 
     * @type {any}
     * @memberof ApiInvoiceBody
     */
    file: any;
}
/**
 * 
 * @export
 * @interface InvoiceSchema
 */
export interface InvoiceSchema {
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    invoiceNumber: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    companyName: any;
    /**
     * 
     * @type {InvoiceSchemaCompanyAddress}
     * @memberof InvoiceSchema
     */
    companyAddress: InvoiceSchemaCompanyAddress;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    date: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    paymentTerms: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    billToName: any;
    /**
     * 
     * @type {InvoiceSchemaCompanyAddress}
     * @memberof InvoiceSchema
     */
    billToAddress: InvoiceSchemaCompanyAddress;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    dueDate: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    balanceDue: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    items: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    subtotal: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    tax: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchema
     */
    total: any;
}
/**
 * 
 * @export
 * @interface InvoiceSchemaCompanyAddress
 */
export interface InvoiceSchemaCompanyAddress {
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchemaCompanyAddress
     */
    street?: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchemaCompanyAddress
     */
    city?: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchemaCompanyAddress
     */
    state?: any;
    /**
     * 
     * @type {any}
     * @memberof InvoiceSchemaCompanyAddress
     */
    zipCode?: any;
}
/**
 * InvoicesApi - fetch parameter creator
 * @export
 */
export const InvoicesApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve details of an invoice by sending a multipart form request of a pdf document, jpeg image, png image, bmp image, webp image, or text file.
         * @summary Get the details of an invoice by using OCR and AI.
         * @param {any} file 
         * @param {any} [apiKey] API key of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scanInvoice(file: any, apiKey?: any, options: any = {}): FetchArgs {
            // verify required parameter 'file' is not null or undefined
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling scanInvoice.');
            }
            const localVarPath = `/api/invoice`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("api_key")
					: configuration.apiKey;
                localVarQueryParameter["api_key"] = localVarApiKeyValue;
            }

            if (apiKey !== undefined) {
                localVarQueryParameter['api_key'] = apiKey;
            }

            if (file !== undefined) {
                localVarFormParams.set('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = localVarFormParams.toString();

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InvoicesApi - functional programming interface
 * @export
 */
export const InvoicesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve details of an invoice by sending a multipart form request of a pdf document, jpeg image, png image, bmp image, webp image, or text file.
         * @summary Get the details of an invoice by using OCR and AI.
         * @param {any} file 
         * @param {any} [apiKey] API key of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scanInvoice(file: any, apiKey?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InvoiceSchema> {
            const localVarFetchArgs = InvoicesApiFetchParamCreator(configuration).scanInvoice(file, apiKey, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * InvoicesApi - factory interface
 * @export
 */
export const InvoicesApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Retrieve details of an invoice by sending a multipart form request of a pdf document, jpeg image, png image, bmp image, webp image, or text file.
         * @summary Get the details of an invoice by using OCR and AI.
         * @param {any} file 
         * @param {any} [apiKey] API key of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scanInvoice(file: any, apiKey?: any, options?: any) {
            return InvoicesApiFp(configuration).scanInvoice(file, apiKey, options)(fetch, basePath);
        },
    };
};

/**
 * InvoicesApi - object-oriented interface
 * @export
 * @class InvoicesApi
 * @extends {BaseAPI}
 */
export class InvoicesApi extends BaseAPI {
    /**
     * Retrieve details of an invoice by sending a multipart form request of a pdf document, jpeg image, png image, bmp image, webp image, or text file.
     * @summary Get the details of an invoice by using OCR and AI.
     * @param {any} file 
     * @param {any} [apiKey] API key of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoicesApi
     */
    public scanInvoice(file: any, apiKey?: any, options?: any) {
        return InvoicesApiFp(this.configuration).scanInvoice(file, apiKey, options)(this.fetch, this.basePath);
    }

}
