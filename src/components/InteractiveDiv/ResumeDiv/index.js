import React from "react";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs} from 'react-pdf';
import { PDFDownloadLink } from "@react-pdf/renderer";

import resume from '../../../assets/charlestyraresume.pdf';
import testresume from '../../../assets/testresume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './ResumeDiv.css';

// NEED RESUME DOWNLOAD LINK.

// Think about general use of switches from background to resume - whether it makes sense
// to pull someone's vision so harshly.
function ResumeDiv() {
   let [resumeWidth, setResumeWidth] = useState(window.innerWidth * 18 / 64);

   //Sets worker for PDF
   pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.js',
      import.meta.url,
   ).toString();

   const DownloadDoc = () => (
      <Document file={resume} loading='handmade resume coming up' />
   )

   // useEffect(() => {
   //    setResumeWidth(window.innerWidth * 20 / 64)
   // }
   // , []);

   return(
      <>  
         <div id='resume-doc'>
            <Document file={resume} loading='handmade resume coming up'>
               <Page pageNumber={1} renderAnnotationLayer={true} width={resumeWidth} />
            </Document>
         </div>


         {/* HAVE TO MOVE */}
         <div>
            <PDFDownloadLink document={<DownloadDoc />} fileName="charlestyraresume.pdf">
               {({ blob, url, loading, error }) => (loading ? 'truthfully loading..' : 'loaded for download')}
            </PDFDownloadLink>
         </div>
      </>
   )
}

export default ResumeDiv;