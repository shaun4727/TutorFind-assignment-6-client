'use client';

import ProfileManagement from './subcomponents/ManageProfileTutor';
import ProfileManagementStudent from './subcomponents/ManageProfileStudent';
import BookingRequests from './subcomponents/BookingRequests';
import { tutorBookingData } from '@/types';
import { useEffect } from 'react';
import TutorAcceptance from './subcomponents/TutorAcceptance';

interface DashboardManagementProps {
  activeMenu: string;
  bookings: tutorBookingData[] | undefined;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DashboardManagement({
  activeMenu,
  bookings,
  setLoading,
}: DashboardManagementProps) {
  return (
    <div className="dashboard-section">
      {activeMenu == 'manage-profile-tutor' && <ProfileManagement />}
      {activeMenu == 'manage-profile-student' && <ProfileManagementStudent />}
      {activeMenu == 'booking-request' && (
        <BookingRequests bookings={bookings} setLoading={setLoading} />
      )}
      {activeMenu == 'tutor-acceptance' && <TutorAcceptance />}
    </div>
  );
}
