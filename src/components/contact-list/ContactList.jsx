export const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts.map(contact => (
        <ul key={contact.id}>
          <li>{contact.name}: {contact.number}</li>
        </ul>
      ))}
    </>
  );
};
