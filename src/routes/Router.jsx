import { Route, Switch, useLocation } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import PrivacyPage from '../pages/PrivacyPage'
import TermsPage from '../pages/TermsPage'
import SubscriptionPage from '../pages/SubscriptionPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

const Router = () => {
  const location = useLocation()

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/privacy-policy' component={PrivacyPage} />
        <Route path='/terms-conditions' component={TermsPage} />
        <Route path='/subscription' component={SubscriptionPage} />
        <Route path='/about_us' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </>
  )
}

export default Router