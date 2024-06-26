"use strict";
/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeCancelLocalDeploymentResponse = exports.normalizeListNamedShadowsForThingRequest = exports.normalizeListNamedShadowsForThingResponse = exports.normalizeSubscribeToComponentUpdatesRequest = exports.normalizeSubscribeToComponentUpdatesResponse = exports.normalizeListLocalDeploymentsRequest = exports.normalizeListLocalDeploymentsResponse = exports.normalizeStopComponentRequest = exports.normalizeStopComponentResponse = exports.normalizeComponentNotFoundError = exports.normalizePauseComponentRequest = exports.normalizePauseComponentResponse = exports.normalizeUnauthorizedError = exports.normalizeResourceNotFoundError = exports.normalizeCreateLocalDeploymentRequest = exports.normalizeCreateLocalDeploymentResponse = exports.normalizeServiceError = exports.normalizeInvalidRecipeDirectoryPathError = exports.normalizeInvalidArtifactsDirectoryPathError = exports.normalizeInvalidArgumentsError = exports.normalizeIoTCoreMessage = exports.normalizeConfigurationUpdateEvents = exports.normalizeValidateConfigurationUpdateEvents = exports.normalizeSubscriptionResponseMessage = exports.normalizeCredentialDocument = exports.normalizePublishMessage = exports.normalizeCertificateOptions = exports.normalizeCertificateUpdateEvent = exports.normalizeClientDeviceCredential = exports.normalizeConfigurationValidityReport = exports.normalizeSecretValue = exports.normalizeComponentUpdatePolicyEvents = exports.normalizeMQTTMessage = exports.normalizeConfigurationUpdateEvent = exports.normalizeMetric = exports.normalizeValidateConfigurationUpdateEvent = exports.normalizeMQTTCredential = exports.normalizeJsonMessage = exports.normalizeBinaryMessage = exports.normalizeCertificateUpdate = exports.normalizeComponentDetails = exports.normalizePreComponentUpdateEvent = exports.normalizePostComponentUpdateEvent = exports.normalizeLocalDeployment = exports.normalizeRunWithInfo = exports.normalizeMessageContext = exports.normalizeDeploymentStatusDetails = exports.normalizeSystemResourceLimits = exports.normalizeUserProperty = exports.makeServiceModel = void 0;
exports.normalizePutComponentMetricRequest = exports.normalizePutComponentMetricResponse = exports.normalizeDeferComponentUpdateRequest = exports.normalizeDeferComponentUpdateResponse = exports.normalizeSubscribeToValidateConfigurationUpdatesRequest = exports.normalizeSubscribeToValidateConfigurationUpdatesResponse = exports.normalizeGetConfigurationRequest = exports.normalizeGetConfigurationResponse = exports.normalizeSubscribeToTopicRequest = exports.normalizeSubscribeToTopicResponse = exports.normalizeGetComponentDetailsRequest = exports.normalizeGetComponentDetailsResponse = exports.normalizeGetClientDeviceAuthTokenRequest = exports.normalizeGetClientDeviceAuthTokenResponse = exports.normalizeInvalidCredentialError = exports.normalizePublishToTopicRequest = exports.normalizePublishToTopicResponse = exports.normalizeSubscribeToCertificateUpdatesRequest = exports.normalizeSubscribeToCertificateUpdatesResponse = exports.normalizeVerifyClientDeviceIdentityRequest = exports.normalizeVerifyClientDeviceIdentityResponse = exports.normalizeAuthorizeClientDeviceActionRequest = exports.normalizeAuthorizeClientDeviceActionResponse = exports.normalizeInvalidClientDeviceAuthTokenError = exports.normalizeListComponentsRequest = exports.normalizeListComponentsResponse = exports.normalizeCreateDebugPasswordRequest = exports.normalizeCreateDebugPasswordResponse = exports.normalizeGetThingShadowRequest = exports.normalizeGetThingShadowResponse = exports.normalizeSendConfigurationValidityReportRequest = exports.normalizeSendConfigurationValidityReportResponse = exports.normalizeUpdateThingShadowRequest = exports.normalizeUpdateThingShadowResponse = exports.normalizeUpdateConfigurationRequest = exports.normalizeUpdateConfigurationResponse = exports.normalizeConflictError = exports.normalizeFailedUpdateConditionCheckError = exports.normalizeValidateAuthorizationTokenRequest = exports.normalizeValidateAuthorizationTokenResponse = exports.normalizeInvalidTokenError = exports.normalizeRestartComponentRequest = exports.normalizeRestartComponentResponse = exports.normalizeGetLocalDeploymentStatusRequest = exports.normalizeGetLocalDeploymentStatusResponse = exports.normalizeGetSecretValueRequest = exports.normalizeGetSecretValueResponse = exports.normalizeUpdateStateRequest = exports.normalizeUpdateStateResponse = exports.normalizeCancelLocalDeploymentRequest = void 0;
exports.validateComponentNotFoundError = exports.validatePauseComponentRequest = exports.validatePauseComponentResponse = exports.validateUnauthorizedError = exports.validateResourceNotFoundError = exports.validateCreateLocalDeploymentRequest = exports.validateCreateLocalDeploymentResponse = exports.validateServiceError = exports.validateInvalidRecipeDirectoryPathError = exports.validateInvalidArtifactsDirectoryPathError = exports.validateInvalidArgumentsError = exports.validateIoTCoreMessage = exports.validateConfigurationUpdateEvents = exports.validateValidateConfigurationUpdateEvents = exports.validateSubscriptionResponseMessage = exports.validateCredentialDocument = exports.validatePublishMessage = exports.validateCertificateOptions = exports.validateCertificateUpdateEvent = exports.validateClientDeviceCredential = exports.validateConfigurationValidityReport = exports.validateSecretValue = exports.validateComponentUpdatePolicyEvents = exports.validateMQTTMessage = exports.validateConfigurationUpdateEvent = exports.validateMetric = exports.validateValidateConfigurationUpdateEvent = exports.validateMQTTCredential = exports.validateJsonMessage = exports.validateBinaryMessage = exports.validateCertificateUpdate = exports.validateComponentDetails = exports.validatePreComponentUpdateEvent = exports.validatePostComponentUpdateEvent = exports.validateLocalDeployment = exports.validateRunWithInfo = exports.validateMessageContext = exports.validateDeploymentStatusDetails = exports.validateSystemResourceLimits = exports.validateUserProperty = exports.normalizeSubscribeToIoTCoreRequest = exports.normalizeSubscribeToIoTCoreResponse = exports.normalizeResumeComponentRequest = exports.normalizeResumeComponentResponse = exports.normalizePublishToIoTCoreRequest = exports.normalizePublishToIoTCoreResponse = exports.normalizeSubscribeToConfigurationUpdateRequest = exports.normalizeSubscribeToConfigurationUpdateResponse = exports.normalizeDeleteThingShadowRequest = exports.normalizeDeleteThingShadowResponse = void 0;
exports.validateSubscribeToTopicResponse = exports.validateGetComponentDetailsRequest = exports.validateGetComponentDetailsResponse = exports.validateGetClientDeviceAuthTokenRequest = exports.validateGetClientDeviceAuthTokenResponse = exports.validateInvalidCredentialError = exports.validatePublishToTopicRequest = exports.validatePublishToTopicResponse = exports.validateSubscribeToCertificateUpdatesRequest = exports.validateSubscribeToCertificateUpdatesResponse = exports.validateVerifyClientDeviceIdentityRequest = exports.validateVerifyClientDeviceIdentityResponse = exports.validateAuthorizeClientDeviceActionRequest = exports.validateAuthorizeClientDeviceActionResponse = exports.validateInvalidClientDeviceAuthTokenError = exports.validateListComponentsRequest = exports.validateListComponentsResponse = exports.validateCreateDebugPasswordRequest = exports.validateCreateDebugPasswordResponse = exports.validateGetThingShadowRequest = exports.validateGetThingShadowResponse = exports.validateSendConfigurationValidityReportRequest = exports.validateSendConfigurationValidityReportResponse = exports.validateUpdateThingShadowRequest = exports.validateUpdateThingShadowResponse = exports.validateUpdateConfigurationRequest = exports.validateUpdateConfigurationResponse = exports.validateConflictError = exports.validateFailedUpdateConditionCheckError = exports.validateValidateAuthorizationTokenRequest = exports.validateValidateAuthorizationTokenResponse = exports.validateInvalidTokenError = exports.validateRestartComponentRequest = exports.validateRestartComponentResponse = exports.validateGetLocalDeploymentStatusRequest = exports.validateGetLocalDeploymentStatusResponse = exports.validateGetSecretValueRequest = exports.validateGetSecretValueResponse = exports.validateUpdateStateRequest = exports.validateUpdateStateResponse = exports.validateCancelLocalDeploymentRequest = exports.validateCancelLocalDeploymentResponse = exports.validateListNamedShadowsForThingRequest = exports.validateListNamedShadowsForThingResponse = exports.validateSubscribeToComponentUpdatesRequest = exports.validateSubscribeToComponentUpdatesResponse = exports.validateListLocalDeploymentsRequest = exports.validateListLocalDeploymentsResponse = exports.validateStopComponentRequest = exports.validateStopComponentResponse = void 0;
exports.deserializeInvalidArtifactsDirectoryPathError = exports.deserializeInvalidArgumentsError = exports.deserializeIoTCoreMessage = exports.deserializeConfigurationUpdateEvents = exports.deserializeValidateConfigurationUpdateEvents = exports.deserializeSubscriptionResponseMessage = exports.deserializeCredentialDocument = exports.deserializePublishMessage = exports.deserializeCertificateOptions = exports.deserializeCertificateUpdateEvent = exports.deserializeClientDeviceCredential = exports.deserializeConfigurationValidityReport = exports.deserializeSecretValue = exports.deserializeComponentUpdatePolicyEvents = exports.deserializeMQTTMessage = exports.deserializeConfigurationUpdateEvent = exports.deserializeMetric = exports.deserializeValidateConfigurationUpdateEvent = exports.deserializeMQTTCredential = exports.deserializeJsonMessage = exports.deserializeBinaryMessage = exports.deserializeCertificateUpdate = exports.deserializeComponentDetails = exports.deserializePreComponentUpdateEvent = exports.deserializePostComponentUpdateEvent = exports.deserializeLocalDeployment = exports.deserializeRunWithInfo = exports.deserializeMessageContext = exports.deserializeDeploymentStatusDetails = exports.deserializeSystemResourceLimits = exports.deserializeUserProperty = exports.validateSubscribeToIoTCoreRequest = exports.validateSubscribeToIoTCoreResponse = exports.validateResumeComponentRequest = exports.validateResumeComponentResponse = exports.validatePublishToIoTCoreRequest = exports.validatePublishToIoTCoreResponse = exports.validateSubscribeToConfigurationUpdateRequest = exports.validateSubscribeToConfigurationUpdateResponse = exports.validateDeleteThingShadowRequest = exports.validateDeleteThingShadowResponse = exports.validatePutComponentMetricRequest = exports.validatePutComponentMetricResponse = exports.validateDeferComponentUpdateRequest = exports.validateDeferComponentUpdateResponse = exports.validateSubscribeToValidateConfigurationUpdatesRequest = exports.validateSubscribeToValidateConfigurationUpdatesResponse = exports.validateGetConfigurationRequest = exports.validateGetConfigurationResponse = exports.validateSubscribeToTopicRequest = void 0;
exports.deserializeSubscribeToCertificateUpdatesResponse = exports.deserializeVerifyClientDeviceIdentityRequest = exports.deserializeVerifyClientDeviceIdentityResponse = exports.deserializeAuthorizeClientDeviceActionRequest = exports.deserializeAuthorizeClientDeviceActionResponse = exports.deserializeInvalidClientDeviceAuthTokenError = exports.deserializeListComponentsRequest = exports.deserializeListComponentsResponse = exports.deserializeCreateDebugPasswordRequest = exports.deserializeCreateDebugPasswordResponse = exports.deserializeGetThingShadowRequest = exports.deserializeGetThingShadowResponse = exports.deserializeSendConfigurationValidityReportRequest = exports.deserializeSendConfigurationValidityReportResponse = exports.deserializeUpdateThingShadowRequest = exports.deserializeUpdateThingShadowResponse = exports.deserializeUpdateConfigurationRequest = exports.deserializeUpdateConfigurationResponse = exports.deserializeConflictError = exports.deserializeFailedUpdateConditionCheckError = exports.deserializeValidateAuthorizationTokenRequest = exports.deserializeValidateAuthorizationTokenResponse = exports.deserializeInvalidTokenError = exports.deserializeRestartComponentRequest = exports.deserializeRestartComponentResponse = exports.deserializeGetLocalDeploymentStatusRequest = exports.deserializeGetLocalDeploymentStatusResponse = exports.deserializeGetSecretValueRequest = exports.deserializeGetSecretValueResponse = exports.deserializeUpdateStateRequest = exports.deserializeUpdateStateResponse = exports.deserializeCancelLocalDeploymentRequest = exports.deserializeCancelLocalDeploymentResponse = exports.deserializeListNamedShadowsForThingRequest = exports.deserializeListNamedShadowsForThingResponse = exports.deserializeSubscribeToComponentUpdatesRequest = exports.deserializeSubscribeToComponentUpdatesResponse = exports.deserializeListLocalDeploymentsRequest = exports.deserializeListLocalDeploymentsResponse = exports.deserializeStopComponentRequest = exports.deserializeStopComponentResponse = exports.deserializeComponentNotFoundError = exports.deserializePauseComponentRequest = exports.deserializePauseComponentResponse = exports.deserializeUnauthorizedError = exports.deserializeResourceNotFoundError = exports.deserializeCreateLocalDeploymentRequest = exports.deserializeCreateLocalDeploymentResponse = exports.deserializeServiceError = exports.deserializeInvalidRecipeDirectoryPathError = void 0;
exports.deserializeEventstreamMessageToVerifyClientDeviceIdentityResponse = exports.deserializeEventstreamMessageToSubscribeToComponentUpdatesResponse = exports.deserializeEventstreamMessageToListComponentsResponse = exports.deserializeEventstreamMessageToDeferComponentUpdateResponse = exports.deserializeEventstreamMessageToUpdateStateResponse = exports.deserializeEventstreamMessageToIoTCoreMessage = exports.deserializeEventstreamMessageToComponentUpdatePolicyEvents = exports.deserializeEventstreamMessageToPutComponentMetricResponse = exports.deserializeEventstreamMessageToGetComponentDetailsResponse = exports.deserializeEventstreamMessageToInvalidArgumentsError = exports.deserializeEventstreamMessageToResumeComponentResponse = exports.deserializeEventstreamMessageToListLocalDeploymentsResponse = exports.deserializeEventstreamMessageToInvalidRecipeDirectoryPathError = exports.deserializeEventstreamMessageToSubscribeToIoTCoreResponse = exports.deserializeEventstreamMessageToGetSecretValueResponse = exports.deserializeEventstreamMessageToCertificateUpdateEvent = exports.deserializeEventstreamMessageToComponentNotFoundError = exports.deserializeEventstreamMessageToListNamedShadowsForThingResponse = exports.deserializeEventstreamMessageToFailedUpdateConditionCheckError = exports.deserializeEventstreamMessageToSubscriptionResponseMessage = exports.deserializeEventstreamMessageToCreateDebugPasswordResponse = exports.deserializeEventstreamMessageToConflictError = exports.deserializeSubscribeToIoTCoreRequest = exports.deserializeSubscribeToIoTCoreResponse = exports.deserializeResumeComponentRequest = exports.deserializeResumeComponentResponse = exports.deserializePublishToIoTCoreRequest = exports.deserializePublishToIoTCoreResponse = exports.deserializeSubscribeToConfigurationUpdateRequest = exports.deserializeSubscribeToConfigurationUpdateResponse = exports.deserializeDeleteThingShadowRequest = exports.deserializeDeleteThingShadowResponse = exports.deserializePutComponentMetricRequest = exports.deserializePutComponentMetricResponse = exports.deserializeDeferComponentUpdateRequest = exports.deserializeDeferComponentUpdateResponse = exports.deserializeSubscribeToValidateConfigurationUpdatesRequest = exports.deserializeSubscribeToValidateConfigurationUpdatesResponse = exports.deserializeGetConfigurationRequest = exports.deserializeGetConfigurationResponse = exports.deserializeSubscribeToTopicRequest = exports.deserializeSubscribeToTopicResponse = exports.deserializeGetComponentDetailsRequest = exports.deserializeGetComponentDetailsResponse = exports.deserializeGetClientDeviceAuthTokenRequest = exports.deserializeGetClientDeviceAuthTokenResponse = exports.deserializeInvalidCredentialError = exports.deserializePublishToTopicRequest = exports.deserializePublishToTopicResponse = exports.deserializeSubscribeToCertificateUpdatesRequest = void 0;
exports.serializeSubscribeToTopicRequestToEventstreamMessage = exports.serializeListComponentsRequestToEventstreamMessage = exports.serializeGetSecretValueRequestToEventstreamMessage = exports.serializeDeferComponentUpdateRequestToEventstreamMessage = exports.serializeGetConfigurationRequestToEventstreamMessage = exports.serializeDeleteThingShadowRequestToEventstreamMessage = exports.serializePublishToIoTCoreRequestToEventstreamMessage = exports.serializePauseComponentRequestToEventstreamMessage = exports.serializeGetClientDeviceAuthTokenRequestToEventstreamMessage = exports.serializeValidateAuthorizationTokenRequestToEventstreamMessage = exports.serializeSendConfigurationValidityReportRequestToEventstreamMessage = exports.serializeListLocalDeploymentsRequestToEventstreamMessage = exports.serializeAuthorizeClientDeviceActionRequestToEventstreamMessage = exports.serializeVerifyClientDeviceIdentityRequestToEventstreamMessage = exports.serializeStopComponentRequestToEventstreamMessage = exports.serializeResumeComponentRequestToEventstreamMessage = exports.serializeUpdateThingShadowRequestToEventstreamMessage = exports.serializeCreateDebugPasswordRequestToEventstreamMessage = exports.serializePublishToTopicRequestToEventstreamMessage = exports.serializeGetComponentDetailsRequestToEventstreamMessage = exports.deserializeEventstreamMessageToCancelLocalDeploymentResponse = exports.deserializeEventstreamMessageToValidateConfigurationUpdateEvents = exports.deserializeEventstreamMessageToStopComponentResponse = exports.deserializeEventstreamMessageToConfigurationUpdateEvents = exports.deserializeEventstreamMessageToServiceError = exports.deserializeEventstreamMessageToSubscribeToValidateConfigurationUpdatesResponse = exports.deserializeEventstreamMessageToSubscribeToConfigurationUpdateResponse = exports.deserializeEventstreamMessageToDeleteThingShadowResponse = exports.deserializeEventstreamMessageToRestartComponentResponse = exports.deserializeEventstreamMessageToUpdateConfigurationResponse = exports.deserializeEventstreamMessageToSubscribeToCertificateUpdatesResponse = exports.deserializeEventstreamMessageToUnauthorizedError = exports.deserializeEventstreamMessageToPauseComponentResponse = exports.deserializeEventstreamMessageToGetLocalDeploymentStatusResponse = exports.deserializeEventstreamMessageToInvalidCredentialError = exports.deserializeEventstreamMessageToGetConfigurationResponse = exports.deserializeEventstreamMessageToAuthorizeClientDeviceActionResponse = exports.deserializeEventstreamMessageToUpdateThingShadowResponse = exports.deserializeEventstreamMessageToValidateAuthorizationTokenResponse = exports.deserializeEventstreamMessageToPublishToTopicResponse = exports.deserializeEventstreamMessageToCreateLocalDeploymentResponse = exports.deserializeEventstreamMessageToGetClientDeviceAuthTokenResponse = exports.deserializeEventstreamMessageToInvalidTokenError = exports.deserializeEventstreamMessageToSubscribeToTopicResponse = exports.deserializeEventstreamMessageToPublishToIoTCoreResponse = exports.deserializeEventstreamMessageToInvalidClientDeviceAuthTokenError = exports.deserializeEventstreamMessageToGetThingShadowResponse = exports.deserializeEventstreamMessageToSendConfigurationValidityReportResponse = exports.deserializeEventstreamMessageToInvalidArtifactsDirectoryPathError = exports.deserializeEventstreamMessageToResourceNotFoundError = void 0;
exports.serializeUpdateStateRequestToEventstreamMessage = exports.serializeSubscribeToIoTCoreRequestToEventstreamMessage = exports.serializeGetThingShadowRequestToEventstreamMessage = exports.serializeGetLocalDeploymentStatusRequestToEventstreamMessage = exports.serializeUpdateConfigurationRequestToEventstreamMessage = exports.serializeListNamedShadowsForThingRequestToEventstreamMessage = exports.serializeRestartComponentRequestToEventstreamMessage = exports.serializeSubscribeToComponentUpdatesRequestToEventstreamMessage = exports.serializeSubscribeToConfigurationUpdateRequestToEventstreamMessage = exports.serializePutComponentMetricRequestToEventstreamMessage = exports.serializeCreateLocalDeploymentRequestToEventstreamMessage = exports.serializeSubscribeToValidateConfigurationUpdatesRequestToEventstreamMessage = exports.serializeSubscribeToCertificateUpdatesRequestToEventstreamMessage = exports.serializeCancelLocalDeploymentRequestToEventstreamMessage = void 0;
/* This file is generated */
const eventstream_rpc_utils = __importStar(require("../eventstream_rpc_utils"));
const aws_crt_1 = require("aws-crt");
const util_utf8_browser_1 = require("@aws-sdk/util-utf8-browser");
function createNormalizerMap() {
    return new Map([
        ["aws.greengrass#UserProperty", normalizeUserProperty],
        ["aws.greengrass#SystemResourceLimits", normalizeSystemResourceLimits],
        ["aws.greengrass#DeploymentStatusDetails", normalizeDeploymentStatusDetails],
        ["aws.greengrass#MessageContext", normalizeMessageContext],
        ["aws.greengrass#RunWithInfo", normalizeRunWithInfo],
        ["aws.greengrass#LocalDeployment", normalizeLocalDeployment],
        ["aws.greengrass#PostComponentUpdateEvent", normalizePostComponentUpdateEvent],
        ["aws.greengrass#PreComponentUpdateEvent", normalizePreComponentUpdateEvent],
        ["aws.greengrass#ComponentDetails", normalizeComponentDetails],
        ["aws.greengrass#CertificateUpdate", normalizeCertificateUpdate],
        ["aws.greengrass#BinaryMessage", normalizeBinaryMessage],
        ["aws.greengrass#JsonMessage", normalizeJsonMessage],
        ["aws.greengrass#MQTTCredential", normalizeMQTTCredential],
        ["aws.greengrass#ValidateConfigurationUpdateEvent", normalizeValidateConfigurationUpdateEvent],
        ["aws.greengrass#Metric", normalizeMetric],
        ["aws.greengrass#ConfigurationUpdateEvent", normalizeConfigurationUpdateEvent],
        ["aws.greengrass#MQTTMessage", normalizeMQTTMessage],
        ["aws.greengrass#ComponentUpdatePolicyEvents", normalizeComponentUpdatePolicyEvents],
        ["aws.greengrass#SecretValue", normalizeSecretValue],
        ["aws.greengrass#ConfigurationValidityReport", normalizeConfigurationValidityReport],
        ["aws.greengrass#ClientDeviceCredential", normalizeClientDeviceCredential],
        ["aws.greengrass#CertificateUpdateEvent", normalizeCertificateUpdateEvent],
        ["aws.greengrass#CertificateOptions", normalizeCertificateOptions],
        ["aws.greengrass#PublishMessage", normalizePublishMessage],
        ["aws.greengrass#CredentialDocument", normalizeCredentialDocument],
        ["aws.greengrass#SubscriptionResponseMessage", normalizeSubscriptionResponseMessage],
        ["aws.greengrass#ValidateConfigurationUpdateEvents", normalizeValidateConfigurationUpdateEvents],
        ["aws.greengrass#ConfigurationUpdateEvents", normalizeConfigurationUpdateEvents],
        ["aws.greengrass#IoTCoreMessage", normalizeIoTCoreMessage],
        ["aws.greengrass#InvalidArgumentsError", normalizeInvalidArgumentsError],
        ["aws.greengrass#InvalidArtifactsDirectoryPathError", normalizeInvalidArtifactsDirectoryPathError],
        ["aws.greengrass#InvalidRecipeDirectoryPathError", normalizeInvalidRecipeDirectoryPathError],
        ["aws.greengrass#ServiceError", normalizeServiceError],
        ["aws.greengrass#CreateLocalDeploymentResponse", normalizeCreateLocalDeploymentResponse],
        ["aws.greengrass#CreateLocalDeploymentRequest", normalizeCreateLocalDeploymentRequest],
        ["aws.greengrass#ResourceNotFoundError", normalizeResourceNotFoundError],
        ["aws.greengrass#UnauthorizedError", normalizeUnauthorizedError],
        ["aws.greengrass#PauseComponentResponse", normalizePauseComponentResponse],
        ["aws.greengrass#PauseComponentRequest", normalizePauseComponentRequest],
        ["aws.greengrass#ComponentNotFoundError", normalizeComponentNotFoundError],
        ["aws.greengrass#StopComponentResponse", normalizeStopComponentResponse],
        ["aws.greengrass#StopComponentRequest", normalizeStopComponentRequest],
        ["aws.greengrass#ListLocalDeploymentsResponse", normalizeListLocalDeploymentsResponse],
        ["aws.greengrass#ListLocalDeploymentsRequest", normalizeListLocalDeploymentsRequest],
        ["aws.greengrass#SubscribeToComponentUpdatesResponse", normalizeSubscribeToComponentUpdatesResponse],
        ["aws.greengrass#SubscribeToComponentUpdatesRequest", normalizeSubscribeToComponentUpdatesRequest],
        ["aws.greengrass#ListNamedShadowsForThingResponse", normalizeListNamedShadowsForThingResponse],
        ["aws.greengrass#ListNamedShadowsForThingRequest", normalizeListNamedShadowsForThingRequest],
        ["aws.greengrass#CancelLocalDeploymentResponse", normalizeCancelLocalDeploymentResponse],
        ["aws.greengrass#CancelLocalDeploymentRequest", normalizeCancelLocalDeploymentRequest],
        ["aws.greengrass#UpdateStateResponse", normalizeUpdateStateResponse],
        ["aws.greengrass#UpdateStateRequest", normalizeUpdateStateRequest],
        ["aws.greengrass#GetSecretValueResponse", normalizeGetSecretValueResponse],
        ["aws.greengrass#GetSecretValueRequest", normalizeGetSecretValueRequest],
        ["aws.greengrass#GetLocalDeploymentStatusResponse", normalizeGetLocalDeploymentStatusResponse],
        ["aws.greengrass#GetLocalDeploymentStatusRequest", normalizeGetLocalDeploymentStatusRequest],
        ["aws.greengrass#RestartComponentResponse", normalizeRestartComponentResponse],
        ["aws.greengrass#RestartComponentRequest", normalizeRestartComponentRequest],
        ["aws.greengrass#InvalidTokenError", normalizeInvalidTokenError],
        ["aws.greengrass#ValidateAuthorizationTokenResponse", normalizeValidateAuthorizationTokenResponse],
        ["aws.greengrass#ValidateAuthorizationTokenRequest", normalizeValidateAuthorizationTokenRequest],
        ["aws.greengrass#FailedUpdateConditionCheckError", normalizeFailedUpdateConditionCheckError],
        ["aws.greengrass#ConflictError", normalizeConflictError],
        ["aws.greengrass#UpdateConfigurationResponse", normalizeUpdateConfigurationResponse],
        ["aws.greengrass#UpdateConfigurationRequest", normalizeUpdateConfigurationRequest],
        ["aws.greengrass#UpdateThingShadowResponse", normalizeUpdateThingShadowResponse],
        ["aws.greengrass#UpdateThingShadowRequest", normalizeUpdateThingShadowRequest],
        ["aws.greengrass#SendConfigurationValidityReportResponse", normalizeSendConfigurationValidityReportResponse],
        ["aws.greengrass#SendConfigurationValidityReportRequest", normalizeSendConfigurationValidityReportRequest],
        ["aws.greengrass#GetThingShadowResponse", normalizeGetThingShadowResponse],
        ["aws.greengrass#GetThingShadowRequest", normalizeGetThingShadowRequest],
        ["aws.greengrass#CreateDebugPasswordResponse", normalizeCreateDebugPasswordResponse],
        ["aws.greengrass#CreateDebugPasswordRequest", normalizeCreateDebugPasswordRequest],
        ["aws.greengrass#ListComponentsResponse", normalizeListComponentsResponse],
        ["aws.greengrass#ListComponentsRequest", normalizeListComponentsRequest],
        ["aws.greengrass#InvalidClientDeviceAuthTokenError", normalizeInvalidClientDeviceAuthTokenError],
        ["aws.greengrass#AuthorizeClientDeviceActionResponse", normalizeAuthorizeClientDeviceActionResponse],
        ["aws.greengrass#AuthorizeClientDeviceActionRequest", normalizeAuthorizeClientDeviceActionRequest],
        ["aws.greengrass#VerifyClientDeviceIdentityResponse", normalizeVerifyClientDeviceIdentityResponse],
        ["aws.greengrass#VerifyClientDeviceIdentityRequest", normalizeVerifyClientDeviceIdentityRequest],
        ["aws.greengrass#SubscribeToCertificateUpdatesResponse", normalizeSubscribeToCertificateUpdatesResponse],
        ["aws.greengrass#SubscribeToCertificateUpdatesRequest", normalizeSubscribeToCertificateUpdatesRequest],
        ["aws.greengrass#PublishToTopicResponse", normalizePublishToTopicResponse],
        ["aws.greengrass#PublishToTopicRequest", normalizePublishToTopicRequest],
        ["aws.greengrass#InvalidCredentialError", normalizeInvalidCredentialError],
        ["aws.greengrass#GetClientDeviceAuthTokenResponse", normalizeGetClientDeviceAuthTokenResponse],
        ["aws.greengrass#GetClientDeviceAuthTokenRequest", normalizeGetClientDeviceAuthTokenRequest],
        ["aws.greengrass#GetComponentDetailsResponse", normalizeGetComponentDetailsResponse],
        ["aws.greengrass#GetComponentDetailsRequest", normalizeGetComponentDetailsRequest],
        ["aws.greengrass#SubscribeToTopicResponse", normalizeSubscribeToTopicResponse],
        ["aws.greengrass#SubscribeToTopicRequest", normalizeSubscribeToTopicRequest],
        ["aws.greengrass#GetConfigurationResponse", normalizeGetConfigurationResponse],
        ["aws.greengrass#GetConfigurationRequest", normalizeGetConfigurationRequest],
        ["aws.greengrass#SubscribeToValidateConfigurationUpdatesResponse", normalizeSubscribeToValidateConfigurationUpdatesResponse],
        ["aws.greengrass#SubscribeToValidateConfigurationUpdatesRequest", normalizeSubscribeToValidateConfigurationUpdatesRequest],
        ["aws.greengrass#DeferComponentUpdateResponse", normalizeDeferComponentUpdateResponse],
        ["aws.greengrass#DeferComponentUpdateRequest", normalizeDeferComponentUpdateRequest],
        ["aws.greengrass#PutComponentMetricResponse", normalizePutComponentMetricResponse],
        ["aws.greengrass#PutComponentMetricRequest", normalizePutComponentMetricRequest],
        ["aws.greengrass#DeleteThingShadowResponse", normalizeDeleteThingShadowResponse],
        ["aws.greengrass#DeleteThingShadowRequest", normalizeDeleteThingShadowRequest],
        ["aws.greengrass#SubscribeToConfigurationUpdateResponse", normalizeSubscribeToConfigurationUpdateResponse],
        ["aws.greengrass#SubscribeToConfigurationUpdateRequest", normalizeSubscribeToConfigurationUpdateRequest],
        ["aws.greengrass#PublishToIoTCoreResponse", normalizePublishToIoTCoreResponse],
        ["aws.greengrass#PublishToIoTCoreRequest", normalizePublishToIoTCoreRequest],
        ["aws.greengrass#ResumeComponentResponse", normalizeResumeComponentResponse],
        ["aws.greengrass#ResumeComponentRequest", normalizeResumeComponentRequest],
        ["aws.greengrass#SubscribeToIoTCoreResponse", normalizeSubscribeToIoTCoreResponse],
        ["aws.greengrass#SubscribeToIoTCoreRequest", normalizeSubscribeToIoTCoreRequest]
    ]);
}
function createValidatorMap() {
    return new Map([
        ["aws.greengrass#UserProperty", validateUserProperty],
        ["aws.greengrass#SystemResourceLimits", validateSystemResourceLimits],
        ["aws.greengrass#DeploymentStatusDetails", validateDeploymentStatusDetails],
        ["aws.greengrass#MessageContext", validateMessageContext],
        ["aws.greengrass#RunWithInfo", validateRunWithInfo],
        ["aws.greengrass#LocalDeployment", validateLocalDeployment],
        ["aws.greengrass#PostComponentUpdateEvent", validatePostComponentUpdateEvent],
        ["aws.greengrass#PreComponentUpdateEvent", validatePreComponentUpdateEvent],
        ["aws.greengrass#ComponentDetails", validateComponentDetails],
        ["aws.greengrass#CertificateUpdate", validateCertificateUpdate],
        ["aws.greengrass#BinaryMessage", validateBinaryMessage],
        ["aws.greengrass#JsonMessage", validateJsonMessage],
        ["aws.greengrass#MQTTCredential", validateMQTTCredential],
        ["aws.greengrass#ValidateConfigurationUpdateEvent", validateValidateConfigurationUpdateEvent],
        ["aws.greengrass#Metric", validateMetric],
        ["aws.greengrass#ConfigurationUpdateEvent", validateConfigurationUpdateEvent],
        ["aws.greengrass#MQTTMessage", validateMQTTMessage],
        ["aws.greengrass#ComponentUpdatePolicyEvents", validateComponentUpdatePolicyEvents],
        ["aws.greengrass#SecretValue", validateSecretValue],
        ["aws.greengrass#ConfigurationValidityReport", validateConfigurationValidityReport],
        ["aws.greengrass#ClientDeviceCredential", validateClientDeviceCredential],
        ["aws.greengrass#CertificateUpdateEvent", validateCertificateUpdateEvent],
        ["aws.greengrass#CertificateOptions", validateCertificateOptions],
        ["aws.greengrass#PublishMessage", validatePublishMessage],
        ["aws.greengrass#CredentialDocument", validateCredentialDocument],
        ["aws.greengrass#SubscriptionResponseMessage", validateSubscriptionResponseMessage],
        ["aws.greengrass#ValidateConfigurationUpdateEvents", validateValidateConfigurationUpdateEvents],
        ["aws.greengrass#ConfigurationUpdateEvents", validateConfigurationUpdateEvents],
        ["aws.greengrass#IoTCoreMessage", validateIoTCoreMessage],
        ["aws.greengrass#InvalidArgumentsError", validateInvalidArgumentsError],
        ["aws.greengrass#InvalidArtifactsDirectoryPathError", validateInvalidArtifactsDirectoryPathError],
        ["aws.greengrass#InvalidRecipeDirectoryPathError", validateInvalidRecipeDirectoryPathError],
        ["aws.greengrass#ServiceError", validateServiceError],
        ["aws.greengrass#CreateLocalDeploymentResponse", validateCreateLocalDeploymentResponse],
        ["aws.greengrass#CreateLocalDeploymentRequest", validateCreateLocalDeploymentRequest],
        ["aws.greengrass#ResourceNotFoundError", validateResourceNotFoundError],
        ["aws.greengrass#UnauthorizedError", validateUnauthorizedError],
        ["aws.greengrass#PauseComponentResponse", validatePauseComponentResponse],
        ["aws.greengrass#PauseComponentRequest", validatePauseComponentRequest],
        ["aws.greengrass#ComponentNotFoundError", validateComponentNotFoundError],
        ["aws.greengrass#StopComponentResponse", validateStopComponentResponse],
        ["aws.greengrass#StopComponentRequest", validateStopComponentRequest],
        ["aws.greengrass#ListLocalDeploymentsResponse", validateListLocalDeploymentsResponse],
        ["aws.greengrass#ListLocalDeploymentsRequest", validateListLocalDeploymentsRequest],
        ["aws.greengrass#SubscribeToComponentUpdatesResponse", validateSubscribeToComponentUpdatesResponse],
        ["aws.greengrass#SubscribeToComponentUpdatesRequest", validateSubscribeToComponentUpdatesRequest],
        ["aws.greengrass#ListNamedShadowsForThingResponse", validateListNamedShadowsForThingResponse],
        ["aws.greengrass#ListNamedShadowsForThingRequest", validateListNamedShadowsForThingRequest],
        ["aws.greengrass#CancelLocalDeploymentResponse", validateCancelLocalDeploymentResponse],
        ["aws.greengrass#CancelLocalDeploymentRequest", validateCancelLocalDeploymentRequest],
        ["aws.greengrass#UpdateStateResponse", validateUpdateStateResponse],
        ["aws.greengrass#UpdateStateRequest", validateUpdateStateRequest],
        ["aws.greengrass#GetSecretValueResponse", validateGetSecretValueResponse],
        ["aws.greengrass#GetSecretValueRequest", validateGetSecretValueRequest],
        ["aws.greengrass#GetLocalDeploymentStatusResponse", validateGetLocalDeploymentStatusResponse],
        ["aws.greengrass#GetLocalDeploymentStatusRequest", validateGetLocalDeploymentStatusRequest],
        ["aws.greengrass#RestartComponentResponse", validateRestartComponentResponse],
        ["aws.greengrass#RestartComponentRequest", validateRestartComponentRequest],
        ["aws.greengrass#InvalidTokenError", validateInvalidTokenError],
        ["aws.greengrass#ValidateAuthorizationTokenResponse", validateValidateAuthorizationTokenResponse],
        ["aws.greengrass#ValidateAuthorizationTokenRequest", validateValidateAuthorizationTokenRequest],
        ["aws.greengrass#FailedUpdateConditionCheckError", validateFailedUpdateConditionCheckError],
        ["aws.greengrass#ConflictError", validateConflictError],
        ["aws.greengrass#UpdateConfigurationResponse", validateUpdateConfigurationResponse],
        ["aws.greengrass#UpdateConfigurationRequest", validateUpdateConfigurationRequest],
        ["aws.greengrass#UpdateThingShadowResponse", validateUpdateThingShadowResponse],
        ["aws.greengrass#UpdateThingShadowRequest", validateUpdateThingShadowRequest],
        ["aws.greengrass#SendConfigurationValidityReportResponse", validateSendConfigurationValidityReportResponse],
        ["aws.greengrass#SendConfigurationValidityReportRequest", validateSendConfigurationValidityReportRequest],
        ["aws.greengrass#GetThingShadowResponse", validateGetThingShadowResponse],
        ["aws.greengrass#GetThingShadowRequest", validateGetThingShadowRequest],
        ["aws.greengrass#CreateDebugPasswordResponse", validateCreateDebugPasswordResponse],
        ["aws.greengrass#CreateDebugPasswordRequest", validateCreateDebugPasswordRequest],
        ["aws.greengrass#ListComponentsResponse", validateListComponentsResponse],
        ["aws.greengrass#ListComponentsRequest", validateListComponentsRequest],
        ["aws.greengrass#InvalidClientDeviceAuthTokenError", validateInvalidClientDeviceAuthTokenError],
        ["aws.greengrass#AuthorizeClientDeviceActionResponse", validateAuthorizeClientDeviceActionResponse],
        ["aws.greengrass#AuthorizeClientDeviceActionRequest", validateAuthorizeClientDeviceActionRequest],
        ["aws.greengrass#VerifyClientDeviceIdentityResponse", validateVerifyClientDeviceIdentityResponse],
        ["aws.greengrass#VerifyClientDeviceIdentityRequest", validateVerifyClientDeviceIdentityRequest],
        ["aws.greengrass#SubscribeToCertificateUpdatesResponse", validateSubscribeToCertificateUpdatesResponse],
        ["aws.greengrass#SubscribeToCertificateUpdatesRequest", validateSubscribeToCertificateUpdatesRequest],
        ["aws.greengrass#PublishToTopicResponse", validatePublishToTopicResponse],
        ["aws.greengrass#PublishToTopicRequest", validatePublishToTopicRequest],
        ["aws.greengrass#InvalidCredentialError", validateInvalidCredentialError],
        ["aws.greengrass#GetClientDeviceAuthTokenResponse", validateGetClientDeviceAuthTokenResponse],
        ["aws.greengrass#GetClientDeviceAuthTokenRequest", validateGetClientDeviceAuthTokenRequest],
        ["aws.greengrass#GetComponentDetailsResponse", validateGetComponentDetailsResponse],
        ["aws.greengrass#GetComponentDetailsRequest", validateGetComponentDetailsRequest],
        ["aws.greengrass#SubscribeToTopicResponse", validateSubscribeToTopicResponse],
        ["aws.greengrass#SubscribeToTopicRequest", validateSubscribeToTopicRequest],
        ["aws.greengrass#GetConfigurationResponse", validateGetConfigurationResponse],
        ["aws.greengrass#GetConfigurationRequest", validateGetConfigurationRequest],
        ["aws.greengrass#SubscribeToValidateConfigurationUpdatesResponse", validateSubscribeToValidateConfigurationUpdatesResponse],
        ["aws.greengrass#SubscribeToValidateConfigurationUpdatesRequest", validateSubscribeToValidateConfigurationUpdatesRequest],
        ["aws.greengrass#DeferComponentUpdateResponse", validateDeferComponentUpdateResponse],
        ["aws.greengrass#DeferComponentUpdateRequest", validateDeferComponentUpdateRequest],
        ["aws.greengrass#PutComponentMetricResponse", validatePutComponentMetricResponse],
        ["aws.greengrass#PutComponentMetricRequest", validatePutComponentMetricRequest],
        ["aws.greengrass#DeleteThingShadowResponse", validateDeleteThingShadowResponse],
        ["aws.greengrass#DeleteThingShadowRequest", validateDeleteThingShadowRequest],
        ["aws.greengrass#SubscribeToConfigurationUpdateResponse", validateSubscribeToConfigurationUpdateResponse],
        ["aws.greengrass#SubscribeToConfigurationUpdateRequest", validateSubscribeToConfigurationUpdateRequest],
        ["aws.greengrass#PublishToIoTCoreResponse", validatePublishToIoTCoreResponse],
        ["aws.greengrass#PublishToIoTCoreRequest", validatePublishToIoTCoreRequest],
        ["aws.greengrass#ResumeComponentResponse", validateResumeComponentResponse],
        ["aws.greengrass#ResumeComponentRequest", validateResumeComponentRequest],
        ["aws.greengrass#SubscribeToIoTCoreResponse", validateSubscribeToIoTCoreResponse],
        ["aws.greengrass#SubscribeToIoTCoreRequest", validateSubscribeToIoTCoreRequest]
    ]);
}
function createDeserializerMap() {
    return new Map([
        ["aws.greengrass#ConflictError", deserializeEventstreamMessageToConflictError],
        ["aws.greengrass#CreateDebugPasswordResponse", deserializeEventstreamMessageToCreateDebugPasswordResponse],
        ["aws.greengrass#SubscriptionResponseMessage", deserializeEventstreamMessageToSubscriptionResponseMessage],
        ["aws.greengrass#FailedUpdateConditionCheckError", deserializeEventstreamMessageToFailedUpdateConditionCheckError],
        ["aws.greengrass#ListNamedShadowsForThingResponse", deserializeEventstreamMessageToListNamedShadowsForThingResponse],
        ["aws.greengrass#ComponentNotFoundError", deserializeEventstreamMessageToComponentNotFoundError],
        ["aws.greengrass#CertificateUpdateEvent", deserializeEventstreamMessageToCertificateUpdateEvent],
        ["aws.greengrass#GetSecretValueResponse", deserializeEventstreamMessageToGetSecretValueResponse],
        ["aws.greengrass#SubscribeToIoTCoreResponse", deserializeEventstreamMessageToSubscribeToIoTCoreResponse],
        ["aws.greengrass#InvalidRecipeDirectoryPathError", deserializeEventstreamMessageToInvalidRecipeDirectoryPathError],
        ["aws.greengrass#ListLocalDeploymentsResponse", deserializeEventstreamMessageToListLocalDeploymentsResponse],
        ["aws.greengrass#ResumeComponentResponse", deserializeEventstreamMessageToResumeComponentResponse],
        ["aws.greengrass#InvalidArgumentsError", deserializeEventstreamMessageToInvalidArgumentsError],
        ["aws.greengrass#GetComponentDetailsResponse", deserializeEventstreamMessageToGetComponentDetailsResponse],
        ["aws.greengrass#PutComponentMetricResponse", deserializeEventstreamMessageToPutComponentMetricResponse],
        ["aws.greengrass#ComponentUpdatePolicyEvents", deserializeEventstreamMessageToComponentUpdatePolicyEvents],
        ["aws.greengrass#IoTCoreMessage", deserializeEventstreamMessageToIoTCoreMessage],
        ["aws.greengrass#UpdateStateResponse", deserializeEventstreamMessageToUpdateStateResponse],
        ["aws.greengrass#DeferComponentUpdateResponse", deserializeEventstreamMessageToDeferComponentUpdateResponse],
        ["aws.greengrass#ListComponentsResponse", deserializeEventstreamMessageToListComponentsResponse],
        ["aws.greengrass#SubscribeToComponentUpdatesResponse", deserializeEventstreamMessageToSubscribeToComponentUpdatesResponse],
        ["aws.greengrass#VerifyClientDeviceIdentityResponse", deserializeEventstreamMessageToVerifyClientDeviceIdentityResponse],
        ["aws.greengrass#ResourceNotFoundError", deserializeEventstreamMessageToResourceNotFoundError],
        ["aws.greengrass#InvalidArtifactsDirectoryPathError", deserializeEventstreamMessageToInvalidArtifactsDirectoryPathError],
        ["aws.greengrass#SendConfigurationValidityReportResponse", deserializeEventstreamMessageToSendConfigurationValidityReportResponse],
        ["aws.greengrass#GetThingShadowResponse", deserializeEventstreamMessageToGetThingShadowResponse],
        ["aws.greengrass#InvalidClientDeviceAuthTokenError", deserializeEventstreamMessageToInvalidClientDeviceAuthTokenError],
        ["aws.greengrass#PublishToIoTCoreResponse", deserializeEventstreamMessageToPublishToIoTCoreResponse],
        ["aws.greengrass#SubscribeToTopicResponse", deserializeEventstreamMessageToSubscribeToTopicResponse],
        ["aws.greengrass#InvalidTokenError", deserializeEventstreamMessageToInvalidTokenError],
        ["aws.greengrass#GetClientDeviceAuthTokenResponse", deserializeEventstreamMessageToGetClientDeviceAuthTokenResponse],
        ["aws.greengrass#CreateLocalDeploymentResponse", deserializeEventstreamMessageToCreateLocalDeploymentResponse],
        ["aws.greengrass#PublishToTopicResponse", deserializeEventstreamMessageToPublishToTopicResponse],
        ["aws.greengrass#ValidateAuthorizationTokenResponse", deserializeEventstreamMessageToValidateAuthorizationTokenResponse],
        ["aws.greengrass#UpdateThingShadowResponse", deserializeEventstreamMessageToUpdateThingShadowResponse],
        ["aws.greengrass#AuthorizeClientDeviceActionResponse", deserializeEventstreamMessageToAuthorizeClientDeviceActionResponse],
        ["aws.greengrass#GetConfigurationResponse", deserializeEventstreamMessageToGetConfigurationResponse],
        ["aws.greengrass#InvalidCredentialError", deserializeEventstreamMessageToInvalidCredentialError],
        ["aws.greengrass#GetLocalDeploymentStatusResponse", deserializeEventstreamMessageToGetLocalDeploymentStatusResponse],
        ["aws.greengrass#PauseComponentResponse", deserializeEventstreamMessageToPauseComponentResponse],
        ["aws.greengrass#UnauthorizedError", deserializeEventstreamMessageToUnauthorizedError],
        ["aws.greengrass#SubscribeToCertificateUpdatesResponse", deserializeEventstreamMessageToSubscribeToCertificateUpdatesResponse],
        ["aws.greengrass#UpdateConfigurationResponse", deserializeEventstreamMessageToUpdateConfigurationResponse],
        ["aws.greengrass#RestartComponentResponse", deserializeEventstreamMessageToRestartComponentResponse],
        ["aws.greengrass#DeleteThingShadowResponse", deserializeEventstreamMessageToDeleteThingShadowResponse],
        ["aws.greengrass#SubscribeToConfigurationUpdateResponse", deserializeEventstreamMessageToSubscribeToConfigurationUpdateResponse],
        ["aws.greengrass#SubscribeToValidateConfigurationUpdatesResponse", deserializeEventstreamMessageToSubscribeToValidateConfigurationUpdatesResponse],
        ["aws.greengrass#ServiceError", deserializeEventstreamMessageToServiceError],
        ["aws.greengrass#ConfigurationUpdateEvents", deserializeEventstreamMessageToConfigurationUpdateEvents],
        ["aws.greengrass#StopComponentResponse", deserializeEventstreamMessageToStopComponentResponse],
        ["aws.greengrass#ValidateConfigurationUpdateEvents", deserializeEventstreamMessageToValidateConfigurationUpdateEvents],
        ["aws.greengrass#CancelLocalDeploymentResponse", deserializeEventstreamMessageToCancelLocalDeploymentResponse]
    ]);
}
function createSerializerMap() {
    return new Map([
        ["aws.greengrass#GetComponentDetailsRequest", serializeGetComponentDetailsRequestToEventstreamMessage],
        ["aws.greengrass#PublishToTopicRequest", serializePublishToTopicRequestToEventstreamMessage],
        ["aws.greengrass#CreateDebugPasswordRequest", serializeCreateDebugPasswordRequestToEventstreamMessage],
        ["aws.greengrass#UpdateThingShadowRequest", serializeUpdateThingShadowRequestToEventstreamMessage],
        ["aws.greengrass#ResumeComponentRequest", serializeResumeComponentRequestToEventstreamMessage],
        ["aws.greengrass#StopComponentRequest", serializeStopComponentRequestToEventstreamMessage],
        ["aws.greengrass#VerifyClientDeviceIdentityRequest", serializeVerifyClientDeviceIdentityRequestToEventstreamMessage],
        ["aws.greengrass#AuthorizeClientDeviceActionRequest", serializeAuthorizeClientDeviceActionRequestToEventstreamMessage],
        ["aws.greengrass#ListLocalDeploymentsRequest", serializeListLocalDeploymentsRequestToEventstreamMessage],
        ["aws.greengrass#SendConfigurationValidityReportRequest", serializeSendConfigurationValidityReportRequestToEventstreamMessage],
        ["aws.greengrass#ValidateAuthorizationTokenRequest", serializeValidateAuthorizationTokenRequestToEventstreamMessage],
        ["aws.greengrass#GetClientDeviceAuthTokenRequest", serializeGetClientDeviceAuthTokenRequestToEventstreamMessage],
        ["aws.greengrass#PauseComponentRequest", serializePauseComponentRequestToEventstreamMessage],
        ["aws.greengrass#PublishToIoTCoreRequest", serializePublishToIoTCoreRequestToEventstreamMessage],
        ["aws.greengrass#DeleteThingShadowRequest", serializeDeleteThingShadowRequestToEventstreamMessage],
        ["aws.greengrass#GetConfigurationRequest", serializeGetConfigurationRequestToEventstreamMessage],
        ["aws.greengrass#DeferComponentUpdateRequest", serializeDeferComponentUpdateRequestToEventstreamMessage],
        ["aws.greengrass#GetSecretValueRequest", serializeGetSecretValueRequestToEventstreamMessage],
        ["aws.greengrass#ListComponentsRequest", serializeListComponentsRequestToEventstreamMessage],
        ["aws.greengrass#SubscribeToTopicRequest", serializeSubscribeToTopicRequestToEventstreamMessage],
        ["aws.greengrass#CancelLocalDeploymentRequest", serializeCancelLocalDeploymentRequestToEventstreamMessage],
        ["aws.greengrass#SubscribeToCertificateUpdatesRequest", serializeSubscribeToCertificateUpdatesRequestToEventstreamMessage],
        ["aws.greengrass#SubscribeToValidateConfigurationUpdatesRequest", serializeSubscribeToValidateConfigurationUpdatesRequestToEventstreamMessage],
        ["aws.greengrass#CreateLocalDeploymentRequest", serializeCreateLocalDeploymentRequestToEventstreamMessage],
        ["aws.greengrass#PutComponentMetricRequest", serializePutComponentMetricRequestToEventstreamMessage],
        ["aws.greengrass#SubscribeToConfigurationUpdateRequest", serializeSubscribeToConfigurationUpdateRequestToEventstreamMessage],
        ["aws.greengrass#SubscribeToComponentUpdatesRequest", serializeSubscribeToComponentUpdatesRequestToEventstreamMessage],
        ["aws.greengrass#RestartComponentRequest", serializeRestartComponentRequestToEventstreamMessage],
        ["aws.greengrass#ListNamedShadowsForThingRequest", serializeListNamedShadowsForThingRequestToEventstreamMessage],
        ["aws.greengrass#UpdateConfigurationRequest", serializeUpdateConfigurationRequestToEventstreamMessage],
        ["aws.greengrass#GetLocalDeploymentStatusRequest", serializeGetLocalDeploymentStatusRequestToEventstreamMessage],
        ["aws.greengrass#GetThingShadowRequest", serializeGetThingShadowRequestToEventstreamMessage],
        ["aws.greengrass#SubscribeToIoTCoreRequest", serializeSubscribeToIoTCoreRequestToEventstreamMessage],
        ["aws.greengrass#UpdateStateRequest", serializeUpdateStateRequestToEventstreamMessage]
    ]);
}
function createOperationMap() {
    return new Map([
        ["aws.greengrass#AuthorizeClientDeviceAction", {
                requestShape: "aws.greengrass#AuthorizeClientDeviceActionRequest",
                responseShape: "aws.greengrass#AuthorizeClientDeviceActionResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#InvalidClientDeviceAuthTokenError"
                ])
            }],
        ["aws.greengrass#CancelLocalDeployment", {
                requestShape: "aws.greengrass#CancelLocalDeploymentRequest",
                responseShape: "aws.greengrass#CancelLocalDeploymentResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#CreateDebugPassword", {
                requestShape: "aws.greengrass#CreateDebugPasswordRequest",
                responseShape: "aws.greengrass#CreateDebugPasswordResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError"
                ])
            }],
        ["aws.greengrass#CreateLocalDeployment", {
                requestShape: "aws.greengrass#CreateLocalDeploymentRequest",
                responseShape: "aws.greengrass#CreateLocalDeploymentResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#InvalidRecipeDirectoryPathError",
                    "aws.greengrass#InvalidArtifactsDirectoryPathError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#DeferComponentUpdate", {
                requestShape: "aws.greengrass#DeferComponentUpdateRequest",
                responseShape: "aws.greengrass#DeferComponentUpdateResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#DeleteThingShadow", {
                requestShape: "aws.greengrass#DeleteThingShadowRequest",
                responseShape: "aws.greengrass#DeleteThingShadowResponse",
                errorShapes: new Set([
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#ResourceNotFoundError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#GetClientDeviceAuthToken", {
                requestShape: "aws.greengrass#GetClientDeviceAuthTokenRequest",
                responseShape: "aws.greengrass#GetClientDeviceAuthTokenResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#InvalidCredentialError"
                ])
            }],
        ["aws.greengrass#GetComponentDetails", {
                requestShape: "aws.greengrass#GetComponentDetailsRequest",
                responseShape: "aws.greengrass#GetComponentDetailsResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#GetConfiguration", {
                requestShape: "aws.greengrass#GetConfigurationRequest",
                responseShape: "aws.greengrass#GetConfigurationResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError"
                ])
            }],
        ["aws.greengrass#GetLocalDeploymentStatus", {
                requestShape: "aws.greengrass#GetLocalDeploymentStatusRequest",
                responseShape: "aws.greengrass#GetLocalDeploymentStatusResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError"
                ])
            }],
        ["aws.greengrass#GetSecretValue", {
                requestShape: "aws.greengrass#GetSecretValueRequest",
                responseShape: "aws.greengrass#GetSecretValueResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ResourceNotFoundError",
                    "aws.greengrass#ServiceError"
                ])
            }],
        ["aws.greengrass#GetThingShadow", {
                requestShape: "aws.greengrass#GetThingShadowRequest",
                responseShape: "aws.greengrass#GetThingShadowResponse",
                errorShapes: new Set([
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#ResourceNotFoundError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#ListComponents", {
                requestShape: "aws.greengrass#ListComponentsRequest",
                responseShape: "aws.greengrass#ListComponentsResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError"
                ])
            }],
        ["aws.greengrass#ListLocalDeployments", {
                requestShape: "aws.greengrass#ListLocalDeploymentsRequest",
                responseShape: "aws.greengrass#ListLocalDeploymentsResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError"
                ])
            }],
        ["aws.greengrass#ListNamedShadowsForThing", {
                requestShape: "aws.greengrass#ListNamedShadowsForThingRequest",
                responseShape: "aws.greengrass#ListNamedShadowsForThingResponse",
                errorShapes: new Set([
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#ResourceNotFoundError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#PauseComponent", {
                requestShape: "aws.greengrass#PauseComponentRequest",
                responseShape: "aws.greengrass#PauseComponentResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError"
                ])
            }],
        ["aws.greengrass#PublishToIoTCore", {
                requestShape: "aws.greengrass#PublishToIoTCoreRequest",
                responseShape: "aws.greengrass#PublishToIoTCoreResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#PublishToTopic", {
                requestShape: "aws.greengrass#PublishToTopicRequest",
                responseShape: "aws.greengrass#PublishToTopicResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#PutComponentMetric", {
                requestShape: "aws.greengrass#PutComponentMetricRequest",
                responseShape: "aws.greengrass#PutComponentMetricResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#RestartComponent", {
                requestShape: "aws.greengrass#RestartComponentRequest",
                responseShape: "aws.greengrass#RestartComponentResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ComponentNotFoundError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#ResumeComponent", {
                requestShape: "aws.greengrass#ResumeComponentRequest",
                responseShape: "aws.greengrass#ResumeComponentResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError"
                ])
            }],
        ["aws.greengrass#SendConfigurationValidityReport", {
                requestShape: "aws.greengrass#SendConfigurationValidityReportRequest",
                responseShape: "aws.greengrass#SendConfigurationValidityReportResponse",
                errorShapes: new Set([
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#ServiceError"
                ])
            }],
        ["aws.greengrass#StopComponent", {
                requestShape: "aws.greengrass#StopComponentRequest",
                responseShape: "aws.greengrass#StopComponentResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ComponentNotFoundError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#SubscribeToCertificateUpdates", {
                requestShape: "aws.greengrass#SubscribeToCertificateUpdatesRequest",
                responseShape: "aws.greengrass#SubscribeToCertificateUpdatesResponse",
                inboundMessageShape: "aws.greengrass#CertificateUpdateEvent",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#SubscribeToComponentUpdates", {
                requestShape: "aws.greengrass#SubscribeToComponentUpdatesRequest",
                responseShape: "aws.greengrass#SubscribeToComponentUpdatesResponse",
                inboundMessageShape: "aws.greengrass#ComponentUpdatePolicyEvents",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError"
                ])
            }],
        ["aws.greengrass#SubscribeToConfigurationUpdate", {
                requestShape: "aws.greengrass#SubscribeToConfigurationUpdateRequest",
                responseShape: "aws.greengrass#SubscribeToConfigurationUpdateResponse",
                inboundMessageShape: "aws.greengrass#ConfigurationUpdateEvents",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError"
                ])
            }],
        ["aws.greengrass#SubscribeToIoTCore", {
                requestShape: "aws.greengrass#SubscribeToIoTCoreRequest",
                responseShape: "aws.greengrass#SubscribeToIoTCoreResponse",
                inboundMessageShape: "aws.greengrass#IoTCoreMessage",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#SubscribeToTopic", {
                requestShape: "aws.greengrass#SubscribeToTopicRequest",
                responseShape: "aws.greengrass#SubscribeToTopicResponse",
                inboundMessageShape: "aws.greengrass#SubscriptionResponseMessage",
                errorShapes: new Set([
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#SubscribeToValidateConfigurationUpdates", {
                requestShape: "aws.greengrass#SubscribeToValidateConfigurationUpdatesRequest",
                responseShape: "aws.greengrass#SubscribeToValidateConfigurationUpdatesResponse",
                inboundMessageShape: "aws.greengrass#ValidateConfigurationUpdateEvents",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError"
                ])
            }],
        ["aws.greengrass#UpdateConfiguration", {
                requestShape: "aws.greengrass#UpdateConfigurationRequest",
                responseShape: "aws.greengrass#UpdateConfigurationResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ConflictError",
                    "aws.greengrass#FailedUpdateConditionCheckError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }],
        ["aws.greengrass#UpdateState", {
                requestShape: "aws.greengrass#UpdateStateRequest",
                responseShape: "aws.greengrass#UpdateStateResponse",
                errorShapes: new Set([
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#ResourceNotFoundError"
                ])
            }],
        ["aws.greengrass#UpdateThingShadow", {
                requestShape: "aws.greengrass#UpdateThingShadowRequest",
                responseShape: "aws.greengrass#UpdateThingShadowResponse",
                errorShapes: new Set([
                    "aws.greengrass#InvalidArgumentsError",
                    "aws.greengrass#ConflictError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#UnauthorizedError"
                ])
            }],
        ["aws.greengrass#ValidateAuthorizationToken", {
                requestShape: "aws.greengrass#ValidateAuthorizationTokenRequest",
                responseShape: "aws.greengrass#ValidateAuthorizationTokenResponse",
                errorShapes: new Set([
                    "aws.greengrass#InvalidTokenError",
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError"
                ])
            }],
        ["aws.greengrass#VerifyClientDeviceIdentity", {
                requestShape: "aws.greengrass#VerifyClientDeviceIdentityRequest",
                responseShape: "aws.greengrass#VerifyClientDeviceIdentityResponse",
                errorShapes: new Set([
                    "aws.greengrass#UnauthorizedError",
                    "aws.greengrass#ServiceError",
                    "aws.greengrass#InvalidArgumentsError"
                ])
            }]
    ]);
}
const DetailedDeploymentStatusValues = new Set([
    "SUCCESSFUL",
    "FAILED_NO_STATE_CHANGE",
    "FAILED_ROLLBACK_NOT_REQUESTED",
    "FAILED_ROLLBACK_COMPLETE",
    "REJECTED"
]);
const DeploymentStatusValues = new Set([
    "QUEUED",
    "IN_PROGRESS",
    "SUCCEEDED",
    "FAILED",
    "CANCELED"
]);
const LifecycleStateValues = new Set([
    "RUNNING",
    "ERRORED",
    "NEW",
    "FINISHED",
    "INSTALLED",
    "BROKEN",
    "STARTING",
    "STOPPING"
]);
const MetricUnitTypeValues = new Set([
    "BYTES",
    "BYTES_PER_SECOND",
    "COUNT",
    "COUNT_PER_SECOND",
    "MEGABYTES",
    "SECONDS"
]);
const PayloadFormatValues = new Set([
    "0",
    "1"
]);
const ConfigurationValidityStatusValues = new Set([
    "ACCEPTED",
    "REJECTED"
]);
const CertificateTypeValues = new Set([
    "SERVER"
]);
const FailureHandlingPolicyValues = new Set([
    "ROLLBACK",
    "DO_NOTHING"
]);
const RequestStatusValues = new Set([
    "SUCCEEDED",
    "FAILED"
]);
const ReportedLifecycleStateValues = new Set([
    "RUNNING",
    "ERRORED"
]);
const ReceiveModeValues = new Set([
    "RECEIVE_ALL_MESSAGES",
    "RECEIVE_MESSAGES_FROM_OTHERS"
]);
const QOSValues = new Set([
    "0",
    "1"
]);
function createEnumsMap() {
    return new Map([
        ["DetailedDeploymentStatus", DetailedDeploymentStatusValues],
        ["DeploymentStatus", DeploymentStatusValues],
        ["LifecycleState", LifecycleStateValues],
        ["MetricUnitType", MetricUnitTypeValues],
        ["PayloadFormat", PayloadFormatValues],
        ["ConfigurationValidityStatus", ConfigurationValidityStatusValues],
        ["CertificateType", CertificateTypeValues],
        ["FailureHandlingPolicy", FailureHandlingPolicyValues],
        ["RequestStatus", RequestStatusValues],
        ["ReportedLifecycleState", ReportedLifecycleStateValues],
        ["ReceiveMode", ReceiveModeValues],
        ["QOS", QOSValues],
    ]);
}
function makeServiceModel() {
    return {
        normalizers: createNormalizerMap(),
        validators: createValidatorMap(),
        deserializers: createDeserializerMap(),
        serializers: createSerializerMap(),
        operations: createOperationMap(),
        enums: createEnumsMap()
    };
}
exports.makeServiceModel = makeServiceModel;
function normalizeUserProperty(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'key', value.key);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'value', value.value);
    return normalizedValue;
}
exports.normalizeUserProperty = normalizeUserProperty;
function normalizeSystemResourceLimits(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'memory', value.memory);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'cpus', value.cpus);
    return normalizedValue;
}
exports.normalizeSystemResourceLimits = normalizeSystemResourceLimits;
function normalizeDeploymentStatusDetails(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'detailedDeploymentStatus', value.detailedDeploymentStatus);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'deploymentErrorStack', value.deploymentErrorStack, undefined);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'deploymentErrorTypes', value.deploymentErrorTypes, undefined);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentFailureCause', value.deploymentFailureCause);
    return normalizedValue;
}
exports.normalizeDeploymentStatusDetails = normalizeDeploymentStatusDetails;
function normalizeMessageContext(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'topic', value.topic);
    return normalizedValue;
}
exports.normalizeMessageContext = normalizeMessageContext;
function normalizeRunWithInfo(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'posixUser', value.posixUser);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'windowsUser', value.windowsUser);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'systemResourceLimits', value.systemResourceLimits, normalizeSystemResourceLimits);
    return normalizedValue;
}
exports.normalizeRunWithInfo = normalizeRunWithInfo;
function normalizeLocalDeployment(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'status', value.status);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'createdOn', value.createdOn);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentStatusDetails', value.deploymentStatusDetails, normalizeDeploymentStatusDetails);
    return normalizedValue;
}
exports.normalizeLocalDeployment = normalizeLocalDeployment;
function normalizePostComponentUpdateEvent(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    return normalizedValue;
}
exports.normalizePostComponentUpdateEvent = normalizePostComponentUpdateEvent;
function normalizePreComponentUpdateEvent(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'isGgcRestarting', value.isGgcRestarting);
    return normalizedValue;
}
exports.normalizePreComponentUpdateEvent = normalizePreComponentUpdateEvent;
function normalizeComponentDetails(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'version', value.version);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'state', value.state);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'configuration', value.configuration);
    return normalizedValue;
}
exports.normalizeComponentDetails = normalizeComponentDetails;
function normalizeCertificateUpdate(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'privateKey', value.privateKey);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'publicKey', value.publicKey);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'certificate', value.certificate);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'caCertificates', value.caCertificates, undefined);
    return normalizedValue;
}
exports.normalizeCertificateUpdate = normalizeCertificateUpdate;
function normalizeBinaryMessage(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message, eventstream_rpc_utils.encodePayloadAsString);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'context', value.context, normalizeMessageContext);
    return normalizedValue;
}
exports.normalizeBinaryMessage = normalizeBinaryMessage;
function normalizeJsonMessage(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'context', value.context, normalizeMessageContext);
    return normalizedValue;
}
exports.normalizeJsonMessage = normalizeJsonMessage;
function normalizeMQTTCredential(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'clientId', value.clientId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'certificatePem', value.certificatePem);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'username', value.username);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'password', value.password);
    return normalizedValue;
}
exports.normalizeMQTTCredential = normalizeMQTTCredential;
function normalizeValidateConfigurationUpdateEvent(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'configuration', value.configuration);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    return normalizedValue;
}
exports.normalizeValidateConfigurationUpdateEvent = normalizeValidateConfigurationUpdateEvent;
function normalizeMetric(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'name', value.name);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'unit', value.unit);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'value', value.value);
    return normalizedValue;
}
exports.normalizeMetric = normalizeMetric;
function normalizeConfigurationUpdateEvent(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'keyPath', value.keyPath, undefined);
    return normalizedValue;
}
exports.normalizeConfigurationUpdateEvent = normalizeConfigurationUpdateEvent;
function normalizeMQTTMessage(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'topicName', value.topicName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payload', value.payload, eventstream_rpc_utils.encodePayloadAsString);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'retain', value.retain);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'userProperties', value.userProperties, normalizeUserProperty);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'messageExpiryIntervalSeconds', value.messageExpiryIntervalSeconds);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'correlationData', value.correlationData, eventstream_rpc_utils.encodePayloadAsString);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'responseTopic', value.responseTopic);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payloadFormat', value.payloadFormat);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'contentType', value.contentType);
    return normalizedValue;
}
exports.normalizeMQTTMessage = normalizeMQTTMessage;
function normalizeComponentUpdatePolicyEvents(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'preUpdateEvent', value.preUpdateEvent, normalizePreComponentUpdateEvent);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'postUpdateEvent', value.postUpdateEvent, normalizePostComponentUpdateEvent);
    return normalizedValue;
}
exports.normalizeComponentUpdatePolicyEvents = normalizeComponentUpdatePolicyEvents;
function normalizeSecretValue(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'secretString', value.secretString);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'secretBinary', value.secretBinary, eventstream_rpc_utils.encodePayloadAsString);
    return normalizedValue;
}
exports.normalizeSecretValue = normalizeSecretValue;
function normalizeConfigurationValidityReport(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'status', value.status);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeConfigurationValidityReport = normalizeConfigurationValidityReport;
function normalizeClientDeviceCredential(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'clientDeviceCertificate', value.clientDeviceCertificate);
    return normalizedValue;
}
exports.normalizeClientDeviceCredential = normalizeClientDeviceCredential;
function normalizeCertificateUpdateEvent(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'certificateUpdate', value.certificateUpdate, normalizeCertificateUpdate);
    return normalizedValue;
}
exports.normalizeCertificateUpdateEvent = normalizeCertificateUpdateEvent;
function normalizeCertificateOptions(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'certificateType', value.certificateType);
    return normalizedValue;
}
exports.normalizeCertificateOptions = normalizeCertificateOptions;
function normalizePublishMessage(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'jsonMessage', value.jsonMessage, normalizeJsonMessage);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'binaryMessage', value.binaryMessage, normalizeBinaryMessage);
    return normalizedValue;
}
exports.normalizePublishMessage = normalizePublishMessage;
function normalizeCredentialDocument(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'mqttCredential', value.mqttCredential, normalizeMQTTCredential);
    return normalizedValue;
}
exports.normalizeCredentialDocument = normalizeCredentialDocument;
function normalizeSubscriptionResponseMessage(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'jsonMessage', value.jsonMessage, normalizeJsonMessage);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'binaryMessage', value.binaryMessage, normalizeBinaryMessage);
    return normalizedValue;
}
exports.normalizeSubscriptionResponseMessage = normalizeSubscriptionResponseMessage;
function normalizeValidateConfigurationUpdateEvents(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'validateConfigurationUpdateEvent', value.validateConfigurationUpdateEvent, normalizeValidateConfigurationUpdateEvent);
    return normalizedValue;
}
exports.normalizeValidateConfigurationUpdateEvents = normalizeValidateConfigurationUpdateEvents;
function normalizeConfigurationUpdateEvents(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'configurationUpdateEvent', value.configurationUpdateEvent, normalizeConfigurationUpdateEvent);
    return normalizedValue;
}
exports.normalizeConfigurationUpdateEvents = normalizeConfigurationUpdateEvents;
function normalizeIoTCoreMessage(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message, normalizeMQTTMessage);
    return normalizedValue;
}
exports.normalizeIoTCoreMessage = normalizeIoTCoreMessage;
function normalizeInvalidArgumentsError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeInvalidArgumentsError = normalizeInvalidArgumentsError;
function normalizeInvalidArtifactsDirectoryPathError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeInvalidArtifactsDirectoryPathError = normalizeInvalidArtifactsDirectoryPathError;
function normalizeInvalidRecipeDirectoryPathError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeInvalidRecipeDirectoryPathError = normalizeInvalidRecipeDirectoryPathError;
function normalizeServiceError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'context', value.context);
    return normalizedValue;
}
exports.normalizeServiceError = normalizeServiceError;
function normalizeCreateLocalDeploymentResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    return normalizedValue;
}
exports.normalizeCreateLocalDeploymentResponse = normalizeCreateLocalDeploymentResponse;
function normalizeCreateLocalDeploymentRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'groupName', value.groupName);
    eventstream_rpc_utils.setDefinedMapPropertyAsObject(normalizedValue, 'rootComponentVersionsToAdd', value.rootComponentVersionsToAdd, undefined, undefined);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'rootComponentsToRemove', value.rootComponentsToRemove, undefined);
    eventstream_rpc_utils.setDefinedMapPropertyAsObject(normalizedValue, 'componentToConfiguration', value.componentToConfiguration, undefined, undefined);
    eventstream_rpc_utils.setDefinedMapPropertyAsObject(normalizedValue, 'componentToRunWithInfo', value.componentToRunWithInfo, undefined, normalizeRunWithInfo);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'recipeDirectoryPath', value.recipeDirectoryPath);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'artifactsDirectoryPath', value.artifactsDirectoryPath);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'failureHandlingPolicy', value.failureHandlingPolicy);
    return normalizedValue;
}
exports.normalizeCreateLocalDeploymentRequest = normalizeCreateLocalDeploymentRequest;
function normalizeResourceNotFoundError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'resourceType', value.resourceType);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'resourceName', value.resourceName);
    return normalizedValue;
}
exports.normalizeResourceNotFoundError = normalizeResourceNotFoundError;
function normalizeUnauthorizedError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeUnauthorizedError = normalizeUnauthorizedError;
function normalizePauseComponentResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizePauseComponentResponse = normalizePauseComponentResponse;
function normalizePauseComponentRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    return normalizedValue;
}
exports.normalizePauseComponentRequest = normalizePauseComponentRequest;
function normalizeComponentNotFoundError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeComponentNotFoundError = normalizeComponentNotFoundError;
function normalizeStopComponentResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'stopStatus', value.stopStatus);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeStopComponentResponse = normalizeStopComponentResponse;
function normalizeStopComponentRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    return normalizedValue;
}
exports.normalizeStopComponentRequest = normalizeStopComponentRequest;
function normalizeListLocalDeploymentsResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'localDeployments', value.localDeployments, normalizeLocalDeployment);
    return normalizedValue;
}
exports.normalizeListLocalDeploymentsResponse = normalizeListLocalDeploymentsResponse;
function normalizeListLocalDeploymentsRequest(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeListLocalDeploymentsRequest = normalizeListLocalDeploymentsRequest;
function normalizeSubscribeToComponentUpdatesResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSubscribeToComponentUpdatesResponse = normalizeSubscribeToComponentUpdatesResponse;
function normalizeSubscribeToComponentUpdatesRequest(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSubscribeToComponentUpdatesRequest = normalizeSubscribeToComponentUpdatesRequest;
function normalizeListNamedShadowsForThingResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'results', value.results, undefined);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'timestamp', value.timestamp, eventstream_rpc_utils.encodeDateAsNumber);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'nextToken', value.nextToken);
    return normalizedValue;
}
exports.normalizeListNamedShadowsForThingResponse = normalizeListNamedShadowsForThingResponse;
function normalizeListNamedShadowsForThingRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'thingName', value.thingName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'nextToken', value.nextToken);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'pageSize', value.pageSize);
    return normalizedValue;
}
exports.normalizeListNamedShadowsForThingRequest = normalizeListNamedShadowsForThingRequest;
function normalizeCancelLocalDeploymentResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeCancelLocalDeploymentResponse = normalizeCancelLocalDeploymentResponse;
function normalizeCancelLocalDeploymentRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    return normalizedValue;
}
exports.normalizeCancelLocalDeploymentRequest = normalizeCancelLocalDeploymentRequest;
function normalizeUpdateStateResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeUpdateStateResponse = normalizeUpdateStateResponse;
function normalizeUpdateStateRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'state', value.state);
    return normalizedValue;
}
exports.normalizeUpdateStateRequest = normalizeUpdateStateRequest;
function normalizeGetSecretValueResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'secretId', value.secretId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'versionId', value.versionId);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'versionStage', value.versionStage, undefined);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'secretValue', value.secretValue, normalizeSecretValue);
    return normalizedValue;
}
exports.normalizeGetSecretValueResponse = normalizeGetSecretValueResponse;
function normalizeGetSecretValueRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'secretId', value.secretId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'versionId', value.versionId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'versionStage', value.versionStage);
    return normalizedValue;
}
exports.normalizeGetSecretValueRequest = normalizeGetSecretValueRequest;
function normalizeGetLocalDeploymentStatusResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deployment', value.deployment, normalizeLocalDeployment);
    return normalizedValue;
}
exports.normalizeGetLocalDeploymentStatusResponse = normalizeGetLocalDeploymentStatusResponse;
function normalizeGetLocalDeploymentStatusRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    return normalizedValue;
}
exports.normalizeGetLocalDeploymentStatusRequest = normalizeGetLocalDeploymentStatusRequest;
function normalizeRestartComponentResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'restartStatus', value.restartStatus);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeRestartComponentResponse = normalizeRestartComponentResponse;
function normalizeRestartComponentRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    return normalizedValue;
}
exports.normalizeRestartComponentRequest = normalizeRestartComponentRequest;
function normalizeInvalidTokenError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeInvalidTokenError = normalizeInvalidTokenError;
function normalizeValidateAuthorizationTokenResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'isValid', value.isValid);
    return normalizedValue;
}
exports.normalizeValidateAuthorizationTokenResponse = normalizeValidateAuthorizationTokenResponse;
function normalizeValidateAuthorizationTokenRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'token', value.token);
    return normalizedValue;
}
exports.normalizeValidateAuthorizationTokenRequest = normalizeValidateAuthorizationTokenRequest;
function normalizeFailedUpdateConditionCheckError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeFailedUpdateConditionCheckError = normalizeFailedUpdateConditionCheckError;
function normalizeConflictError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeConflictError = normalizeConflictError;
function normalizeUpdateConfigurationResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeUpdateConfigurationResponse = normalizeUpdateConfigurationResponse;
function normalizeUpdateConfigurationRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'keyPath', value.keyPath, undefined);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'timestamp', value.timestamp, eventstream_rpc_utils.encodeDateAsNumber);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'valueToMerge', value.valueToMerge);
    return normalizedValue;
}
exports.normalizeUpdateConfigurationRequest = normalizeUpdateConfigurationRequest;
function normalizeUpdateThingShadowResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payload', value.payload, eventstream_rpc_utils.encodePayloadAsString);
    return normalizedValue;
}
exports.normalizeUpdateThingShadowResponse = normalizeUpdateThingShadowResponse;
function normalizeUpdateThingShadowRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'thingName', value.thingName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'shadowName', value.shadowName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payload', value.payload, eventstream_rpc_utils.encodePayloadAsString);
    return normalizedValue;
}
exports.normalizeUpdateThingShadowRequest = normalizeUpdateThingShadowRequest;
function normalizeSendConfigurationValidityReportResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSendConfigurationValidityReportResponse = normalizeSendConfigurationValidityReportResponse;
function normalizeSendConfigurationValidityReportRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'configurationValidityReport', value.configurationValidityReport, normalizeConfigurationValidityReport);
    return normalizedValue;
}
exports.normalizeSendConfigurationValidityReportRequest = normalizeSendConfigurationValidityReportRequest;
function normalizeGetThingShadowResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payload', value.payload, eventstream_rpc_utils.encodePayloadAsString);
    return normalizedValue;
}
exports.normalizeGetThingShadowResponse = normalizeGetThingShadowResponse;
function normalizeGetThingShadowRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'thingName', value.thingName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'shadowName', value.shadowName);
    return normalizedValue;
}
exports.normalizeGetThingShadowRequest = normalizeGetThingShadowRequest;
function normalizeCreateDebugPasswordResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'password', value.password);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'username', value.username);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'passwordExpiration', value.passwordExpiration, eventstream_rpc_utils.encodeDateAsNumber);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'certificateSHA256Hash', value.certificateSHA256Hash);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'certificateSHA1Hash', value.certificateSHA1Hash);
    return normalizedValue;
}
exports.normalizeCreateDebugPasswordResponse = normalizeCreateDebugPasswordResponse;
function normalizeCreateDebugPasswordRequest(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeCreateDebugPasswordRequest = normalizeCreateDebugPasswordRequest;
function normalizeListComponentsResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'components', value.components, normalizeComponentDetails);
    return normalizedValue;
}
exports.normalizeListComponentsResponse = normalizeListComponentsResponse;
function normalizeListComponentsRequest(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeListComponentsRequest = normalizeListComponentsRequest;
function normalizeInvalidClientDeviceAuthTokenError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeInvalidClientDeviceAuthTokenError = normalizeInvalidClientDeviceAuthTokenError;
function normalizeAuthorizeClientDeviceActionResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'isAuthorized', value.isAuthorized);
    return normalizedValue;
}
exports.normalizeAuthorizeClientDeviceActionResponse = normalizeAuthorizeClientDeviceActionResponse;
function normalizeAuthorizeClientDeviceActionRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'clientDeviceAuthToken', value.clientDeviceAuthToken);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'operation', value.operation);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'resource', value.resource);
    return normalizedValue;
}
exports.normalizeAuthorizeClientDeviceActionRequest = normalizeAuthorizeClientDeviceActionRequest;
function normalizeVerifyClientDeviceIdentityResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'isValidClientDevice', value.isValidClientDevice);
    return normalizedValue;
}
exports.normalizeVerifyClientDeviceIdentityResponse = normalizeVerifyClientDeviceIdentityResponse;
function normalizeVerifyClientDeviceIdentityRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'credential', value.credential, normalizeClientDeviceCredential);
    return normalizedValue;
}
exports.normalizeVerifyClientDeviceIdentityRequest = normalizeVerifyClientDeviceIdentityRequest;
function normalizeSubscribeToCertificateUpdatesResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSubscribeToCertificateUpdatesResponse = normalizeSubscribeToCertificateUpdatesResponse;
function normalizeSubscribeToCertificateUpdatesRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'certificateOptions', value.certificateOptions, normalizeCertificateOptions);
    return normalizedValue;
}
exports.normalizeSubscribeToCertificateUpdatesRequest = normalizeSubscribeToCertificateUpdatesRequest;
function normalizePublishToTopicResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizePublishToTopicResponse = normalizePublishToTopicResponse;
function normalizePublishToTopicRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'topic', value.topic);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'publishMessage', value.publishMessage, normalizePublishMessage);
    return normalizedValue;
}
exports.normalizePublishToTopicRequest = normalizePublishToTopicRequest;
function normalizeInvalidCredentialError(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    return normalizedValue;
}
exports.normalizeInvalidCredentialError = normalizeInvalidCredentialError;
function normalizeGetClientDeviceAuthTokenResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'clientDeviceAuthToken', value.clientDeviceAuthToken);
    return normalizedValue;
}
exports.normalizeGetClientDeviceAuthTokenResponse = normalizeGetClientDeviceAuthTokenResponse;
function normalizeGetClientDeviceAuthTokenRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'credential', value.credential, normalizeCredentialDocument);
    return normalizedValue;
}
exports.normalizeGetClientDeviceAuthTokenRequest = normalizeGetClientDeviceAuthTokenRequest;
function normalizeGetComponentDetailsResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentDetails', value.componentDetails, normalizeComponentDetails);
    return normalizedValue;
}
exports.normalizeGetComponentDetailsResponse = normalizeGetComponentDetailsResponse;
function normalizeGetComponentDetailsRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    return normalizedValue;
}
exports.normalizeGetComponentDetailsRequest = normalizeGetComponentDetailsRequest;
function normalizeSubscribeToTopicResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'topicName', value.topicName);
    return normalizedValue;
}
exports.normalizeSubscribeToTopicResponse = normalizeSubscribeToTopicResponse;
function normalizeSubscribeToTopicRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'topic', value.topic);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'receiveMode', value.receiveMode);
    return normalizedValue;
}
exports.normalizeSubscribeToTopicRequest = normalizeSubscribeToTopicRequest;
function normalizeGetConfigurationResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'value', value.value);
    return normalizedValue;
}
exports.normalizeGetConfigurationResponse = normalizeGetConfigurationResponse;
function normalizeGetConfigurationRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'keyPath', value.keyPath, undefined);
    return normalizedValue;
}
exports.normalizeGetConfigurationRequest = normalizeGetConfigurationRequest;
function normalizeSubscribeToValidateConfigurationUpdatesResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSubscribeToValidateConfigurationUpdatesResponse = normalizeSubscribeToValidateConfigurationUpdatesResponse;
function normalizeSubscribeToValidateConfigurationUpdatesRequest(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSubscribeToValidateConfigurationUpdatesRequest = normalizeSubscribeToValidateConfigurationUpdatesRequest;
function normalizeDeferComponentUpdateResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeDeferComponentUpdateResponse = normalizeDeferComponentUpdateResponse;
function normalizeDeferComponentUpdateRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'deploymentId', value.deploymentId);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'message', value.message);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'recheckAfterMs', value.recheckAfterMs);
    return normalizedValue;
}
exports.normalizeDeferComponentUpdateRequest = normalizeDeferComponentUpdateRequest;
function normalizePutComponentMetricResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizePutComponentMetricResponse = normalizePutComponentMetricResponse;
function normalizePutComponentMetricRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'metrics', value.metrics, normalizeMetric);
    return normalizedValue;
}
exports.normalizePutComponentMetricRequest = normalizePutComponentMetricRequest;
function normalizeDeleteThingShadowResponse(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payload', value.payload, eventstream_rpc_utils.encodePayloadAsString);
    return normalizedValue;
}
exports.normalizeDeleteThingShadowResponse = normalizeDeleteThingShadowResponse;
function normalizeDeleteThingShadowRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'thingName', value.thingName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'shadowName', value.shadowName);
    return normalizedValue;
}
exports.normalizeDeleteThingShadowRequest = normalizeDeleteThingShadowRequest;
function normalizeSubscribeToConfigurationUpdateResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSubscribeToConfigurationUpdateResponse = normalizeSubscribeToConfigurationUpdateResponse;
function normalizeSubscribeToConfigurationUpdateRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'keyPath', value.keyPath, undefined);
    return normalizedValue;
}
exports.normalizeSubscribeToConfigurationUpdateRequest = normalizeSubscribeToConfigurationUpdateRequest;
function normalizePublishToIoTCoreResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizePublishToIoTCoreResponse = normalizePublishToIoTCoreResponse;
function normalizePublishToIoTCoreRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'topicName', value.topicName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'qos', value.qos);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payload', value.payload, eventstream_rpc_utils.encodePayloadAsString);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'retain', value.retain);
    eventstream_rpc_utils.setDefinedArrayProperty(normalizedValue, 'userProperties', value.userProperties, normalizeUserProperty);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'messageExpiryIntervalSeconds', value.messageExpiryIntervalSeconds);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'correlationData', value.correlationData, eventstream_rpc_utils.encodePayloadAsString);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'responseTopic', value.responseTopic);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'payloadFormat', value.payloadFormat);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'contentType', value.contentType);
    return normalizedValue;
}
exports.normalizePublishToIoTCoreRequest = normalizePublishToIoTCoreRequest;
function normalizeResumeComponentResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeResumeComponentResponse = normalizeResumeComponentResponse;
function normalizeResumeComponentRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'componentName', value.componentName);
    return normalizedValue;
}
exports.normalizeResumeComponentRequest = normalizeResumeComponentRequest;
function normalizeSubscribeToIoTCoreResponse(value) {
    let normalizedValue = {};
    return normalizedValue;
}
exports.normalizeSubscribeToIoTCoreResponse = normalizeSubscribeToIoTCoreResponse;
function normalizeSubscribeToIoTCoreRequest(value) {
    let normalizedValue = {};
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'topicName', value.topicName);
    eventstream_rpc_utils.setDefinedProperty(normalizedValue, 'qos', value.qos);
    return normalizedValue;
}
exports.normalizeSubscribeToIoTCoreRequest = normalizeSubscribeToIoTCoreRequest;
function validateUserProperty(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.key, 'key', 'UserProperty');
    eventstream_rpc_utils.validateValueAsOptionalString(value.value, 'value', 'UserProperty');
}
exports.validateUserProperty = validateUserProperty;
function validateSystemResourceLimits(value) {
    eventstream_rpc_utils.validateValueAsOptionalInteger(value.memory, 'memory', 'SystemResourceLimits');
    eventstream_rpc_utils.validateValueAsOptionalNumber(value.cpus, 'cpus', 'SystemResourceLimits');
}
exports.validateSystemResourceLimits = validateSystemResourceLimits;
function validateDeploymentStatusDetails(value) {
    eventstream_rpc_utils.validateValueAsString(value.detailedDeploymentStatus, 'detailedDeploymentStatus', 'DeploymentStatusDetails');
    eventstream_rpc_utils.validateValueAsOptionalArray(value.deploymentErrorStack, eventstream_rpc_utils.validateValueAsString, 'deploymentErrorStack', 'DeploymentStatusDetails');
    eventstream_rpc_utils.validateValueAsOptionalArray(value.deploymentErrorTypes, eventstream_rpc_utils.validateValueAsString, 'deploymentErrorTypes', 'DeploymentStatusDetails');
    eventstream_rpc_utils.validateValueAsOptionalString(value.deploymentFailureCause, 'deploymentFailureCause', 'DeploymentStatusDetails');
}
exports.validateDeploymentStatusDetails = validateDeploymentStatusDetails;
function validateMessageContext(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.topic, 'topic', 'MessageContext');
}
exports.validateMessageContext = validateMessageContext;
function validateRunWithInfo(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.posixUser, 'posixUser', 'RunWithInfo');
    eventstream_rpc_utils.validateValueAsOptionalString(value.windowsUser, 'windowsUser', 'RunWithInfo');
    eventstream_rpc_utils.validateValueAsOptionalObject(value.systemResourceLimits, validateSystemResourceLimits, 'systemResourceLimits', 'RunWithInfo');
}
exports.validateRunWithInfo = validateRunWithInfo;
function validateLocalDeployment(value) {
    eventstream_rpc_utils.validateValueAsString(value.deploymentId, 'deploymentId', 'LocalDeployment');
    eventstream_rpc_utils.validateValueAsString(value.status, 'status', 'LocalDeployment');
    eventstream_rpc_utils.validateValueAsOptionalString(value.createdOn, 'createdOn', 'LocalDeployment');
    eventstream_rpc_utils.validateValueAsOptionalObject(value.deploymentStatusDetails, validateDeploymentStatusDetails, 'deploymentStatusDetails', 'LocalDeployment');
}
exports.validateLocalDeployment = validateLocalDeployment;
function validatePostComponentUpdateEvent(value) {
    eventstream_rpc_utils.validateValueAsString(value.deploymentId, 'deploymentId', 'PostComponentUpdateEvent');
}
exports.validatePostComponentUpdateEvent = validatePostComponentUpdateEvent;
function validatePreComponentUpdateEvent(value) {
    eventstream_rpc_utils.validateValueAsString(value.deploymentId, 'deploymentId', 'PreComponentUpdateEvent');
    eventstream_rpc_utils.validateValueAsBoolean(value.isGgcRestarting, 'isGgcRestarting', 'PreComponentUpdateEvent');
}
exports.validatePreComponentUpdateEvent = validatePreComponentUpdateEvent;
function validateComponentDetails(value) {
    eventstream_rpc_utils.validateValueAsString(value.componentName, 'componentName', 'ComponentDetails');
    eventstream_rpc_utils.validateValueAsString(value.version, 'version', 'ComponentDetails');
    eventstream_rpc_utils.validateValueAsString(value.state, 'state', 'ComponentDetails');
    eventstream_rpc_utils.validateValueAsOptionalAny(value.configuration, 'configuration', 'ComponentDetails');
}
exports.validateComponentDetails = validateComponentDetails;
function validateCertificateUpdate(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.privateKey, 'privateKey', 'CertificateUpdate');
    eventstream_rpc_utils.validateValueAsOptionalString(value.publicKey, 'publicKey', 'CertificateUpdate');
    eventstream_rpc_utils.validateValueAsOptionalString(value.certificate, 'certificate', 'CertificateUpdate');
    eventstream_rpc_utils.validateValueAsOptionalArray(value.caCertificates, eventstream_rpc_utils.validateValueAsString, 'caCertificates', 'CertificateUpdate');
}
exports.validateCertificateUpdate = validateCertificateUpdate;
function validateBinaryMessage(value) {
    eventstream_rpc_utils.validateValueAsOptionalBlob(value.message, 'message', 'BinaryMessage');
    eventstream_rpc_utils.validateValueAsOptionalObject(value.context, validateMessageContext, 'context', 'BinaryMessage');
}
exports.validateBinaryMessage = validateBinaryMessage;
function validateJsonMessage(value) {
    eventstream_rpc_utils.validateValueAsOptionalAny(value.message, 'message', 'JsonMessage');
    eventstream_rpc_utils.validateValueAsOptionalObject(value.context, validateMessageContext, 'context', 'JsonMessage');
}
exports.validateJsonMessage = validateJsonMessage;
function validateMQTTCredential(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.clientId, 'clientId', 'MQTTCredential');
    eventstream_rpc_utils.validateValueAsOptionalString(value.certificatePem, 'certificatePem', 'MQTTCredential');
    eventstream_rpc_utils.validateValueAsOptionalString(value.username, 'username', 'MQTTCredential');
    eventstream_rpc_utils.validateValueAsOptionalString(value.password, 'password', 'MQTTCredential');
}
exports.validateMQTTCredential = validateMQTTCredential;
function validateValidateConfigurationUpdateEvent(value) {
    eventstream_rpc_utils.validateValueAsOptionalAny(value.configuration, 'configuration', 'ValidateConfigurationUpdateEvent');
    eventstream_rpc_utils.validateValueAsString(value.deploymentId, 'deploymentId', 'ValidateConfigurationUpdateEvent');
}
exports.validateValidateConfigurationUpdateEvent = validateValidateConfigurationUpdateEvent;
function validateMetric(value) {
    eventstream_rpc_utils.validateValueAsString(value.name, 'name', 'Metric');
    eventstream_rpc_utils.validateValueAsString(value.unit, 'unit', 'Metric');
    eventstream_rpc_utils.validateValueAsNumber(value.value, 'value', 'Metric');
}
exports.validateMetric = validateMetric;
function validateConfigurationUpdateEvent(value) {
    eventstream_rpc_utils.validateValueAsString(value.componentName, 'componentName', 'ConfigurationUpdateEvent');
    eventstream_rpc_utils.validateValueAsArray(value.keyPath, eventstream_rpc_utils.validateValueAsString, 'keyPath', 'ConfigurationUpdateEvent');
}
exports.validateConfigurationUpdateEvent = validateConfigurationUpdateEvent;
function validateMQTTMessage(value) {
    eventstream_rpc_utils.validateValueAsString(value.topicName, 'topicName', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalBlob(value.payload, 'payload', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalBoolean(value.retain, 'retain', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalArray(value.userProperties, validateUserProperty, 'userProperties', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalInteger(value.messageExpiryIntervalSeconds, 'messageExpiryIntervalSeconds', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalBlob(value.correlationData, 'correlationData', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalString(value.responseTopic, 'responseTopic', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalString(value.payloadFormat, 'payloadFormat', 'MQTTMessage');
    eventstream_rpc_utils.validateValueAsOptionalString(value.contentType, 'contentType', 'MQTTMessage');
}
exports.validateMQTTMessage = validateMQTTMessage;
const _ComponentUpdatePolicyEventsPropertyValidators = new Map([
    ["preUpdateEvent", validatePreComponentUpdateEvent],
    ["postUpdateEvent", validatePostComponentUpdateEvent]
]);
function validateComponentUpdatePolicyEvents(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _ComponentUpdatePolicyEventsPropertyValidators);
}
exports.validateComponentUpdatePolicyEvents = validateComponentUpdatePolicyEvents;
const _SecretValuePropertyValidators = new Map([
    ["secretString", eventstream_rpc_utils.validateValueAsString],
    ["secretBinary", eventstream_rpc_utils.validateValueAsBlob]
]);
function validateSecretValue(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _SecretValuePropertyValidators);
}
exports.validateSecretValue = validateSecretValue;
function validateConfigurationValidityReport(value) {
    eventstream_rpc_utils.validateValueAsString(value.status, 'status', 'ConfigurationValidityReport');
    eventstream_rpc_utils.validateValueAsString(value.deploymentId, 'deploymentId', 'ConfigurationValidityReport');
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'ConfigurationValidityReport');
}
exports.validateConfigurationValidityReport = validateConfigurationValidityReport;
const _ClientDeviceCredentialPropertyValidators = new Map([
    ["clientDeviceCertificate", eventstream_rpc_utils.validateValueAsString]
]);
function validateClientDeviceCredential(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _ClientDeviceCredentialPropertyValidators);
}
exports.validateClientDeviceCredential = validateClientDeviceCredential;
const _CertificateUpdateEventPropertyValidators = new Map([
    ["certificateUpdate", validateCertificateUpdate]
]);
function validateCertificateUpdateEvent(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _CertificateUpdateEventPropertyValidators);
}
exports.validateCertificateUpdateEvent = validateCertificateUpdateEvent;
function validateCertificateOptions(value) {
    eventstream_rpc_utils.validateValueAsString(value.certificateType, 'certificateType', 'CertificateOptions');
}
exports.validateCertificateOptions = validateCertificateOptions;
const _PublishMessagePropertyValidators = new Map([
    ["jsonMessage", validateJsonMessage],
    ["binaryMessage", validateBinaryMessage]
]);
function validatePublishMessage(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _PublishMessagePropertyValidators);
}
exports.validatePublishMessage = validatePublishMessage;
const _CredentialDocumentPropertyValidators = new Map([
    ["mqttCredential", validateMQTTCredential]
]);
function validateCredentialDocument(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _CredentialDocumentPropertyValidators);
}
exports.validateCredentialDocument = validateCredentialDocument;
const _SubscriptionResponseMessagePropertyValidators = new Map([
    ["jsonMessage", validateJsonMessage],
    ["binaryMessage", validateBinaryMessage]
]);
function validateSubscriptionResponseMessage(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _SubscriptionResponseMessagePropertyValidators);
}
exports.validateSubscriptionResponseMessage = validateSubscriptionResponseMessage;
const _ValidateConfigurationUpdateEventsPropertyValidators = new Map([
    ["validateConfigurationUpdateEvent", validateValidateConfigurationUpdateEvent]
]);
function validateValidateConfigurationUpdateEvents(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _ValidateConfigurationUpdateEventsPropertyValidators);
}
exports.validateValidateConfigurationUpdateEvents = validateValidateConfigurationUpdateEvents;
const _ConfigurationUpdateEventsPropertyValidators = new Map([
    ["configurationUpdateEvent", validateConfigurationUpdateEvent]
]);
function validateConfigurationUpdateEvents(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _ConfigurationUpdateEventsPropertyValidators);
}
exports.validateConfigurationUpdateEvents = validateConfigurationUpdateEvents;
const _IoTCoreMessagePropertyValidators = new Map([
    ["message", validateMQTTMessage]
]);
function validateIoTCoreMessage(value) {
    eventstream_rpc_utils.validateValueAsUnion(value, _IoTCoreMessagePropertyValidators);
}
exports.validateIoTCoreMessage = validateIoTCoreMessage;
function validateInvalidArgumentsError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'InvalidArgumentsError');
}
exports.validateInvalidArgumentsError = validateInvalidArgumentsError;
function validateInvalidArtifactsDirectoryPathError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'InvalidArtifactsDirectoryPathError');
}
exports.validateInvalidArtifactsDirectoryPathError = validateInvalidArtifactsDirectoryPathError;
function validateInvalidRecipeDirectoryPathError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'InvalidRecipeDirectoryPathError');
}
exports.validateInvalidRecipeDirectoryPathError = validateInvalidRecipeDirectoryPathError;
function validateServiceError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'ServiceError');
    eventstream_rpc_utils.validateValueAsOptionalAny(value.context, 'context', 'ServiceError');
}
exports.validateServiceError = validateServiceError;
function validateCreateLocalDeploymentResponse(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.deploymentId, 'deploymentId', 'CreateLocalDeploymentResponse');
}
exports.validateCreateLocalDeploymentResponse = validateCreateLocalDeploymentResponse;
function validateCreateLocalDeploymentRequest(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.groupName, 'groupName', 'CreateLocalDeploymentRequest');
    eventstream_rpc_utils.validateValueAsOptionalMap(value.rootComponentVersionsToAdd, eventstream_rpc_utils.validateValueAsString, eventstream_rpc_utils.validateValueAsString, 'rootComponentVersionsToAdd', 'CreateLocalDeploymentRequest');
    eventstream_rpc_utils.validateValueAsOptionalArray(value.rootComponentsToRemove, eventstream_rpc_utils.validateValueAsString, 'rootComponentsToRemove', 'CreateLocalDeploymentRequest');
    eventstream_rpc_utils.validateValueAsOptionalMap(value.componentToConfiguration, eventstream_rpc_utils.validateValueAsString, eventstream_rpc_utils.validateValueAsAny, 'componentToConfiguration', 'CreateLocalDeploymentRequest');
    eventstream_rpc_utils.validateValueAsOptionalMap(value.componentToRunWithInfo, eventstream_rpc_utils.validateValueAsString, validateRunWithInfo, 'componentToRunWithInfo', 'CreateLocalDeploymentRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.recipeDirectoryPath, 'recipeDirectoryPath', 'CreateLocalDeploymentRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.artifactsDirectoryPath, 'artifactsDirectoryPath', 'CreateLocalDeploymentRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.failureHandlingPolicy, 'failureHandlingPolicy', 'CreateLocalDeploymentRequest');
}
exports.validateCreateLocalDeploymentRequest = validateCreateLocalDeploymentRequest;
function validateResourceNotFoundError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'ResourceNotFoundError');
    eventstream_rpc_utils.validateValueAsOptionalString(value.resourceType, 'resourceType', 'ResourceNotFoundError');
    eventstream_rpc_utils.validateValueAsOptionalString(value.resourceName, 'resourceName', 'ResourceNotFoundError');
}
exports.validateResourceNotFoundError = validateResourceNotFoundError;
function validateUnauthorizedError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'UnauthorizedError');
}
exports.validateUnauthorizedError = validateUnauthorizedError;
function validatePauseComponentResponse(value) {
}
exports.validatePauseComponentResponse = validatePauseComponentResponse;
function validatePauseComponentRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.componentName, 'componentName', 'PauseComponentRequest');
}
exports.validatePauseComponentRequest = validatePauseComponentRequest;
function validateComponentNotFoundError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'ComponentNotFoundError');
}
exports.validateComponentNotFoundError = validateComponentNotFoundError;
function validateStopComponentResponse(value) {
    eventstream_rpc_utils.validateValueAsString(value.stopStatus, 'stopStatus', 'StopComponentResponse');
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'StopComponentResponse');
}
exports.validateStopComponentResponse = validateStopComponentResponse;
function validateStopComponentRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.componentName, 'componentName', 'StopComponentRequest');
}
exports.validateStopComponentRequest = validateStopComponentRequest;
function validateListLocalDeploymentsResponse(value) {
    eventstream_rpc_utils.validateValueAsOptionalArray(value.localDeployments, validateLocalDeployment, 'localDeployments', 'ListLocalDeploymentsResponse');
}
exports.validateListLocalDeploymentsResponse = validateListLocalDeploymentsResponse;
function validateListLocalDeploymentsRequest(value) {
}
exports.validateListLocalDeploymentsRequest = validateListLocalDeploymentsRequest;
function validateSubscribeToComponentUpdatesResponse(value) {
}
exports.validateSubscribeToComponentUpdatesResponse = validateSubscribeToComponentUpdatesResponse;
function validateSubscribeToComponentUpdatesRequest(value) {
}
exports.validateSubscribeToComponentUpdatesRequest = validateSubscribeToComponentUpdatesRequest;
function validateListNamedShadowsForThingResponse(value) {
    eventstream_rpc_utils.validateValueAsArray(value.results, eventstream_rpc_utils.validateValueAsString, 'results', 'ListNamedShadowsForThingResponse');
    eventstream_rpc_utils.validateValueAsDate(value.timestamp, 'timestamp', 'ListNamedShadowsForThingResponse');
    eventstream_rpc_utils.validateValueAsOptionalString(value.nextToken, 'nextToken', 'ListNamedShadowsForThingResponse');
}
exports.validateListNamedShadowsForThingResponse = validateListNamedShadowsForThingResponse;
function validateListNamedShadowsForThingRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.thingName, 'thingName', 'ListNamedShadowsForThingRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.nextToken, 'nextToken', 'ListNamedShadowsForThingRequest');
    eventstream_rpc_utils.validateValueAsOptionalInteger(value.pageSize, 'pageSize', 'ListNamedShadowsForThingRequest');
}
exports.validateListNamedShadowsForThingRequest = validateListNamedShadowsForThingRequest;
function validateCancelLocalDeploymentResponse(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'CancelLocalDeploymentResponse');
}
exports.validateCancelLocalDeploymentResponse = validateCancelLocalDeploymentResponse;
function validateCancelLocalDeploymentRequest(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.deploymentId, 'deploymentId', 'CancelLocalDeploymentRequest');
}
exports.validateCancelLocalDeploymentRequest = validateCancelLocalDeploymentRequest;
function validateUpdateStateResponse(value) {
}
exports.validateUpdateStateResponse = validateUpdateStateResponse;
function validateUpdateStateRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.state, 'state', 'UpdateStateRequest');
}
exports.validateUpdateStateRequest = validateUpdateStateRequest;
function validateGetSecretValueResponse(value) {
    eventstream_rpc_utils.validateValueAsString(value.secretId, 'secretId', 'GetSecretValueResponse');
    eventstream_rpc_utils.validateValueAsString(value.versionId, 'versionId', 'GetSecretValueResponse');
    eventstream_rpc_utils.validateValueAsArray(value.versionStage, eventstream_rpc_utils.validateValueAsString, 'versionStage', 'GetSecretValueResponse');
    eventstream_rpc_utils.validateValueAsUnion(value.secretValue, _SecretValuePropertyValidators);
}
exports.validateGetSecretValueResponse = validateGetSecretValueResponse;
function validateGetSecretValueRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.secretId, 'secretId', 'GetSecretValueRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.versionId, 'versionId', 'GetSecretValueRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.versionStage, 'versionStage', 'GetSecretValueRequest');
}
exports.validateGetSecretValueRequest = validateGetSecretValueRequest;
function validateGetLocalDeploymentStatusResponse(value) {
    eventstream_rpc_utils.validateValueAsObject(value.deployment, validateLocalDeployment, 'deployment', 'GetLocalDeploymentStatusResponse');
}
exports.validateGetLocalDeploymentStatusResponse = validateGetLocalDeploymentStatusResponse;
function validateGetLocalDeploymentStatusRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.deploymentId, 'deploymentId', 'GetLocalDeploymentStatusRequest');
}
exports.validateGetLocalDeploymentStatusRequest = validateGetLocalDeploymentStatusRequest;
function validateRestartComponentResponse(value) {
    eventstream_rpc_utils.validateValueAsString(value.restartStatus, 'restartStatus', 'RestartComponentResponse');
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'RestartComponentResponse');
}
exports.validateRestartComponentResponse = validateRestartComponentResponse;
function validateRestartComponentRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.componentName, 'componentName', 'RestartComponentRequest');
}
exports.validateRestartComponentRequest = validateRestartComponentRequest;
function validateInvalidTokenError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'InvalidTokenError');
}
exports.validateInvalidTokenError = validateInvalidTokenError;
function validateValidateAuthorizationTokenResponse(value) {
    eventstream_rpc_utils.validateValueAsBoolean(value.isValid, 'isValid', 'ValidateAuthorizationTokenResponse');
}
exports.validateValidateAuthorizationTokenResponse = validateValidateAuthorizationTokenResponse;
function validateValidateAuthorizationTokenRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.token, 'token', 'ValidateAuthorizationTokenRequest');
}
exports.validateValidateAuthorizationTokenRequest = validateValidateAuthorizationTokenRequest;
function validateFailedUpdateConditionCheckError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'FailedUpdateConditionCheckError');
}
exports.validateFailedUpdateConditionCheckError = validateFailedUpdateConditionCheckError;
function validateConflictError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'ConflictError');
}
exports.validateConflictError = validateConflictError;
function validateUpdateConfigurationResponse(value) {
}
exports.validateUpdateConfigurationResponse = validateUpdateConfigurationResponse;
function validateUpdateConfigurationRequest(value) {
    eventstream_rpc_utils.validateValueAsOptionalArray(value.keyPath, eventstream_rpc_utils.validateValueAsString, 'keyPath', 'UpdateConfigurationRequest');
    eventstream_rpc_utils.validateValueAsDate(value.timestamp, 'timestamp', 'UpdateConfigurationRequest');
    eventstream_rpc_utils.validateValueAsAny(value.valueToMerge, 'valueToMerge', 'UpdateConfigurationRequest');
}
exports.validateUpdateConfigurationRequest = validateUpdateConfigurationRequest;
function validateUpdateThingShadowResponse(value) {
    eventstream_rpc_utils.validateValueAsBlob(value.payload, 'payload', 'UpdateThingShadowResponse');
}
exports.validateUpdateThingShadowResponse = validateUpdateThingShadowResponse;
function validateUpdateThingShadowRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.thingName, 'thingName', 'UpdateThingShadowRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.shadowName, 'shadowName', 'UpdateThingShadowRequest');
    eventstream_rpc_utils.validateValueAsBlob(value.payload, 'payload', 'UpdateThingShadowRequest');
}
exports.validateUpdateThingShadowRequest = validateUpdateThingShadowRequest;
function validateSendConfigurationValidityReportResponse(value) {
}
exports.validateSendConfigurationValidityReportResponse = validateSendConfigurationValidityReportResponse;
function validateSendConfigurationValidityReportRequest(value) {
    eventstream_rpc_utils.validateValueAsObject(value.configurationValidityReport, validateConfigurationValidityReport, 'configurationValidityReport', 'SendConfigurationValidityReportRequest');
}
exports.validateSendConfigurationValidityReportRequest = validateSendConfigurationValidityReportRequest;
function validateGetThingShadowResponse(value) {
    eventstream_rpc_utils.validateValueAsBlob(value.payload, 'payload', 'GetThingShadowResponse');
}
exports.validateGetThingShadowResponse = validateGetThingShadowResponse;
function validateGetThingShadowRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.thingName, 'thingName', 'GetThingShadowRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.shadowName, 'shadowName', 'GetThingShadowRequest');
}
exports.validateGetThingShadowRequest = validateGetThingShadowRequest;
function validateCreateDebugPasswordResponse(value) {
    eventstream_rpc_utils.validateValueAsString(value.password, 'password', 'CreateDebugPasswordResponse');
    eventstream_rpc_utils.validateValueAsString(value.username, 'username', 'CreateDebugPasswordResponse');
    eventstream_rpc_utils.validateValueAsDate(value.passwordExpiration, 'passwordExpiration', 'CreateDebugPasswordResponse');
    eventstream_rpc_utils.validateValueAsOptionalString(value.certificateSHA256Hash, 'certificateSHA256Hash', 'CreateDebugPasswordResponse');
    eventstream_rpc_utils.validateValueAsOptionalString(value.certificateSHA1Hash, 'certificateSHA1Hash', 'CreateDebugPasswordResponse');
}
exports.validateCreateDebugPasswordResponse = validateCreateDebugPasswordResponse;
function validateCreateDebugPasswordRequest(value) {
}
exports.validateCreateDebugPasswordRequest = validateCreateDebugPasswordRequest;
function validateListComponentsResponse(value) {
    eventstream_rpc_utils.validateValueAsOptionalArray(value.components, validateComponentDetails, 'components', 'ListComponentsResponse');
}
exports.validateListComponentsResponse = validateListComponentsResponse;
function validateListComponentsRequest(value) {
}
exports.validateListComponentsRequest = validateListComponentsRequest;
function validateInvalidClientDeviceAuthTokenError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'InvalidClientDeviceAuthTokenError');
}
exports.validateInvalidClientDeviceAuthTokenError = validateInvalidClientDeviceAuthTokenError;
function validateAuthorizeClientDeviceActionResponse(value) {
    eventstream_rpc_utils.validateValueAsBoolean(value.isAuthorized, 'isAuthorized', 'AuthorizeClientDeviceActionResponse');
}
exports.validateAuthorizeClientDeviceActionResponse = validateAuthorizeClientDeviceActionResponse;
function validateAuthorizeClientDeviceActionRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.clientDeviceAuthToken, 'clientDeviceAuthToken', 'AuthorizeClientDeviceActionRequest');
    eventstream_rpc_utils.validateValueAsString(value.operation, 'operation', 'AuthorizeClientDeviceActionRequest');
    eventstream_rpc_utils.validateValueAsString(value.resource, 'resource', 'AuthorizeClientDeviceActionRequest');
}
exports.validateAuthorizeClientDeviceActionRequest = validateAuthorizeClientDeviceActionRequest;
function validateVerifyClientDeviceIdentityResponse(value) {
    eventstream_rpc_utils.validateValueAsBoolean(value.isValidClientDevice, 'isValidClientDevice', 'VerifyClientDeviceIdentityResponse');
}
exports.validateVerifyClientDeviceIdentityResponse = validateVerifyClientDeviceIdentityResponse;
function validateVerifyClientDeviceIdentityRequest(value) {
    eventstream_rpc_utils.validateValueAsUnion(value.credential, _ClientDeviceCredentialPropertyValidators);
}
exports.validateVerifyClientDeviceIdentityRequest = validateVerifyClientDeviceIdentityRequest;
function validateSubscribeToCertificateUpdatesResponse(value) {
}
exports.validateSubscribeToCertificateUpdatesResponse = validateSubscribeToCertificateUpdatesResponse;
function validateSubscribeToCertificateUpdatesRequest(value) {
    eventstream_rpc_utils.validateValueAsObject(value.certificateOptions, validateCertificateOptions, 'certificateOptions', 'SubscribeToCertificateUpdatesRequest');
}
exports.validateSubscribeToCertificateUpdatesRequest = validateSubscribeToCertificateUpdatesRequest;
function validatePublishToTopicResponse(value) {
}
exports.validatePublishToTopicResponse = validatePublishToTopicResponse;
function validatePublishToTopicRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.topic, 'topic', 'PublishToTopicRequest');
    eventstream_rpc_utils.validateValueAsUnion(value.publishMessage, _PublishMessagePropertyValidators);
}
exports.validatePublishToTopicRequest = validatePublishToTopicRequest;
function validateInvalidCredentialError(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'InvalidCredentialError');
}
exports.validateInvalidCredentialError = validateInvalidCredentialError;
function validateGetClientDeviceAuthTokenResponse(value) {
    eventstream_rpc_utils.validateValueAsString(value.clientDeviceAuthToken, 'clientDeviceAuthToken', 'GetClientDeviceAuthTokenResponse');
}
exports.validateGetClientDeviceAuthTokenResponse = validateGetClientDeviceAuthTokenResponse;
function validateGetClientDeviceAuthTokenRequest(value) {
    eventstream_rpc_utils.validateValueAsUnion(value.credential, _CredentialDocumentPropertyValidators);
}
exports.validateGetClientDeviceAuthTokenRequest = validateGetClientDeviceAuthTokenRequest;
function validateGetComponentDetailsResponse(value) {
    eventstream_rpc_utils.validateValueAsObject(value.componentDetails, validateComponentDetails, 'componentDetails', 'GetComponentDetailsResponse');
}
exports.validateGetComponentDetailsResponse = validateGetComponentDetailsResponse;
function validateGetComponentDetailsRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.componentName, 'componentName', 'GetComponentDetailsRequest');
}
exports.validateGetComponentDetailsRequest = validateGetComponentDetailsRequest;
function validateSubscribeToTopicResponse(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.topicName, 'topicName', 'SubscribeToTopicResponse');
}
exports.validateSubscribeToTopicResponse = validateSubscribeToTopicResponse;
function validateSubscribeToTopicRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.topic, 'topic', 'SubscribeToTopicRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.receiveMode, 'receiveMode', 'SubscribeToTopicRequest');
}
exports.validateSubscribeToTopicRequest = validateSubscribeToTopicRequest;
function validateGetConfigurationResponse(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.componentName, 'componentName', 'GetConfigurationResponse');
    eventstream_rpc_utils.validateValueAsOptionalAny(value.value, 'value', 'GetConfigurationResponse');
}
exports.validateGetConfigurationResponse = validateGetConfigurationResponse;
function validateGetConfigurationRequest(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.componentName, 'componentName', 'GetConfigurationRequest');
    eventstream_rpc_utils.validateValueAsArray(value.keyPath, eventstream_rpc_utils.validateValueAsString, 'keyPath', 'GetConfigurationRequest');
}
exports.validateGetConfigurationRequest = validateGetConfigurationRequest;
function validateSubscribeToValidateConfigurationUpdatesResponse(value) {
}
exports.validateSubscribeToValidateConfigurationUpdatesResponse = validateSubscribeToValidateConfigurationUpdatesResponse;
function validateSubscribeToValidateConfigurationUpdatesRequest(value) {
}
exports.validateSubscribeToValidateConfigurationUpdatesRequest = validateSubscribeToValidateConfigurationUpdatesRequest;
function validateDeferComponentUpdateResponse(value) {
}
exports.validateDeferComponentUpdateResponse = validateDeferComponentUpdateResponse;
function validateDeferComponentUpdateRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.deploymentId, 'deploymentId', 'DeferComponentUpdateRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.message, 'message', 'DeferComponentUpdateRequest');
    eventstream_rpc_utils.validateValueAsOptionalInteger(value.recheckAfterMs, 'recheckAfterMs', 'DeferComponentUpdateRequest');
}
exports.validateDeferComponentUpdateRequest = validateDeferComponentUpdateRequest;
function validatePutComponentMetricResponse(value) {
}
exports.validatePutComponentMetricResponse = validatePutComponentMetricResponse;
function validatePutComponentMetricRequest(value) {
    eventstream_rpc_utils.validateValueAsArray(value.metrics, validateMetric, 'metrics', 'PutComponentMetricRequest');
}
exports.validatePutComponentMetricRequest = validatePutComponentMetricRequest;
function validateDeleteThingShadowResponse(value) {
    eventstream_rpc_utils.validateValueAsBlob(value.payload, 'payload', 'DeleteThingShadowResponse');
}
exports.validateDeleteThingShadowResponse = validateDeleteThingShadowResponse;
function validateDeleteThingShadowRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.thingName, 'thingName', 'DeleteThingShadowRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.shadowName, 'shadowName', 'DeleteThingShadowRequest');
}
exports.validateDeleteThingShadowRequest = validateDeleteThingShadowRequest;
function validateSubscribeToConfigurationUpdateResponse(value) {
}
exports.validateSubscribeToConfigurationUpdateResponse = validateSubscribeToConfigurationUpdateResponse;
function validateSubscribeToConfigurationUpdateRequest(value) {
    eventstream_rpc_utils.validateValueAsOptionalString(value.componentName, 'componentName', 'SubscribeToConfigurationUpdateRequest');
    eventstream_rpc_utils.validateValueAsArray(value.keyPath, eventstream_rpc_utils.validateValueAsString, 'keyPath', 'SubscribeToConfigurationUpdateRequest');
}
exports.validateSubscribeToConfigurationUpdateRequest = validateSubscribeToConfigurationUpdateRequest;
function validatePublishToIoTCoreResponse(value) {
}
exports.validatePublishToIoTCoreResponse = validatePublishToIoTCoreResponse;
function validatePublishToIoTCoreRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.topicName, 'topicName', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsString(value.qos, 'qos', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalBlob(value.payload, 'payload', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalBoolean(value.retain, 'retain', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalArray(value.userProperties, validateUserProperty, 'userProperties', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalInteger(value.messageExpiryIntervalSeconds, 'messageExpiryIntervalSeconds', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalBlob(value.correlationData, 'correlationData', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.responseTopic, 'responseTopic', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.payloadFormat, 'payloadFormat', 'PublishToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsOptionalString(value.contentType, 'contentType', 'PublishToIoTCoreRequest');
}
exports.validatePublishToIoTCoreRequest = validatePublishToIoTCoreRequest;
function validateResumeComponentResponse(value) {
}
exports.validateResumeComponentResponse = validateResumeComponentResponse;
function validateResumeComponentRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.componentName, 'componentName', 'ResumeComponentRequest');
}
exports.validateResumeComponentRequest = validateResumeComponentRequest;
function validateSubscribeToIoTCoreResponse(value) {
}
exports.validateSubscribeToIoTCoreResponse = validateSubscribeToIoTCoreResponse;
function validateSubscribeToIoTCoreRequest(value) {
    eventstream_rpc_utils.validateValueAsString(value.topicName, 'topicName', 'SubscribeToIoTCoreRequest');
    eventstream_rpc_utils.validateValueAsString(value.qos, 'qos', 'SubscribeToIoTCoreRequest');
}
exports.validateSubscribeToIoTCoreRequest = validateSubscribeToIoTCoreRequest;
function deserializeUserProperty(value) {
    return value;
}
exports.deserializeUserProperty = deserializeUserProperty;
function deserializeSystemResourceLimits(value) {
    return value;
}
exports.deserializeSystemResourceLimits = deserializeSystemResourceLimits;
function deserializeDeploymentStatusDetails(value) {
    return value;
}
exports.deserializeDeploymentStatusDetails = deserializeDeploymentStatusDetails;
function deserializeMessageContext(value) {
    return value;
}
exports.deserializeMessageContext = deserializeMessageContext;
function deserializeRunWithInfo(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'systemResourceLimits', value.systemResourceLimits, deserializeSystemResourceLimits);
    return value;
}
exports.deserializeRunWithInfo = deserializeRunWithInfo;
function deserializeLocalDeployment(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'deploymentStatusDetails', value.deploymentStatusDetails, deserializeDeploymentStatusDetails);
    return value;
}
exports.deserializeLocalDeployment = deserializeLocalDeployment;
function deserializePostComponentUpdateEvent(value) {
    return value;
}
exports.deserializePostComponentUpdateEvent = deserializePostComponentUpdateEvent;
function deserializePreComponentUpdateEvent(value) {
    return value;
}
exports.deserializePreComponentUpdateEvent = deserializePreComponentUpdateEvent;
function deserializeComponentDetails(value) {
    return value;
}
exports.deserializeComponentDetails = deserializeComponentDetails;
function deserializeCertificateUpdate(value) {
    return value;
}
exports.deserializeCertificateUpdate = deserializeCertificateUpdate;
function deserializeBinaryMessage(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'message', value.message, eventstream_rpc_utils.transformStringAsPayload);
    eventstream_rpc_utils.setDefinedProperty(value, 'context', value.context, deserializeMessageContext);
    return value;
}
exports.deserializeBinaryMessage = deserializeBinaryMessage;
function deserializeJsonMessage(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'context', value.context, deserializeMessageContext);
    return value;
}
exports.deserializeJsonMessage = deserializeJsonMessage;
function deserializeMQTTCredential(value) {
    return value;
}
exports.deserializeMQTTCredential = deserializeMQTTCredential;
function deserializeValidateConfigurationUpdateEvent(value) {
    return value;
}
exports.deserializeValidateConfigurationUpdateEvent = deserializeValidateConfigurationUpdateEvent;
function deserializeMetric(value) {
    return value;
}
exports.deserializeMetric = deserializeMetric;
function deserializeConfigurationUpdateEvent(value) {
    return value;
}
exports.deserializeConfigurationUpdateEvent = deserializeConfigurationUpdateEvent;
function deserializeMQTTMessage(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'payload', value.payload, eventstream_rpc_utils.transformStringAsPayload);
    eventstream_rpc_utils.setDefinedArrayProperty(value, 'userProperties', value.userProperties, deserializeUserProperty);
    eventstream_rpc_utils.setDefinedProperty(value, 'correlationData', value.correlationData, eventstream_rpc_utils.transformStringAsPayload);
    return value;
}
exports.deserializeMQTTMessage = deserializeMQTTMessage;
function deserializeComponentUpdatePolicyEvents(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'preUpdateEvent', value.preUpdateEvent, deserializePreComponentUpdateEvent);
    eventstream_rpc_utils.setDefinedProperty(value, 'postUpdateEvent', value.postUpdateEvent, deserializePostComponentUpdateEvent);
    return value;
}
exports.deserializeComponentUpdatePolicyEvents = deserializeComponentUpdatePolicyEvents;
function deserializeSecretValue(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'secretBinary', value.secretBinary, eventstream_rpc_utils.transformStringAsPayload);
    return value;
}
exports.deserializeSecretValue = deserializeSecretValue;
function deserializeConfigurationValidityReport(value) {
    return value;
}
exports.deserializeConfigurationValidityReport = deserializeConfigurationValidityReport;
function deserializeClientDeviceCredential(value) {
    return value;
}
exports.deserializeClientDeviceCredential = deserializeClientDeviceCredential;
function deserializeCertificateUpdateEvent(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'certificateUpdate', value.certificateUpdate, deserializeCertificateUpdate);
    return value;
}
exports.deserializeCertificateUpdateEvent = deserializeCertificateUpdateEvent;
function deserializeCertificateOptions(value) {
    return value;
}
exports.deserializeCertificateOptions = deserializeCertificateOptions;
function deserializePublishMessage(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'jsonMessage', value.jsonMessage, deserializeJsonMessage);
    eventstream_rpc_utils.setDefinedProperty(value, 'binaryMessage', value.binaryMessage, deserializeBinaryMessage);
    return value;
}
exports.deserializePublishMessage = deserializePublishMessage;
function deserializeCredentialDocument(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'mqttCredential', value.mqttCredential, deserializeMQTTCredential);
    return value;
}
exports.deserializeCredentialDocument = deserializeCredentialDocument;
function deserializeSubscriptionResponseMessage(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'jsonMessage', value.jsonMessage, deserializeJsonMessage);
    eventstream_rpc_utils.setDefinedProperty(value, 'binaryMessage', value.binaryMessage, deserializeBinaryMessage);
    return value;
}
exports.deserializeSubscriptionResponseMessage = deserializeSubscriptionResponseMessage;
function deserializeValidateConfigurationUpdateEvents(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'validateConfigurationUpdateEvent', value.validateConfigurationUpdateEvent, deserializeValidateConfigurationUpdateEvent);
    return value;
}
exports.deserializeValidateConfigurationUpdateEvents = deserializeValidateConfigurationUpdateEvents;
function deserializeConfigurationUpdateEvents(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'configurationUpdateEvent', value.configurationUpdateEvent, deserializeConfigurationUpdateEvent);
    return value;
}
exports.deserializeConfigurationUpdateEvents = deserializeConfigurationUpdateEvents;
function deserializeIoTCoreMessage(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'message', value.message, deserializeMQTTMessage);
    return value;
}
exports.deserializeIoTCoreMessage = deserializeIoTCoreMessage;
function deserializeInvalidArgumentsError(value) {
    return value;
}
exports.deserializeInvalidArgumentsError = deserializeInvalidArgumentsError;
function deserializeInvalidArtifactsDirectoryPathError(value) {
    return value;
}
exports.deserializeInvalidArtifactsDirectoryPathError = deserializeInvalidArtifactsDirectoryPathError;
function deserializeInvalidRecipeDirectoryPathError(value) {
    return value;
}
exports.deserializeInvalidRecipeDirectoryPathError = deserializeInvalidRecipeDirectoryPathError;
function deserializeServiceError(value) {
    return value;
}
exports.deserializeServiceError = deserializeServiceError;
function deserializeCreateLocalDeploymentResponse(value) {
    return value;
}
exports.deserializeCreateLocalDeploymentResponse = deserializeCreateLocalDeploymentResponse;
function deserializeCreateLocalDeploymentRequest(value) {
    eventstream_rpc_utils.setDefinedObjectPropertyAsMap(value, 'componentToRunWithInfo', value.componentToRunWithInfo, undefined, deserializeRunWithInfo);
    return value;
}
exports.deserializeCreateLocalDeploymentRequest = deserializeCreateLocalDeploymentRequest;
function deserializeResourceNotFoundError(value) {
    return value;
}
exports.deserializeResourceNotFoundError = deserializeResourceNotFoundError;
function deserializeUnauthorizedError(value) {
    return value;
}
exports.deserializeUnauthorizedError = deserializeUnauthorizedError;
function deserializePauseComponentResponse(value) {
    return value;
}
exports.deserializePauseComponentResponse = deserializePauseComponentResponse;
function deserializePauseComponentRequest(value) {
    return value;
}
exports.deserializePauseComponentRequest = deserializePauseComponentRequest;
function deserializeComponentNotFoundError(value) {
    return value;
}
exports.deserializeComponentNotFoundError = deserializeComponentNotFoundError;
function deserializeStopComponentResponse(value) {
    return value;
}
exports.deserializeStopComponentResponse = deserializeStopComponentResponse;
function deserializeStopComponentRequest(value) {
    return value;
}
exports.deserializeStopComponentRequest = deserializeStopComponentRequest;
function deserializeListLocalDeploymentsResponse(value) {
    eventstream_rpc_utils.setDefinedArrayProperty(value, 'localDeployments', value.localDeployments, deserializeLocalDeployment);
    return value;
}
exports.deserializeListLocalDeploymentsResponse = deserializeListLocalDeploymentsResponse;
function deserializeListLocalDeploymentsRequest(value) {
    return value;
}
exports.deserializeListLocalDeploymentsRequest = deserializeListLocalDeploymentsRequest;
function deserializeSubscribeToComponentUpdatesResponse(value) {
    return value;
}
exports.deserializeSubscribeToComponentUpdatesResponse = deserializeSubscribeToComponentUpdatesResponse;
function deserializeSubscribeToComponentUpdatesRequest(value) {
    return value;
}
exports.deserializeSubscribeToComponentUpdatesRequest = deserializeSubscribeToComponentUpdatesRequest;
function deserializeListNamedShadowsForThingResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'timestamp', value.timestamp, eventstream_rpc_utils.transformNumberAsDate);
    return value;
}
exports.deserializeListNamedShadowsForThingResponse = deserializeListNamedShadowsForThingResponse;
function deserializeListNamedShadowsForThingRequest(value) {
    return value;
}
exports.deserializeListNamedShadowsForThingRequest = deserializeListNamedShadowsForThingRequest;
function deserializeCancelLocalDeploymentResponse(value) {
    return value;
}
exports.deserializeCancelLocalDeploymentResponse = deserializeCancelLocalDeploymentResponse;
function deserializeCancelLocalDeploymentRequest(value) {
    return value;
}
exports.deserializeCancelLocalDeploymentRequest = deserializeCancelLocalDeploymentRequest;
function deserializeUpdateStateResponse(value) {
    return value;
}
exports.deserializeUpdateStateResponse = deserializeUpdateStateResponse;
function deserializeUpdateStateRequest(value) {
    return value;
}
exports.deserializeUpdateStateRequest = deserializeUpdateStateRequest;
function deserializeGetSecretValueResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'secretValue', value.secretValue, deserializeSecretValue);
    return value;
}
exports.deserializeGetSecretValueResponse = deserializeGetSecretValueResponse;
function deserializeGetSecretValueRequest(value) {
    return value;
}
exports.deserializeGetSecretValueRequest = deserializeGetSecretValueRequest;
function deserializeGetLocalDeploymentStatusResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'deployment', value.deployment, deserializeLocalDeployment);
    return value;
}
exports.deserializeGetLocalDeploymentStatusResponse = deserializeGetLocalDeploymentStatusResponse;
function deserializeGetLocalDeploymentStatusRequest(value) {
    return value;
}
exports.deserializeGetLocalDeploymentStatusRequest = deserializeGetLocalDeploymentStatusRequest;
function deserializeRestartComponentResponse(value) {
    return value;
}
exports.deserializeRestartComponentResponse = deserializeRestartComponentResponse;
function deserializeRestartComponentRequest(value) {
    return value;
}
exports.deserializeRestartComponentRequest = deserializeRestartComponentRequest;
function deserializeInvalidTokenError(value) {
    return value;
}
exports.deserializeInvalidTokenError = deserializeInvalidTokenError;
function deserializeValidateAuthorizationTokenResponse(value) {
    return value;
}
exports.deserializeValidateAuthorizationTokenResponse = deserializeValidateAuthorizationTokenResponse;
function deserializeValidateAuthorizationTokenRequest(value) {
    return value;
}
exports.deserializeValidateAuthorizationTokenRequest = deserializeValidateAuthorizationTokenRequest;
function deserializeFailedUpdateConditionCheckError(value) {
    return value;
}
exports.deserializeFailedUpdateConditionCheckError = deserializeFailedUpdateConditionCheckError;
function deserializeConflictError(value) {
    return value;
}
exports.deserializeConflictError = deserializeConflictError;
function deserializeUpdateConfigurationResponse(value) {
    return value;
}
exports.deserializeUpdateConfigurationResponse = deserializeUpdateConfigurationResponse;
function deserializeUpdateConfigurationRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'timestamp', value.timestamp, eventstream_rpc_utils.transformNumberAsDate);
    return value;
}
exports.deserializeUpdateConfigurationRequest = deserializeUpdateConfigurationRequest;
function deserializeUpdateThingShadowResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'payload', value.payload, eventstream_rpc_utils.transformStringAsPayload);
    return value;
}
exports.deserializeUpdateThingShadowResponse = deserializeUpdateThingShadowResponse;
function deserializeUpdateThingShadowRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'payload', value.payload, eventstream_rpc_utils.transformStringAsPayload);
    return value;
}
exports.deserializeUpdateThingShadowRequest = deserializeUpdateThingShadowRequest;
function deserializeSendConfigurationValidityReportResponse(value) {
    return value;
}
exports.deserializeSendConfigurationValidityReportResponse = deserializeSendConfigurationValidityReportResponse;
function deserializeSendConfigurationValidityReportRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'configurationValidityReport', value.configurationValidityReport, deserializeConfigurationValidityReport);
    return value;
}
exports.deserializeSendConfigurationValidityReportRequest = deserializeSendConfigurationValidityReportRequest;
function deserializeGetThingShadowResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'payload', value.payload, eventstream_rpc_utils.transformStringAsPayload);
    return value;
}
exports.deserializeGetThingShadowResponse = deserializeGetThingShadowResponse;
function deserializeGetThingShadowRequest(value) {
    return value;
}
exports.deserializeGetThingShadowRequest = deserializeGetThingShadowRequest;
function deserializeCreateDebugPasswordResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'passwordExpiration', value.passwordExpiration, eventstream_rpc_utils.transformNumberAsDate);
    return value;
}
exports.deserializeCreateDebugPasswordResponse = deserializeCreateDebugPasswordResponse;
function deserializeCreateDebugPasswordRequest(value) {
    return value;
}
exports.deserializeCreateDebugPasswordRequest = deserializeCreateDebugPasswordRequest;
function deserializeListComponentsResponse(value) {
    eventstream_rpc_utils.setDefinedArrayProperty(value, 'components', value.components, deserializeComponentDetails);
    return value;
}
exports.deserializeListComponentsResponse = deserializeListComponentsResponse;
function deserializeListComponentsRequest(value) {
    return value;
}
exports.deserializeListComponentsRequest = deserializeListComponentsRequest;
function deserializeInvalidClientDeviceAuthTokenError(value) {
    return value;
}
exports.deserializeInvalidClientDeviceAuthTokenError = deserializeInvalidClientDeviceAuthTokenError;
function deserializeAuthorizeClientDeviceActionResponse(value) {
    return value;
}
exports.deserializeAuthorizeClientDeviceActionResponse = deserializeAuthorizeClientDeviceActionResponse;
function deserializeAuthorizeClientDeviceActionRequest(value) {
    return value;
}
exports.deserializeAuthorizeClientDeviceActionRequest = deserializeAuthorizeClientDeviceActionRequest;
function deserializeVerifyClientDeviceIdentityResponse(value) {
    return value;
}
exports.deserializeVerifyClientDeviceIdentityResponse = deserializeVerifyClientDeviceIdentityResponse;
function deserializeVerifyClientDeviceIdentityRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'credential', value.credential, deserializeClientDeviceCredential);
    return value;
}
exports.deserializeVerifyClientDeviceIdentityRequest = deserializeVerifyClientDeviceIdentityRequest;
function deserializeSubscribeToCertificateUpdatesResponse(value) {
    return value;
}
exports.deserializeSubscribeToCertificateUpdatesResponse = deserializeSubscribeToCertificateUpdatesResponse;
function deserializeSubscribeToCertificateUpdatesRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'certificateOptions', value.certificateOptions, deserializeCertificateOptions);
    return value;
}
exports.deserializeSubscribeToCertificateUpdatesRequest = deserializeSubscribeToCertificateUpdatesRequest;
function deserializePublishToTopicResponse(value) {
    return value;
}
exports.deserializePublishToTopicResponse = deserializePublishToTopicResponse;
function deserializePublishToTopicRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'publishMessage', value.publishMessage, deserializePublishMessage);
    return value;
}
exports.deserializePublishToTopicRequest = deserializePublishToTopicRequest;
function deserializeInvalidCredentialError(value) {
    return value;
}
exports.deserializeInvalidCredentialError = deserializeInvalidCredentialError;
function deserializeGetClientDeviceAuthTokenResponse(value) {
    return value;
}
exports.deserializeGetClientDeviceAuthTokenResponse = deserializeGetClientDeviceAuthTokenResponse;
function deserializeGetClientDeviceAuthTokenRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'credential', value.credential, deserializeCredentialDocument);
    return value;
}
exports.deserializeGetClientDeviceAuthTokenRequest = deserializeGetClientDeviceAuthTokenRequest;
function deserializeGetComponentDetailsResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'componentDetails', value.componentDetails, deserializeComponentDetails);
    return value;
}
exports.deserializeGetComponentDetailsResponse = deserializeGetComponentDetailsResponse;
function deserializeGetComponentDetailsRequest(value) {
    return value;
}
exports.deserializeGetComponentDetailsRequest = deserializeGetComponentDetailsRequest;
function deserializeSubscribeToTopicResponse(value) {
    return value;
}
exports.deserializeSubscribeToTopicResponse = deserializeSubscribeToTopicResponse;
function deserializeSubscribeToTopicRequest(value) {
    return value;
}
exports.deserializeSubscribeToTopicRequest = deserializeSubscribeToTopicRequest;
function deserializeGetConfigurationResponse(value) {
    return value;
}
exports.deserializeGetConfigurationResponse = deserializeGetConfigurationResponse;
function deserializeGetConfigurationRequest(value) {
    return value;
}
exports.deserializeGetConfigurationRequest = deserializeGetConfigurationRequest;
function deserializeSubscribeToValidateConfigurationUpdatesResponse(value) {
    return value;
}
exports.deserializeSubscribeToValidateConfigurationUpdatesResponse = deserializeSubscribeToValidateConfigurationUpdatesResponse;
function deserializeSubscribeToValidateConfigurationUpdatesRequest(value) {
    return value;
}
exports.deserializeSubscribeToValidateConfigurationUpdatesRequest = deserializeSubscribeToValidateConfigurationUpdatesRequest;
function deserializeDeferComponentUpdateResponse(value) {
    return value;
}
exports.deserializeDeferComponentUpdateResponse = deserializeDeferComponentUpdateResponse;
function deserializeDeferComponentUpdateRequest(value) {
    return value;
}
exports.deserializeDeferComponentUpdateRequest = deserializeDeferComponentUpdateRequest;
function deserializePutComponentMetricResponse(value) {
    return value;
}
exports.deserializePutComponentMetricResponse = deserializePutComponentMetricResponse;
function deserializePutComponentMetricRequest(value) {
    eventstream_rpc_utils.setDefinedArrayProperty(value, 'metrics', value.metrics, deserializeMetric);
    return value;
}
exports.deserializePutComponentMetricRequest = deserializePutComponentMetricRequest;
function deserializeDeleteThingShadowResponse(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'payload', value.payload, eventstream_rpc_utils.transformStringAsPayload);
    return value;
}
exports.deserializeDeleteThingShadowResponse = deserializeDeleteThingShadowResponse;
function deserializeDeleteThingShadowRequest(value) {
    return value;
}
exports.deserializeDeleteThingShadowRequest = deserializeDeleteThingShadowRequest;
function deserializeSubscribeToConfigurationUpdateResponse(value) {
    return value;
}
exports.deserializeSubscribeToConfigurationUpdateResponse = deserializeSubscribeToConfigurationUpdateResponse;
function deserializeSubscribeToConfigurationUpdateRequest(value) {
    return value;
}
exports.deserializeSubscribeToConfigurationUpdateRequest = deserializeSubscribeToConfigurationUpdateRequest;
function deserializePublishToIoTCoreResponse(value) {
    return value;
}
exports.deserializePublishToIoTCoreResponse = deserializePublishToIoTCoreResponse;
function deserializePublishToIoTCoreRequest(value) {
    eventstream_rpc_utils.setDefinedProperty(value, 'payload', value.payload, eventstream_rpc_utils.transformStringAsPayload);
    eventstream_rpc_utils.setDefinedArrayProperty(value, 'userProperties', value.userProperties, deserializeUserProperty);
    eventstream_rpc_utils.setDefinedProperty(value, 'correlationData', value.correlationData, eventstream_rpc_utils.transformStringAsPayload);
    return value;
}
exports.deserializePublishToIoTCoreRequest = deserializePublishToIoTCoreRequest;
function deserializeResumeComponentResponse(value) {
    return value;
}
exports.deserializeResumeComponentResponse = deserializeResumeComponentResponse;
function deserializeResumeComponentRequest(value) {
    return value;
}
exports.deserializeResumeComponentRequest = deserializeResumeComponentRequest;
function deserializeSubscribeToIoTCoreResponse(value) {
    return value;
}
exports.deserializeSubscribeToIoTCoreResponse = deserializeSubscribeToIoTCoreResponse;
function deserializeSubscribeToIoTCoreRequest(value) {
    return value;
}
exports.deserializeSubscribeToIoTCoreRequest = deserializeSubscribeToIoTCoreRequest;
function deserializeEventstreamMessageToConflictError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeConflictError(response);
}
exports.deserializeEventstreamMessageToConflictError = deserializeEventstreamMessageToConflictError;
function deserializeEventstreamMessageToCreateDebugPasswordResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeCreateDebugPasswordResponse(response);
}
exports.deserializeEventstreamMessageToCreateDebugPasswordResponse = deserializeEventstreamMessageToCreateDebugPasswordResponse;
function deserializeEventstreamMessageToSubscriptionResponseMessage(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSubscriptionResponseMessage(response);
}
exports.deserializeEventstreamMessageToSubscriptionResponseMessage = deserializeEventstreamMessageToSubscriptionResponseMessage;
function deserializeEventstreamMessageToFailedUpdateConditionCheckError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeFailedUpdateConditionCheckError(response);
}
exports.deserializeEventstreamMessageToFailedUpdateConditionCheckError = deserializeEventstreamMessageToFailedUpdateConditionCheckError;
function deserializeEventstreamMessageToListNamedShadowsForThingResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeListNamedShadowsForThingResponse(response);
}
exports.deserializeEventstreamMessageToListNamedShadowsForThingResponse = deserializeEventstreamMessageToListNamedShadowsForThingResponse;
function deserializeEventstreamMessageToComponentNotFoundError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeComponentNotFoundError(response);
}
exports.deserializeEventstreamMessageToComponentNotFoundError = deserializeEventstreamMessageToComponentNotFoundError;
function deserializeEventstreamMessageToCertificateUpdateEvent(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeCertificateUpdateEvent(response);
}
exports.deserializeEventstreamMessageToCertificateUpdateEvent = deserializeEventstreamMessageToCertificateUpdateEvent;
function deserializeEventstreamMessageToGetSecretValueResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeGetSecretValueResponse(response);
}
exports.deserializeEventstreamMessageToGetSecretValueResponse = deserializeEventstreamMessageToGetSecretValueResponse;
function deserializeEventstreamMessageToSubscribeToIoTCoreResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSubscribeToIoTCoreResponse(response);
}
exports.deserializeEventstreamMessageToSubscribeToIoTCoreResponse = deserializeEventstreamMessageToSubscribeToIoTCoreResponse;
function deserializeEventstreamMessageToInvalidRecipeDirectoryPathError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeInvalidRecipeDirectoryPathError(response);
}
exports.deserializeEventstreamMessageToInvalidRecipeDirectoryPathError = deserializeEventstreamMessageToInvalidRecipeDirectoryPathError;
function deserializeEventstreamMessageToListLocalDeploymentsResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeListLocalDeploymentsResponse(response);
}
exports.deserializeEventstreamMessageToListLocalDeploymentsResponse = deserializeEventstreamMessageToListLocalDeploymentsResponse;
function deserializeEventstreamMessageToResumeComponentResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeResumeComponentResponse(response);
}
exports.deserializeEventstreamMessageToResumeComponentResponse = deserializeEventstreamMessageToResumeComponentResponse;
function deserializeEventstreamMessageToInvalidArgumentsError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeInvalidArgumentsError(response);
}
exports.deserializeEventstreamMessageToInvalidArgumentsError = deserializeEventstreamMessageToInvalidArgumentsError;
function deserializeEventstreamMessageToGetComponentDetailsResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeGetComponentDetailsResponse(response);
}
exports.deserializeEventstreamMessageToGetComponentDetailsResponse = deserializeEventstreamMessageToGetComponentDetailsResponse;
function deserializeEventstreamMessageToPutComponentMetricResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializePutComponentMetricResponse(response);
}
exports.deserializeEventstreamMessageToPutComponentMetricResponse = deserializeEventstreamMessageToPutComponentMetricResponse;
function deserializeEventstreamMessageToComponentUpdatePolicyEvents(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeComponentUpdatePolicyEvents(response);
}
exports.deserializeEventstreamMessageToComponentUpdatePolicyEvents = deserializeEventstreamMessageToComponentUpdatePolicyEvents;
function deserializeEventstreamMessageToIoTCoreMessage(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeIoTCoreMessage(response);
}
exports.deserializeEventstreamMessageToIoTCoreMessage = deserializeEventstreamMessageToIoTCoreMessage;
function deserializeEventstreamMessageToUpdateStateResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeUpdateStateResponse(response);
}
exports.deserializeEventstreamMessageToUpdateStateResponse = deserializeEventstreamMessageToUpdateStateResponse;
function deserializeEventstreamMessageToDeferComponentUpdateResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeDeferComponentUpdateResponse(response);
}
exports.deserializeEventstreamMessageToDeferComponentUpdateResponse = deserializeEventstreamMessageToDeferComponentUpdateResponse;
function deserializeEventstreamMessageToListComponentsResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeListComponentsResponse(response);
}
exports.deserializeEventstreamMessageToListComponentsResponse = deserializeEventstreamMessageToListComponentsResponse;
function deserializeEventstreamMessageToSubscribeToComponentUpdatesResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSubscribeToComponentUpdatesResponse(response);
}
exports.deserializeEventstreamMessageToSubscribeToComponentUpdatesResponse = deserializeEventstreamMessageToSubscribeToComponentUpdatesResponse;
function deserializeEventstreamMessageToVerifyClientDeviceIdentityResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeVerifyClientDeviceIdentityResponse(response);
}
exports.deserializeEventstreamMessageToVerifyClientDeviceIdentityResponse = deserializeEventstreamMessageToVerifyClientDeviceIdentityResponse;
function deserializeEventstreamMessageToResourceNotFoundError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeResourceNotFoundError(response);
}
exports.deserializeEventstreamMessageToResourceNotFoundError = deserializeEventstreamMessageToResourceNotFoundError;
function deserializeEventstreamMessageToInvalidArtifactsDirectoryPathError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeInvalidArtifactsDirectoryPathError(response);
}
exports.deserializeEventstreamMessageToInvalidArtifactsDirectoryPathError = deserializeEventstreamMessageToInvalidArtifactsDirectoryPathError;
function deserializeEventstreamMessageToSendConfigurationValidityReportResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSendConfigurationValidityReportResponse(response);
}
exports.deserializeEventstreamMessageToSendConfigurationValidityReportResponse = deserializeEventstreamMessageToSendConfigurationValidityReportResponse;
function deserializeEventstreamMessageToGetThingShadowResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeGetThingShadowResponse(response);
}
exports.deserializeEventstreamMessageToGetThingShadowResponse = deserializeEventstreamMessageToGetThingShadowResponse;
function deserializeEventstreamMessageToInvalidClientDeviceAuthTokenError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeInvalidClientDeviceAuthTokenError(response);
}
exports.deserializeEventstreamMessageToInvalidClientDeviceAuthTokenError = deserializeEventstreamMessageToInvalidClientDeviceAuthTokenError;
function deserializeEventstreamMessageToPublishToIoTCoreResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializePublishToIoTCoreResponse(response);
}
exports.deserializeEventstreamMessageToPublishToIoTCoreResponse = deserializeEventstreamMessageToPublishToIoTCoreResponse;
function deserializeEventstreamMessageToSubscribeToTopicResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSubscribeToTopicResponse(response);
}
exports.deserializeEventstreamMessageToSubscribeToTopicResponse = deserializeEventstreamMessageToSubscribeToTopicResponse;
function deserializeEventstreamMessageToInvalidTokenError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeInvalidTokenError(response);
}
exports.deserializeEventstreamMessageToInvalidTokenError = deserializeEventstreamMessageToInvalidTokenError;
function deserializeEventstreamMessageToGetClientDeviceAuthTokenResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeGetClientDeviceAuthTokenResponse(response);
}
exports.deserializeEventstreamMessageToGetClientDeviceAuthTokenResponse = deserializeEventstreamMessageToGetClientDeviceAuthTokenResponse;
function deserializeEventstreamMessageToCreateLocalDeploymentResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeCreateLocalDeploymentResponse(response);
}
exports.deserializeEventstreamMessageToCreateLocalDeploymentResponse = deserializeEventstreamMessageToCreateLocalDeploymentResponse;
function deserializeEventstreamMessageToPublishToTopicResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializePublishToTopicResponse(response);
}
exports.deserializeEventstreamMessageToPublishToTopicResponse = deserializeEventstreamMessageToPublishToTopicResponse;
function deserializeEventstreamMessageToValidateAuthorizationTokenResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeValidateAuthorizationTokenResponse(response);
}
exports.deserializeEventstreamMessageToValidateAuthorizationTokenResponse = deserializeEventstreamMessageToValidateAuthorizationTokenResponse;
function deserializeEventstreamMessageToUpdateThingShadowResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeUpdateThingShadowResponse(response);
}
exports.deserializeEventstreamMessageToUpdateThingShadowResponse = deserializeEventstreamMessageToUpdateThingShadowResponse;
function deserializeEventstreamMessageToAuthorizeClientDeviceActionResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeAuthorizeClientDeviceActionResponse(response);
}
exports.deserializeEventstreamMessageToAuthorizeClientDeviceActionResponse = deserializeEventstreamMessageToAuthorizeClientDeviceActionResponse;
function deserializeEventstreamMessageToGetConfigurationResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeGetConfigurationResponse(response);
}
exports.deserializeEventstreamMessageToGetConfigurationResponse = deserializeEventstreamMessageToGetConfigurationResponse;
function deserializeEventstreamMessageToInvalidCredentialError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeInvalidCredentialError(response);
}
exports.deserializeEventstreamMessageToInvalidCredentialError = deserializeEventstreamMessageToInvalidCredentialError;
function deserializeEventstreamMessageToGetLocalDeploymentStatusResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeGetLocalDeploymentStatusResponse(response);
}
exports.deserializeEventstreamMessageToGetLocalDeploymentStatusResponse = deserializeEventstreamMessageToGetLocalDeploymentStatusResponse;
function deserializeEventstreamMessageToPauseComponentResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializePauseComponentResponse(response);
}
exports.deserializeEventstreamMessageToPauseComponentResponse = deserializeEventstreamMessageToPauseComponentResponse;
function deserializeEventstreamMessageToUnauthorizedError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeUnauthorizedError(response);
}
exports.deserializeEventstreamMessageToUnauthorizedError = deserializeEventstreamMessageToUnauthorizedError;
function deserializeEventstreamMessageToSubscribeToCertificateUpdatesResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSubscribeToCertificateUpdatesResponse(response);
}
exports.deserializeEventstreamMessageToSubscribeToCertificateUpdatesResponse = deserializeEventstreamMessageToSubscribeToCertificateUpdatesResponse;
function deserializeEventstreamMessageToUpdateConfigurationResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeUpdateConfigurationResponse(response);
}
exports.deserializeEventstreamMessageToUpdateConfigurationResponse = deserializeEventstreamMessageToUpdateConfigurationResponse;
function deserializeEventstreamMessageToRestartComponentResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeRestartComponentResponse(response);
}
exports.deserializeEventstreamMessageToRestartComponentResponse = deserializeEventstreamMessageToRestartComponentResponse;
function deserializeEventstreamMessageToDeleteThingShadowResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeDeleteThingShadowResponse(response);
}
exports.deserializeEventstreamMessageToDeleteThingShadowResponse = deserializeEventstreamMessageToDeleteThingShadowResponse;
function deserializeEventstreamMessageToSubscribeToConfigurationUpdateResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSubscribeToConfigurationUpdateResponse(response);
}
exports.deserializeEventstreamMessageToSubscribeToConfigurationUpdateResponse = deserializeEventstreamMessageToSubscribeToConfigurationUpdateResponse;
function deserializeEventstreamMessageToSubscribeToValidateConfigurationUpdatesResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeSubscribeToValidateConfigurationUpdatesResponse(response);
}
exports.deserializeEventstreamMessageToSubscribeToValidateConfigurationUpdatesResponse = deserializeEventstreamMessageToSubscribeToValidateConfigurationUpdatesResponse;
function deserializeEventstreamMessageToServiceError(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeServiceError(response);
}
exports.deserializeEventstreamMessageToServiceError = deserializeEventstreamMessageToServiceError;
function deserializeEventstreamMessageToConfigurationUpdateEvents(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeConfigurationUpdateEvents(response);
}
exports.deserializeEventstreamMessageToConfigurationUpdateEvents = deserializeEventstreamMessageToConfigurationUpdateEvents;
function deserializeEventstreamMessageToStopComponentResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeStopComponentResponse(response);
}
exports.deserializeEventstreamMessageToStopComponentResponse = deserializeEventstreamMessageToStopComponentResponse;
function deserializeEventstreamMessageToValidateConfigurationUpdateEvents(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeValidateConfigurationUpdateEvents(response);
}
exports.deserializeEventstreamMessageToValidateConfigurationUpdateEvents = deserializeEventstreamMessageToValidateConfigurationUpdateEvents;
function deserializeEventstreamMessageToCancelLocalDeploymentResponse(message) {
    const payload_text = (0, util_utf8_browser_1.toUtf8)(new Uint8Array(message.payload));
    let response = JSON.parse(payload_text);
    return deserializeCancelLocalDeploymentResponse(response);
}
exports.deserializeEventstreamMessageToCancelLocalDeploymentResponse = deserializeEventstreamMessageToCancelLocalDeploymentResponse;
function serializeGetComponentDetailsRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeGetComponentDetailsRequest(request))
    };
}
exports.serializeGetComponentDetailsRequestToEventstreamMessage = serializeGetComponentDetailsRequestToEventstreamMessage;
function serializePublishToTopicRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizePublishToTopicRequest(request))
    };
}
exports.serializePublishToTopicRequestToEventstreamMessage = serializePublishToTopicRequestToEventstreamMessage;
function serializeCreateDebugPasswordRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeCreateDebugPasswordRequest(request))
    };
}
exports.serializeCreateDebugPasswordRequestToEventstreamMessage = serializeCreateDebugPasswordRequestToEventstreamMessage;
function serializeUpdateThingShadowRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeUpdateThingShadowRequest(request))
    };
}
exports.serializeUpdateThingShadowRequestToEventstreamMessage = serializeUpdateThingShadowRequestToEventstreamMessage;
function serializeResumeComponentRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeResumeComponentRequest(request))
    };
}
exports.serializeResumeComponentRequestToEventstreamMessage = serializeResumeComponentRequestToEventstreamMessage;
function serializeStopComponentRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeStopComponentRequest(request))
    };
}
exports.serializeStopComponentRequestToEventstreamMessage = serializeStopComponentRequestToEventstreamMessage;
function serializeVerifyClientDeviceIdentityRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeVerifyClientDeviceIdentityRequest(request))
    };
}
exports.serializeVerifyClientDeviceIdentityRequestToEventstreamMessage = serializeVerifyClientDeviceIdentityRequestToEventstreamMessage;
function serializeAuthorizeClientDeviceActionRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeAuthorizeClientDeviceActionRequest(request))
    };
}
exports.serializeAuthorizeClientDeviceActionRequestToEventstreamMessage = serializeAuthorizeClientDeviceActionRequestToEventstreamMessage;
function serializeListLocalDeploymentsRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeListLocalDeploymentsRequest(request))
    };
}
exports.serializeListLocalDeploymentsRequestToEventstreamMessage = serializeListLocalDeploymentsRequestToEventstreamMessage;
function serializeSendConfigurationValidityReportRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeSendConfigurationValidityReportRequest(request))
    };
}
exports.serializeSendConfigurationValidityReportRequestToEventstreamMessage = serializeSendConfigurationValidityReportRequestToEventstreamMessage;
function serializeValidateAuthorizationTokenRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeValidateAuthorizationTokenRequest(request))
    };
}
exports.serializeValidateAuthorizationTokenRequestToEventstreamMessage = serializeValidateAuthorizationTokenRequestToEventstreamMessage;
function serializeGetClientDeviceAuthTokenRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeGetClientDeviceAuthTokenRequest(request))
    };
}
exports.serializeGetClientDeviceAuthTokenRequestToEventstreamMessage = serializeGetClientDeviceAuthTokenRequestToEventstreamMessage;
function serializePauseComponentRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizePauseComponentRequest(request))
    };
}
exports.serializePauseComponentRequestToEventstreamMessage = serializePauseComponentRequestToEventstreamMessage;
function serializePublishToIoTCoreRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizePublishToIoTCoreRequest(request))
    };
}
exports.serializePublishToIoTCoreRequestToEventstreamMessage = serializePublishToIoTCoreRequestToEventstreamMessage;
function serializeDeleteThingShadowRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeDeleteThingShadowRequest(request))
    };
}
exports.serializeDeleteThingShadowRequestToEventstreamMessage = serializeDeleteThingShadowRequestToEventstreamMessage;
function serializeGetConfigurationRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeGetConfigurationRequest(request))
    };
}
exports.serializeGetConfigurationRequestToEventstreamMessage = serializeGetConfigurationRequestToEventstreamMessage;
function serializeDeferComponentUpdateRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeDeferComponentUpdateRequest(request))
    };
}
exports.serializeDeferComponentUpdateRequestToEventstreamMessage = serializeDeferComponentUpdateRequestToEventstreamMessage;
function serializeGetSecretValueRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeGetSecretValueRequest(request))
    };
}
exports.serializeGetSecretValueRequestToEventstreamMessage = serializeGetSecretValueRequestToEventstreamMessage;
function serializeListComponentsRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeListComponentsRequest(request))
    };
}
exports.serializeListComponentsRequestToEventstreamMessage = serializeListComponentsRequestToEventstreamMessage;
function serializeSubscribeToTopicRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeSubscribeToTopicRequest(request))
    };
}
exports.serializeSubscribeToTopicRequestToEventstreamMessage = serializeSubscribeToTopicRequestToEventstreamMessage;
function serializeCancelLocalDeploymentRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeCancelLocalDeploymentRequest(request))
    };
}
exports.serializeCancelLocalDeploymentRequestToEventstreamMessage = serializeCancelLocalDeploymentRequestToEventstreamMessage;
function serializeSubscribeToCertificateUpdatesRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeSubscribeToCertificateUpdatesRequest(request))
    };
}
exports.serializeSubscribeToCertificateUpdatesRequestToEventstreamMessage = serializeSubscribeToCertificateUpdatesRequestToEventstreamMessage;
function serializeSubscribeToValidateConfigurationUpdatesRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeSubscribeToValidateConfigurationUpdatesRequest(request))
    };
}
exports.serializeSubscribeToValidateConfigurationUpdatesRequestToEventstreamMessage = serializeSubscribeToValidateConfigurationUpdatesRequestToEventstreamMessage;
function serializeCreateLocalDeploymentRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeCreateLocalDeploymentRequest(request))
    };
}
exports.serializeCreateLocalDeploymentRequestToEventstreamMessage = serializeCreateLocalDeploymentRequestToEventstreamMessage;
function serializePutComponentMetricRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizePutComponentMetricRequest(request))
    };
}
exports.serializePutComponentMetricRequestToEventstreamMessage = serializePutComponentMetricRequestToEventstreamMessage;
function serializeSubscribeToConfigurationUpdateRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeSubscribeToConfigurationUpdateRequest(request))
    };
}
exports.serializeSubscribeToConfigurationUpdateRequestToEventstreamMessage = serializeSubscribeToConfigurationUpdateRequestToEventstreamMessage;
function serializeSubscribeToComponentUpdatesRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeSubscribeToComponentUpdatesRequest(request))
    };
}
exports.serializeSubscribeToComponentUpdatesRequestToEventstreamMessage = serializeSubscribeToComponentUpdatesRequestToEventstreamMessage;
function serializeRestartComponentRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeRestartComponentRequest(request))
    };
}
exports.serializeRestartComponentRequestToEventstreamMessage = serializeRestartComponentRequestToEventstreamMessage;
function serializeListNamedShadowsForThingRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeListNamedShadowsForThingRequest(request))
    };
}
exports.serializeListNamedShadowsForThingRequestToEventstreamMessage = serializeListNamedShadowsForThingRequestToEventstreamMessage;
function serializeUpdateConfigurationRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeUpdateConfigurationRequest(request))
    };
}
exports.serializeUpdateConfigurationRequestToEventstreamMessage = serializeUpdateConfigurationRequestToEventstreamMessage;
function serializeGetLocalDeploymentStatusRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeGetLocalDeploymentStatusRequest(request))
    };
}
exports.serializeGetLocalDeploymentStatusRequestToEventstreamMessage = serializeGetLocalDeploymentStatusRequestToEventstreamMessage;
function serializeGetThingShadowRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeGetThingShadowRequest(request))
    };
}
exports.serializeGetThingShadowRequestToEventstreamMessage = serializeGetThingShadowRequestToEventstreamMessage;
function serializeSubscribeToIoTCoreRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeSubscribeToIoTCoreRequest(request))
    };
}
exports.serializeSubscribeToIoTCoreRequestToEventstreamMessage = serializeSubscribeToIoTCoreRequestToEventstreamMessage;
function serializeUpdateStateRequestToEventstreamMessage(request) {
    return {
        type: aws_crt_1.eventstream.MessageType.ApplicationMessage,
        payload: JSON.stringify(normalizeUpdateStateRequest(request))
    };
}
exports.serializeUpdateStateRequestToEventstreamMessage = serializeUpdateStateRequestToEventstreamMessage;
//# sourceMappingURL=model_utils.js.map