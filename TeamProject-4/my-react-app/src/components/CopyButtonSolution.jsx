import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButtonSolution = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000); // Il messaggio di copia scomparirà dopo 2 secondi
    };

    return (
        <div className="flex gap-2 items-center py-1 px-1 rounded-full">
            <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                <button className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Copy</button>
            </CopyToClipboard>
            {copied && <span className="text-gray-500">Copied!</span>}
        </div>
    );
};

export default CopyButtonSolution;
