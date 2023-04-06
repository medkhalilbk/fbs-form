import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google" 
import { useState } from "react" 
import axios from "axios"
const inter = Inter({ subsets: ["latin"] })



export default function Home() {
    const [isSent, setisSent] = useState(false)
    const [selectedItem, setSelectedItem] = useState("");
    const [options, setOptions] = useState([]);
    const [formData, setFormData] = useState({});
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
       
      };
      const handleSubmit = (event) => {
        console.log(formData) 
        event.preventDefault();
        axios.post('https://sheet.best/api/sheets/049e7c3e-18a0-4ff3-b540-494bd3d20598' , formData).then((res) => {
            console.log(res.message)
            setisSent(true)
        })
      };
    const [languageSelected, setlanguageSelected] = useState(false)
    const handleFirstDropdownChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      const selected = event.target.value;
      setSelectedItem(selected);
  
      // Update options for the second dropdown list based on the selected item
      if (selected === "Langue") {
        setOptions(["Allemand", "Anglais", "Français"]);
      } else if (selected === "IT") {
        setOptions(["Power BI & Preparation à la certification PL-300 ", "E-commerce Tunisie", "Graphic Design Illustrator"]);
      }  
      setSelectedItem(selected === "Langue")
      console.log(selectedItem)
    };
 
  return (
    <>
      <Head>
        <title> Préinscription FBS </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/Tmq1sfS/android-chrome-192x192.png" />
      </Head>  
<section className="bg-white  :bg-gray-900 bg-from">
<div id="successModal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
 
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Success</span>
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully removed product.</p>
            <button data-modal-toggle="successModal" type="button" className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                Continue
            </button>
        </div>
    </div>
</div>
    <div className="flex justify-center min-h-screen  " >
        <div className="hidden bg-cover lg:block lg:w-1/2" style={{
  backgroundImage: "url('https://i.ibb.co/3FG1rkQ/background.jpg')",
  zIndex:233
  // Add any other styles you want to apply to the div here
}}>
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 bg-form">
           
           
            <div className="w-full  ">
           
            <Image loading="lazy" src={'https://i.ibb.co/PxnyGY7/iconFBS.png'} width={400} height={400} alt="logo"  classNameName="mx-auto fade-in-image"  />
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800   :text-white">
                    Inscrivez vous chez FBS 
                </h1>

                <p className="mt-4 text-gray-500  :text-gray-400">
                Faites votre préinscription maintenant 
                      </p>

              

                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1" onSubmit={handleSubmit} method="post">
                    <div>
                        <label className="block mb-2 text-sm text-gray-600  :text-gray-200">Nom</label>
                        <input  onChange={handleChange} name="nom" type="text" placeholder="Nom" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  :placeholder-gray-600  :bg-gray-900  :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600  :text-gray-200">Prénom</label>
                        <input type="text"  onChange={handleChange} name="prenom" placeholder="Prénom" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  :placeholder-gray-600  :bg-gray-900  :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600  :text-gray-200">Numéro de téléphone</label>
                        <input type={"number"}  onChange={handleChange} name="tel" maxLength={8} placeholder="+216 XX XXX XXX " className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  :placeholder-gray-600  :bg-gray-900  :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600  :text-gray-200">Adresse Email</label>
                        <input type="email"  onChange={handleChange} name="email" placeholder="nomprenom@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

    
<label for="underline_select" className="sr-only">Choisir formation</label>
  
                       
<select  onChange={handleFirstDropdownChange}   name="Type"  classNameName="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  :text-gray-400  :border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"  id="first-dropdown" >
        <option value="" selected disabled >Type de formation</option>
        <option value="Langue">Formation lingustique</option>
        <option  value="IT">Formation IT</option> 
      </select>

      <select id="second-dropdown" onChange={handleChange} name="formation" classNameName="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  :text-gray-400  :border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" >
      <option value="" selected disabled >Choisir formation</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    
      
                     
 
    {
        selectedItem && 
        <div>
            <label className="block text-sm text-gray-600  :text-gray-200 mb-4">Niveau Langue :</label>
            <ul className="w-90 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg dark:bg-white-700 dark:border-gray-600 dark:text-white">
           
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center pl-3">
                    <input id="list-radio-license" type="radio" value="A1"  onChange={handleChange} name="niveau" className="" />
                    <label for="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-500 dark:text-gray-500">Niveau A1 </label>
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center pl-3">
                    <input id="list-radio-id" type="radio" value="A2"  onChange={handleChange} name="niveau" className="dark:ring-offset-white-700 dark:focus:focus:ring-2 dark: dark:border-gray-500" />
                    <label for="list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-500 dark:text-gray-500">Niveau A2</label>
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center pl-3">
                    <input id="list-radio-millitary" type="radio" value="B1"  onChange={handleChange} name="niveau" className="" />
                    <label for="list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-500 dark:text-gray-500">Niveau B1</label>
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center pl-3">
                    <input id="list-radio-passport" type="radio" value="B2"  onChange={handleChange} name="niveau" className="" />
                    <label for="list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-500 dark:text-gray-500">Niveau B2</label>
                </div>
            </li>
        </ul>
        </div>
   
    }
{
  isSent &&  <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Demande envoyée ! </span>
</div>
 
}
<button  disabled={isSent} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  S&#39;incrire
</button>
     

     
                    
                </form>
            </div>
        </div>
    </div>
</section>
 
    </>
  )
}
