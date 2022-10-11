import { LightningElement } from 'lwc';

export default class Lwc_eg3_greaternumber extends LightningElement 
{
    name = "abdul gafoor";
    mobile = 8328604910;
    salary = 741526;
    aval;
    bval;
    cval;
    firstnum(event)
    {
       this.aval = event.target.value;
        
    }
    secondnum(event)
    {
        this.bval = event.target.value; 
    }
    thirdnum(event)
    {
        this.cval = event.target.value; 
        
    } 
    calcme(event)
    {
         if(parseInt(this.aval) > parseInt(this.bval) && parseInt(this.aval) > parseInt(this.cval))
        {
            alert('The Greatest Number is '+ parseInt(this.aval));
        }  
        else if(parseInt(this.bval) > parseInt(this.aval) && parseInt(this.bval) > parseInt(this.cval))
        {
            alert('The Greatest Number is '+ parseInt(this.bval));
        }    
        else
        {
            alert('The Greatest Number is '+ parseInt(this.cval)); 
        }
    }
}