import { Component } from 'react';

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
    }
    
    
    render() {
        const { name, number } = this.state;

        return (
            <form>
                <h2>Phonebook</h2>
                <label>Name
                    <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChenge}
                    />
                </label>
                <label>Number
                    <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChenge}
                    />
                </label>
                <button type="submit" onClick={this.onSubmit}>Add contact</button>
            </form>
        )
    }
}

export default ContactForm;