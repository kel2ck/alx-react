import React from "react";
import { shallow } from 'enzyme';
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheet, StyleSheetTestUtils, css } from "aphrodite";

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom tests', () => {
    it('should apply margin bottom to child parent', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title' />);

        expect(wrapper.find(BodySection)).toHaveLength(1);
        expect(wrapper.find(BodySection).html()).toEqual(
            '<div class="bodySection"><h2>test title</h2></div>'
        );
    });
});