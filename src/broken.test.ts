import {logTwilioImportsButBroken} from './broken';

describe(logTwilioImportsButBroken.name, () => {
    it('does not fail', () => {
        /** But it does (currently). */
        logTwilioImportsButBroken();
    });
});
