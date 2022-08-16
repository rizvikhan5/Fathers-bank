
//console.log('this is js file')
//stap-1
document.getElementById('btn-for-submit').addEventListener('click',function(){
  //stap-2 added email value
  const emailName = document.getElementById('email-id')
  const email = emailName.value 
  console.log(email)
  //stap-3 added password value
  const passwordFild = document.getElementById('password-id')
  const password = passwordFild.value
  console.log(password)

  //stap 4 but we will not use it 
  if( email === 'rizvikhan@gmail.com' && password === 'khanshab'){
    //console.log('Welcome sir! How can we help you?')
    window.location.href = 'bank.html'
  }
  else{
   alert('Pasay lathhi khawar age vag..')
  }
})