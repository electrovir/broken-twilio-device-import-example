export async function logTwilioImports() {
    /** A dynamic import does not fail tests. */
    const {Call, Device} = await import('@twilio/voice-sdk');
    console.log({Call, Device});
}
