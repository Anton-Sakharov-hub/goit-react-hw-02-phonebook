import '../css/button.css';
import s from './ContactsList.module.css';

export default function ContactList(props) {
    const { contacts, onDelete } = props;

    const onDeleteClick = (name) => () => {
        onDelete(name)
    }

    return (
        <ul className={s.ContactList}>
          {(contacts).map(({id, name, number}) => (
            <li className={s.ContactListItem} key={id} >
              {`${name}: ${number}`}
              <button className="button" type="button" onClick={onDeleteClick(name)}>Delete</button>
            </li>
          ))}
        </ul>
    )
}