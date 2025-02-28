import { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const useFingerPrint = () => {
    const [fingerprint, setFingerprint] = useState(null);

    useEffect(() => {
        const getFingerprint = async () => {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            setFingerprint(result.visitorId);
        };

        getFingerprint();
    }, []);

    return fingerprint;
};

export default useFingerPrint;