import React from 'react';

const World = () => {
    function showName() {
        console.log("Mike")
    }

    function showAge(age: number) {
        console.log(age)
    }

    function showText(e: any) {
        console.log(e.target.value)
    }

    return (
        <div>
            <h1
                style={{
                    color: '#f00',
                }}
            >World!</h1>

            {/* Event Handler 2 Type */}
            <button 
                onClick={showName}
            >
                show name
            </button>
            <button
                onClick={()=>{
                    //console.log('Messi')
                    showAge(30)
                }}
            >
                show age
            </button>

            <input type="text" onChange={showText}></input>
        </div>
    );
};

export default World;