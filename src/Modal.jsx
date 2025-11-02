import ReactDom from 'react-dom';
import { useState, useEffect } from 'react';

const Modal = (props) => {
  const {show, toggle, data} = props;
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [codeShow, setCodeShow] = useState("");
  const [showJs, setShowJs] = useState(false);

    
  
    useEffect(() => {

      if (!show || !data) return;

      const path = `${import.meta.env.BASE_URL}assets/projects/${data.category}/${data.project}`;
      
      fetch(`${path}/index.html`)
        .then(response => response.text())
        .then(htmlString => {
          setHtmlCode(htmlString);
        })
        .catch(error => {
          console.error('Error fetching HTML:', error);
        });

      setCodeShow(htmlCode);

      fetch(`${path}/styles.css`)
        .then(response => response.text())
        .then(cssString => {
          setCssCode(cssString);
        })
        .catch(error => {
          console.error('Error fetching CSS:', error);
        });

      fetch(`${path}/script.js`)
      .then(response => {
        if (!response.ok) {
          setShowJs(false);
          return "";
        }

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("javascript") && !contentType.includes("text/plain")) {
          setShowJs(false);
          return "";
        }

        setShowJs(true);
        return response.text();
      })
      .then(jsString => {
        setJsCode(jsString);
      })
      .catch(error => {
        console.error("Error fetching JS:", error);
        setShowJs(false);
      });

    }, [show, data]);

    if (!show) return null;

    return ReactDom.createPortal(
    <>
      <div className="z-[1000] inset-0 fixed flex items-center justify-center text-white bg-zinc-200/90 dark:bg-[#272727]/90">
        <div className="p-3 rounded-xl flex flex-col items-center bg-[#3d3c3d]">
          <div className="flex mb-3">
            <h2>{data.project}</h2>
            <button onClick={toggle} className="mx-5 px-4 bg-zinc-900/50 rounded-full hover:bg-zinc-900">
              Close
            </button>
          </div>
          <iframe
            className="w-[20rem] h-[15rem] md:w-[42rem] md:h-[20rem]"
            src={`${import.meta.env.BASE_URL}assets/projects/${data.category}/${data.project}/index.html`}
          />
          <div className="flex justify-center p-2">
            <button
              onClick={() => setCodeShow(htmlCode)}
              className="px-4 mx-2 bg-zinc-900/50 rounded-full hover:bg-zinc-900"
            >
              HTML
            </button>
            <button 
              onClick={() => setCodeShow(cssCode)}
              className="px-4 mx-2 bg-zinc-900/50 rounded-full hover:bg-zinc-900"
            >
              CSS
            </button>
            { showJs && 
              (<button 
                  onClick={() => setCodeShow(jsCode)}
                  className="px-4 mx-2 bg-zinc-900/50 rounded-full hover:bg-zinc-900"
                  >
                  JS
                </button>)
            }
          </div>
          <div className="overflow-x-auto">
            <pre className="w-[20rem] h-[15rem] md:w-[42rem] md:h-[20rem] text-sm overflow-x-scroll bg-zinc-900/50">
              <code>{codeShow}</code>
            </pre>
          </div>
          <button
            onClick={()=>{
              navigator.clipboard.writeText(codeShow);
            }}
            className="w-1/3 px-4 mt-3 mx-auto text-sm text-center bg-zinc-900/50 rounded-full hover:bg-zinc-900"
          >
            COPY CODE
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
    )

}

export default Modal;