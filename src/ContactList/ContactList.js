
export default function ContactList(props) {
    const { contacts, onDelete } = props;

    const onDeleteClick = (name) => () => {
        onDelete(name)
    }

    return (
        <ul>
          {(contacts).map(({id, name, number}) => (
            <li key={id} >
              {`${name}: ${number}`}
              <button type="button" onClick={onDeleteClick(name)}>Delete</button>
            </li>
          ))}
        </ul>
    )
}