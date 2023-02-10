class App extends Component {
  state = {
    phoneList: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHendler = data => {
    const {phoneList}= this.state;
    const phoneBookListItem = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (phoneList.find(item => item.name === phoneBookListItem.name)) {
      return alert(`${phoneBookListItem.name}  is olrady in contacts`);
    }
    this.setState(prevState =>({
      phoneList: [phoneBookListItem, ...prevState.phoneList],
    }))
  }
