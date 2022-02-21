const btnDeposite=document.getElementById("btnDeposite");
const btnbitcoin=document.getElementById("btnbitcoin");
const btnethcoin=document.getElementById("btnethcoin");
const balabcefield=document.getElementById("balabce-field");
const bitcoinfield=document.getElementById("bitcoin-field");
const etherfield=document.getElementById("ether-field");

function getInputValue(id)
{
   
    let depositbox=document.getElementById(id);
    let depositboxAmount=parseFloat(depositbox.value);
   if(isNaN(depositboxAmount) || depositboxAmount<0 )
   {    
       depositbox.value='';
       return alert("Please Input correct number Formate");
   }
   depositbox.value='';
   return depositboxAmount;

}

function updateProfile(id)
{
 
    
    let AvailableAmount=parseFloat(balabcefield.innerText);
    let coinAmount=getInputValue(id);    
    if(coinAmount>0)
    {
        let totalExpence;
        if(id=='bit-box')
        {
            totalExpence=10*coinAmount;

            if(totalExpence>AvailableAmount)
            {
                return alert("Not Enough Amount");
            }
            bitcoinfield.innerText=coinAmount;        

           
        }
        else if(id =="eth-box")
        {
            totalExpence=5*coinAmount;

            if(totalExpence>AvailableAmount)
            {
                return alert("Not Enough Amount");
            }
            etherfield.innerText=coinAmount;         

            
        }
        balabcefield.innerText=AvailableAmount-totalExpence;

    }
}

btnDeposite.addEventListener('click',function(e){
    e.preventDefault();        
    let inputAmount=getInputValue("deposit-box");         
    let balabcefieldAmount=parseFloat(balabcefield.innerText); 
    if(inputAmount>0)
    {
        balabcefield.innerText=inputAmount+balabcefieldAmount;   
    }   
   
});

btnbitcoin.addEventListener('click',function(e){    
    e.preventDefault(); 
    updateProfile("bit-box"); 

    
});

btnethcoin.addEventListener('click',function(e){
    e.preventDefault(); 
    updateProfile("eth-box");  
    
});

