import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';

import resume from '../../../assets/charlestyraresume.pdf';
import './ResumeBox.css';

function ResumeBox() {
   pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.js',
      import.meta.url,
   ).toString();

   return(
      <div id='resume-doc'>
         <Document file={resume}>
            <Page pageNumber={1} />
         </Document>
      </div>
   )
}

export default ResumeBox;