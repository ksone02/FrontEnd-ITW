import React from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

const ShareInstagram: React.FC = () => {
    const onCapture = () => {
        html2canvas($('#imgDiv')[0], {
            backgroundColor: '#E2DFDA',
        }).then(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (canvas: { toDataURL: (arg0: string) => any }) => {
                onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
            },
        );
    };

    const onSaveAs = (url: string, download: string) => {
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = download;
        link.click();
        document.body.removeChild(link);
    };

    return (
        <ShareBtn type="button" onClick={onCapture}>
            <ShareImg src="/images/ShareImg.svg" alt="ShareImg" />
        </ShareBtn>
    );
};

export default ShareInstagram;

const ShareBtn = styled.button`
    background-color: transparent;
    border: none;
    margin-left: 20px;
    margin-right: 20px;

    @media (max-width: 767px) {
        margin-left: 5px;
        margin-right: 5px;
    }
`;

const ShareImg = styled.img`
    width: 65px;
    //height: 65px;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 26px;
        //height: 26px;
    }
`;
