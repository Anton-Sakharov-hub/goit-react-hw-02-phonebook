import { Component } from 'react';
import s from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChenge = (evt) => {
        const { value, name } = evt.target;
        
        this.setState({
            [name]: value,
        });
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmitHandler({...this.state});
        this.setState({
            name: '',
            number: '',
        })
    }
    
    
    render() {
        const { name, number } = this.state;

        return (
            <form className={s.ContactForm}>
                <h2>Phonebook</h2>
                <label className={s.formInputLabel}>Name
                    <input
                    className={s.formInput}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChenge}
                    />
                </label>
                <label className={s.formInputLabel}>Number
                    <input
                    className={s.formInput}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChenge}
                    />
                </label>
                <button className="button" type="submit" onClick={this.onSubmit}>Add contact</button>
            </form>
        )
    }
}

export default ContactForm;