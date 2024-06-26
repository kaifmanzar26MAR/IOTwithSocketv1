/// <reference types="node" />
/**
 * @packageDocumentation
 * @module echotestrpc
 */
import * as model from "./model";
import * as eventstream_rpc from "../eventstream_rpc";
import { EventEmitter } from "events";
export { model };
/**
 * A network client for interacting with the EchoTestRPC service using the eventstream RPC protocol.
 *
 * EchoTestRPC is a service for testing event-stream based clients, servers, and code generation.
 */
export declare class Client extends EventEmitter {
    private rpcClient;
    private serviceModel;
    /**
     * Constructor for a EchoTestRPC service client.
     *
     * @param config client configuration settings
     */
    constructor(config: eventstream_rpc.RpcClientConfig);
    /**
     * Attempts to open an eventstream connection to the configured remote endpoint.  Returned promise will be fulfilled
     * if the transport-level connection is successfully established and the eventstream handshake completes without
     * error.
     *
     * connect() may only be called once.
     */
    connect(): Promise<void>;
    /**
     * Shuts down the client and begins the process of releasing all native resources associated with the client
     * as well as any unclosed operations.  It is critical that this function be called when finished with the client;
     * otherwise, native resources will leak.
     *
     * The client tracks unclosed operations and, as part of this process, closes them as well.
     *
     * Once a client has been closed, it may no longer be used.
     */
    close(): Promise<void>;
    /**
     * Event emitted when the client's underlying network connection is ended.  Only emitted if the connection
     * was previously successfully established.
     *
     * Listener type: {@link eventstream_rpc.DisconnectionListener}
     *
     * @event
     */
    static DISCONNECTION: string;
    on(event: 'disconnection', listener: eventstream_rpc.DisconnectionListener): this;
    /************************ Service Operations ************************/
    /**
     * Performs a CauseServiceError operation.
     *
     * Throws a ServiceError instead of returning a response.
     *
     * @param request data describing the CauseServiceError operation to perform
     * @param options additional eventstream options to use while performing this operation
     * @return a Promise that is resolved with the CauseServiceError operation's result, or rejected with an
     *    RpcError
     */
    causeServiceError(request: model.CauseServiceErrorRequest, options?: eventstream_rpc.OperationOptions): Promise<model.CauseServiceErrorResponse>;
    /**
     * Creates a CauseStreamServiceToError streaming operation.
     *
     * Responds to initial request normally then throws a ServiceError on stream response
     *
     * Once created, the streaming operation must be started by a call to activate().
     *
     * If the operation allows for streaming input, the user may attach event listeners to receive messages.
     *
     * If the operation allows for streaming output, the user may call sendProtocolMessage() to send messages on
     * the operation's event stream once the operation has been activated.
     *
     * The user should close() a streaming operation once finished with it.  If close() is not called, the native
     * resources associated with the streaming operation will not be freed until the client is closed.
     *
     * @param request data describing the CauseStreamServiceToError streaming operation to create
     * @param options additional eventstream options to use while this operation is active
     * @return a new StreamingOperation object
     */
    causeStreamServiceToError(request: model.EchoStreamingRequest, options?: eventstream_rpc.OperationOptions): eventstream_rpc.StreamingOperation<model.EchoStreamingRequest, model.EchoStreamingResponse, model.EchoStreamingMessage, model.EchoStreamingMessage>;
    /**
     * Performs a EchoMessage operation.
     *
     * Returns the same data sent in the request to the response
     *
     * @param request data describing the EchoMessage operation to perform
     * @param options additional eventstream options to use while performing this operation
     * @return a Promise that is resolved with the EchoMessage operation's result, or rejected with an
     *    RpcError
     */
    echoMessage(request: model.EchoMessageRequest, options?: eventstream_rpc.OperationOptions): Promise<model.EchoMessageResponse>;
    /**
     * Creates a EchoStreamMessages streaming operation.
     *
     * Initial request and response are empty, but echos streaming messages sent by client
     *
     * Once created, the streaming operation must be started by a call to activate().
     *
     * If the operation allows for streaming input, the user may attach event listeners to receive messages.
     *
     * If the operation allows for streaming output, the user may call sendProtocolMessage() to send messages on
     * the operation's event stream once the operation has been activated.
     *
     * The user should close() a streaming operation once finished with it.  If close() is not called, the native
     * resources associated with the streaming operation will not be freed until the client is closed.
     *
     * @param request data describing the EchoStreamMessages streaming operation to create
     * @param options additional eventstream options to use while this operation is active
     * @return a new StreamingOperation object
     */
    echoStreamMessages(request: model.EchoStreamingRequest, options?: eventstream_rpc.OperationOptions): eventstream_rpc.StreamingOperation<model.EchoStreamingRequest, model.EchoStreamingResponse, model.EchoStreamingMessage, model.EchoStreamingMessage>;
    /**
     * Performs a GetAllCustomers operation.
     *
     * Fetches all customers
     *
     * @param request data describing the GetAllCustomers operation to perform
     * @param options additional eventstream options to use while performing this operation
     * @return a Promise that is resolved with the GetAllCustomers operation's result, or rejected with an
     *    RpcError
     */
    getAllCustomers(request: model.GetAllCustomersRequest, options?: eventstream_rpc.OperationOptions): Promise<model.GetAllCustomersResponse>;
    /**
     * Performs a GetAllProducts operation.
     *
     * Fetches all products, indexed by SKU
     *
     * @param request data describing the GetAllProducts operation to perform
     * @param options additional eventstream options to use while performing this operation
     * @return a Promise that is resolved with the GetAllProducts operation's result, or rejected with an
     *    RpcError
     */
    getAllProducts(request: model.GetAllProductsRequest, options?: eventstream_rpc.OperationOptions): Promise<model.GetAllProductsResponse>;
}
