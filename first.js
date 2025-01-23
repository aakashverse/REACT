//Create element through js

// const header1 = document.createElement('h1');
// header1.innerText = "Hello Aakash";
// header1.style.backgroundColor = 'black';
// header1.style.fontSize = '20px';
// header1.style.color = 'pink';

// const header2 = document.createElement('h2');
// header2.innerText = "Welcome to Google";
// header2.style.backgroundColor = 'yellow';
// header2.style.fontSize = '25px';
// header2.style.color = 'red';


// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);


const React = {

    createElement: function(tag,styles,children){
        const element = document.createElement('tag');

        if(typeof children === 'object'){
            for(let val of children){
                element.append(val);
            }
        }
        else
        element.innerText = children;

        for(let key in styles){ // iterate over objects 
            element.style[key] = styles[key];  //same as element.style.backgroundColor = black
        }
        return element;
    }
}

const ReactDOM = {
    render: function(element,root){
        root.append(element);
    }
}


const header1 = React.createElement('h1',{backgroundColor:'black',fontSize:'20px',color:'pink'},"Hello Aakash");
const header2 = React.createElement('h2',{backgroundColor:'skyblue',fontSize:'25px',color:'yellow'},"Welcome to Google");

const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");

const UL = React.createElement('ul',{backgroundColor:'black',fontSize:'20px',color:'pink'},[li1,li2,li3]);

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(UL,document.getElementById('root'));

