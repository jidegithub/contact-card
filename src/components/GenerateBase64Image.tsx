import { useState } from 'react'

export default function GenerateBase64Image() {
  const [file, setFile] = useState()
  const [base64url, setBase64Url] = useState<string | ArrayBuffer | null>('')

  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL:string | ArrayBuffer | null = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        baseURL = reader.result;
        // console.log("baseURL", baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleFileInputChange = e => {
    // console.log(e.target.files[0]);
    let file = e.target.files[0]

    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        // console.log("File Is", file);
        setBase64Url(result)
        setFile(file)
      })
      .catch(err => {
        console.log(err);
      });

      setFile(e.target.files[0])
  };

  console.log("baseURL", base64url);

  return (
    <div>
      <form className="flex items-center space-x-6">
        {/* <div className="shrink-0">
          <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
        </div> */}
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input type="file" name="file" onChange={handleFileInputChange}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
          "/>
        </label>
      </form>
    </div>
  )
}


