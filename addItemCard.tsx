import './addItemCard.css';

import { useRef, useState, useSyncExternalStore } from 'react';


const AddItemCard = () => {

    const APIPoint = 'http://localhost:3009/admin/add';

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description1, setDescription1] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState('');

    const namePVD = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const descriptionPVD = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription1(e.target.value);
    }

    const pricePVD = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    }

    const qtyPVD = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.target.value);
    }

    // Submtit New item Function using JS Fetch
    const submit = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('Button is Clicked');
        console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}` );

        if(!name || !price || !quantity) {
            window.alert('Missing Required Fields (Name, Price, or Quantity)');
            setError('Missing Required Fields (Name, Price, or Quantity)');
        } 

        // Parse Price & Quantity to check for Negative Values
        const parsedPrice = parseFloat(price);
        const parsedQuantity = parseInt(quantity);

        if(isNaN(parsedPrice) || parsedPrice < 0){
            setError('Price Cannot Be a Negative Number');
            console.log(parsedPrice);
            return;
        }

        if(isNaN(parsedQuantity) || parsedQuantity <= 0){
            setError('Quantity has to be greater than 0 to add');
            return;
        }
        
        
        console.log(parsedPrice, parsedQuantity);

        try {
            const response = await fetch(APIPoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name: name,
                    price: parsedPrice,
                    quantity: parsedQuantity,
                    description1,
                }),
            });

            if(!response.ok) {
                throw new Error('Failed to Submit Data');
            } else{
                setName('');
                setPrice('');
                setQuantity('');
                setDescription1('');
                window.alert('Added Item Successfully');
            }
        }

        catch(error) {
            console.error(error);
        }

    }

    return (
        <div id='addItemCardMain'>
            <h3>Add New Item</h3>
            <div id='addItemCardGrid'>
                <input type='text' placeholder='Enter Item Name' id='itemNameInput' value={name} onChange={namePVD}></input>
                <textarea id='descriptionInput' placeholder='Enter Item Description' value={description1} onChange={descriptionPVD} ></textarea>
                <input type='number' placeholder='Enter Price (Numerical Value Only)' id='priceInput' value={price} onChange={pricePVD} step={0.01} min={0} ></input>
                <input type='number' placeholder='Quantity (Num Value)' id='qtyInput' value={quantity} onChange={qtyPVD} min={1} step={1}></input>
                <input type='file' accept='image/*' id='imgInput'></input>
            </div>
            <button id='submitNewItem' onClick={submit}>Submit</button>
        </div>
    )
}

export default AddItemCard;