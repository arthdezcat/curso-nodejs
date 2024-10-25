const { faker } = require('@faker-js/faker');

//const boom = require('@hapi/boom');

class TextService{
  async clearAcents(img){
    //ubicáción
      //const correctO = img.replace(/á/i,"a");
      const acentA = img.replace(/á/i, "a")
      const acentE = img.replace(/é/i, "e")
      const acentI = img.replace(/í/i, "i")
      const acentO = img.replace(/ó/i, "o")
      const acentU = img.replace(/ú/i, "u")
      const acentN = img.replace(/ñ/i, "n")
      if(acentA!=img){
        return(acentA)
      }
      else if(acentE!=img){
        return(acentE)
      }
      else if(acentI!=img){
        return(acentI)
      }
      else if(acentO!=img){
        return(acentO)
      }
      else if(acentU!=img){
        return(acentU)
      }
      else if(acentN!=img){
        return(acentN)
      }


    }
    async clearCaract(img){
      //ubicáción
        //const correctO = img.replace(/á/i,"a");
        const caracA = img.replace(/@/i, "a")
        const caract_ = img.replace(/ /i, "_")
        const caractNum = img.replace(/#/i, "")
        const caractAdm = img.replace(/!/i, "")
        const caractCom = img.replace(/&/i, "")
        const caractPorct = img.replace(/%/i, "")
        const caractNegat = img.replace(/-/i, "")
        const caractMin = img.replace(/</i, "")
        if(caracA!=img){
          return(caracA)
        }
        else if(caract_!=img){
          return(caract_)
        }
        else if(caractNum!=img){
          return(caractNum)
        }
        else if(caractAdm!=img){
          return(caractAdm)
        }
        else if(caractCom!=img){
          return(caractCom)
        }
        else if(caractPorct!=img){
          return(caractPorct)
        }
        else if(caractNegat!=img){
          return(caractNegat)
        }
        else if(caractMin!=img){
          return(caractMin)
        }

      }

}


module.exports = TextService;
