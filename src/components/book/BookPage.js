import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BookPageCarousel from "./BookPageCarousel";
import styles from './BookPage.module.css'
import {Badge, ListGroup} from "react-bootstrap";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import BookPageInfo from "./BookPageInfo";

function BookPage() {
    const {id} = useParams()
    const [book, setBook] = useState()
    const [cart, setCart] = useState()
    function handleChange(e){
        const p = {'product': book.id, 'unit_price': book.price}
        setCart({...p, [e.target.name]: e.target.value} )
        console.log(cart)
    }
    function submit(e){
        e.preventDefault();
        const p = {'product': book.id, 'unit_price': book.price}
        setCart({...p, [e.target.name]: e.target.value} )
        console.log(cart)
    }
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost/book/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
                .then((data) => {
                    setBook(data)
                    console.log(data)
                })
                .catch(err => console.log(err))
        }, 500)
    }, [id])
    return (
        <>
        {book && (<>
        <div className={styles.main}>
            <div>
                <BookPageCarousel book={book}/>
            </div>
            <div>
                <form className={styles.form} onSubmit={submit}>
                    <div className="ms-2 me-auto">
                          <span className="fw-bold">Título: </span>
                            {book.title} <br/>
                          <span className="fw-bold">Preço: </span>
                            R${book.price}
                        <Input type="number" name="quantity" text="Quantidade"
                       placeholder="Quantidade de livros" handleOnChange={handleChange}/>
                        <SubmitButton type="submit" text="Adicionar ao Carrinho" value="Criar Projeto"/>
                        <br/>
                        <SubmitButton type="submit" text="Comprar Agora" value="Criar Projeto"/>
                    </div>
                </form>
            </div>
        </div>
        <BookPageInfo book={book}/>
    </>
            )}</>
    );
}

export default BookPage;
