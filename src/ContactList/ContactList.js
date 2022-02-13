
export default function ContactList(props) {
    const { filter, contacts, filterContactsHandler, onDelete } = props;

    const onDeleteClick = (name) => () => {
        onDelete(name)
    }

    return (
        <ul>
          {(filter ? filterContactsHandler() : contacts).map(el => (
            <li key={el.id} >
              {`${el.name}: ${el.number}`}
              <button type="button" onClick={onDeleteClick(el.name)}>Delete</button>
            </li>
          ))}
        </ul>
    )
}