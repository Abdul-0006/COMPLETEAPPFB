import{
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
    ref,
    storage,
    uploadBytes,
    getDownloadURL
    } from './Utils/Utils.js';

    const signup = document.getElementById("signup-btn");
    const submit = document.getElementById("submit_btn");

    signup.addEventListener ("submit" , function(e){
     console.log(e)
     e.preventDefault()
     const img = e.target[0].files[0]
     const email = e.target[1].value
     const password = e.target[2].value
     const firstname = e.target[3].value
     const lastName = e.target[4].value
     const phone = e.target[5].value
   
     const company = e.target[6].value
   

    
 const userInfo ={
    img,
    email,
    password,
    firstname,
    lastName,
    phone,
    company
 }
// Create account
 submit_btn.disabled = true
 submit_btn.innerHTML = 'loading...'
 createUserWithEmailAndPassword(auth , email, password).then((user)=> {
    console.log("user =>  ",user.user.uid)
    // upload image

    const userREF = ref(storage , `user/${user.user.uid}`)
    uploadBytes(userREF, img)
    .then(() => {
        console.log("user image uploaded")
  
        // getting url image we just uploaded
         getDownloadURL(userREF)
         .then((url) =>{
            console.log("url recieved =>" , url)

            // updated user info object
            userInfo.img = url

           //Create user doc ref 
           const userdbref= doc(db, "users" , user.user.uid)

        //    set doc to db
         setDoc(userdbref, userInfo).then((user) =>{
            console.log("user object updated into db")
            window.location.href = '/'
            submit_btn.disabled = false
            submit_btn.innerHTML = 'submit';
         })

          }) .catch((err) => console.log("Url not found"))
             submit_btn.disabled = false
             submit_btn.innerHTML = 'submit';
    })
    .catch(()=>{
    console.log("error has occured")
    submit_btn.disabled = false
    submit_btn.innerHTML = 'submit';
      });
 })
 .catch((err) => {
    alert(err), (submit_btn.disabled = false);
 console.log(userInfo);
  }); 