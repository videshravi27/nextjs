'use client';
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { sourceMapsEnabled } from 'process';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicID, setPublicID] = useState('');

    const handleUpload = (result: any) => {
        if (result.event === 'success') {
            const info = result.info as CloudinaryResult;
            setPublicID(info.public_id);
        }
    };

    return (
        <div className="upload-page">
            {publicID ? (
                <CldImage
                    src={publicID}
                    width={270}
                    height={180}
                    alt="Uploaded Image"
                />
            ) : (
                <p>No image uploaded yet.</p>
            )}

            <CldUploadWidget
                uploadPreset="l4bnwjfo"
                options={{
                    sources: ['local'],
                    maxFiles: 3,
                    multiple: false,
                    styles: {},
                }}
                onUpload={handleUpload}
            >
                {({ open }) => (
                    <button
                        className="btn btn-primary"
                        onClick={() => open()}
                    >
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </div>
    );
};

export default UploadPage;
