var text_section = "";
var output;


            function updateText(){
                if(text_section!=""){
                    document.getElementById("text_section").innerHTML = text_section;
                } else {
                    document.getElementById("text_section").innerHTML = " "
                }
                
            }

            updateText()


            document.getElementById(".").addEventListener("click", decimal)
            function decimal() {
                text_section = text_section + ".";
                updateText();
            }


            document.getElementById("zero").addEventListener("click", zero)
            function zero() {
                text_section = text_section + "0";
                updateText();
            }

            document.getElementById("one").addEventListener("click", one)
            function one() {
                text_section = text_section + "1";
                updateText();
            }
            document.getElementById("two").addEventListener("click", two)
            function two() {
                text_section = text_section + "2";
                updateText();
            }
            document.getElementById("three").addEventListener("click", three)
            function three() {
                text_section = text_section + "3";
                updateText();
            }
            document.getElementById("four").addEventListener("click", four)
            function four() {
                text_section = text_section + "4";
                updateText();
            }
            document.getElementById("five").addEventListener("click", five)
            function five() {
                text_section = text_section + "5";
                updateText();
            }
            document.getElementById("six").addEventListener("click", six)
            function six() {
                text_section = text_section + "6";
                updateText();
            }
            document.getElementById("seven").addEventListener("click", seven)
            function seven() {
                text_section = text_section + "7";
                updateText();
            }
            document.getElementById("eight").addEventListener("click", eight)
            function eight() {
                text_section = text_section + "8";
                updateText();
            }
            document.getElementById("nine").addEventListener("click", nine)
            function nine() {
                text_section = text_section + "9";
                updateText();
            }
            document.getElementById("plus").addEventListener("click", plus)
            function plus() {
                text_section += "+";
                updateText();
            }
            document.getElementById("minus").addEventListener("click", minus)
            function minus() {
                text_section += "-";
                updateText();
            }
            document.getElementById("times").addEventListener("click", times)
            function times() {
                text_section += "*";
                updateText();
                updateText();
            }
            document.getElementById("divide").addEventListener("click", divide)
            function divide() {
                text_section += "/";
                updateText();
            }
            document.getElementById("equal").addEventListener("click", equal)
            function equal() {
                var operations = ['+','-','*','/']
                var sections = [];
                var initial = 0;
                if(operations.includes(text_section.charAt(0)) || text_section.charAt(0)=='E' || operations.includes(text_section.charAt(text_section.length-1)) || text_section.length==0) {
                    text_section = "Error - Press Clear"
                
                }else {
                    for(i=0;i<text_section.length;i++){
                        if(operations.includes(text_section.charAt(i))){
                            sections.push(text_section.substring(initial,i));
                            sections.push(text_section.substring(i,i+1));
                            initial=i+1;
                        }
                    }
                    sections.push(text_section.substring(initial,text_section.length));

                    for(i=1;i<sections.length;i++){
                        if(sections[i]=="*"){
                            var product = parseFloat(sections[i-1]) * parseFloat(sections[i+1]);
                            sections[i] = product;           
                            sections.splice(i+1,1);          
                            sections.splice(i-1,1);
                            i--;
                            
                        }
                        if(sections[i]=="/"){
                            var diff = parseFloat(sections[i-1]) / parseFloat(sections[i+1]);
                            sections[i] = diff;
                            sections.splice(i+1,1);          
                            sections.splice(i-1,1);
                            i--;
                        }
                    }

                    for(i=1;i<sections.length;i++){
                        if(sections[i]=="+"){
                            var sum = parseFloat(sections[i-1]) + parseFloat(sections[i+1]);
                            sections[i] = sum;
                            sections.splice(i+1,1);          
                            sections.splice(i-1,1);
                            i--;
                        }
                        if(sections[i]=="-"){
                            var diff = parseFloat(sections[i-1]) - parseFloat(sections[i+1]);
                            sections[i] = diff;
                            sections.splice(i+1,1);          
                            sections.splice(i-1,1);
                            i--;
                        }
                    }
                    text_section = sections[0];
                    
                }
                
                
                updateText();
            }

            document.getElementById("clear").addEventListener("click", clear)
            function clear() {
                text_section = "";
                updateText();
            }