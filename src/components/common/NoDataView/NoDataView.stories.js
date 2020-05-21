import React from 'react'
import { action } from '@storybook/addon-actions'
import NoDataView from '.'

import '../../../styles/tailwind.css'

export default {
   component: NoDataView,
   title: 'Common/NoDataView'
}

export const defaultView = () => <NoDataView />
