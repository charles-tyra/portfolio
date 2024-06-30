import React from "react";
import { useState } from "react";
import { Document, Page, pdfjs} from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import './ResumeDiv.css';

// Think about general use of switches from background to resume - whether it makes sense
// to pull someone's vision so harshly.
// ^unsure about this

function ResumeDiv({ resume }) {
   let [resumeWidth, setResumeWidth] = useState(window.innerWidth * 18 / 64);

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