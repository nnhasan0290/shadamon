import { Form, Input } from "antd";

export default function(){
    let today:any = new Date();

    let dd:any = today.getDate();
    let mm:any = today.getMonth()+1; //January is 0!
    let yyyy:any = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    // today = yyyy + '/' + mm + '/' + dd;
     today = mm + '/' + dd + '/' + yyyy;


    return(
        
            <Input value={today} type="text"/>
       
    )
}