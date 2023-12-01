/** This import breaks web-test-runner but not vite. */
import {Call, Device} from '@twilio/voice-sdk';

export async function logTwilioImportsButBroken() {
    console.log({Call, Device});
}
