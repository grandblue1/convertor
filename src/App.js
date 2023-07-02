import './App.css';
import { createFFmpeg, fetchFile} from '@ffmpeg/ffmpeg';
import {useEffect, useRef, useState} from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Tooltip from "./tooltip";
import Type from "./Type";

function App() {

  const [ready,setReady] = useState(true);
  const [video, setVideo] = useState(null);
  const [gif, setGif] = useState(null);
  const [log, setLogg] = useState('');
  const [name , setName] = useState('');
  const [type, setType] = useState('image');
  const [types, setTypes] = useState('image');

    const [code, setCode] = useState(
        `{
  args: ['-i', 'video.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'video.gif'],
  inFilename: 'video.mp4',
  outFilename: 'video.gif',
  mediaType: 'image/gif',
  
}`
    );
  const downloadRef = useRef(null);
  const ref = useRef(null);
  const f = createFFmpeg({
    log: true
  });
    f.setLogger(({ message  }) => {
        setLogg(message);
    });
  const downloadGif = () =>{
      downloadRef.current.click();
  }



  const mp4_to_gif =async () =>{
      if (!f.isLoaded()) {
          await f.load();
      }
      try{
          const obj = eval(`(${code})`);

          const args = obj.args;
          const outputName = obj.outFilename;
          const inputName = obj.inFilename;
          const videoType = obj.mediaType;
          const containerTypes = obj.mediaType.split('/')[0];
          setName(outputName);

          setType(containerTypes);
          setTypes(containerTypes);

          setReady(false);
          f.FS('writeFile', inputName, await fetchFile(video));


          await f.run(...args);
          const data = f.FS('readFile', outputName);
          console.log(data);

          const url = URL.createObjectURL(new Blob([data.buffer]), {type: videoType});
          setGif(url)
          setReady(true);

      }catch(e){
          alert(e.message);
          window.location.reload();
      }


  }

  return (
      <div className="flex items-center justify-center h-screen bg-gray-200 w-full ">

          <div className="border-2 flex-col border-gray-300 bg-white p-4 w-4/5 h-max justify-center items-center">
              {video && <span className="border-2 flex-col border-gray-300 bg-white p-4 w-4/5 h-max justify-center items-center">Uploaded</span>}

              <div className="flex flex-col justify-center  items-center w-full h-full">
                  {gif && (<div>
                          {video && <h1 onClick={downloadGif} className='text-center hover:cursor-pointer   py-1  px-3 text-sm font-semibold text-black-600  border-dashed border-5 border-black rounded-md'>Download</h1>}
                          <Type types={type}
                              link={gif}


                          />
                          <a
                              ref={downloadRef}
                              href={gif}
                              download={name}
                              style={{ display: 'none' }}
                          ></a>
                      </div>
                  )}

              <span
                  onClick={() => ref.current.click()}
                  className="inline-block py-1 px-3  hover:bg-blue-300 text-sm font-semibold text-black-600 hover:cursor-pointer border-dashed border-2 border-black rounded-md"
              >
                Upload
              </span>

                  <input
                      type="file"
                      className="p-2"
                      style={{ display: 'none' }}
                      ref={ref}
                      onChange={(e) => setVideo(e.target.files[0])}
                  />
                  <button className="p-2 border-2 border-gray-300 bg-gray-200 m-4" onClick={mp4_to_gif}>
                      Convert
                  </button>
                  <pre className=" truncate static text-center " style={{width: '400px'}} >{log}</pre>
                  {log.includes('run FS.readFile ') && setLogg('') }
                  <Tooltip />
                  <CodeEditor
                      value={code}
                      language="js"
                      placeholder="Please enter JS code."
                      onChange={(evn) => setCode(evn.target.value)}
                      padding={15}
                      data-color-mode="light"
                      style={{
                          fontSize: 12,
                          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                      }}
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  />
              </div>
          </div>
      </div>


  )
}

export default App;
