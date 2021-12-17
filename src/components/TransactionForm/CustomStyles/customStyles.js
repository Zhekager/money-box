const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor:
      state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',
    paddingLeft: 20,
    paddingTop: 10,
    height: 34,
    border: 'none',
    cursor: 'pointer',
  }),
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: '100%',
    },
    // '@media screen and (min-width: 768px)': {
    //   width: 542,
    // },
    height: 34,
  }),

  valueContainer: provided => ({
    ...provided,
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    height: 34,
  }),

  singleValue: provided => ({
    ...provided,
    margin: 0,
    height: 20,
  }),

  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    height: 20,
    color: '#000000',
    fontFamily: 'Circe, sans-serif',
  }),

  indicatorsContainer: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'inherit',

    borderRadius: 20,
    boxShadow: 'none',
  }),
  placeholder: provided => ({
    ...provided,
    margin: 0,
    fontFamily: 'Circe, sans-serif',
    color: '#bdbdbd',
    fontSize: 18,
    lineHeight: 1.5,
    fontWeight: 400,
  }),
  menuList: provided => ({
    ...provided,
    '@media screen and (min-width: 320px)': {
      maxHeight: 352,
    },
    // '@media screen and (min-width: 768px)': {
    //   maxHeight: 411,
    // },
    padding: 0,
    backdropFilter: 'blur(50px)',
    borderRadius: 20,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  }),
  container: provided => ({
    ...provided,
    borderBottom: '1px solid #E0E0E0',
    cursor: 'pointer',

    // '&:hover': {
    //   borderColor: '#24CCA7',
    // },
    // '&:focus': {
    //   borderColor: '#24CCA7',
    // },
  }),
};

export default customStyles;
