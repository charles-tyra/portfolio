import React from "react";
import { useState } from "react";
import { Document, Page, pdfjs} from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import './ResumeDiv.css';

function ResumeDiv({ resume }) {
   let [resumeWidth, setResumeWidth] = useState(window.innerWidth * 18 / 64);

   //Sets worker for PDF
   pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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