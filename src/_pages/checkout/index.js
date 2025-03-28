import React, { useEffect, useRef } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CheckoutLayout } from '_components';
import { FAQGroup } from './components';
import { DeliveryInfo } from './deliveryInfo';
import { BillingPage } from './billingPage';
import { PlaceOrder } from './placeOrder';
import { Confirmation } from './confirmation';
import { Footer } from '../home/footer';
import { isMobileDevice } from '_helpers';
import {
  clearPreCheckoutTicketDataAction,
  deleteLockRequestIdAction,
} from '_store/checkoutTicket';

export const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { checkoutStage } = useSelector((state) => state.checkoutReducer);
  const { ticketGroupId, lockRequestId } = useSelector(
    (state) => state.checkoutTicketReducer
  );
  const lockIdRef = useRef(lockRequestId);

  useEffect(() => {
    lockIdRef.current = lockRequestId;
    !ticketGroupId && history.push('/home');
  }, [history, lockRequestId, ticketGroupId]);

  useEffect(() => {
    return () => {
      dispatch(clearPreCheckoutTicketDataAction());
      !!lockIdRef.current &&
        dispatch(deleteLockRequestIdAction(lockIdRef.current));
    };
  }, [dispatch]);

  return (
    <CheckoutLayout>
      <Switch>
        <Route path="/checkout/delivery" component={DeliveryInfo} />
        <Route path="/checkout/billing" component={BillingPage} />
        <Route path="/checkout/placeorder" component={PlaceOrder} />
        <Route path="/checkout/confirmation" component={Confirmation} />
        <Redirect to="/checkout/delivery" />
      </Switch>
      {checkoutStage === 3 && !isMobileDevice ? <Footer /> : <FAQGroup />}
    </CheckoutLayout>
  );
};
