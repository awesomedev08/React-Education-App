import axios from 'axios'


const allowedFormats = {
  'PDF':  ['pdf'],
  'Word' : ['doc', 'docx', 'docm'],
  'Excel': ['xls', 'xlt', 'xlm', 'xlsx'],
  'Powerpoint' : ['ppt', 'pot', 'ppt'],
  'PNG': ['png'],
  'JPG' : ['jpg', 'jpeg']
}


const errorMessages = {
  'name': {
    'length': 'The name field has to be longer than 6 characters'
  },
  'dateFrom': {
    'length': 'The duration from field can not be empty'
  },
  'dateTo': {
    'length': 'The duration to field can not be empty'
  },
  'description': {
    'length': 'The description fiels should be longer than 6 characters'
  }
}



function determineName(fileName){

  let splitName = fileName.split(".");
  let lastElement = splitName[splitName.length-1]

  let results = Object.keys(allowedFormats).filter((el,key) => {
      let formats =  allowedFormats[el]
      let isFormat = formats.findIndex(element => element === lastElement)

      if (isFormat > -1) {
          let final = Object.getOwnPropertyNames(allowedFormats)[key]
          return final
      }
  })

  return results[0]

}


// I have to reference
function setAuthToken(token){
  if (token) {
    axios.defaults.headers.common['token'] = `${token}`
  }else{
    delete axios.defaults.headers.common['token']
  }
}



// https://github.com/firebase/nginx/blob/master/conf/mime.types


export {allowedFormats, errorMessages, determineName, setAuthToken};
