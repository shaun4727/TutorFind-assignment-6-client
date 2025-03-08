'use server';

import { getValidToken } from '@/lib/verifyToken';
import { bookingPaymentDuration } from '@/types/Dashboard/AcceptanceTutor';

export const getAcceptedBookingService = async () => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student/accepted-booking-requests/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const createPaymentService = async (data: bookingPaymentDuration) => {
  // const token = await getValidToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student/make-payment/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: token,
        },
        body: JSON.stringify(data),
      }
    );
    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
