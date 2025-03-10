'use client';

import { useUser } from '@/context/UserContext';

import '../../assets/TotalEarning.css';
import '@/../../assets/root.css';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TutorEarning() {
  let { user, setIsLoading, profileDetail } = useUser();
  useEffect(() => {
    setIsLoading(true);
  }, []);
  console.log(profileDetail);
  return (
    <>
      <div className="total-earning">
        <Image
          src={'/images/static/office-worker.png'}
          width={140}
          height={140}
          className="tutor-image"
          alt="tutor-logo"
        />
        <h4 className="heading-title">Your Total Earning</h4>
        <h1 className="earning-amount">{profileDetail?.totalEarning} BDT</h1>
      </div>
    </>
  );
}
