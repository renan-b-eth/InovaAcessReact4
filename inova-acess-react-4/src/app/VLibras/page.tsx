import Script from "next/script";

const VLibras = () =>{
    return(
        <>
        <div className="enabled">
        <div className="vw-access-button active"></div>
        <div className="vw-plugin-wrapper">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="beforeInteractive"></Script>
      <Script strategy="beforeInteractive">
        {`
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        `}
      </Script>

        </>
    )
}
export default VLibras;

