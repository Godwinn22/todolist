        let btn = document.getElementById("btn");
        let text = document.getElementById("text");
        let ul = document.getElementById("list");
        let body = document.querySelectorAll("body")[0];
        body.onload = function () {
            alert("Welcome to my To Do List \nHope you Enjoy it \nI'm also Working hard to make it better\nThanks for Previewing...Bye Bye!!!")
        }
        
        function main(){
            let li = document.createElement("li");
            li.classList.add("ye");
            
            //li.innerHTML can also be used here...it's to add text to the created li
            li.appendChild(document.createTextNode(text.value))
            ul.appendChild(li);
            text.value = ""
        }
        btn.addEventListener('click', function type(){
            if(text.value.length > 0){
                main()
            }
            
        })
        text.addEventListener('keypress', function type(event){
            if(text.value.length > 0 && event.which === 13){
                main()
            }
            
        })