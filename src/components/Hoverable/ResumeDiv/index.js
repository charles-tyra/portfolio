import React from "react";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs} from 'react-pdf';

import resume from '../../../assets/charlestyraresume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './ResumeDiv.css';

function ResumeDiv() {
   let [resumeWidth, setResumeWidth] = useState(window.innerWidth * 20 / 64);

   //Sets worker for PDF
   pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.js',
      import.meta.url,
   ).toString();

   // useEffect(() => {
   //    setResumeWidth(window.innerWidth * 20 / 64)
   // }
   // , []);

   return(
      <div id='resume-doc'>
         <Document file={resume} loading='handmade resume coming up'>
            <Page pageNumber={1} renderAnnotationLayer={true} width={resumeWidth} />
         </Document>
      </div>
   )
}

export default ResumeDiv;