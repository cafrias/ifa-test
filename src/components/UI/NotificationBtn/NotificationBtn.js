import React from 'react'
import './NotificationBtn.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from 'react-bootstrap/lib/Button'

const UINotificationBtn = ({ notifications = [] }) => {
  const qty = notifications.length
  return (
    <Button variant="link" size="lg" className={`${qty ? 'text-dark' : ''}`}>
      <FontAwesomeIcon icon="bell" />
      {qty ? (
        <span className="notification-badge badge badge-danger">{qty}</span>
      ) : null}
    </Button>
  )
}

export default UINotificationBtn
