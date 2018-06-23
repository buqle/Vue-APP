const ls=window.localStorage;
const ss=window.sessionStorage;

export const Cookie={
  get(key){
    let  arr=document.cookie.split('; ');
    for(let i=0;i<arr.length;i++){
      let arr2=arr[i].trim().split('=');
      if(arr2[0]==key){
        return arr2[1]
      }
    }
    return ''
  },
  set(key,val,day){
    let setting=arguments[0];
    //Object.prototype.toString.call判断对象 属于哪种类型
    if(Object.prototype.toString.call(setting).slice(8,-1)==='Object'){
      for(let i in setting){
        let oDate=new Date();
        oDate.setDate(oDate.getDate()+day);
        document.cookie=i+'='+setting[i]+';expires='+oDate
      }
    }else {
      let oDate=new Date();
          oDate.setDate(oDate.getDate()+day);
          document.cookie=key+'='+val+';expires='+oDate
    }
  },
  remove(key){
    let setting=arguments[0];
    if(Object.prototype.toString.call(setting).slice(8,-1)==='Array'){
      setting.forEach(key=>{
        this.set(key,1,-1)
      })
    }else {
      this.set(key,1,-1)
    }
  }


}
