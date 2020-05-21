import React from 'react'
import { addDecorator } from '@storybook/react'

addDecorator(storyFn => (
   <div className='flex items-center justify-center w-100'>{storyFn()}</div>
))
