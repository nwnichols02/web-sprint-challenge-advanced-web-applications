// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner'
import {render, screen, rerender} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

const loadingMessage = 'Please wait...'

//fixed to true for my own SANITY.
test('sanity', () => {
  expect(true).toBe(true)
})

test('Spinner will not show if spinner is false', () => {
  render(<Spinner on={false}/>)
  const noLoadSpinner = screen.queryByText(loadingMessage)
  expect(noLoadSpinner).not.toBeInTheDocument()
})

test('Spinner will show if spinner is true', () => {
  render(<Spinner on={true}/>)
  const loadSpinner = screen.queryByText(loadingMessage)
  expect(loadSpinner).toBeInTheDocument()
})

test('Spinner rerender from false to true then false, Start initial loaded state, then cause spinner and await spinner to leave successfully', async () => {
  const {rerender} =  render(<Spinner on={false}/>)
  const noLoadSpinner = screen.queryByText(loadingMessage)
  expect(noLoadSpinner).not.toBeInTheDocument()
  rerender(<Spinner on={true}/>)
  const loadSpinner = screen.queryByText(loadingMessage)
  expect(loadSpinner).toBeInTheDocument()
  await expect(noLoadSpinner).not.toBeInTheDocument()
})
