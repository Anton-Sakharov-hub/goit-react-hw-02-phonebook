
export default function ContactList(props) {
    const { filter, contacts, filterContactsHandler } = props;

    return (
        <ul>
          {(filter ? filterContactsHandler() : contacts).map(el => (
            <li key={el.id} >
              {`${el.name}: ${el.number}`}
              <button type="button" name={el.name} onClick={this.onDeleteClick}>Delete</button>
            </li>
          ))}
        </ul>
    )
}