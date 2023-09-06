console.log('hello dunia');


// Object creation

// There are two types of object creation
// 1.Factory function.
// 2.constructor function.

// 1. Factory function

// it create the function and return the object object
// It uses camelcase format for writing

// function obj1(len , bre){
//      return  rectange = {
//         length :len,
//         breadth:bre,
//         draw: function(){
//             console.log('Drawing rectangle');
//         }
//     };
// }

//     Rect = obj1(7,9);
//     console.log(Rect);

    // This is the factory function  which return an object when we apply for the object

    // Constuctor function

    // It uses a pascal notation(means every first letter of the word is capital)


    
    function Reactangle(len, bre){
        this.length = len;
        this.breadth = bre;
        this.draw = function(){
            console.log('Drawing');
        }
    }
    
    let objecc = new Reactangle(6,8);
    objecc.draw();
    console.log(objecc);
    console.log(objecc.constructor);


 