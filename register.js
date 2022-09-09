// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARh4T4LothfnHVxgp1SVxmpy3NA6YAU5Y",
    authDomain: "jsproject-6252d.firebaseapp.com",
    projectId: "jsproject-6252d",
    storageBucket: "jsproject-6252d.appspot.com",
    messagingSenderId: "161082613703",
    appId: "1:161082613703:web:9d93ba26663ca72fba03e2",
    measurementId: "G-02FNTVJ7ND"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialise variables
const auth = firebase.auth()
const database = firebase.database()

// setup reg function
const reg = document.getElementById('register')
reg.addEventListener("click", function () {
    const regname = document.getElementById('name') .value
    const regmail = document.getElementById('mail').value
    const regpass = document.getElementById('pass').value

    if (validateEmail(regmail) === false || validatePass(regpass)=== false){
        alert('use correct Email or Password format')
        if (valUser(regname) === false){
            alert ('field cannot be empty')
        }
    }
    //create user
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            const user = auth.currentUser
            // add user
            const database_ref = database.ref()
            // user data
            const userData = {
                regname : regname,
                regmail : regmail,
                regpass : regpass,
                last_login : Date.now()
            }
            database_ref.child('users' + user.uid).set(userData)
            alert('User succssesfull added')
        })
        .catch(function (error) {
            const errorMessage = error.message
            alert(errorMessage)

        })

})
// setup login
const log =  document.getElementById('submit')
log.addEventListener("click", function () {
    const logmail = document.getElementById('log-mail').value
    const logpass = document.getElementById('log-pass').value

    if (validateEmail(regmail) === false || validatePass(regpass)=== false){
        alert('use correct Email or Password ')
        return
    }
    auth.signInWithEmailAndPassword(logmail, logpass)
        .then(function () {
            const user = auth.currentUser
            // add user
            const database_ref = database.ref()
            // user data
            const userData = {

                last_login : Date.now()
            }
            database_ref.child('users' + user.uid).update(userData)
            alert('User successfully logged in')

        })
        .catch(function (error) {
            const errorMessage = error.message
            alert(errorMessage)

        })
})

// validation
function validateEmail(regmail) {
    const   expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return expression.test(regmail) === true;
}
function validatePass (regpass){
    return regpass >= 6;

} function valUser(regname) {
    if (regname == null){
        return false
    }if (regname.length <= 0 ){return false}
}