// Libs
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

// Component
import { Recipient } from '../Recipient.jsx';

// Mocks
const contacts = [
  {
    _id: 'first-contact',
    fullname: 'Tony Stark',
    company: 'Stark Industries',
    email: 'ironman@starkindustries.com',
  },
  {
    _id: 'second-contact',
    fullname: 'Steve Rogers',
    company: 'Avengers',
    email: 'cap@gmail.com',
  },
];
const recipient = {
  new: {
    fullname: 'Tony Stark',
    email: 'ironman@starkindustries.com',
  },
  select: {},
  newRecipient: true,
};

const t = jest.fn();
const dispatch = jest.fn();

describe('Recipient component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Recipient
        t={t}
        contacts={contacts}
        recipient={recipient}
        dispatch={dispatch}
      />
    );
  });

  // PROPS & STATE
  it('receives correct props', () => {
    expect(wrapper.prop('contacts')).toEqual(contacts);
    expect(wrapper.prop('recipient')).toEqual(recipient);
    expect(wrapper.prop('dispatch')).toEqual(dispatch);
  });

  // TODO
  // RENDER
  it('renders necessary element', () => {});

  // LIFE CYCLE EVENTS
  it('render when necessary', () => {});

  // PRIVATE METHOD
  it('handle toggleForm correctly', () => {
    // Setup
    const spy = jest.spyOn(Recipient.prototype, 'toggleForm');
    const wrap = mount(
      <Recipient
        t={t}
        contacts={contacts}
        recipient={recipient}
        dispatch={dispatch}
      />
    );
    const inputSelect = wrap.find('input').last();
    // Execute
    inputSelect.simulate('change', { target: { checked: true } });
    // Assert
    expect(spy).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
  });

  // SNAPSHOT
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Recipient
          t={t}
          contacts={contacts}
          recipient={recipient}
          dispatch={dispatch}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
