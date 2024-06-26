/**
 * Browser entry point for AWS IoT SDK.
 * @packageDocumentation
 * @module aws-iot-device-sdk
 * @mergeTarget
 */
import * as iotidentity from './iotidentity/iotidentityclient';
import * as greengrass from './greengrass/discoveryclient';
import * as iotjobs from './iotjobs/iotjobsclient';
import * as iotshadow from './iotshadow/iotshadowclient';
import { auth, http, io, iot, mqtt, mqtt5, CrtError } from 'aws-crt/dist.browser/browser';
export { auth, greengrass, http, io, iot, iotidentity, iotjobs, iotshadow, mqtt, mqtt5, CrtError };
