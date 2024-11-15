'use client'
/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"testing"});
		cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#5bafc6"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="testing"
	  calLink="sanjana-bhat02/testing"
	  style={{width:"100%",height:"100%",overflow:"hidden"}}
	  config={{"layout":"month_view","theme":"light"}}
    
	  
	/>;
  };
  



