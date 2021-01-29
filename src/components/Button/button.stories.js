import React from 'react'
import Button from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Button component', decorators: [withKnobs]}

export const PrimaryButton = () => {
  const message = text('Text', 'Click here now!')
  return <Button message={message}></Button>
}

export const SecondaryButton = () => {
  const message = text('Text', 'Click here now!')
  return <Button message={message} type={'secondary'}></Button>
}