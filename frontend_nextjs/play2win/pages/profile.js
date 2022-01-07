import Head from 'next/head'
import Link from 'next/link'

const stylingBtn2 = "text-center col-span-2 border-2 border-blue-300 hover:bg-blue-300 bg-blue-400 text-white font-bold py-2 px-4 rounded-full ";
const stylingBtn4 = "text-center col-span-4 border-2 border-blue-300 hover:bg-blue-300 bg-blue-400 text-white font-bold py-2 px-4 rounded-full ";
const stylingData2 = "text-center col-span-2 border-2 border-blue-300 bg-blue-100 text-black font-bold py-2 px-4 rounded-full ";
const stylingData4 = "text-center col-span-4 border-2 border-blue-300 bg-blue-100 text-black font-bold py-2 px-4 rounded-full ";
export default function Profile() {
  let num = 10.000;

  
  return (
    <div class="flex flex-col justify-center items-center p-20 bg-white" >
        
        <div class=" p-5 ">
          <img class="object-fit h-52 w-52 bg-blue-500 p-1 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbke5oTGiM8gcGT9GNrY5jB8jh1c5rbw9Kmg&usqp=CAU" 
          alt={"/image.jpg"}/>
        </div>
        
        <div class="grid grid-cols-4 gap-3">
            
            <div class={stylingData4}>Username</div>
            
            <div class={stylingData4}>Balance : {num.toPrecision(2)}€</div>
            <button class={stylingBtn2}>+ Money</button>
            <button class={stylingBtn2}>- Money</button>
            
            
            <div class={stylingData4}>Email</div>
            <div class={stylingData2}>Name</div>
            <div class={stylingData2}>Surname</div>
            <div class={stylingData2}>Phone</div>
            <div class={stylingData2}>Tax number</div>
            
            
            <button onClick={sayHello} class={stylingBtn4}>Change Username</button>
            <button onClick={sayHello}class={stylingBtn4}>Change password</button>
            <button onClick={sayHello}class={stylingBtn4}>Change Email</button>
        </div>
        

    </div>
  )
}

function sayHello() {
  
}