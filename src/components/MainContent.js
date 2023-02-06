import React from 'react';

export default function MainContent() {
    const [names, setNames] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const [choosen, setChoosen] = React.useState('Choosen One')
    const [ID, setID] = React.useState(0)

    function add(event) {
        if (event.key === 'Enter') {
            names.push({ name: inputValue, id: ID });
            setInputValue('');
            console.log(names)
            setID(ID+1)
        }
    }

    function choose() {
        const randomNumber = Math.floor(Math.random() * names.length)
        setChoosen(names[randomNumber].name)
    }

    function remove(id) {
        setNames(names.filter((item) => (item.id) !== id))
    }

    const namesText = names.map((name) => (
        <div key={name.id} className='grid grid-cols-4 p-3'>
            <div className='col-start-2 col-span-2'>
                {name.name}
            </div>
            <div className='flex justify-end'>
                <button onClick={() => { remove(name.id) }}>
                    ❌
                </button>
            </div>
        </div>
    ));

    return (
        <main className='grid md:grid-cols-2 gap-3 p-3'>
            <div className='w-ful flex-col space-y-3'>
                <div className='flex items-center border border-slate-200 rounded-lg justify-center w-full border-b align-text-middle aspect-[5/3]'>
                    {choosen}
                </div>
                <button onClick={choose} className=" p-3 text-white w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                    Choose one!
                </button>
            </div>
            <div className='w-full mt-3 md:m-0'>
                <input className='w-full min-h-[50px] rounded-md mb-3 text-center border border-slate-200'
                    type="text"
                    name="nameInput"
                    placeholder='Zadejte jméno'
                    value={inputValue}
                    onChange={(event) => { setInputValue(event.currentTarget.value) }}
                    onKeyDown={add}
                />
                <div className='divide-y divide-slate-200'>{namesText}</div>
            </div>
        </main>
    );
}