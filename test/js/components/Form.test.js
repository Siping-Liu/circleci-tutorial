import Form from "../../../src/js/components/Form";
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Form/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
