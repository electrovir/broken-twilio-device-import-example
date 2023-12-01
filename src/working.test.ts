import {logTwilioImports} from './working';

describe(logTwilioImports.name, () => {
    it('does not fail', () => {
        /** This one works. */
        logTwilioImports();
    });
});
