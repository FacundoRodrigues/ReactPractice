import {fireEvent, render, screen} from '@testing-library/react'
import CounterApp from "../CounterApp";
import React from 'react'

describe('Test on <CounterApp />', () => {
    // let wrapper;

    // beforeEach(()=> {
    //     wrapper = render( <CounterApp />)
    // })

    test('shouldShowCounter_withValue100', () => {
        const value = 100;

        const wrapper = render( <CounterApp value={value} />)

        //const counterValue = wrapper.getByRole('heading', {level: 2} ).innerHTML

        //Esto es mas facil
        const counterValue = wrapper.getByText(value)

        //expect(counterValue).toBe(`${value}`)
        expect(counterValue).toBeInTheDocument()
        expect(counterValue.textContent).toBe(`${value}`)
    })

    test('shouldMapWithDefaultValue', () => {
        const wrapper = render( <CounterApp />)
        expect( wrapper ).toMatchSnapshot()
    })

    test('shouldIncrement with +1', () => {
        const value = 11
        const textButton = '+1'

        const wrapper = render( <CounterApp />)

        const add = wrapper.getByText(textButton)

        fireEvent.click(add)
        const counterValue = wrapper.getByText(value).textContent;

        expect(counterValue).toBe('11')
    })

    test('shouldDecrement with -1', () => {
        const value = 9
        const textButton = '-1'

        const wrapper = render( <CounterApp />)

        const add = wrapper.getByText(textButton)

        fireEvent.click(add)
        const counterValue = wrapper.getByText(value).textContent;

        expect(counterValue).toBe('9')
    })

    test('shouldReset', () => {
        const value = 105
        const addBtnText = '+1'
        const resetBtnText = 'Reset'

        const wrapper = render( <CounterApp value={value} />)

        const addButton = wrapper.getByText(addBtnText)
        const resetButton = wrapper.getByText(resetBtnText)

        fireEvent.click(addButton)
        fireEvent.click(addButton)
        fireEvent.click(resetButton)

        const counterValue = wrapper.getByText(value).textContent;

        console.log(counterValue)

        // expect(counterValue).toBe('105')
    })
})