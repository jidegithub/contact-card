import QRCode from 'qrcode'
import { useEffect, useState } from 'react';
import vCardsJS from "vcards-js";

export default function GenerateVContactCard() {
  const [vContactCard, setVContactCard] = useState(null)
  const [qrCodeUrl, setQRCodeUrl] = useState("")

  const contactDetails = {
    firstName: "Ogadinma",
    lastName: "Mordi",
    organization: "Agricorp International Development Limited",
    title: "Managing Director",
    phone: "+2348033982714",
    email: "ogadinma.mordi@agricorpinternational.com",
    website: "https://agricorpinternational.com",
    address: "10b Dr. Ladi Alakija, Lekki phase 1, Lagos",
    note: `
    Ogadinma is a highly qualified and experienced professional 
    with a strong academic background and specialized expertise in 
    various areas. He holds a Bachelor of Science degree in Business Administration from Redeemer's University, 
    where he acquired a solid foundation in business management and operations. 
    He also holds an Advanced Diploma in Procurement and Supply Chain from CIPS (The Chartered Institute of Procurement and Supply Chain), 
    which has equipped him with advanced knowledge and skills in procurement, logistics, and supply chain management.
    `,
  }

  function generateVCF() {
    let vCard = vCardsJS();
  
    vCard.firstName = contactDetails.firstName;
    vCard.lastName = contactDetails.lastName;
    vCard.title = contactDetails.title;
    vCard.organization = contactDetails.organization;
    vCard.photo.attachFromUrl(
      "https://avatars2.githubusercontent.com/u/5659221?v=3&s=460",
      "JPEG"
    );
    vCard.logo.attachFromUrl(
      "https://avatars2.githubusercontent.com/u/5659221?v=3&s=460",
      "JPEG"
    );
    vCard.gender = 'M';
    vCard.role = contactDetails.title;
    vCard.workPhone = contactDetails.phone;
    vCard.email = contactDetails.email;
    vCard.workUrl = contactDetails.website;
    vCard.note = contactDetails.note;

    //set URL where the vCard can be found
    // vCard.source = 'http://mywebpage/myvcard.vcf';

    //set address information

    vCard.workAddress.label = 'Work Address';
    vCard.workAddress.street = contactDetails.address;
    vCard.workAddress.city = 'Lagos';
    vCard.workAddress.stateProvince = 'LAG';
    vCard.workAddress.postalCode = '5432';
    vCard.workAddress.countryRegion = 'Nigeria';
    // vCard.isOrganization = true;
  
    console.log(vCard);
    setVContactCard(vCard.getFormattedString())
  }

  useEffect(() => {
    QRCode.toDataURL(vContactCard,  (error:unknown, codeUrl:string) => {
      if (error) {
        console.log(error)
      }
      setQRCodeUrl(codeUrl)

      // display QR code image
      if(qrCodeUrl){
        let img = document.getElementById("qrCodeEl") as HTMLImageElement;
        img.src = qrCodeUrl
        img.alt = "mordi"
        img.style.display = "block"
        // document.body.appendChild(qrCodeImage)
      }
    })
  }, [vContactCard,qrCodeUrl])

  return (
    <div>
      <img id="qrCodeEl" style={{display: 'none'}} />
      <div className="card">
        <button onClick={() => generateVCF()}>
          generate
        </button>
      </div>
    </div>
  )
}







































































// const btn = document.getElementById("btn");

  // btn.addEventListener(
  //   "click",
  //   function () {
  //     generateVCF();
  //   },
  //   false
  // );

  // const FileSaver = require('file-saver');
  // const blob = new Blob([ vCard.getFormattedString() ], {type: "text/vcard;charset=utf-8"});
  // FileSaver.saveAs(blob, "blob.vcf");

  // const downloadQRCode = () => {
  //   const canvasRef = document.getElementById('qrCodeEl') as HTMLCanvasElement
  //   const qrCodeURL = canvasRef
  //     .toDataURL('image/png')
  //     .replace('image/png', 'image/octet-stream')
  //   const aEl = document.createElement('a')
  //   aEl.href = qrCodeURL
  //   aEl.download = 'QR_Code.png'
  //   document.body.appendChild(aEl)
  //   aEl.click()
  //   document.body.removeChild(aEl)
  // }
