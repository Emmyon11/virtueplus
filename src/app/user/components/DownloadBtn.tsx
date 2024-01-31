'use client';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  pdfUrl: string;
  fileName: string;
};

const DownloadBtn = ({ children, fileName, pdfUrl }: Props) => {
  const onButtonClick = () => {
    console.log(pdfUrl);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <button onClick={onButtonClick}>{children}</button>;
};
export default DownloadBtn;
