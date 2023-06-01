// import { useState } from 'react';
// import axios from 'axios';
// import './AddProduct.css'
// import Button from "@material-ui/core/Button";
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import { TextField } from '@material-ui/core';


// function AddProducts() {
//     const[name,setName]=useState(""); 
//     const[description,setDescription]=useState("");
//     const[type,setType]=useState("");
//     const[price,setPrice]=useState("");

//     const [previewSource, setPreviewSource] = useState();
//     const [selectedFile, setSelectedFile] = useState();
//     const [fileInputState, setFileInputState] = useState('');

//     //handling the image uploading
//     const handleFileInputChange = (event) => {
//         const file = event.target.files[0];
//         previewFile(file);
//         setSelectedFile(file);
//         setFileInputState(event.target.value);
//     };

//     //display a preview of uploaded image
//     const previewFile = (file) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file)
//         reader.onloadend = () => {
//             setPreviewSource(reader.result)
//         }
//     }

    

//     async function add(event){
//         event.preventDefault();
//         const config = {
//             headers: {
//                 "content-Type": "application/json"
//             }
//         };
        
//         let imgUrl
        

//         if(previewSource){
//             const formData = new FormData();
//             formData.append("file", selectedFile) 
//             formData.append("upload_preset", "product_pictures")

           
//             try {
//                 await axios.post("https://api.cloudinary.com/v1_1/aspirushealthcare/image/upload", formData).then((res) =>{
//                     imgUrl = res.data.secure_url
//                 })
//             } catch (error) {
//                 alert(error)
//             }
//         }

//         const newProduct = {name,description,type,price,imgUrl}
        
//         try {
//             await axios.post("http://localhost:8070/product/add", newProduct , config)
//             alert("Product Added Successfully")  
//             event.target.reset(); 
//         }catch (error) {         
//             alert("Product can't be Added");
//         }
//     }
    
//     return (
//     <div className="container" align="center" >
//         <div className="row">
//             <div className="col-12">
//                 <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
//                     <h2>&nbsp;Add New Product</h2>
//                 </div>
//             </div>
//         </div>
//         <br></br>
//         <div className="create_product">
//             <form onSubmit={add} className="addProduct">
//                 <div className="row">
//                     <div className="col-8">
//                         <div className="row">
//                             <div className="col-md-8 mb-4">
//                                 <div className="form-name">
//                                     <OutlinedInput
//                                         type="text" id="name" placeholder="Product Name" 
//                                         required fullWidth
//                                         onChange={(e)=>setName(e.target.value)}
//                                         inputProps={{style: {padding: 12}}} 
//                                     />
//                                 </div>
//                             </div>
//                             <div> 
//                                 <div className="col-md-8 mb-4">
//                                     <div className="form-price">
//                                         <OutlinedInput 
//                                             type="price" id="price" placeholder="Product Price" required fullWidth
//                                             onChange={(e)=>setPrice(e.target.value)}
//                                             inputProps={{style: {padding: 12}}}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>                       
//                             <div className="col-md-10 mb-4">
//                                 <div className="form-description">
//                                     <TextField
//                                         multiline rows={3}
//                                         id="description" placeholder="Product Description" 
//                                         required fullWidth variant="outlined" 
//                                         onChange={(e)=>setDescription(e.target.value)}
//                                         inputProps={{style: {padding: 12}}}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-12 mb-4">
//                                 <div className="form-group">
//                                  <div>
//                                     <label><h6>Type</h6></label> &nbsp;
//                                 </div>
//                                     <div className="form-check form-check-inline">
//                                             <input 
//                                                 className="form-check-input" type="radio" name="Type" id="OTC" value="OTC" required
//                                                 onChange={(e)=>setType(e.target.value)}
//                                             />
//                                             <label className="form-check-label" for="OTC">
//                                                 OTC
//                                             </label>
//                                     </div>
//                                     <div className="form-check form-check-inline">
//                                             <input 
//                                                 className="form-check-input" type="radio" name="Type" id="Non-OTC" value="Non-OTC" required
//                                                 onChange={(e)=>setType(e.target.value)}
//                                             />
//                                             <label className="form-check-label" for="Non-OTC">
//                                                 Non-OTC
//                                             </label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-4 d-flex justify-content-center">
//                         <div>
//                             {previewSource ? 
//                                 <img src={previewSource} alt="preview" className="previewImgProduct"/>
//                             :
//                                 <img src="/images/product.png" className="previewImgProduct" alt="product pic"/>
//                             }
//                             <div className="form-group">
//                                 <label htmlFor="profilepic">
//                                     <input
//                                         style={{ display: 'none' }}
//                                         id="profilepic"
//                                         name="profilepic"
//                                         type="file"
//                                         onChange={handleFileInputChange}
//                                         value={fileInputState}
//                                     />

//                                     <Button color="primary" variant="contained" component="span">
//                                         <AddAPhotoIcon/> &nbsp; Upload Image
//                                     </Button>
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="form-group">
//                             <input className="form-submit-btn" type="submit" value="Add product" />
//                         </div>
//                     </div>
//                 </div>
//             </form>            
//         </div>                    
//     </div>


        
//     )
// }

// export default AddProducts
